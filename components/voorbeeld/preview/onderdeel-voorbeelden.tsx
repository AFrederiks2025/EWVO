import type { ReactNode } from "react";
import { secties } from "@/components/voorbeeld/preview/sections";
import { onderdeelPreviews } from "@/components/voorbeeld/preview/onderdelen";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <div className="overflow-x-auto bg-background">{children}</div>
    </div>
  );
}

/** Toont de beschikbare voorbeelden/varianten van een onderdeel. */
export function OnderdeelVoorbeelden({ slug }: { slug: string }) {
  const sectie = secties.find((s) => s.id === slug);

  if (sectie) {
    return (
      <div className="space-y-8">
        {sectie.varianten.map((naam, v) => (
          <div key={v}>
            <p className="mb-2 flex items-center gap-2 text-sm font-medium">
              <span className="rounded-full bg-brand-muted px-2 py-0.5 text-xs font-semibold text-brand">
                Variant {v + 1}
              </span>
              {naam}
            </p>
            <Frame>
              <sectie.Render variant={v} />
            </Frame>
          </div>
        ))}
      </div>
    );
  }

  const preview = onderdeelPreviews[slug];
  if (!preview) return null;

  return (
    <div>
      <Frame>
        <div className="flex items-center justify-center p-10">{preview()}</div>
      </Frame>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Meer varianten van dit onderdeel volgen binnenkort.
      </p>
    </div>
  );
}
