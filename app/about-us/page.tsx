import Image from "next/image";
import type { Metadata } from "next";
import AppLink from "@/components/AppLink";
import Button from "@/components/Button";
import ConsultationCTA from "@/components/ConsultationCTA";
import DoctorCard from "@/components/DoctorCard";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import SlotImage from "@/components/SlotImage";
import SpecArt from "@/components/SpecArt";
import StatStrip from "@/components/StatStrip";
import { QuoteMini } from "@/components/Testimonial";
import { aboutStats, consultationSteps, specialties, whoWeAre } from "@/content/about";
import { doctors, drSrikanth } from "@/content/doctors";
import { aboutTestimonials } from "@/content/testimonials";
import { canonicalFor, hrefFor, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTION_ORIGIN } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = buildMetadata({
  // Title and description are copied from the consultant's "about-us (1)" file.
  // APPROVAL NEEDED: /about-us/ is not in the live page sitemap, so this is a NEW URL.
  title: "About Us | Clinique Belle — Plastic, Cosmetic & Reconstructive Surgery, Bangalore",
  description:
    "Clinique Belle is a plastic, cosmetic and reconstructive surgery practice in Koramangala, Bangalore, led by Dr. Srikanth V — 31 years of surgical experience.",
  route: routes.about,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${PRODUCTION_ORIGIN}/` },
    { "@type": "ListItem", position: 2, name: "About Us", item: canonicalFor(routes.about) },
  ],
};

export default function AboutPage() {
  const contact = hrefFor(routes.contact);
  return (
    <PageShell current="about">
      <JsonLd data={breadcrumbSchema} />

      <section className={styles.hero} aria-labelledby="about-heading">
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <ol>
                <li>
                  <AppLink href="/">Home</AppLink>
                </li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
            <span className={styles.heroEyebrow}>Koramangala, Bangalore · Est. 2012</span>
            <h1 id="about-heading">
              Surgery led by <em>judgement</em>, not a sales pitch
            </h1>
            <p className={styles.heroText}>
              Clinique Belle is a plastic, cosmetic and reconstructive surgery practice built around one surgeon&apos;s three decades
              of training and a simple promise: understand your concern, explain your real options, and let you decide.
            </p>
            <div className={styles.ctas}>
              <Button href={contact}>Book a consultation</Button>
              <Button href="#doctors" variant="secondary">
                Meet the team
              </Button>
            </div>
          </div>

          <Reveal variant="right" className={styles.art}>
            <div className={styles.frame} aria-hidden="true" />
            <div className={styles.photo}>
              {/* Alt text changed from "consulting with a patient" (unverifiable) to a plain description. */}
              <Image
                src={drSrikanth.photo}
                alt={drSrikanth.photoAlt}
                fill
                sizes="(max-width: 980px) 300px, 520px"
                className={styles.cover}
                priority
              />
            </div>
            <div className={styles.tag}>
              <strong>{drSrikanth.name}</strong>
              <span>Consultant Plastic, Cosmetic &amp; Reconstructive Surgeon — 31+ years in practice</span>
            </div>
          </Reveal>
        </div>
      </section>

      <StatStrip items={aboutStats} edge="bottom" />

      <section className={`section ${styles.copy}`} aria-labelledby="who-heading">
        <div className={`wrap ${styles.copyGrid}`}>
          <div className={styles.sticky}>
            <span className="eyebrow">About Clinique Belle</span>
            <h2 id="who-heading">Who we are</h2>
          </div>
          <Reveal className={styles.copyBody}>
            {whoWeAre.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.specialties}`} aria-labelledby="spec-heading">
        <div className="wrap">
          <SectionHead
            id="spec-heading"
            eyebrow="What we specialise in"
            title="Three areas of focused expertise"
            description="Every category is led directly by Dr. Srikanth V, not delegated to a general practitioner."
          />
          <div className={styles.specGrid}>
            {specialties.map((s, i) => (
              <Reveal as="article" delay={i * 0.12} key={s.title} className={styles.specCard}>
                <div className={styles.specArt}>
                  <SpecArt kind={s.art} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <AppLink href={hrefFor(s.link)}>{s.cta}</AppLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.doctors}`} id="doctors" aria-labelledby="doctors-heading">
        <div className="wrap">
          <SectionHead id="doctors-heading" eyebrow="Our team" title="The two doctors behind every procedure" />
          <div className={styles.doctorGrid}>
            {doctors.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.12}>
                <DoctorCard doctor={d} variant="photo" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.experience}`} aria-labelledby="exp-heading">
        <div className="wrap">
          <div className={styles.expGrid}>
            <Reveal variant="left" className={styles.expArt}>
              <SlotImage slot="about-expect" alt="" sizes="(max-width: 980px) 100vw, 520px" />
            </Reveal>
            <div>
              <span className={styles.expEyebrow}>What to expect</span>
              <h2 id="exp-heading">A consultation, not a consultation pitch</h2>
              <ol className={styles.steps}>
                {consultationSteps.map((step, i) => (
                  <li key={step.title}>
                    <span className={styles.stepNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.reviews}`} aria-labelledby="words-heading">
        <div className="wrap">
          <SectionHead id="words-heading" eyebrow="In patients' words" title="What people say after visiting" />
          <div className={styles.reviewRow}>
            {aboutTestimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 0.12}>
                <QuoteMini {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
