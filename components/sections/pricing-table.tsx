import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/lib/content/pricing";
import { ButtonLink } from "@/components/ui/button";
import { Stagger } from "@/components/motion/stagger";

export function PricingTable() {
  return (
    <Stagger className="grid gap-6 lg:grid-cols-4">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "flex flex-col rounded-2xl border bg-card p-6",
            tier.highlight
              ? "border-brand ring-1 ring-brand"
              : "border-border",
          )}
        >
          {tier.highlight ? (
            <span className="mb-2 self-start rounded-full bg-brand px-2.5 py-1 text-xs font-medium text-brand-foreground">
              Meest gekozen
            </span>
          ) : null}
          <h3 className="text-lg font-semibold">{tier.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{tier.forWho}</p>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-semibold tracking-tight">
              {tier.price}
            </span>
            {tier.priceNote ? (
              <span className="text-sm text-muted-foreground">
                {tier.priceNote}
              </span>
            ) : null}
          </div>
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={tier.cta.href}
            variant={tier.highlight ? "primary" : "outline"}
            className="mt-6 w-full"
          >
            {tier.cta.label}
          </ButtonLink>
        </div>
      ))}
    </Stagger>
  );
}
