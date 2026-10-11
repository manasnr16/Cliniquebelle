"use client";

import { useRef } from "react";
import Image from "next/image";
import type { ImageSlot } from "@/lib/images";
import AppLink from "./AppLink";
import styles from "./ProcedureCarousel.module.css";

type Card = { slot: ImageSlot; title: string; text: string; href: string; src: string | null };
export type { Card as ProcedureCardData };

/** Scroll-snap row with previous/next buttons. Works by touch/trackpad scroll even without JS. */
export default function ProcedureCarousel({ cards }: { cards: Card[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const step = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 300;
    el.scrollBy({ left: dir * (step + 24), behavior: "smooth" });
  };
  return (
    <div className={styles.wrap}>
      <ul ref={ref} className={styles.track} tabIndex={0} aria-label="Procedures">
        {cards.map((c) => (
          <li key={c.title} className={styles.card}>
            <AppLink href={c.href} className={styles.link}>
              <span className={styles.photo}>
                {c.src ? <Image src={c.src} alt="" fill sizes="(max-width: 700px) 80vw, 280px" className={styles.img} /> : <span className={styles.fallback} aria-hidden="true" />}
              </span>
              <span className={styles.title}>{c.title}</span>
              <span className={styles.text}>{c.text}</span>
              <span className={styles.more}>More info</span>
            </AppLink>
          </li>
        ))}
      </ul>
      <div className={styles.controls}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous procedures">
          ←
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next procedures">
          →
        </button>
      </div>
    </div>
  );
}
