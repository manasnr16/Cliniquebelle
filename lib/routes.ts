import { PRODUCTION_ORIGIN } from "./site";

/**
 * Route registry: the single place that knows every URL on the site.
 *
 * - `path` is the LIVE WordPress URL (taken from https://cliniquebelle.in/page-sitemap.xml,
 *   read on 11 Oct 2026). These are the URLs Google already knows, so we keep them exactly.
 * - `built: true`  -> the page exists in this Next.js app, so links stay on this site.
 * - `built: false` -> not built yet (later phase); links go to the live WordPress page so
 *   the preview has no broken links. Flip to `true` when the page is built.
 */
export type Route = { path: string; label: string; built: boolean };

const r = (path: string, label: string, built = false): Route => ({ path, label, built });

export const routes = {
  home: r("/", "Home", true),
  about: r("/about-us/", "About Us", true), // NEW URL: not in the live page sitemap. Needs consultant approval.

  // NEW URLs (not in the live page sitemap): dedicated pages split out of the old single-page home. Need approval.
  procedures: r("/procedures/", "Procedures", true),
  ourDoctors: r("/our-doctors/", "Our Doctors", true),
  testimonials: r("/testimonials/", "Testimonials", true),

  drSrikanth: r("/dr-srikanth-v/", "Dr. Srikanth V"),
  drAnupama: r("/dr-anupama-t-srikanth/", "Dr. Anupama T Srikanth"),

  hairTransplantation: r("/hair-transplantation-in-bangalore/", "Hair transplantation"),

  liposuction: r("/liposuction-in-bangalore/", "Liposuction"),
  abdominoplasty: r("/abdominoplasty-surgery-in-bangalore/", "Abdominoplasty"),
  gynecomastia: r("/gynecomastia-surgery-in-bangalore/", "Gynecomastia"),
  lipoInjection: r("/fat-injection-in-bangalore/", "Lipo injection"),

  facelift: r("/facelift-surgery-in-bangalore/", "Facelift"),
  rhinoplasty: r("/rhinoplasty-surgery-in-bangalore/", "Rhinoplasty"),
  blepharoplasty: r("/eyelid-surgery-in-bangalore/", "Blepharoplasty"),
  facialRejuvenation: r("/facial-rejuvenation-in-bangalore/", "Facial rejuvenation"),
  scarRevision: r("/scar-revision-surgery-in-bangalore/", "Scar revision"),
  moleExcision: r("/mole-removal-surgery-in-bangalore/", "Mole excision"),
  earLobuleRepair: r("/earlobe-repair-surgery-in-bangalore/", "Ear lobule repair"),

  breastAugmentation: r("/breast-augmentation-surgery-in-bangalore/", "Breast augmentation"),
  breastReduction: r("/breast-reduction-surgery-in-bangalore/", "Breast reduction"),
  breastLift: r("/breast-lift-surgery-in-bangalore/", "Breast lift"),
  mommyMakeover: r("/mommy-makeover-in-bangalore/", "Mommy makeover"),
  breastReconstruction: r("/breast-reconstruction-surgery-in-bangalore/", "Post-mastectomy reconstruction"),

  microsurgery: r("/microsurgery-in-bangalore/", "Microsurgery"),
  craniomaxillofacial: r("/cranio-maxillofacial-surgery-in-bangalore/", "Cranio-maxillofacial surgery"),
  cleftLipPalate: r("/cleft-lip-and-palate-surgery-in-bangalore/", "Cleft lip and palate"),
  handSurgery: r("/hand-surgery-in-bangalore/", "Hand surgery"),
  thumbReconstruction: r("/thumb-reconstruction-surgery-in-bangalore/", "Thumb reconstruction"),
  peripheralNerve: r("/peripheral-nerve-surgery-in-bangalore/", "Peripheral nerve surgery"),
  brachialPlexus: r("/brachial-plexus-surgery-in-bangalore/", "Brachial plexus surgery"),
  burns: r("/burns-treatment-in-bangalore/", "Burns treatment"),
  lymphoedema: r("/lymphedema-treatment-in-bangalore/", "Lymphoedema"),
  correctiveSurgery: r("/corrective-surgery-in-bangalore/", "Corrective surgery"),

  gallery: r("/gallery/", "Gallery"),
  videos: r("/plastic-cosmetic-surgery-videos/", "Videos", true),
  faq: r("/faq/", "FAQs"),
  contact: r("/contact-us/", "Contact us", true),
  privacy: r("/privacy-policy/", "Privacy Policy"),
  terms: r("/terms-and-conditions/", "Terms & Conditions"),
  sitemap: r("/sitemap/", "Sitemap"),
} as const satisfies Record<string, Route>;

export type RouteKey = keyof typeof routes;

/** The URL a link should use today: internal if built, otherwise the live WordPress page. */
export function hrefFor(route: Route): string {
  return route.built ? route.path : `${PRODUCTION_ORIGIN}${route.path}`;
}

/** Absolute production URL, used for canonical tags and the sitemap. */
export function canonicalFor(route: Route): string {
  return `${PRODUCTION_ORIGIN}${route.path}`;
}
