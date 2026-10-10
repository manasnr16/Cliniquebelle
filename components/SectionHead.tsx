import type { ReactNode } from "react";
import styles from "./SectionHead.module.css";

type Props = { eyebrow: string; title: ReactNode; description?: string; id?: string };

export default function SectionHead({ eyebrow, title, description, id }: Props) {
  return (
    <div className={styles.head}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
