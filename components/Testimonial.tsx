import styles from "./Testimonial.module.css";

type CardProps = { quote: string; attribution: string; source: string };

/** Large review card (Home reviews grid). Renders one real, attributed patient quote. */
export function ReviewCard({ quote, attribution, source }: CardProps) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>
        <p>“{quote}”</p>
      </blockquote>
      <figcaption>
        <span className={styles.name}>{attribution}</span>
        <span className={styles.source}>{source}</span>
      </figcaption>
    </figure>
  );
}

/** Compact quote with a left rule (About Us strip, Home hero). */
export function QuoteMini({ quote, attribution, plain }: { quote: string; attribution: string; plain?: boolean }) {
  return (
    <figure className={`${styles.mini} ${plain ? styles.plain : ""}`.trim()}>
      <blockquote>
        <p>“{quote}”</p>
      </blockquote>
      <figcaption>— {attribution}</figcaption>
    </figure>
  );
}
