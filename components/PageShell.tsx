import type { ReactNode } from "react";
import type { NavKey } from "@/content/navigation";
import Footer from "./Footer";
import Header from "./Header";

/** Skip link + header + main + footer. Every page uses this, so they always match. */
export default function PageShell({ current, children }: { current?: NavKey; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
