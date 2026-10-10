/** Decorative abstract illustrations from the About Us design. Hidden from screen readers. */
export default function SpecArt({ kind }: { kind: "circle" | "peaks" | "strands" }) {
  return (
    <svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="100%" height="100%">
      <rect width="300" height="190" fill="#F1DEEE" />
      {kind === "circle" && (
        <>
          <circle cx="150" cy="95" r="70" fill="#8A3D82" opacity="0.85" />
          <circle cx="150" cy="95" r="40" fill="#D9AAD3" opacity="0.7" />
        </>
      )}
      {kind === "peaks" && (
        <>
          <path d="M60 140 L120 60 L170 110 L220 50 L250 140 Z" fill="#3D1636" opacity="0.85" />
          <circle cx="120" cy="60" r="10" fill="#B08D57" />
        </>
      )}
      {kind === "strands" && (
        <g stroke="#6B2A66" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M110 150 C100 90 110 60 130 40" />
          <path d="M140 155 C130 95 140 55 160 30" />
          <path d="M170 155 C165 100 175 60 195 38" />
        </g>
      )}
    </svg>
  );
}
