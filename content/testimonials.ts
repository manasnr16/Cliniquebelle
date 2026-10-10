/**
 * Patient quotes, copied verbatim from the consultant's HTML files.
 * APPROVAL NEEDED: the clinic must confirm in writing that each quote may be
 * shown (and that doctor-advertising rules in India permit it). Flagged ones:
 *  - "One of the top plastic surgeons..." is a superlative claim.
 *  - "Kindly accept a small gift..." says nothing about care or results.
 */
export type Testimonial = { quote: string; attribution: string; source: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "His experience and confidence, combined with his genuine care for patient comfort, made surgery feel like a pleasant experience with no worries at all. Both the surgery and recovery were very smooth.",
    attribution: "Rekha, Bangalore — Sebaceous cyst surgery",
    source: "Practo review",
  },
  {
    quote:
      "The holes in my ear lobes were stretched to the extent that wearing earrings was almost impossible. My ear lobes are now normal and I'm wearing earrings again. Thank you for a wonderful job.",
    attribution: "Draupadi Tripathi, Mumbai — Ear lobule repair",
    source: "Clinique Belle testimonial",
  },
  {
    quote:
      "We would like to appreciate your expert, loving and compassionate understanding of patients' limitations — professional guidance, newer methods of speedy wound healing, and a smiling welcome.",
    attribution: "Al Idina & Family",
    source: "Clinique Belle testimonial",
  },
  {
    quote:
      "Very professional, provides the right options and never enforces any particular option or surgery. One of the top plastic surgeons/skin specialists in Bangalore.",
    attribution: "Verified patient, Bangalore",
    source: "Practo review",
  },
  {
    quote:
      "Went there to get a birthmark removed. Surgery was scheduled the following week, stitches removed a week after that — the overall procedure was quick and neat.",
    attribution: "Verified patient — Mole removal",
    source: "Practo review",
  },
  {
    quote: "Kindly accept a small gift I am sending through my daughter. Thanking you once again with good wishes and God bless.",
    attribution: "Molly Samuel",
    source: "Clinique Belle testimonial",
  },
];

/** Short versions used in the compact strip on the About Us page (verbatim from the About Us file). */
export const aboutTestimonials: { quote: string; attribution: string }[] = [
  {
    quote:
      "His experience and confidence, combined with his genuine care for patient comfort, made surgery feel like a pleasant experience with no worries at all.",
    attribution: "Rekha, Bangalore, Practo review",
  },
  {
    quote: "Very professional, provides the right options and never enforces any particular option or surgery.",
    attribution: "Verified patient, Practo review",
  },
  {
    quote:
      "We would like to appreciate your expert, loving and compassionate understanding of patients' limitations — professional guidance and a smiling welcome.",
    attribution: "Al Idina & Family, Clinique Belle testimonial",
  },
];
