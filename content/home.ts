import { routes, type Route } from "@/lib/routes";

export const heroStats = [
  { num: "31+ yrs", label: "in plastic, cosmetic & reconstructive surgery" },
  { num: "127+", label: "patient recommendations on Practo" },
  { num: "12+", label: "peer-reviewed publications in surgery journals" },
  { num: "Manipal", label: "Senior Consultant, Plastic & Reconstructive Surgery" },
];

export const trustStats = [
  { num: "FRCS", label: "Royal College of Surgeons, Edinburgh & Glasgow" },
  { num: "St. John's", label: "Former Associate Professor, Plastic Surgery, Bangalore" },
  { num: "DNB", label: "Accredited teacher, training plastic surgery students" },
  { num: "10", label: "detailed patient stories published on Practo" },
];

export const featuredVideos = [
  { label: "Keloid scar removal", href: "https://www.youtube.com/watch?v=y9Qrbrarymk" },
  { label: "Breast reduction facts", href: "https://www.youtube.com/watch?v=gB3fn6njMfI" },
  { label: "Facial scar removal", href: "https://www.youtube.com/watch?v=5CNpyIYcCs4" },
  { label: "Platysmaplasty vs necklift", href: "https://www.youtube.com/watch?v=AlTaK722YPw" },
];

export const reviewStats = [
  { num: "127+", label: "Patients recommending Dr. Srikanth V, Practo" },
  { num: "10", label: "Detailed patient stories, Practo" },
  { num: "31+ yrs", label: "In cosmetic, plastic & reconstructive surgery" },
];

export const whyParagraphs = [
  "Dr. Srikanth V trained in general surgery at BYL Nair Charitable Hospital, Mumbai, before completing his MCh in Plastic Surgery at the Sir JJ Group of Hospitals and Grant Medical College. He later served as Associate Professor in Plastic Surgery at St. John's Medical College, Bangalore, and is currently a Senior Consultant in the Department of Plastic, Cosmetic and Reconstructive Surgery at Manipal Hospitals.",
  "He has authored or co-authored more than a dozen papers in journals including the Indian Journal of Plastic Surgery and the European Journal of Plastic Surgery, and regularly appears on Doctors' Circle, India's largest health information video platform, answering patient questions on cosmetic and reconstructive procedures.",
  "Every consultation is built around one idea: the right option for your body and your goals, explained clearly, with no pressure toward any particular procedure.",
];

export const credentials = [
  "MBBS — Kasturba Medical College, Mangalore",
  "MS (General Surgery) — BYL Nair Charitable Hospital, Mumbai",
  "MCh (Plastic Surgery) & DNB — Sir JJ Group of Hospitals, Mumbai",
  "FRCS — Royal College of Surgeons, Edinburgh & Glasgow",
  "DNB-accredited teacher, training the next generation of plastic surgeons",
];

export type ProcedureGroup = { title: string; description: string; items: Route[] };

export const procedureGroups: ProcedureGroup[] = [
  {
    title: "Hair restoration",
    description: "Hair transplantation and solutions for hair fall.",
    items: [routes.hairTransplantation],
  },
  {
    title: "Body contouring",
    description: "Reshaping and refining the body's natural contours.",
    items: [routes.liposuction, routes.abdominoplasty, routes.gynecomastia, routes.lipoInjection],
  },
  {
    title: "Facial rejuvenation",
    description: "Refreshing and restoring facial structure and skin.",
    items: [
      routes.facelift,
      routes.rhinoplasty,
      routes.blepharoplasty,
      routes.facialRejuvenation,
      routes.scarRevision,
      routes.moleExcision,
      routes.earLobuleRepair,
    ],
  },
  {
    title: "Breast procedures",
    description: "Augmentation, reduction and reconstructive breast surgery.",
    items: [
      routes.breastAugmentation,
      routes.breastReduction,
      routes.breastLift,
      routes.mommyMakeover,
      routes.breastReconstruction,
    ],
  },
  {
    title: "Reconstructive & microsurgery",
    description: "Complex reconstructive cases and specialised surgical repair.",
    items: [
      routes.microsurgery,
      routes.craniomaxillofacial,
      routes.cleftLipPalate,
      routes.handSurgery,
      routes.thumbReconstruction,
      routes.peripheralNerve,
      routes.brachialPlexus,
      routes.burns,
      routes.lymphoedema,
      routes.correctiveSurgery,
    ],
  },
];

/** Hero pull-quote: the first sentence of the first testimonial, as shown in the supplied homepage. */
export const heroQuote = {
  quote:
    "His experience and confidence, combined with his genuine care for patient comfort, made surgery feel like a pleasant experience with no worries at all.",
  attribution: "Rekha, Bangalore, Practo review",
};
