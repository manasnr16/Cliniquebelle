import Image from "next/image";
import { footerClinic, footerCosmetic, footerLegal, footerReconstructive } from "@/content/navigation";
import { routes, hrefFor } from "@/lib/routes";
import { site } from "@/lib/site";
import AppLink from "./AppLink";
import styles from "./Footer.module.css";

type LinkItem = { label: string; href: string };

function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <AppLink href={item.href}>{item.label}</AppLink>
        </li>
      ))}
    </ul>
  );
}

/**
 * Shared footer, ported from clinique-belle-footer.html.
 * Left out on purpose: the Facebook and Instagram icons. In the supplied file they
 * pointed to "#", so there is no confirmed profile to link to. Add them once the
 * real URLs are supplied.
 */
export default function Footer() {
  const allProcedures = hrefFor(routes.sitemap);
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.wrap}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <AppLink href="/">
              <Image
                src={site.logo.src}
                width={site.logo.width}
                height={site.logo.height}
                alt="Clinique Belle — Advanced Plastic & Cosmetic Surgery"
                unoptimized
              />
            </AppLink>
            <p>{site.footerBlurb}</p>
          </div>

          <nav aria-label="Cosmetic surgery" className={styles.col}>
            <h3>Cosmetic Surgery</h3>
            <LinkList items={footerCosmetic} />
            <a className={styles.more} href={allProcedures}>
              View all procedures
            </a>
          </nav>

          <nav aria-label="Reconstructive surgery" className={styles.col}>
            <h3>Reconstructive Surgery</h3>
            <LinkList items={footerReconstructive} />
            <a className={styles.more} href={allProcedures}>
              View all procedures
            </a>
          </nav>

          <nav aria-label="Clinic" className={styles.col}>
            <h3>Clinic</h3>
            <LinkList items={footerClinic} />
          </nav>

          <div className={`${styles.col} ${styles.contact}`}>
            <h3>Get in touch</h3>
            <address>
              {site.address.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < site.address.length - 1 ? <br /> : null}
                </span>
              ))}
            </address>
            <a href={site.phone.href}>{site.phone.display}</a>
            <a href={site.mobile.href}>{site.mobile.display}</a>
            <AppLink className={styles.cta} href={hrefFor(routes.contact)}>
              Book a consultation
            </AppLink>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Clinique Belle. All rights reserved.</span>
          <nav aria-label="Legal" className={styles.legal}>
            {footerLegal.map((item) => (
              <AppLink key={item.label} href={item.href}>
                {item.label}
              </AppLink>
            ))}
          </nav>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
