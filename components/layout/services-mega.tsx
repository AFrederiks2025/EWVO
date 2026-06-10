import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clapperboard,
  Code,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/content/services";

const icons: Record<string, typeof Compass> = {
  Compass,
  Code,
  Sparkles,
  ShieldCheck,
  Clapperboard,
};

/** Licht mega-paneel met de 5 dienstpijlers — voor het hoofdmenu. */
export function ServicesMega() {
  return (
    <div className="w-[560px] max-w-[calc(100vw-1.5rem)] rounded-2xl border border-border bg-card p-6 shadow-xl">
      <div className="border-b border-border pb-4">
        <h3 className="text-base font-semibold">Wat we voor je doen</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Vijf pijlers, onder één dak.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 py-5 sm:grid-cols-2">
        {services.map((s) => {
          const Icon = icons[s.icon] ?? Compass;
          return (
            <div key={s.slug}>
              <Link
                href={`/diensten/${s.slug}`}
                className="flex items-center gap-2 text-brand"
              >
                <Icon className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider hover:underline">
                  {s.title}
                </span>
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">{s.tagline}</p>
              <ul className="mt-3 space-y-1">
                {s.features.slice(0, 3).map((f) => (
                  <li key={f}>
                    <Link
                      href={`/diensten/${s.slug}`}
                      className="group/item -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-muted"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <span className="text-sm text-foreground">{f}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground/40 transition-colors group-hover/item:text-brand" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <Link
        href="/diensten"
        className="flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
      >
        Bekijk alle diensten
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
