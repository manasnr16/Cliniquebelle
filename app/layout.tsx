import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/work-sans/index.css";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { PRODUCTION_ORIGIN, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_ORIGIN),
  applicationName: site.name,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
