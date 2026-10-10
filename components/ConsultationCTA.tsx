import { routes, hrefFor } from "@/lib/routes";
import { site } from "@/lib/site";
import Button from "./Button";
import styles from "./ConsultationCTA.module.css";

/** Closing call-to-action band shared by Home and About Us. Wording is the consultant's. */
export default function ConsultationCTA({ id }: { id?: string }) {
  return (
    <section className={styles.band} id={id} aria-labelledby="cta-heading">
      <div className={`wrap ${styles.inner}`}>
        <div>
          <h2 id="cta-heading">Ready to talk through your options?</h2>
          <p>
            Call <a href={site.phone.href}>{site.phone.display}</a> / <a href={site.mobile.href}>{site.mobile.short}</a>, or book
            online.
          </p>
        </div>
        <Button href={hrefFor(routes.contact)} variant="white">
          Book a consultation
        </Button>
      </div>
    </section>
  );
}
