/**
 * EWVO-beeldmerk ("w.") — het officiële logo uit public/logo.png.
 * Vierkant beeld met de huisstijlkleur als achtergrond; geef via className
 * de gewenste maat + afronding mee (bijv. "h-8 w-8 rounded-lg").
 */
export function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="EWVO"
      width={32}
      height={32}
      className={className}
    />
  );
}
