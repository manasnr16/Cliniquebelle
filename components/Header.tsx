import Image from "next/image";
import { mainNav, type NavKey } from "@/content/navigation";
import { routes, hrefFor } from "@/lib/routes";
import { site } from "@/lib/site";
import AppLink from "./AppLink";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

type Props = { current?: NavKey };

/** Two tiers (as in the Renewal template): brand + contact details on top, a coloured sticky nav bar below. */
export default function Header({ current }: Props) {
  const contactHref = hrefFor(routes.contact);
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={`wrap ${styles.topInner}`}>
          <AppLink href="/" className={styles.brand}>
            <Image
              src={site.logo.src}
              width={site.logo.width}
              height={site.logo.height}
              alt="Clinique Belle — Advanced Plastic & Cosmetic Surgery"
              className={styles.logo}
              priority
              unoptimized
            />
          </AppLink>

          <ul className={styles.facts}>
            <li>
              <span className={styles.factLabel}>Call now</span>
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <span className={styles.factLabel}>Visit us</span>
              <span>{site.area}</span>
            </li>
          </ul>

          <div className={styles.right}>
            <AppLink href={contactHref} className={styles.cta} aria-label="Book a consultation">
              <span className={styles.ctaLong}>Book a consultation</span>
              <span className={styles.ctaShort} aria-hidden="true">
                Book
              </span>
            </AppLink>
            <MobileMenu items={mainNav.map(({ key, label, href }) => ({ key, label, href }))} current={current} phoneHref={site.phone.href} phone={site.phone.display} />
          </div>
        </div>
      </div>

      <nav className={styles.bar} aria-label="Main">
        <ul className={`wrap ${styles.links}`}>
          {mainNav.map((item) => (
            <li key={item.key}>
              <AppLink href={item.href} aria-current={current === item.key ? "page" : undefined}>
                {item.label}
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
