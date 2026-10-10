import { routes, type Route } from "@/lib/routes";

export const aboutStats = [
  { num: "31+ yrs", label: "of surgical experience across general, plastic and reconstructive surgery" },
  { num: "FRCS", label: "Fellowships from the Royal Colleges of Edinburgh and Glasgow" },
  { num: "127+", label: "patients recommend Dr. Srikanth V on Practo" },
  { num: "12+", label: "peer-reviewed publications in surgical journals" },
];

/**
 * Copied verbatim from "clinique-belle-about-us (1).html".
 * Paragraph 4 says "more than 125 times" while the stats say "127+" - APPROVAL NEEDED: reconcile.
 */
export const whoWeAre = [
  "Clinique Belle is a plastic, cosmetic and reconstructive surgery practice in Koramangala, Bangalore, led by Dr. Srikanth V. Established in 2012, the clinic pairs three decades of surgical experience with a simple approach: understand what has changed, explain the options clearly, and let each patient decide what is right for them.",
  "Dr. Srikanth V trained in general surgery at BYL Nair Charitable Hospital, Mumbai, and completed his MCh in Plastic Surgery at the Sir JJ Group of Hospitals. He holds fellowships from the Royal Colleges of Surgeons of Edinburgh and Glasgow, previously taught as Associate Professor of Plastic Surgery at St. John's Medical College, Bangalore, and currently serves as Senior Consultant in Plastic, Cosmetic and Reconstructive Surgery at Manipal Hospitals. His practice spans cosmetic procedures such as liposuction, rhinoplasty and breast surgery, hair transplantation, and complex reconstructive work including microsurgery, hand surgery and cranio-maxillofacial repair. He has co-authored over a dozen papers in peer-reviewed surgical journals and regularly features on Doctors Circle, India's largest health information platform.",
  "Dr. Anupama T Srikanth, a WHO-certified pain and palliative care specialist trained at Mumbai's Sir JJ Group of Hospitals and Cardiff's Royal Glamorgan Hospital, leads anaesthesia and patient safety through every procedure.",
  "Every consultation starts the same way: understanding the concern, assessing what is realistic, and discussing options without pressure toward any particular procedure. Patients on Practo have recommended Dr. Srikanth V more than 125 times, citing his clear communication and unhurried manner.",
  "Whether you are exploring hair restoration, considering a cosmetic procedure, or need reconstructive care after an injury or illness, Clinique Belle's approach stays the same: your body, your concern, your treatment plan.",
];

export type Specialty = { title: string; text: string; cta: string; link: Route; art: "circle" | "peaks" | "strands" };

export const specialties: Specialty[] = [
  {
    title: "Plastic & Cosmetic Surgery",
    text: "Body contouring, facial rejuvenation and breast procedures — liposuction, rhinoplasty, facelift, abdominoplasty and more.",
    cta: "Explore cosmetic procedures",
    link: routes.liposuction,
    art: "circle",
  },
  {
    title: "Reconstructive Surgery",
    text: "Microsurgery, hand surgery, cranio-maxillofacial repair, cleft lip & palate and post-mastectomy reconstruction.",
    cta: "Explore reconstructive care",
    link: routes.microsurgery,
    art: "peaks",
  },
  {
    title: "Hair Transplantation",
    text: "Restoration for hair fall and thinning, evaluated and performed as a surgical procedure, not a walk-in service.",
    cta: "Explore hair restoration",
    link: routes.hairTransplantation,
    art: "strands",
  },
];

export const consultationSteps = [
  { title: "Understand your concern", text: "Tell us what has changed and what you would like to improve." },
  { title: "Clinical assessment", text: "An honest evaluation of what is realistic for your body and your goals." },
  {
    title: "Discuss your options",
    text: "Your surgeon explains the available approaches — including doing nothing, if that's the right call.",
  },
  { title: "Decide on your terms", text: "Ask questions, take your time, and proceed only when you're ready." },
];
