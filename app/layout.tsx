import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/work-sans/index.css";
import "./globals.css";
import Analytics from "@/components/Analytics";
import ScrollEffects from "@/components/ScrollEffects";
import { PRODUCTION_ORIGIN, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_ORIGIN),
  applicationName: site.name,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        {/* Adds .js before first paint so scroll-reveal styles only apply when scripts run. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <ScrollEffects />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
