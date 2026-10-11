import type { Metadata } from "next";
import ConsultationCTA from "@/components/ConsultationCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import VideoCard from "@/components/VideoCard";
import { videoCards } from "@/content/home";
import { routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  // PROPOSAL, NOT APPROVED. The live page at this URL has its own title; confirm before launch.
  title: "Plastic & Cosmetic Surgery Videos | Clinique Belle, Bangalore",
  description: "Watch Dr. Srikanth V answer patient questions on cosmetic and reconstructive procedures, featured on Doctors' Circle.",
  route: routes.videos,
});

export default function VideosPage() {
  return (
    <PageShell current="videos">
      <PageHero
        slot="page-videos"
        crumb="Videos"
        eyebrow="Featured on Doctors' Circle"
        title={
          <>
            Watch Dr. Srikanth V <em>explain</em>
          </>
        }
        lede="Short explainers on Doctors' Circle, India's largest health information video platform."
      />
      <section className="section" style={{ background: "var(--ivory)" }} aria-label="Videos">
        <ul className="wrap grid-4">
          {videoCards.map((v, i) => (
            <li key={v.href}>
              <Reveal delay={(i % 4) * 0.1}>
                <VideoCard href={v.href} label={v.label} thumb={v.thumb} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <ConsultationCTA />
    </PageShell>
  );
}
