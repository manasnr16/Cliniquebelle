"use client";

import { useEffect, useRef, useState } from "react";

/** "127+" counts up from 0 when scrolled into view. Text without a leading number ("FRCS") is shown as is. */
export default function CountUp({ text }: { text: string }) {
  const m = /^(\d+)(.*)$/.exec(text);
  const target = m ? parseInt(m[1], 10) : null;
  const [n, setN] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        setN(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  if (!m || target === null) return <>{text}</>;
  return (
    <span ref={ref}>
      {n === null ? m[1] : n}
      {m[2]}
    </span>
  );
}
