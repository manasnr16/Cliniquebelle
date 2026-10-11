"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/testimonials";
import styles from "./TestimonialSlider.module.css";

/** One quote at a time with dots. Auto-advances every 8s (never when reduced motion is requested, and pauses on hover/focus). */
export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 8000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
    >
      <span className={styles.mark} aria-hidden="true">
        “
      </span>
      <div className={styles.stage} aria-live={paused ? "polite" : "off"}>
        {items.map((t, idx) => (
          <figure key={t.attribution} className={`${styles.slide} ${idx === i ? styles.active : ""}`} aria-hidden={idx !== i}>
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption>
              <strong>{t.attribution}</strong>
              <span>{t.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className={styles.dots}>
        {items.map((t, idx) => (
          <button key={t.attribution} type="button" className={idx === i ? styles.dotOn : styles.dot} aria-label={`Show testimonial ${idx + 1} of ${items.length}`} aria-current={idx === i} onClick={() => setI(idx)} />
        ))}
      </div>
    </div>
  );
}
