import type { Metadata } from "next";
import AppLink from "@/components/AppLink";
import ConsultationCTA from "@/components/ConsultationCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import SlotImage from "@/components/SlotImage";
import { procedureCards, procedureGroups } from "@/content/home";
import { hrefFor, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import styles from "./procedures.module.css";

export const metadata: Metadata = buildMetadata({
  // PROPOSAL, NOT APPROVED: new page, new URL.
  title: "Procedures | Clinique Belle — Plastic, Cosmetic & Reconstructive Surgery, Bangalore",
  description:
    "Every procedure offered at Clinique Belle, Koramangala, Bangalore: hair restoration, body contouring, facial rejuvenation, breast procedures and reconstructive microsurgery.",
  route: routes.procedures,
});

export default function ProceduresPage() {
  return (
    <PageShell current="procedures">
      <PageHero
        slot="page-procedures"
        crumb="Procedures"
        eyebrow="What we do"
        title={
          <>
            Care organised around <em>what you&apos;re here for</em>
          </>
        }
        lede="From a first hair-fall consultation to complex reconstructive surgery, every category below is led directly by Dr. Srikanth V."
      />

      <section className={`section ${styles.list}`} aria-label="Procedure categories">
        <div className="wrap">
          {procedureGroups.map((group, i) => {
            const card = procedureCards[i];
            const flip = i % 2 === 1;
            return (
              <article key={group.title} className={`${styles.row} ${flip ? styles.flip : ""}`.trim()}>
                <Reveal variant={flip ? "right" : "left"} className={styles.photo}>
                  <SlotImage slot={card.slot} alt="" sizes="(max-width: 980px) 100vw, 520px" />
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>
                <Reveal variant={flip ? "left" : "right"} delay={0.1}>
                  <h2 className={styles.title}>{group.title}</h2>
                  <p className={styles.desc}>{group.description}</p>
                  <ul className={styles.pills}>
                    {group.items.map((route) => (
                      <li key={route.path}>
                        <AppLink href={hrefFor(route)} className={styles.pill}>
                          {route.label}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <ConsultationCTA />
    </PageShell>
  );
}
