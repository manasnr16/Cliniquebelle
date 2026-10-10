// Link checker for the built site.  Usage:  npm run build && npm start   (in another terminal)  then:
//   BASE=http://localhost:3000 npm run check:links
//
// For every page it checks that:
//  1. internal links (/path/) return 200 on this app;
//  2. in-page anchors (#id) exist on the target page;
//  3. links to https://cliniquebelle.in/... point at a URL in the live page sitemap snapshot
//     (scripts/live-urls.json), or are an expected NEW url such as /about-us/;
//  4. no link is a bare "#".
import { readFileSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3000";
const PAGES = ["/", "/about-us/"];
const live = JSON.parse(readFileSync(new URL("./live-urls.json", import.meta.url)));
const liveSet = new Set([...live.paths, ...live.newPathsExpected]);
const problems = [];
const seen = new Map();

const get = async (path) => {
  if (seen.has(path)) return seen.get(path);
  const res = await fetch(BASE + path, { redirect: "manual" });
  const out = { status: res.status, html: res.status === 200 ? await res.text() : "" };
  seen.set(path, out);
  return out;
};
const idsIn = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

let total = 0;
for (const page of PAGES) {
  const { status, html } = await get(page);
  if (status !== 200) { problems.push(`${page}: page itself returned ${status}`); continue; }
  const links = [...html.matchAll(/<a\b[^>]*?\shref="([^"]*)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  for (const href of links) {
    total++;
    if (href === "#") problems.push(`${page}: placeholder href="#"`);
    else if (href.startsWith("tel:") || href.startsWith("mailto:")) continue;
    else if (href.startsWith("https://www.youtube.com/")) continue;
    else if (href.startsWith("#")) { if (!idsIn(html).has(href.slice(1))) problems.push(`${page}: missing anchor ${href}`); }
    else if (href.startsWith("/")) {
      const [path, hash] = href.split("#");
      const t = await get(path);
      if (t.status !== 200) problems.push(`${page}: ${href} -> ${t.status}`);
      else if (hash && !idsIn(t.html).has(hash)) problems.push(`${page}: ${href} anchor "${hash}" not found on target`);
    } else if (href.startsWith("https://cliniquebelle.in")) {
      const path = new URL(href).pathname;
      if (!liveSet.has(path)) problems.push(`${page}: ${href} is NOT in the live page sitemap`);
    } else problems.push(`${page}: unexpected link ${href}`);
  }
}
console.log(`Checked ${total} links on ${PAGES.length} pages.`);
if (problems.length) { console.log("PROBLEMS:\n" + [...new Set(problems)].join("\n")); process.exit(1); }
console.log("No problems found.");
