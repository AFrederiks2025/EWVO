"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Cpu,
  Monitor,
  Palette,
  TrendingUp,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";

type Item = { name: string; badge?: string };
type Group = {
  icon: typeof Monitor;
  label: string;
  sub: string;
  items: Item[];
};

const groups: Group[] = [
  {
    icon: Monitor,
    label: "Websites & webshops",
    sub: "Online sterk staan.",
    items: [
      { name: "Webdesign" },
      { name: "Webshops", badge: "Populair" },
      { name: "Landingspagina's" },
    ],
  },
  {
    icon: TrendingUp,
    label: "Strategie & groei",
    sub: "Naar een hoger niveau.",
    items: [
      { name: "Digitale strategie" },
      { name: "SEO & vindbaarheid" },
      { name: "Marketing & data" },
    ],
  },
  {
    icon: Palette,
    label: "Merk & content",
    sub: "Een merk dat blijft hangen.",
    items: [
      { name: "Branding & huisstijl" },
      { name: "Content & copy" },
      { name: "Video & fotografie" },
    ],
  },
  {
    icon: Cpu,
    label: "Techniek & AI",
    sub: "Zorgeloos online.",
    items: [
      { name: "Hosting & onderhoud" },
      { name: "AI-oplossingen", badge: "Nieuw" },
      { name: "Support" },
    ],
  },
];

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
              Wat we doen
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>

            {open && (
              <div className="absolute left-0 top-full z-50 pt-3 max-sm:fixed max-sm:inset-0 max-sm:z-[60] max-sm:pt-0">
                <div className="relative w-[680px] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-[#0b0f12] p-6 shadow-2xl max-sm:flex max-sm:h-full max-sm:w-full max-sm:max-w-none max-sm:flex-col max-sm:overflow-y-auto max-sm:rounded-none">
                  {/* Sluitknop (mobiel) */}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Menu sluiten"
                    className="absolute right-4 top-4 text-white/60 transition-colors hover:text-white sm:hidden"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="border-b border-white/10 pb-4 pr-8 sm:pr-0">
                    <h3 className="text-base font-semibold text-white">
                      Wat kunnen we voor je doen?
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      Kies een dienst en ontdek wat bij jou past.
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
                        <p className="mt-1 text-xs text-white/50">{group.sub}</p>
                        <ul className="mt-3 space-y-1">
                          {group.items.map((item) => (
                            <li key={item.name}>
                              <a
                                href="#"
                                className="group/item -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
                              >
                                <span className="flex items-center gap-2.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                                  <span className="text-sm text-white/90">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="rounded-full bg-brand px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                                      {item.badge}
                                    </span>
                                  )}
                                </span>
                                <ChevronRight className="h-4 w-4 text-white/25 transition-colors group-hover/item:text-white/60" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="flex items-center gap-1.5 border-t border-white/10 pt-4 text-sm font-medium text-white/80 transition-colors hover:text-white max-sm:mt-auto"
                  >
                    Bekijk alle diensten
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hidden px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground md:block">
            Portfolio
          </a>
          <a href="#" className="hidden px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground md:block">
            Blog
          </a>
          <a href="#" className="hidden px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground md:block">
            Over ons
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#"
          className="shrink-0 rounded-full bg-brand px-3 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90 sm:px-4"
        >
          Plan een gesprek
        </a>
      </div>
    </div>
  );
}
