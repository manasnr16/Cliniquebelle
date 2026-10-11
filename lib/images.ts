import fs from "node:fs";
import path from "node:path";

/**
 * Photo slots. Drop a file named after the slot into /public/images and it is used
 * automatically (jpg, jpeg, webp or png). No code change needed. Until a file exists,
 * the slot shows a branded gradient so the layout still looks finished.
 */
export type ImageSlot =
  | "hero-welcome"
  | "hero-mummy-makeover"
  | "hero-hair"
  | "hero-face"
  | "page-procedures"
  | "page-doctors"
  | "page-testimonials"
  | "page-videos"
  | "page-contact"
  | "testimonial"
  | "proc-hair"
  | "proc-body"
  | "proc-face"
  | "proc-breast"
  | "proc-reconstructive"
  | "doctors-band"
  | "about-expect";

const EXT = ["jpg", "jpeg", "webp", "png"];

export function slotSrc(slot: ImageSlot): string | null {
  for (const ext of EXT) {
    const file = `${slot}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "images", file))) return `/images/${file}`;
  }
  return null;
}
