import type { IconName } from "@/content/home";

/** Simple line icons for the four category tiles. Decorative. */
export default function Icon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" focusable="false" {...common}>
      {name === "face" && (
        <>
          <path d="M14 20c0-7 4-12 10-12s10 5 10 12c0 9-4 17-10 17s-10-8-10-17Z" />
          <path d="M20 22h.01M28 22h.01M21 30c1.8 1.6 4.2 1.6 6 0" />
        </>
      )}
      {name === "body" && (
        <>
          <path d="M18 8c0 5 2 7 6 7s6-2 6-7M18 15c-3 3-4 10-3 16l2 9M30 15c3 3 4 10 3 16l-2 9" />
          <path d="M20 26c2 1.5 6 1.5 8 0" />
        </>
      )}
      {name === "breast" && (
        <>
          <path d="M8 18c4-4 10-4 16 0 6-4 12-4 16 0M10 20c-1 8 3 15 10 15 5 0 7-4 4-8M38 20c1 8-3 15-10 15-5 0-7-4-4-8" />
          <circle cx="16" cy="28" r="1.2" />
          <circle cx="32" cy="28" r="1.2" />
        </>
      )}
      {name === "hair" && (
        <>
          <path d="M10 26c0-9 6-16 14-16s14 7 14 16" />
          <path d="M14 26c0 6 4 12 10 12s10-6 10-12M18 14c1 5 0 9-3 12M24 11c1 6 1 11-1 15M30 14c0 5 1 9 3 12" />
        </>
      )}
    </svg>
  );
}
