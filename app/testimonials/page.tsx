import type { Metadata } from "next";
import ConsultationCTA from "@/components/ConsultationCTA";
import CountUp from "@/components/CountUp";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { ReviewCard } from "@/components/Testimonial";
import { reviewStats } from "@/content/home";
import { testimonials } from "@/content/testimonials";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import styles from "./testimonials.module.css";

export const metadata: Metadata = buildMetadata({
  // PROPOSAL, NOT APPROVED: new page, new URL. Testimonials need clinic/legal sign-off (see APPROVALS.md).
  title: "Patient Testimonials | Clinique Belle, Bangalore",
  description: "What patients say after their procedure at Clinique Belle, Koramangala, Bangalore — shared on the clinic's testimonials page and on Practo.",
  route: routes.testimonials,
});

export default function TestimonialsPage() {
  return (
    <PageShell current="reviews">
      <PageHero
        slot="page-testimonials"
        crumb="Testimonials"
        eyebrow="Patient reviews"
        title={
          <>
            What patients say <em>after their procedure</em>
          </>
        }
        lede="Shared directly by patients on the clinic's own testimonials page and on independent healthcare directories."
      />

      <section className={`section ${styles.stats}`} aria-label="Review figures">
        <dl className={`wrap ${styles.statRow}`}>
          {reviewStats.map((s) => (
            <div key={s.label}>
              <dt className={styles.num}>
                <CountUp text={s.num} />
              </dt>
              <dd className={styles.label}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`section ${styles.grid}`} aria-label="Testimonials">
        <div className={`wrap ${styles.cards}`}>
          {testimonials.map((t, i) => (
            <Reveal key={t.attribution} delay={(i % 3) * 0.1}>
              <ReviewCard {...t} />
            </Reveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
