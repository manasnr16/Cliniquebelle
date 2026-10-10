"use client";

import { useEffect, useRef } from "react";
import AppLink from "./AppLink";
import styles from "./Header.module.css";

type Item = { key: string; label: string; href: string };
type Props = { items: Item[]; current?: string; phone: string; phoneHref: string };

/**
 * Mobile menu built on the native <details> element, so it opens and closes with
 * no JavaScript at all. The small script below only adds two conveniences:
 * close after choosing a link, and close on the Escape key.
 */
export default function MobileMenu({ items, current, phone, phoneHref }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = ref.current;
      if (e.key === "Escape" && el?.open) {
        el.open = false;
        el.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <details
      ref={ref}
      className={styles.menu}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a") && ref.current) ref.current.open = false;
      }}
    >
      <summary className={styles.menuButton}>
        <span className={styles.menuLabel}>Menu</span>
        <span className={styles.menuIcon} aria-hidden="true" />
      </summary>
      <ul className={styles.menuPanel}>
        {items.map((item) => (
          <li key={item.key}>
            <AppLink href={item.href} aria-current={current === item.key ? "page" : undefined}>
              {item.label}
            </AppLink>
          </li>
        ))}
        <li>
          <a href={phoneHref}>
            Call <strong>{phone}</strong>
          </a>
        </li>
      </ul>
    </details>
  );
}
