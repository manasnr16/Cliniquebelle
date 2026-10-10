import type { Metadata } from "next";
import { allowIndexing, site } from "./site";
import { canonicalFor, type Route } from "./routes";

type Input = { title: string; description: string; route: Route };

/**
 * Builds the metadata for one page.
 * - The canonical URL is ALWAYS the production URL, even on a preview deployment.
 * - Indexing is blocked unless ALLOW_INDEXING=true (see next.config.ts).
 */
export function buildMetadata({ title, description, route }: Input): Metadata {
  const url = canonicalFor(route);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_IN",
      title,
      description,
      url,
    },
    twitter: { card: "summary", title, description },
  };
}
