import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = buildMetadata({
  // PROPOSAL, NOT APPROVED: the live /contact-us/ page has its own copy.
  title: "Contact Us | Clinique Belle, Koramangala, Bangalore",
  description: "Call or visit Clinique Belle in Koramangala, Bangalore, to book a consultation with Dr. Srikanth V.",
  route: routes.contact,
});

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Clinique Belle, 461, 8th Main, 4th Block, Koramangala, Bangalore 560034")}`;

export default function ContactPage() {
  return (
    <PageShell current="contact">
      <PageHero
        slot="page-contact"
        crumb="Contact"
        eyebrow="Book a consultation"
        title={
          <>
            Let&apos;s talk through <em>your options</em>
          </>
        }
        lede="A consultation is simply a conversation about what has changed and what is realistic. Call us to arrange a time."
      />
      <section className={`section ${styles.section}`} aria-label="Contact details">
        <div className={`wrap ${styles.grid}`}>
          <Reveal className={styles.card}>
            <h2>Call us</h2>
            <a href={site.phone.href}>{site.phone.display}</a>
            <a href={site.mobile.href}>{site.mobile.display}</a>
          </Reveal>
          <Reveal delay={0.12} className={styles.card}>
            <h2>Visit the clinic</h2>
            <address>
              {site.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
