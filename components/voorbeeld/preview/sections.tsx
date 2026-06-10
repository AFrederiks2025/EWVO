import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Mini bouwstenen voor de voorbeeld-secties (placeholder-stijl). */
const Merk = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-1.5">
    <div className="h-5 w-5 rounded bg-brand" />
    <span className={cn("text-sm font-bold", light && "text-white")}>Merk</span>
  </div>
);
const NavItems = ({ light = false }: { light?: boolean }) => (
  <div
    className={cn(
      "flex gap-4 text-xs font-medium",
      light ? "text-white/80" : "text-muted-foreground",
    )}
  >
    <span>Diensten</span>
    <span>Werk</span>
    <span>Over ons</span>
    <span>Contact</span>
  </div>
);
const Btn = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
    {children}
  </span>
);
const Logo = ({ light = false }: { light?: boolean }) => (
  <div className={cn("h-5 w-16 rounded", light ? "bg-white/20" : "bg-muted-foreground/20")} />
);

/* ---------------------------------- Header --------------------------------- */
function Header({ variant }: { variant: number }) {
  const base = "flex items-center px-8 py-4";
  switch (variant) {
    case 1:
      return (
        <div className={cn(base, "justify-center gap-10 border-b border-border bg-card")}>
          <NavItems />
          <Merk />
          <NavItems />
        </div>
      );
    case 2:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <Merk />
          <div className="flex items-center gap-6">
            <NavItems />
            <Btn>Plan een gesprek</Btn>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={cn(base, "justify-between bg-[#0e1a20]")}>
          <Merk light />
          <NavItems light />
        </div>
      );
    case 4:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <Merk />
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
            <span className="h-0.5 w-5 bg-foreground" />
          </div>
        </div>
      );
    default:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <Merk />
          <NavItems />
        </div>
      );
  }
}

/* ----------------------------------- Hero ---------------------------------- */
function Hero({ variant }: { variant: number }) {
  switch (variant) {
    case 1:
      return (
        <div className="grid grid-cols-2 items-center gap-8 bg-background px-10 py-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Jouw verhaal, online sterk neergezet</h2>
            <p className="mt-3 text-sm text-muted-foreground">Een website die meegroeit met je bedrijf.</p>
            <div className="mt-5 flex gap-2"><Btn>Aan de slag</Btn></div>
          </div>
          <div className="aspect-[4/3] rounded-xl bg-muted" />
        </div>
      );
    case 2:
      return (
        <div className="relative flex min-h-[260px] flex-col items-center justify-center bg-[#0e1a20] px-10 py-16 text-center">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-white">Digitale groei begint hier</h2>
          <p className="mt-3 text-sm text-white/70">Strategie, design en techniek onder één dak.</p>
          <div className="mt-5"><Btn>Start nu</Btn></div>
        </div>
      );
    case 3:
      return (
        <div className="bg-background px-10 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight">Eén partner voor je hele online aanwezigheid</h2>
          <div className="mt-6"><Btn>Plan een gesprek</Btn></div>
        </div>
      );
    case 4:
      return (
        <div className="grid grid-cols-2 items-center gap-8 bg-muted/40 px-10 py-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">Digitaal bureau</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Meer aanvragen uit je website</h2>
            <div className="mt-5"><Btn>Bekijk ons werk</Btn></div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-3xl font-bold text-brand">+40%</div>
            <p className="mt-1 text-xs text-muted-foreground">meer aanvragen na de revisie</p>
          </div>
        </div>
      );
    default:
      return (
        <div className="brand-glow flex flex-col items-center bg-background px-10 py-16 text-center">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight">
            Digitale ecosystemen die <span className="text-brand">meegroeien</span>
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">Van strategie tot beheer — onder één dak.</p>
          <div className="mt-5 flex gap-2"><Btn>Plan een gesprek</Btn></div>
        </div>
      );
  }
}

/* --------------------------------- Logobalk -------------------------------- */
function Logobalk({ variant }: { variant: number }) {
  const logos = (light = false) => (
    <div className="flex items-center justify-center gap-8">
      {Array.from({ length: 5 }).map((_, i) => <Logo key={i} light={light} />)}
    </div>
  );
  switch (variant) {
    case 1:
      return (
        <div className="bg-background px-10 py-8">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Vertrouwd door</p>
          {logos()}
        </div>
      );
    case 2:
      return (
        <div className="bg-background px-10 py-8">
          <div className="rounded-2xl border border-border bg-card px-6 py-6">{logos()}</div>
        </div>
      );
    case 3:
      return <div className="bg-[#0e1a20] px-10 py-8">{logos(true)}</div>;
    case 4:
      return (
        <div className="grid grid-cols-4 gap-4 bg-muted/40 px-10 py-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center rounded-lg border border-border bg-card py-4"><Logo /></div>
          ))}
        </div>
      );
    default:
      return <div className="bg-muted/40 px-10 py-8">{logos()}</div>;
  }
}

/* ----------------------------------- CTA ----------------------------------- */
function Cta({ variant }: { variant: number }) {
  switch (variant) {
    case 1:
      return (
        <div className="bg-background px-10 py-12">
          <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-8 py-10 text-center">
            <h3 className="text-2xl font-semibold">Klaar om te groeien?</h3>
            <div className="mt-5"><Btn>Plan een gesprek</Btn></div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="flex items-center justify-between bg-muted/40 px-12 py-12">
          <h3 className="max-w-md text-2xl font-semibold">Benieuwd wat we voor jou kunnen doen?</h3>
          <Btn>Neem contact op</Btn>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col items-center bg-[#0e1a20] px-10 py-12 text-center">
          <h3 className="text-2xl font-semibold text-white">Zet vandaag de eerste stap</h3>
          <div className="mt-5"><Btn>Start nu</Btn></div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-col items-center bg-background px-10 py-12 text-center">
          <h3 className="text-2xl font-semibold">Blijf op de hoogte</h3>
          <div className="mt-5 flex gap-2">
            <span className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">jouw@email.nl</span>
            <Btn>Aanmelden</Btn>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-col items-center bg-brand px-10 py-14 text-center">
          <h3 className="text-2xl font-semibold text-white">Samen jouw online groei aanpakken?</h3>
          <span className="mt-5 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-brand">Plan een gesprek</span>
        </div>
      );
  }
}

/* ---------------------------------- Footer --------------------------------- */
function Footer({ variant }: { variant: number }) {
  const cols = (light = false) => (
    <div className="grid grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, c) => (
        <div key={c} className="space-y-2">
          <div className={cn("h-2 w-12 rounded", light ? "bg-white/30" : "bg-muted-foreground/30")} />
          {Array.from({ length: 3 }).map((_, r) => (
            <div key={r} className={cn("h-1.5 w-16 rounded", light ? "bg-white/15" : "bg-muted-foreground/15")} />
          ))}
        </div>
      ))}
    </div>
  );
  switch (variant) {
    case 1:
      return (
        <div className="flex flex-col items-center gap-2 border-t border-border bg-card px-10 py-8 text-center">
          <Merk />
          <NavItems />
          <span className="text-[10px] text-muted-foreground">© 2026 Merk</span>
        </div>
      );
    case 2:
      return (
        <div className="bg-[#0e1a20] px-10 py-10">
          <div className="mb-6 flex items-center justify-between">
            <Merk light />
            <NavItems light />
          </div>
          {cols(true)}
        </div>
      );
    case 3:
      return (
        <div className="border-t border-border bg-muted/40 px-10 py-10">
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-5">
            <span className="text-sm font-semibold">Schrijf je in voor de nieuwsbrief</span>
            <div className="flex gap-2">
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">jouw@email.nl</span>
              <Btn>Aanmelden</Btn>
            </div>
          </div>
          <div className="mt-8">{cols()}</div>
        </div>
      );
    case 4:
      return (
        <div className="flex items-center justify-between border-t border-border bg-card px-10 py-6">
          <Merk />
          <NavItems />
        </div>
      );
    default:
      return (
        <div className="border-t border-border bg-card px-10 py-10">
          <div className="mb-6"><Merk /></div>
          {cols()}
        </div>
      );
  }
}

export type Sectie = {
  id: string;
  label: string;
  varianten: string[];
  Render: (props: { variant: number }) => ReactNode;
};

export const secties: Sectie[] = [
  { id: "header", label: "Header", Render: Header, varianten: ["Logo links + nav", "Gecentreerd", "Met CTA-knop", "Donker", "Minimaal"] },
  { id: "hero", label: "Hero", Render: Hero, varianten: ["Gecentreerd", "Tekst + beeld", "Donker", "Groot statement", "Met cijfer"] },
  { id: "logobalk", label: "Logobalk", Render: Logobalk, varianten: ["Op grijs", "Met label", "In kader", "Donker", "Raster"] },
  { id: "cta", label: "Call-to-action", Render: Cta, varianten: ["Merk-band", "In kaart", "Naast elkaar", "Donker", "Met formulier"] },
  { id: "footer", label: "Footer", Render: Footer, varianten: ["Met kolommen", "Compact", "Donker", "Met nieuwsbrief", "Minimaal"] },
];
