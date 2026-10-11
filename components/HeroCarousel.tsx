"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import styles from "./HeroCarousel.module.css";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  text: string;
  cta: { label: string; href: string };
  /** Resolved photo path, or null to show the gradient fallback. */
  src: string | null;
  alt: string;
  tone: "a" | "b" | "c" | "d";
};

type Props = { slides: HeroSlide[]; secondary: { label: string; href: string }; children?: React.ReactNode };

/** Full-bleed crossfading banner. Autoplays every 7s; pauses on hover/focus; no autoplay with reduced motion. */
export default function HeroCarousel({ slides, secondary, children }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const go = useCallback((to: number) => setI(((to % n) + n) % n), [n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Featured treatments"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((s, idx) => {
        const active = idx === i;
        return (
          <div key={s.id} className={`${styles.slide} ${styles[`tone-${s.tone}`]} ${active ? styles.active : ""}`} aria-hidden={!active} role="group" aria-roledescription="slide" aria-label={`${idx + 1} of ${n}`}>
            <div className={styles.media}>
              {s.src ? <Image src={s.src} alt={s.alt} fill sizes="100vw" priority={idx === 0} className={styles.img} /> : null}
            </div>
            <div className={styles.shade} />
            <div className={`wrap ${styles.content}`}>
              <div className={styles.copy}>
                <span className={styles.eyebrow}>{s.eyebrow}</span>
                {idx === 0 ? (
                  <h1 className={styles.title}>
                    {s.title} <em>{s.titleEm}</em>
                  </h1>
                ) : (
                  <h2 className={styles.title}>
                    {s.title} <em>{s.titleEm}</em>
                  </h2>
                )}
                <p className={styles.text}>{s.text}</p>
                <div className={styles.ctas}>
                  <Button href={s.cta.href} variant="white" className={active ? "" : styles.inert}>
                    {s.cta.label}
                  </Button>
                  <Button href={secondary.href} variant="ghost" className={active ? "" : styles.inert}>
                    {secondary.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.controls}>
        <div className={`wrap ${styles.controlsInner}`}>
          <div className={styles.dots}>
            {slides.map((s, idx) => (
              <button key={s.id} type="button" onClick={() => go(idx)} aria-label={`Show slide ${idx + 1}: ${s.titleEm}`} aria-current={idx === i} className={idx === i ? styles.dotOn : styles.dot} />
            ))}
          </div>
          <div className={styles.arrows}>
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide">
              ←
            </button>
            <button type="button" onClick={() => go(i + 1)} aria-label="Next slide">
              →
            </button>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
