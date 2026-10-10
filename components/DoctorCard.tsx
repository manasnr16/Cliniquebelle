import Image from "next/image";
import type { Doctor } from "@/content/doctors";
import { hrefFor } from "@/lib/routes";
import AppLink from "./AppLink";
import styles from "./DoctorCard.module.css";

type Props = {
  doctor: Doctor;
  /** "compact" = small round photo (Home). "photo" = large photo on top (About Us). */
  variant: "compact" | "photo";
};

export default function DoctorCard({ doctor, variant }: Props) {
  const isPhoto = variant === "photo";
  return (
    <article className={`${styles.card} ${isPhoto ? styles.photoCard : styles.compactCard}`}>
      <div className={isPhoto ? styles.photoWrap : styles.avatar}>
        <Image
          src={doctor.photo}
          alt={doctor.photoAlt}
          fill
          sizes={isPhoto ? "(max-width: 980px) 100vw, 560px" : "72px"}
          className={styles.img}
        />
      </div>
      <div className={isPhoto ? styles.body : undefined}>
        <h3 className={styles.name}>{doctor.name}</h3>
        <p className={styles.role}>{isPhoto ? doctor.credentials : doctor.title}</p>
        <p className={styles.bio}>{isPhoto ? doctor.bioAbout : doctor.bioHome}</p>
        <p className={styles.links}>
          <AppLink href={hrefFor(doctor.profile)} aria-label={`Full profile: ${doctor.name}`}>
            Full profile
          </AppLink>
        </p>
      </div>
    </article>
  );
}
