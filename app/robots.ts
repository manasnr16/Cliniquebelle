import type { MetadataRoute } from "next";
import { PRODUCTION_ORIGIN, allowIndexing } from "@/lib/site";

/** Preview/staging blocks all crawlers. Production (ALLOW_INDEXING=true) allows everything. */
export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    // Phase 1 sitemap lists built pages only. Full-sitemap strategy at cutover is an approval item (see README).
    sitemap: `${PRODUCTION_ORIGIN}/sitemap.xml`,
  };
}
