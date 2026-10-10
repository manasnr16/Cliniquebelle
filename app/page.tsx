import Image from "next/image";
import type { Metadata } from "next";
import Button from "@/components/Button";
import ConsultationCTA from "@/components/ConsultationCTA";
import DoctorCard from "@/components/DoctorCard";
import PageShell from "@/components/PageShell";
import SectionHead from "@/components/SectionHead";
import StatStrip from "@/components/StatStrip";
import AppLink from "@/components/AppLink";
import { QuoteMini, ReviewCard } from "@/components/Testimonial";
import {
  credentials,
  featuredVideos,
  heroQuote,
  heroStats,
  procedureGroups,
  reviewStats,
  trustStats,
  whyParagraphs,
} from "@/content/home";
import { doctors, drSrikanth } from "@/content/doctors";
import { testimonials } from "@/content/testimonials";
import { hrefFor, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import styles from "./home.module.css";

export const metadata: Metadata = buildMetadata({
  // Title: from the consultant's homepage file (the live site currently says "Home - Clinique belle").
  title: "Clinique Belle — Plastic, Cosmetic & Reconstructive Surgery, Bangalore",
  // PROPOSAL, NOT APPROVED: the supplied homepage and the live homepage have no meta description.
  description:
    "Plastic, cosmetic and reconstructive surgery in Koramangala, Bangalore, led by Dr. Srikanth V. Hair transplantation, body contouring and facial rejuvenation.",
  route: routes.home,
});

export default function HomePage() {
  const contact = hrefFor(routes.contact);
  return (
    <PageShell>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className={styles.heroEyebrow}>Koramangala, Bangalore · Est. 2012</span>
            {/* APPROVAL NEEDED: this H1 is a tagline with no keywords (the live H1 is also a tagline). */}
            <h1 id="hero-heading">
              Look good.
              <br />
              Feel <em>great.</em>
            </h1>
            <p className={styles.heroSub}>
              Plastic, cosmetic and reconstructive surgery led by Dr. Srikanth V — 31 years in surgical practice, trusted by patients
              across Bangalore for hair transplantation, body contouring, facial rejuvenation and reconstructive care.
            </p>
            <p className={styles.rating}>
              {/* Stars are decorative. APPROVAL NEEDED: confirm a star display is acceptable; the source only states "127+ recommend". */}
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>
                <strong>127+ patients</strong> recommend Dr. Srikanth V on Practo
              </span>
            </p>
            <div className={styles.ctas}>
              <Button href={contact}>Book a consultation</Button>
              <Button href="#reviews" variant="secondary">
                Read patient reviews
              </Button>
            </div>
            <QuoteMini plain quote={heroQuote.quote} attribution={heroQuote.attribution} />
          </div>

          <aside className={styles.cred} aria-label="Dr. Srikanth V at a glance">
            <div className={styles.credDoc}>
              <div className={styles.credPhoto}>
                <Image src={drSrikanth.photo} alt={drSrikanth.name} fill sizes="64px" className={styles.cover} priority />
              </div>
              <div>
                <p className={styles.credName}>{drSrikanth.name}</p>
                <p className={styles.credRole}>{drSrikanth.credentials}</p>
              </div>
            </div>
            <dl className={styles.credStats}>
              {heroStats.map((s) => (
                <div key={s.num}>
                  <dt className={styles.credNum}>{s.num}</dt>
                  <dd className={styles.credLabel}>{s.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <StatStrip items={trustStats} edge="top" className={styles.trust} />
      </section>

      <div className={styles.featured}>
        <div className={`wrap ${styles.featuredInner}`}>
          <span className={styles.featuredLabel}>Featured on Doctors&apos; Circle — India&apos;s largest health video platform</span>
          <ul className={styles.featuredLinks}>
            {featuredVideos.map((v) => (
              <li key={v.href}>
                <AppLink href={v.href} newTab>
                  {v.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className={`section ${styles.reviews}`} id="reviews" aria-labelledby="reviews-heading">
        <div className="wrap">
          <SectionHead
            id="reviews-heading"
            eyebrow="Patient reviews"
            title="What patients say after their procedure"
            description="Shared directly by patients on the clinic's own testimonials page and on independent healthcare directories."
          />
          <dl className={styles.reviewStats}>
            {reviewStats.map((s) => (
              <div key={s.num}>
                <dt className={styles.reviewStatNum}>{s.num}</dt>
                <dd className={styles.reviewStatLabel}>{s.label}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.reviewGrid}>
            {testimonials.map((t) => (
              <ReviewCard key={t.attribution} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.why}`} aria-labelledby="why-heading">
        <div className={`wrap ${styles.whyGrid}`}>
          <div className={styles.whyFigure}>
            <Image
              src={drSrikanth.photo}
              alt={drSrikanth.photoAlt}
              fill
              sizes="(max-width: 980px) 100vw, 480px"
              className={styles.cover}
            />
          </div>
          <div>
            <span className="eyebrow">Why patients choose Clinique Belle</span>
            <h2 id="why-heading" className={styles.whyTitle}>
              A surgeon&apos;s practice, not a sales floor
            </h2>
            <div className={styles.whyBody}>
              {whyParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className={styles.credentials}>
              {credentials.map((c) => (
                <li key={c}>
                  <span className={styles.dot} aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <p className={styles.moreAbout}>
              <AppLink href={routes.about.path}>More about Clinique Belle</AppLink>
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.services}`} id="procedures" aria-labelledby="procedures-heading">
        <div className="wrap">
          <SectionHead
            id="procedures-heading"
            eyebrow="Procedures"
            title="Care organised around what you're here for"
            description="From a first hair-fall consultation to complex reconstructive surgery, every category below is led directly by Dr. Srikanth V."
          />
          <div className={styles.groups}>
            {procedureGroups.map((group, i) => (
              <div key={group.title} className={styles.group}>
                <div>
                  <h3 className={styles.groupTitle}>
                    <span className={styles.groupNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {group.title}
                  </h3>
                  <p className={styles.groupDesc}>{group.description}</p>
                </div>
                <ul className={styles.pills}>
                  {group.items.map((route) => (
                    <li key={route.path}>
                      <AppLink href={hrefFor(route)} className={styles.pill}>
                        {route.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.doctors}`} id="doctors" aria-labelledby="doctors-heading">
        <div className="wrap">
          <SectionHead id="doctors-heading" eyebrow="Our team" title="The two doctors behind every procedure" />
          <div className={styles.doctorGrid}>
            {doctors.map((d) => (
              <DoctorCard key={d.id} doctor={d} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
