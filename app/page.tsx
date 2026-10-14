import Image from "next/image";
import type { Metadata } from "next";
import AppLink from "@/components/AppLink";
import Button from "@/components/Button";
import ConsultationCTA from "@/components/ConsultationCTA";
import HeroCarousel, { type HeroSlide } from "@/components/HeroCarousel";
import Icon from "@/components/Icons";
import PageShell from "@/components/PageShell";
import Parallax from "@/components/Parallax";
import ProcedureCarousel from "@/components/ProcedureCarousel";
import Reveal from "@/components/Reveal";
import SlotImage from "@/components/SlotImage";
import TestimonialSlider from "@/components/TestimonialSlider";
import { discover, heroStats, procedureCards } from "@/content/home";
import { drSrikanth } from "@/content/doctors";
import { testimonials } from "@/content/testimonials";
import { slotSrc } from "@/lib/images";
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
  const slides: HeroSlide[] = [
    {
      id: "welcome",
      eyebrow: "Koramangala, Bangalore · Est. 2012",
      title: "Look good.",
      titleEm: "Feel great.",
      text: "Plastic, cosmetic and reconstructive surgery led by Dr. Srikanth V — 31 years in surgical practice, trusted by patients across Bangalore.",
      cta: { label: "Book a consultation", href: contact },
      src: slotSrc("hero-welcome"),
      alt: "A patient at Clinique Belle, Bangalore",
      tone: "a",
    },
    {
      id: "mummy-makeover",
      eyebrow: "Mommy makeover",
      title: "Rediscover yourself",
      titleEm: "after motherhood.",
      text: "A surgeon-planned, combined approach to restoring the body after pregnancy — your goals, your options explained clearly, no pressure.",
      cta: { label: "Explore mommy makeover", href: hrefFor(routes.mommyMakeover) },
      src: slotSrc("hero-mummy-makeover"),
      alt: "A mother with her child, representing the mommy makeover procedure",
      tone: "b",
    },
    {
      id: "hair",
      eyebrow: "Hair transplantation",
      title: "Restore your",
      titleEm: "hairline.",
      text: "Evaluated and performed as a surgical procedure, not a walk-in service, with an honest view of what is realistic for you.",
      cta: { label: "Explore hair restoration", href: hrefFor(routes.hairTransplantation) },
      src: slotSrc("hero-hair"),
      alt: "A man reviewing his hairline with a surgeon",
      tone: "c",
    },
    {
      id: "face",
      eyebrow: "Facial rejuvenation",
      title: "Refresh, with",
      titleEm: "natural balance.",
      text: "Facelift, rhinoplasty, eyelid surgery and facial rejuvenation, planned around your own features.",
      cta: { label: "Explore facial procedures", href: hrefFor(routes.facialRejuvenation) },
      src: slotSrc("hero-face"),
      alt: "A woman with refreshed, natural-looking skin",
      tone: "d",
    },
  ];
  const cards = procedureCards.map((c) => ({ slot: c.slot, title: c.title, text: c.text, href: hrefFor(c.route), src: slotSrc(c.slot) }));
  return (
    <PageShell>
      {/* ===== HERO CAROUSEL ===== */}
      <HeroCarousel slides={slides} secondary={{ label: "Read patient reviews", href: routes.testimonials.path }}>
        <aside className={styles.strip} aria-label="Dr. Srikanth V at a glance">
          <div className={`wrap ${styles.stripInner}`}>
            <div className={styles.stripDoc}>
              <span className={styles.stripPhoto}>
                <Image src={drSrikanth.photo} alt="" fill sizes="52px" className={styles.cover} />
              </span>
              <span>
                <strong>{drSrikanth.name}</strong>
                <span>{drSrikanth.title}</span>
              </span>
            </div>
            <dl className={styles.stripStats}>
              {heroStats.slice(0, 3).map((st) => (
                <div key={st.num}>
                  <dt>{st.num}</dt>
                  <dd>{st.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </HeroCarousel>

      {/* ===== DISCOVER A NEW YOU ===== */}
      <section className={`section ${styles.discover}`} id="discover" aria-labelledby="discover-heading">
        <div className="wrap">
          <Reveal className={styles.center}>
            <span className="eyebrow">Welcome to Clinique Belle</span>
            <h2 id="discover-heading" className={styles.bigTitle}>
              Discover a new you
            </h2>
          </Reveal>
          <ul className={styles.tiles}>
            {discover.map((d, i) => (
              <li key={d.title}>
                <Reveal delay={i * 0.12} className={styles.tileReveal}>
                  <AppLink href={hrefFor(d.route)} className={styles.tile}>
                    <span className={styles.tileIcon}>
                      <Icon name={d.icon} />
                    </span>
                    <span className={styles.tileTitle}>{d.title}</span>
                    <span className={styles.tileText}>{d.text}</span>
                  </AppLink>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className={styles.center}>
            <Button href={routes.about.path}>About the clinic</Button>
          </Reveal>
        </div>
      </section>

      {/* ===== PROCEDURES ===== */}
      <section className={`section ${styles.procedures}`} aria-labelledby="procedures-heading">
        <div className="wrap">
          <Reveal className={styles.center}>
            <span className="eyebrow">View our services</span>
            <h2 id="procedures-heading" className={styles.bigTitle}>
              Our procedures
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcedureCarousel cards={cards} />
          </Reveal>
          <Reveal className={styles.center}>
            <Button href={routes.procedures.path} variant="secondary">
              View all procedures
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS (split band) ===== */}
      <section className={styles.reviews} aria-labelledby="reviews-heading">
        <div className={styles.reviewPhoto}>
          <SlotImage slot="testimonial" alt="" sizes="(max-width: 980px) 100vw, 50vw" position="center 18%" />
        </div>
        <div className={styles.reviewBody}>
          <Reveal variant="left">
            <h2 id="reviews-heading" className={styles.bigTitle}>
              Testimonials
            </h2>
            <p className={styles.reviewLead}>Shared directly by patients on the clinic&apos;s own testimonials page and on Practo.</p>
            <TestimonialSlider items={testimonials.slice(0, 3)} />
            <p className={styles.reviewMore}>
              <AppLink href={routes.testimonials.path}>Read all testimonials</AppLink>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== DOCTORS BAND ===== */}
      <section className={styles.band} aria-labelledby="band-heading">
        <div className={styles.bandBg} aria-hidden="true">
          <Parallax speed={0.2}>
            <SlotImage slot="doctors-band" alt="" sizes="100vw" />
          </Parallax>
          <div className={styles.bandShade} />
        </div>
        <Reveal variant="zoom" className={`wrap ${styles.bandInner}`}>
          <h2 id="band-heading">Our doctors are high-level professionals</h2>
          <p>Every procedure is planned and performed by a senior surgeon, with a dedicated anaesthetist overseeing safety and comfort.</p>
          <Button href={routes.ourDoctors.path} variant="white">
            Meet our doctors
          </Button>
        </Reveal>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
