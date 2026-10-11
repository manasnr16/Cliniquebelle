import type { NextConfig } from "next";

/**
 * ALLOW_INDEXING controls whether search engines may index this deployment.
 * It is OFF by default so a preview/staging build can never compete with the
 * live WordPress site in Google. Set ALLOW_INDEXING=true ONLY on the final
 * production deployment, after approval.
 */
const allowIndexing = process.env.ALLOW_INDEXING === "true";

const nextConfig: NextConfig = {
  // The live WordPress site uses a trailing slash on every URL. Keep it.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // TEMPORARY: photos are still served from the live WordPress uploads
    // folder. Replace with files in /public/images once originals are supplied.
    remotePatterns: [
      { protocol: "https", hostname: "cliniquebelle.in", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
    ],
  },
  async headers() {
    if (allowIndexing) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
