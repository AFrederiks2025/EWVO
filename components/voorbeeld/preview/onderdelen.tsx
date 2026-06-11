import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Compacte mini-weergaven per onderdeel — puur ter illustratie op de index. */

const Logo = () => (
  <div className="flex items-center gap-1">
    <div className="h-4 w-4 rounded bg-brand" />
    <span className="text-[11px] font-bold">Merk</span>
  </div>
);
const Nav = () => (
  <div className="flex gap-2 text-[9px] text-muted-foreground">
    <span>Diensten</span>
    <span>Werk</span>
    <span>Over</span>
  </div>
);
const Btn = ({ children, white = false }: { children: ReactNode; white?: boolean }) => (
  <span
    className={cn(
      "rounded-full px-2.5 py-1 text-[9px] font-medium",
      white ? "bg-white text-brand shadow-sm" : "bg-brand text-white",
    )}
  >
    {children}
  </span>
);
const Line = ({ w = "w-full", c = "bg-muted-foreground/20" }: { w?: string; c?: string }) => (
  <div className={cn("h-1.5 rounded", w, c)} />
);
const Img = ({ className }: { className?: string }) => (
  <div className={cn("rounded-md bg-gradient-to-br from-accent/40 to-brand/25", className)} />
);
const Stars = () => (
  <div className="flex gap-0.5 text-brand">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-2.5 w-2.5 fill-current" />
    ))}
  </div>
);

export const onderdeelPreviews: Record<string, () => ReactNode> = {
  header: () => (
    <div className="w-72 rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between px-3 py-2">
        <Logo />
        <Nav />
        <Btn>Contact</Btn>
      </div>
    </div>
  ),
  navigatie: () => (
    <div className="w-64 space-y-1.5">
      <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 text-[10px]">
        <Logo />
        <span className="flex items-center gap-0.5 font-medium text-brand">
          Diensten <ChevronDown className="h-2.5 w-2.5" />
        </span>
        <span className="text-muted-foreground">Contact</span>
      </div>
      <div className="ml-6 w-32 space-y-1 rounded-lg border border-border bg-card p-1.5 shadow-sm">
        {["Webdesign", "SEO", "Hosting"].map((x) => (
          <div key={x} className="rounded px-1.5 py-0.5 text-[9px] text-muted-foreground">
            {x}
          </div>
        ))}
      </div>
    </div>
  ),
  hero: () => (
    <div className="w-72 rounded-lg border border-border bg-card p-4 text-center">
      <span className="inline-block rounded-full bg-brand-muted px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-brand">
        Digitaal bureau
      </span>
      <p className="mx-auto mt-2 max-w-[180px] text-sm font-semibold leading-tight">
        Online <span className="text-brand">sterk</span> neergezet
      </p>
      <div className="mt-2.5 flex justify-center gap-1.5">
        <Btn>Aan de slag</Btn>
      </div>
    </div>
  ),
  footer: () => (
    <div className="w-72 rounded-lg border border-border bg-card p-3">
      <Logo />
      <div className="mt-2.5 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((c) => (
          <div key={c} className="space-y-1">
            <Line w="w-8" c="bg-foreground/30" />
            <Line w="w-12" />
            <Line w="w-10" />
          </div>
        ))}
      </div>
    </div>
  ),
  cta: () => (
    <div className="flex w-72 flex-col items-center rounded-lg bg-gradient-to-br from-brand to-[#ff8533] p-4 text-center">
      <p className="text-sm font-semibold text-white">Klaar om te groeien?</p>
      <div className="mt-2">
        <Btn white>Plan een gesprek</Btn>
      </div>
    </div>
  ),
  contact: () => (
    <div className="w-60 space-y-1.5 rounded-lg border border-border bg-card p-3">
      <p className="text-[10px] font-semibold">Neem contact op</p>
      <div className="h-5 rounded border border-border bg-background" />
      <div className="h-5 rounded border border-border bg-background" />
      <div className="h-9 rounded border border-border bg-background" />
      <div className="flex justify-end">
        <Btn>Versturen</Btn>
      </div>
    </div>
  ),
  reviews: () => (
    <div className="flex w-72 gap-2">
      {[0, 1].map((i) => (
        <div key={i} className="flex-1 space-y-1.5 rounded-lg border border-border bg-card p-3">
          <Stars />
          <Line />
          <Line w="w-2/3" />
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="h-4 w-4 rounded-full bg-accent" />
            <Line w="w-10" c="bg-foreground/30" />
          </div>
        </div>
      ))}
    </div>
  ),
  prijzen: () => (
    <div className="flex w-72 gap-2">
      {["Start", "Pro", "Max"].map((p, i) => (
        <div
          key={p}
          className={cn(
            "flex-1 rounded-lg border bg-card p-2.5 text-center",
            i === 1 ? "border-brand" : "border-border",
          )}
        >
          <p className="text-[9px] font-semibold">{p}</p>
          <p className="mt-0.5 text-sm font-bold text-brand">€{(i + 1) * 9}</p>
          <div className="mt-1.5 space-y-1">
            <Line w="w-full" />
            <Line w="w-2/3 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  ),
  faq: () => (
    <div className="w-64 space-y-1.5">
      {["Wat kost een website?", "Hoe lang duurt het?", "Krijg ik support?"].map((q, i) => (
        <div
          key={q}
          className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2"
        >
          <span className="text-[10px] font-medium">{q}</span>
          <ChevronDown
            className={cn("h-3 w-3 text-muted-foreground", i === 0 && "rotate-180 text-brand")}
          />
        </div>
      ))}
    </div>
  ),
  portfolio: () => (
    <div className="flex w-72 gap-2">
      {[0, 1].map((i) => (
        <div key={i} className="flex-1 overflow-hidden rounded-lg border border-border bg-card">
          <Img className="h-14 w-full rounded-none" />
          <div className="space-y-1 p-2">
            <Line w="w-14" c="bg-foreground/30" />
            <Line w="w-full" />
          </div>
        </div>
      ))}
    </div>
  ),
  diensten: () => (
    <div className="grid w-72 grid-cols-3 gap-2">
      {["Webdesign", "SEO", "Hosting"].map((d) => (
        <div key={d} className="space-y-1.5 rounded-lg border border-border bg-card p-2.5">
          <div className="h-5 w-5 rounded-md bg-brand-muted" />
          <p className="text-[9px] font-semibold">{d}</p>
          <Line w="w-full" />
        </div>
      ))}
    </div>
  ),
  team: () => (
    <div className="flex w-72 justify-center gap-3">
      {["bg-brand/70", "bg-accent", "bg-brand"].map((c, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div className={cn("h-10 w-10 rounded-2xl", c)} />
          <Line w="w-8" c="bg-foreground/30" />
          <Line w="w-6" />
        </div>
      ))}
    </div>
  ),
  carousel: () => (
    <div className="w-72">
      <div className="relative overflow-hidden rounded-lg">
        <Img className="h-24 w-full" />
        <span className="absolute left-1 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow">
          <ArrowLeft className="h-3 w-3" />
        </span>
        <span className="absolute right-1 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-foreground shadow">
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
      <div className="mt-1.5 flex justify-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn("h-1.5 rounded-full", i === 0 ? "w-4 bg-brand" : "w-1.5 bg-muted-foreground/30")}
          />
        ))}
      </div>
    </div>
  ),
  blog: () => (
    <div className="flex w-72 gap-2">
      {[0, 1].map((i) => (
        <div key={i} className="flex-1 overflow-hidden rounded-lg border border-border bg-card">
          <Img className="h-12 w-full rounded-none" />
          <div className="space-y-1 p-2">
            <Line w="w-8" />
            <Line w="w-full" c="bg-foreground/30" />
            <Line w="w-2/3" c="bg-foreground/30" />
          </div>
        </div>
      ))}
    </div>
  ),
  breadcrumbs: () => (
    <div className="flex w-64 items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2.5 text-[10px] text-muted-foreground">
      <span>Home</span>
      <ChevronRight className="h-2.5 w-2.5" />
      <span>Diensten</span>
      <ChevronRight className="h-2.5 w-2.5" />
      <span className="font-medium text-brand">Webdesign</span>
    </div>
  ),
  cookiebanner: () => (
    <div className="flex w-72 items-center gap-2 rounded-lg border border-border bg-card p-3 shadow-sm">
      <div className="flex-1 space-y-1">
        <Line w="w-full" />
        <Line w="w-2/3" />
      </div>
      <span className="rounded-full border border-border px-2 py-0.5 text-[8px]">Weiger</span>
      <Btn>Accepteer</Btn>
    </div>
  ),
  popup: () => (
    <div className="relative flex w-72 items-center justify-center rounded-lg bg-foreground/20 p-5">
      <div className="w-44 rounded-lg border border-border bg-card p-3 text-center shadow-xl">
        <X className="ml-auto h-3 w-3 text-muted-foreground" />
        <p className="mt-1 text-[10px] font-semibold">Mis niets!</p>
        <Line w="w-full mt-1.5" />
        <div className="mt-2 flex justify-center">
          <Btn>Aanmelden</Btn>
        </div>
      </div>
    </div>
  ),
  buttons: () => (
    <div className="flex w-64 flex-wrap items-center justify-center gap-2">
      <span className="rounded-full bg-brand px-3 py-1.5 text-[10px] font-medium text-white">Primair</span>
      <span className="rounded-full border border-border px-3 py-1.5 text-[10px] font-medium">Outline</span>
      <span className="px-3 py-1.5 text-[10px] font-medium text-brand">Ghost ›</span>
    </div>
  ),
  cards: () => (
    <div className="flex w-72 gap-2">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex-1 space-y-1.5 rounded-lg border border-border bg-card p-2.5 shadow-sm">
          <div className="h-5 w-5 rounded-md bg-brand-muted" />
          <Line w="w-12" c="bg-foreground/30" />
          <Line w="w-full" />
          <Line w="w-2/3" />
        </div>
      ))}
    </div>
  ),
  tabs: () => (
    <div className="w-64 rounded-lg border border-border bg-card p-2.5">
      <div className="flex gap-3 border-b border-border pb-1.5 text-[10px]">
        <span className="border-b-2 border-brand pb-1 font-semibold text-brand">Overzicht</span>
        <span className="text-muted-foreground">Details</span>
        <span className="text-muted-foreground">Reviews</span>
      </div>
      <div className="mt-2 space-y-1">
        <Line w="w-full" />
        <Line w="w-3/4" />
      </div>
    </div>
  ),
  paginering: () => (
    <div className="flex w-64 items-center justify-center gap-1.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border text-muted-foreground">
        <ArrowLeft className="h-3 w-3" />
      </span>
      {["1", "2", "3"].map((n, i) => (
        <span
          key={n}
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-medium",
            i === 0 ? "bg-brand text-white" : "border border-border",
          )}
        >
          {n}
        </span>
      ))}
      <span className="text-[10px] text-muted-foreground">…</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-border text-muted-foreground">
        <ArrowRight className="h-3 w-3" />
      </span>
    </div>
  ),
  statistieken: () => (
    <div className="flex w-72 justify-center gap-5 rounded-lg border border-border bg-card p-3 text-center">
      {[["13+", "jaar"], ["200+", "klanten"], ["8", "experts"]].map(([v, l]) => (
        <div key={l}>
          <p className="text-xl font-bold text-brand">{v}</p>
          <p className="text-[9px] text-muted-foreground">{l}</p>
        </div>
      ))}
    </div>
  ),
  logobalk: () => (
    <div className="flex w-72 items-center justify-center gap-4 rounded-lg border border-border bg-card px-3 py-4">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-1 text-muted-foreground/70">
          <span
            className={cn(
              "h-3 w-3 bg-muted-foreground/40",
              i % 2 === 0 ? "rounded-full" : "rounded-sm",
            )}
          />
          <Line w="w-7" c="bg-muted-foreground/30" />
        </div>
      ))}
    </div>
  ),
};
