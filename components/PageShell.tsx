import type { ReactNode } from "react";
import type { NavKey } from "@/content/navigation";
import Footer from "./Footer";
import Header from "./Header";

/** Header + main + footer. Every page uses this, so they always match. */
export default function PageShell({ current, children }: { current?: NavKey; children: ReactNode }) {
  return (
    <>
      <Header current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
