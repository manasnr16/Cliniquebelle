"use client";

import { useEffect } from "react";

/** Sets `data-scrolled` on <html> so the header can condense after the page is scrolled. Renders nothing. */
export default function ScrollEffects() {
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      document.documentElement.dataset.scrolled = window.scrollY > 40 ? "true" : "false";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
