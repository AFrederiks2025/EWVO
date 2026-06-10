"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Component,
  FileText,
  LayoutPanelTop,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { voorbeelden, voorbeeldGroepen } from "@/lib/voorbeelden";

const groepIcoon: Record<string, typeof LayoutPanelTop> = {
  Structuur: LayoutPanelTop,
  "Boven de vouw": Sparkles,
  "Pagina's & content": FileText,
  Componenten: Component,
};
const groepSub: Record<string, string> = {
  Structuur: "Opbouw & navigatie.",
  "Boven de vouw": "De eerste indruk.",
  "Pagina's & content": "Volledige secties.",
  Componenten: "Losse UI-elementen.",
};

const groups = voorbeeldGroepen.map((g) => ({
  icon: groepIcoon[g],
  label: g,
  sub: groepSub[g],
  items: voorbeelden
    .filter((v) => v.group === g)
    .map((v) => ({ name: v.title, href: `https://${v.slug}.ewvo.nl` })),
}));

export function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="https://voorbeeld.ewvo.nl" className="flex items-center gap-2 font-semibold">
          <Logo className="h-8 w-8 rounded-lg" />
          <span>EWVO</span>
        </a>

        {/* Navigatie */}
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-6">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="flex items-center gap-1 rounded-md px-2 py-1.5 text-foreground transition-colors hover:text-brand"
            >
              Onderdelen
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>

            {open && (
              <div className="absolute left-0 top-full z-50 pt-3 max-sm:fixed max-sm:inset-0 max-sm:z-[60] max-sm:pt-0">
                <div className="relative w-[680px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card p-6 shadow-xl max-sm:flex max-sm:h-full max-sm:w-full max-sm:max-w-none max-sm:flex-col max-sm:overflow-y-auto max-sm:rounded-none">
                  {/* Sluitknop (mobiel) */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Menu sluiten"
                    className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground sm:hidden"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="border-b border-border pb-4 pr-8 sm:pr-0">
                    <h3 className="text-base font-semibold text-foreground">
                      Bekijk onze voorbeelden
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Klik door naar een voorbeeld van elk onderdeel.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-x-10 gap-y-6 py-5 sm:grid-cols-2">
                    {groups.map((group) => (
                      <div key={group.label}>
                        <div className="flex items-center gap-2">
                          <group.icon className="h-4 w-4 text-brand" />
                          <span className="text-xs font-bold uppercase tracking-wider text-brand">
                            {group.label}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {group.sub}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className="group/item -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-muted"
                              >
                                <span className="flex items-center gap-2.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                                  <span className="text-sm text-foreground">
                                    {item.name}
                                  </span>
                                </span>
                                <ChevronRight className="h-4 w-4 text-muted-foreground/40 transition-colors group-hover/item:text-brand" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://voorbeeld.ewvo.nl"
                    className="flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-foreground/80 transition-colors hover:text-brand max-sm:mt-auto"
                  >
                    Alle onderdelen op een rij
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="https://portfolio.ewvo.nl" className="hidden px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground md:block">
            Portfolio
          </a>
          <a href="https://blog.ewvo.nl" className="hidden px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground md:block">
            Blog
          </a>
          <a href="https://team.ewvo.nl" className="hidden px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground md:block">
            Team
          </a>
        </nav>

        {/* Thema-knop + CTA */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="https://contact.ewvo.nl"
            className="rounded-full bg-brand px-3 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90 sm:px-4"
          >
            Plan een gesprek
          </a>
        </div>
      </div>
    </div>
  );
}
