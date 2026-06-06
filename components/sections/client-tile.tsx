import Link from "next/link";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";
import type { CaseStudy } from "@/lib/content/cases";

/** Initialen als merk-placeholder zolang er geen beeld is. */
function initials(name: string) {
  const words = name
    .replace(/[^\p{L}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

/**
 * Klant-tegel voor de filterbare portfolio-galerij op /werk.
 * Toont bij voorkeur de samengestelde EWVO-card (bevat al naam, sector,
 * screenshot en CTA). Anders de website-screenshot met naam/sector-overlay,
 * en als laatste terugval een merk-gradiënt met initialen.
 */
export function ClientTile({
  client,
  index = 0,
}: {
  client: CaseStudy;
  index?: number;
}) {
  return (
    <Link
      href={`/werk/${client.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-brand/50 hover:shadow-sm"
    >
      <div className="relative aspect-[3/2]">
        {client.card ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.card}
              alt={`EWVO-case: ${client.client}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </>
        ) : client.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.image}
              alt={`Website van ${client.client}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-white">
                {client.client}
              </span>
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
                {client.sector}
              </span>
            </div>
          </>
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-linear-to-br text-2xl font-bold text-white",
              brandGradients[index % brandGradients.length],
            )}
            aria-hidden
          >
            {initials(client.client)}
          </div>
        )}
      </div>
    </Link>
  );
}
