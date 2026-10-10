/** Facts about the clinic that appear on more than one page. Source: consultant's HTML files. */

/** Canonical URLs always point at the production domain, never at a preview URL. */
export const PRODUCTION_ORIGIN = "https://cliniquebelle.in";

export const site = {
  name: "Clinique Belle",
  established: 2012,
  area: "Koramangala, Bangalore",
  tagline: "Looks good, feel great.",
  logo: { src: "/logo.png", width: 320, height: 86 },
  phone: { display: "080 2552 0035", href: "tel:08025520035" },
  mobile: { display: "+91 94835 06268", href: "tel:+919483506268", short: "94835 06268" },
  address: ["No. 461, 8th Main,", "4th Block, Koramangala,", "Bangalore – 560034"],
  footerBlurb:
    "Advanced plastic, cosmetic and reconstructive surgery in Koramangala, Bangalore, led by Dr. Srikanth V — 31 years in surgical practice.",
} as const;

export const allowIndexing = process.env.ALLOW_INDEXING === "true";
