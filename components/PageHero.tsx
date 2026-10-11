import type { ReactNode } from "react";
import type { ImageSlot } from "@/lib/images";
import AppLink from "./AppLink";
import SlotImage from "./SlotImage";
import styles from "./PageHero.module.css";

type Props = {
  title: ReactNode;
  eyebrow: string;
  lede?: string;
  /** Breadcrumb label for this page (Home is added automatically). */
  crumb: string;
  children?: ReactNode;
  /** Optional photo slot shown behind the banner (falls back to the plum gradient). */
  slot?: ImageSlot;
};

/** Shared banner for the dedicated inner pages: breadcrumb, headline, short intro and optional buttons. */
export default function PageHero({ title, eyebrow, lede, crumb, children, slot }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="page-heading">
      {slot ? (
        <div className={styles.photo} aria-hidden="true">
          <SlotImage slot={slot} alt="" sizes="100vw" position="center 30%" />
          <div className={styles.photoShade} />
        </div>
      ) : null}
      <div className={styles.glow} aria-hidden="true" />
      <div className={`wrap ${styles.inner}`}>
        <nav aria-label="Breadcrumb" className={`${styles.crumb} rise`}>
          <ol>
            <li>
              <AppLink href="/">Home</AppLink>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <span className={`${styles.eyebrow} rise`} style={{ ["--d" as string]: "0.1s" }}>
          {eyebrow}
        </span>
        <h1 id="page-heading" className="rise" style={{ ["--d" as string]: "0.2s" }}>
          {title}
        </h1>
        {lede ? (
          <p className={`${styles.lede} rise`} style={{ ["--d" as string]: "0.35s" }}>
            {lede}
          </p>
        ) : null}
        {children ? (
          <div className={`${styles.actions} rise`} style={{ ["--d" as string]: "0.5s" }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
