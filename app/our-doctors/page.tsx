import Image from "next/image";
import type { Metadata } from "next";
import AppLink from "@/components/AppLink";
import ConsultationCTA from "@/components/ConsultationCTA";
import DoctorCard from "@/components/DoctorCard";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import StatStrip from "@/components/StatStrip";
import { credentials, trustStats, whyParagraphs } from "@/content/home";
import { doctors, drSrikanth } from "@/content/doctors";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import styles from "./doctors.module.css";

export const metadata: Metadata = buildMetadata({
  // PROPOSAL, NOT APPROVED: new page, new URL.
  title: "Our Doctors | Clinique Belle — Dr. Srikanth V & Dr. Anupama T Srikanth, Bangalore",
  description:
    "Meet the surgeon and anaesthetist behind every procedure at Clinique Belle, Koramangala, Bangalore: Dr. Srikanth V and Dr. Anupama T Srikanth.",
  route: routes.ourDoctors,
});

export default function OurDoctorsPage() {
  return (
    <PageShell current="doctors">
      <PageHero
        slot="page-doctors"
        crumb="Our doctors"
        eyebrow="Our team"
        title={
          <>
            The two doctors behind <em>every procedure</em>
          </>
        }
        lede="A senior plastic surgeon and a dedicated anaesthetist, so planning, surgery and safety stay with the same small team."
      />

      <section className={`section ${styles.cards}`} aria-label="Doctors">
        <div className="wrap grid-2">
          {doctors.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.12}>
              <DoctorCard doctor={d} variant="photo" />
            </Reveal>
          ))}
        </div>
      </section>

      <StatStrip items={trustStats} edge="top" />

      <section className={`section ${styles.why}`} aria-labelledby="why-heading">
        <div className={`wrap ${styles.whyGrid}`}>
          <Reveal variant="left" className={styles.figure}>
            <Image src={drSrikanth.photo} alt={drSrikanth.photoAlt} fill sizes="(max-width: 980px) 100vw, 480px" className={styles.cover} />
          </Reveal>
          <Reveal variant="right">
            <span className="eyebrow">Why patients choose Clinique Belle</span>
            <h2 id="why-heading" className="title-xl">
              A surgeon&apos;s practice, not a sales floor
            </h2>
            <div className={styles.body}>
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
            <p className={styles.more}>
              <AppLink href={routes.about.path}>More about Clinique Belle</AppLink>
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
