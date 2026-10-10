import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  /** Open in a new tab (only used for off-site links such as YouTube). */
  newTab?: boolean;
};

/** Internal paths use next/link; everything else (tel:, https://) is a plain anchor. */
export default function AppLink({ href, children, newTab, ...rest }: Props) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  const extra = newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} {...extra} {...rest}>
      {children}
    </a>
  );
}
