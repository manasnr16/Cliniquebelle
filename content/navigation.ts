import { routes, hrefFor } from "@/lib/routes";

/**
 * One navigation shared by every page. The supplied Home and About Us files used two
 * different menus; this unifies them (decision for the consultant to confirm).
 * Each item is its own dedicated page.
 */
export const mainNav = [
  { key: "about", label: "About", href: routes.about.path },
  { key: "procedures", label: "Procedures", href: routes.procedures.path },
  { key: "doctors", label: "Our doctors", href: routes.ourDoctors.path },
  { key: "reviews", label: "Testimonials", href: routes.testimonials.path },
  { key: "videos", label: "Videos", href: routes.videos.path },
  { key: "contact", label: "Contact", href: routes.contact.path },
] as const;

export type NavKey = (typeof mainNav)[number]["key"];

const link = (label: string, route: Parameters<typeof hrefFor>[0]) => ({ label, href: hrefFor(route) });

/** Footer link groups. Labels are the consultant's footer labels; URLs come from the route registry. */
export const footerCosmetic = [
  link("Liposuction", routes.liposuction),
  link("Gynecomastia", routes.gynecomastia),
  link("Rhinoplasty", routes.rhinoplasty),
  link("Abdominoplasty", routes.abdominoplasty),
  link("Breast Augmentation", routes.breastAugmentation),
  link("Breast Reduction", routes.breastReduction),
  link("Facelift Surgery", routes.facelift),
  link("Mommy Makeover", routes.mommyMakeover),
];

export const footerReconstructive = [
  link("Microsurgery", routes.microsurgery),
  link("Cranio-Maxillo-Facial", routes.craniomaxillofacial),
  link("Cleft Lip & Palate", routes.cleftLipPalate),
  link("Hand Surgery", routes.handSurgery),
  link("Peripheral Nerve Surgery", routes.peripheralNerve),
  link("Brachial Plexus Surgery", routes.brachialPlexus),
  link("Burns Treatment", routes.burns),
  link("Breast Reconstruction", routes.breastReconstruction),
];

export const footerClinic = [
  { label: "Home", href: routes.home.path },
  { label: "About Us", href: routes.about.path },
  link("Procedures", routes.procedures),
  link("Our Doctors", routes.ourDoctors),
  link("Testimonials", routes.testimonials),
  link("Dr. Srikanth V", routes.drSrikanth),
  link("Dr. Anupama T Srikanth", routes.drAnupama),
  link("Hair Transplantation", routes.hairTransplantation),
  link("Gallery", routes.gallery),
  link("Videos", routes.videos),
  link("FAQs", routes.faq),
  link("Contact Us", routes.contact),
];

export const footerLegal = [
  link("Privacy Policy", routes.privacy),
  link("Terms & Conditions", routes.terms),
  link("Sitemap", routes.sitemap),
];
