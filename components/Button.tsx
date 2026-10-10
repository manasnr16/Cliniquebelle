import type { ReactNode } from "react";
import AppLink from "./AppLink";

type Props = {
  href: string;
  variant?: "primary" | "secondary" | "white";
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

/** The three button styles used across the design. Always a real link: nothing here is a fake action. */
export default function Button({ href, variant = "primary", children, ariaLabel, className = "" }: Props) {
  return (
    <AppLink href={href} aria-label={ariaLabel} className={`btn btn-${variant} ${className}`.trim()}>
      {children}
    </AppLink>
  );
}
