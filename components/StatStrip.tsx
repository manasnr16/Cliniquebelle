import styles from "./StatStrip.module.css";

type Props = {
  items: { num: string; label: string }[];
  /** Which edge carries the divider line, depending on what sits next to the strip. */
  edge: "top" | "bottom";
  className?: string;
};

/** The four-figure strip used under the hero on both pages. Figures are supplied by the caller. */
export default function StatStrip({ items, edge, className = "" }: Props) {
  return (
    <div className={`${styles.strip} ${edge === "top" ? styles.top : styles.bottom} ${className}`.trim()}>
      <dl className={`wrap ${styles.grid}`}>
        {items.map((item) => (
          <div key={item.num} className={styles.item}>
            <dt className={styles.num}>{item.num}</dt>
            <dd className={styles.label}>{item.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
