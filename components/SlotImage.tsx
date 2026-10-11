import Image from "next/image";
import { slotSrc, type ImageSlot } from "@/lib/images";
import styles from "./SlotImage.module.css";

type Props = {
  slot: ImageSlot;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** CSS object-position for the photo, e.g. "top center". */
  position?: string;
};

/** Fills its (relatively positioned) parent with the slot photo, or a branded gradient if none was supplied. */
export default function SlotImage({ slot, alt, sizes, priority, position = "center" }: Props) {
  const src = slotSrc(slot);
  if (!src) return <div className={styles.fallback} aria-hidden="true" />;
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.img} style={{ objectPosition: position }} />;
}
