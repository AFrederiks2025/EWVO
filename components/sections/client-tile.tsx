import Link from "next/link";
import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";
import type { CaseStudy } from "@/lib/content/cases";

/** Initialen als merk-placeholder zolang er geen screenshot is. */
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
 * Klant-tegel voor de filterbare logowall op /werk.
 * Toont de echte website-screenshot; valt terug op een merk-gradiënt met
 * initialen voor cases zonder beeld.
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
      className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-brand/50"
    >
      <div className="relative aspect-[16/10]">
        {client.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.image}
              alt={`Website van ${client.client}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
          </>
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-linear-to-br text-lg font-bold text-white",
              brandGradients[index % brandGradients.length],
            )}
            aria-hidden
          >
            {initials(client.client)}
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <p className="text-sm font-medium leading-tight transition-colors group-hover:text-brand">
          {client.client}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{client.sector}</p>
      </div>
    </Link>
  );
}
