/**
 * EWVO-beeldmerk ("w.") — wit op de huisstijlkleur #91b3bf.
 * SVG-recreatie van het aangeleverde logo; vervangbaar door het exacte
 * bestand zodra dat in de repo staat (zie /public).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="EWVO"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="24" fill="#91b3bf" />
      <g
        fill="none"
        stroke="#ffffff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 37 L36 73 L50 49 L64 73 L76 35" />
        <path d="M76 35 C 80 13, 91 10, 86 26" />
      </g>
      <circle cx="83" cy="71" r="5.5" fill="#ffffff" />
    </svg>
  );
}
