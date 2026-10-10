import Image from "next/image";
import { mainNav, type NavKey } from "@/content/navigation";
import { routes, hrefFor } from "@/lib/routes";
import { site } from "@/lib/site";
import AppLink from "./AppLink";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

type Props = { current?: NavKey };

export default function Header({ current }: Props) {
  const contactHref = hrefFor(routes.contact);
  return (
    <header className={styles.header}>
      <nav className={`wrap ${styles.nav}`} aria-label="Main">
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

        <ul className={styles.links}>
          {mainNav.map((item) => (
            <li key={item.key}>
              <AppLink href={item.href} aria-current={current === item.key ? "page" : undefined}>
                {item.label}
              </AppLink>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a href={site.phone.href} className={styles.phone}>
            Call <strong>{site.phone.display}</strong>
          </a>
          <AppLink href={contactHref} className={styles.cta} aria-label="Book a consultation">
            <span className={styles.ctaLong}>Book a consultation</span>
            <span className={styles.ctaShort} aria-hidden="true">
              Book
            </span>
          </AppLink>
          <MobileMenu items={mainNav.map(({ key, label, href }) => ({ key, label, href }))} current={current} phoneHref={site.phone.href} phone={site.phone.display} />
        </div>
      </nav>
    </header>
  );
}
