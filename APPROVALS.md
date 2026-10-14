# Approval checklist – Phase 1

Items marked **BLOCKING** should be settled before this preview is treated as final.

## URLs and routing
- [ ] **BLOCKING** Confirm the live `-in-bangalore` slugs are the final URLs. (The consultant's HTML files use short slugs such as `/liposuction/`; the live page sitemap does not.) `lib/routes.ts` uses the live slugs.
- [ ] **BLOCKING** `/about-us/` is **not** in the live page sitemap. Approve it as a new URL, or give the correct existing URL.
- [ ] Trailing slash on every URL is kept (matches live site).
- [ ] Decide what happens to `/sample-page/`, posts, categories and author pages.
- [ ] Sitemap strategy at cutover: the live site serves `/sitemap_index.xml` (Yoast). `app/sitemap.ts` currently lists the 2 built pages only.

- [ ] **BLOCKING** New dedicated pages with NEW URLs: `/procedures/`, `/our-doctors/`, `/testimonials/`. Titles/descriptions are proposals.
- [ ] `/contact-us/` and `/plastic-cosmetic-surgery-videos/` already exist live; the rebuilt copy replaces them. Compare wording and keep the live URLs.

## Metadata (every item below is a proposal until approved)
- [ ] Home title: "Clinique Belle — Plastic, Cosmetic & Reconstructive Surgery, Bangalore" (70 chars). Live title today: "Home - Clinique belle".
- [ ] **BLOCKING** Home meta description is a **PROPOSAL** (neither the supplied file nor the live site has one).
- [ ] About Us title (81 chars, may be truncated in Google) and description are copied from the consultant's file.
- [ ] Home H1 "Look good. Feel great." contains no keywords (same as live). Confirm wording.
- [ ] No Open Graph image is set (none approved).
- [ ] Structured data: only a BreadcrumbList on About Us. No Organization / Physician / FAQ schema added.

## Content and claims (clinic sign-off in writing)
- [ ] **BLOCKING** Second About Us version was not supplied; the single supplied version was used.
- [ ] Credentials, "31+ years", "127+ Practo recommendations", "12+ papers", "10 patient stories", "Est. 2012".
- [ ] About Us says "more than 125 times" but the stats say "127+": reconcile.
- [ ] All six testimonials may be displayed. Flagged: "One of the top plastic surgeons…" (superlative); "Kindly accept a small gift…" (no care/result content). Doctor-advertising rules in India may restrict testimonials; clinic/legal to confirm.
- [ ] "Every category is led directly by Dr. Srikanth V, not delegated to a general practitioner" (comparative claim).
- [ ] Five-star display in the Home hero (source says only "127+ recommend").
- [ ] About Us hero photo alt text changed from "consulting with a patient" (unverifiable) to a plain description.

## Design decisions made by the developer (confirm or reverse)
- [ ] One shared navigation (About, Procedures, Our doctors, Reviews, Contact) replaces the two different menus in the supplied files.
- [ ] Added a "More about Clinique Belle" link on Home to `/about-us/`.
- [ ] Mobile: menu button + short "Book" button added (the supplied files had no mobile navigation).
- [ ] Review source text darkened for contrast. Phone number is now a tap-to-call link.
- [ ] Palette taken from the HTML files (plum `#2B0F2A`, `#6B2A66`), not the provisional palette in the original brief.

## Assets
- [ ] **BLOCKING** All 17 photos in `public/images/` are AI-generated stand-ins (people shown are not real patients or staff). Clinic to approve their use, or replace with real, consented photography. Indian medical-advertising rules and patient-expectation concerns apply: do not present generated people as real patients or results.
- [ ] Original doctor photos and a vector logo; permission to use the photos.
- [ ] Facebook / Instagram profile URLs (icons omitted until supplied).

## Before launch (not Phase 1)
- [ ] Tracking: confirm GTM container and Search Console access; baseline export of rankings.
- [ ] Hosting: exact OVH plan; whether Node is supported; DNS ownership.
- [ ] Redirect map for any changed URL; validate structured data; final crawl comparison.
