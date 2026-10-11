"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  variant?: "up" | "left" | "right" | "zoom" | "fade";
  /** Delay in seconds, for staggering siblings. */
  delay?: number;
  className?: string;
};

/** Fades/slides its content in the first time it scrolls into view. */
export default function Reveal({ children, as: Tag = "div", variant = "up", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} data-v={variant} style={{ "--d": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
