import Image from "next/image";
import AppLink from "./AppLink";
import styles from "./VideoCard.module.css";

export default function VideoCard({ href, label, thumb }: { href: string; label: string; thumb: string }) {
  return (
    <AppLink href={href} newTab className={styles.video}>
      <span className={styles.thumb}>
        <Image src={thumb} alt="" fill sizes="(max-width: 700px) 100vw, 280px" className={styles.img} />
        <span className={styles.play} aria-hidden="true">
          ▶
        </span>
      </span>
      <span className={styles.title}>{label}</span>
      <span className={styles.more}>Watch video</span>
    </AppLink>
  );
}
