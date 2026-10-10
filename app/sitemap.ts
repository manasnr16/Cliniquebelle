import type { MetadataRoute } from "next";
import { canonicalFor, routes } from "@/lib/routes";

/**
 * Lists only the pages that are BUILT in this app (Phase 1: Home and About Us), always with
 * production URLs. It must grow as pages are built. Before cutover, this has to cover the whole
 * live URL set (or keep serving /sitemap_index.xml) so Search Console is not confused.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes)
    .filter((route) => route.built)
    .map((route) => ({ url: canonicalFor(route) }));
}
