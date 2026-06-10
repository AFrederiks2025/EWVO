import type { ReactNode } from "react";
import { ArrowRight, Mail, Menu, Play, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------- Mini bouwstenen --------------------------- */
const Merk = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-2">
    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand text-[11px] font-bold text-white">
      M
    </div>
    <span className={cn("font-bold tracking-tight", light && "text-white")}>
      Merk
    </span>
  </div>
);

const NavItems = ({ light = false }: { light?: boolean }) => (
  <div
    className={cn(
      "flex gap-5 text-xs font-medium",
      light ? "text-white/75" : "text-muted-foreground",
    )}
  >
    <span className={light ? "text-white" : "text-foreground"}>Diensten</span>
    <span>Werk</span>
    <span>Over ons</span>
    <span>Contact</span>
  </div>
);

const Btn = ({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "white";
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium",
      variant === "primary" && "bg-brand text-white",
      variant === "ghost" && "border border-border text-foreground",
      variant === "white" && "bg-white text-brand shadow-sm",
    )}
  >
    {children}
  </span>
);

const merken = ["Acme", "Nova", "Vivid", "Orbit", "Peak", "Lumen", "Drift", "Forge"];
const ClientLogo = ({ i, light = false }: { i: number; light?: boolean }) => (
  <div
    className={cn(
      "flex items-center gap-1.5",
      light ? "text-white/70" : "text-muted-foreground/80",
    )}
  >
    <span
      className={cn(
        "h-4 w-4",
        light ? "bg-white/50" : "bg-muted-foreground/50",
        i % 3 === 0 && "rounded-full",
        i % 3 === 1 && "rounded-sm",
        i % 3 === 2 && "rotate-45 rounded-[3px]",
      )}
    />
    <span className="text-sm font-bold tracking-tight">
      {merken[i % merken.length]}
    </span>
  </div>
);

const Stars = () => (
  <div className="flex gap-0.5 text-brand">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3 w-3 fill-current" />
    ))}
  </div>
);

const Avatars = () => (
  <div className="flex -space-x-2">
    {["bg-brand/70", "bg-accent", "bg-brand", "bg-accent/70"].map((c, i) => (
      <span
        key={i}
        className={cn("h-6 w-6 rounded-full border-2 border-background", c)}
      />
    ))}
  </div>
);

const ImgBlock = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/45 via-accent/20 to-brand/25",
      className,
    )}
  >
    <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-brand shadow">
      <Play className="h-4 w-4 translate-x-px fill-current" />
    </span>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
    <div className="text-3xl font-bold tracking-tight text-brand">{value}</div>
    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
  </div>
);

/* ---------------------------------- Header --------------------------------- */
function Header({ variant }: { variant: number }) {
  const base = "flex items-center px-8 py-4";
  switch (variant) {
    case 1:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <NavItems />
          <Merk />
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-muted-foreground">Inloggen</span>
            <Btn>Aan de slag</Btn>
          </div>
        </div>
      );
    case 2:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <Merk />
          <div className="flex items-center gap-6">
            <NavItems />
            <span className="text-xs font-semibold text-foreground">085 - 123 4567</span>
            <Btn>Plan een gesprek</Btn>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={cn(base, "justify-between bg-[#0e1a20]")}>
          <Merk light />
          <div className="flex items-center gap-6">
            <NavItems light />
            <Btn>Gratis adviesgesprek</Btn>
          </div>
        </div>
      );
    case 4:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <Merk />
          <div className="flex items-center gap-4">
            <Btn variant="ghost">Contact</Btn>
            <Menu className="h-5 w-5 text-foreground" />
          </div>
        </div>
      );
    default:
      return (
        <div className={cn(base, "justify-between border-b border-border bg-card")}>
          <Merk />
          <NavItems />
          <Btn>Plan een gesprek</Btn>
        </div>
      );
  }
}

/* ----------------------------------- Hero ---------------------------------- */
function Hero({ variant }: { variant: number }) {
  switch (variant) {
    case 1:
      return (
        <div className="grid grid-cols-2 items-center gap-10 bg-background px-12 py-16">
          <div>
            <span className="inline-block rounded-full bg-brand-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
              Digitaal bureau
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
              Jouw verhaal, <span className="text-brand">online sterk</span> neergezet
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Een website die meegroeit met je bedrijf — van strategie tot beheer.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Btn>
                Aan de slag <ArrowRight className="h-3 w-3" />
              </Btn>
              <Btn variant="ghost">Bekijk werk</Btn>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Avatars />
              <div>
                <Stars />
                <p className="mt-0.5 text-[11px] text-muted-foreground">200+ tevreden ondernemers</p>
              </div>
            </div>
          </div>
          <ImgBlock className="aspect-[4/3]" />
        </div>
      );
    case 2:
      return (
        <div className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden bg-[#0e1a20] px-10 py-20 text-center">
          <div className="absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
          <span className="relative inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80">
            Voorheen Een Website van Ons
          </span>
          <h2 className="relative mt-5 max-w-lg text-4xl font-semibold tracking-tight text-white">
            Digitale groei begint <span className="text-brand">hier</span>
          </h2>
          <p className="relative mt-3 text-sm text-white/70">Strategie, design en techniek onder één dak.</p>
          <div className="relative mt-6 flex gap-3">
            <Btn>Start nu</Btn>
            <Btn variant="white">Onze diensten</Btn>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="brand-glow bg-background px-10 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight">
            Eén partner voor je <span className="text-brand">hele</span> online aanwezigheid
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            Strategie, webdesign, branding, SEO en hosting — zonder gedoe.
          </p>
          <div className="mt-7 flex justify-center gap-3">
            <Btn>
              Plan een gesprek <ArrowRight className="h-3 w-3" />
            </Btn>
            <Btn variant="ghost">Hoe we werken</Btn>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 opacity-80">
            {Array.from({ length: 4 }).map((_, i) => (
              <ClientLogo key={i} i={i} />
            ))}
          </div>
        </div>
      );
    case 4:
      return (
        <div className="grid grid-cols-[1.2fr_1fr] items-center gap-10 bg-muted/40 px-12 py-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Resultaat voorop
            </span>
            <h2 className="mt-2 text-4xl font-semibold leading-tight tracking-tight">
              Meer aanvragen uit je website
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We bouwen niet zomaar mooi — we bouwen om te groeien.
            </p>
            <div className="mt-6">
              <Btn>
                Bekijk ons werk <ArrowRight className="h-3 w-3" />
              </Btn>
            </div>
          </div>
          <div className="grid gap-4">
            <StatCard value="+40%" label="meer aanvragen na de revisie" />
            <StatCard value="200+" label="ondernemers geholpen" />
          </div>
        </div>
      );
    default:
      return (
        <div className="brand-glow flex flex-col items-center bg-background px-10 py-20 text-center">
          <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground">
            Voorheen Een Website van Ons
          </span>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight">
            Digitale ecosystemen die <span className="text-brand">meegroeien</span> met jouw bedrijf
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Van strategie tot beheer — onder één dak.
          </p>
          <div className="mt-6 flex gap-3">
            <Btn>
              Plan een gesprek <ArrowRight className="h-3 w-3" />
            </Btn>
            <Btn variant="ghost">Bekijk ons portfolio</Btn>
          </div>
        </div>
      );
  }
}

/* --------------------------------- Logobalk -------------------------------- */
function Logobalk({ variant }: { variant: number }) {
  const row = (light = false, n = 5) => (
    <div className="flex items-center justify-center gap-9">
      {Array.from({ length: n }).map((_, i) => (
        <ClientLogo key={i} i={i} light={light} />
      ))}
    </div>
  );
  switch (variant) {
    case 1:
      return (
        <div className="bg-background px-10 py-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Vertrouwd door 200+ ondernemers
          </p>
          {row()}
        </div>
      );
    case 2:
      return (
        <div className="bg-background px-10 py-10">
          <div className="rounded-2xl border border-border bg-card px-8 py-7 shadow-sm">
            {row()}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="bg-[#0e1a20] px-10 py-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-white/50">
            Samenwerkingen
          </p>
          {row(true)}
        </div>
      );
    case 4:
      return (
        <div className="grid grid-cols-4 gap-4 bg-muted/40 px-10 py-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl border border-border bg-card py-5 shadow-sm"
            >
              <ClientLogo i={i} />
            </div>
          ))}
        </div>
      );
    default:
      return <div className="bg-muted/40 px-10 py-10">{row()}</div>;
  }
}

/* ----------------------------------- CTA ----------------------------------- */
function Cta({ variant }: { variant: number }) {
  switch (variant) {
    case 1:
      return (
        <div className="bg-background px-10 py-14">
          <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-8 py-12 text-center shadow-sm">
            <span className="inline-block rounded-full bg-brand-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
              Klaar voor de volgende stap?
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Klaar om te groeien?</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Plan een vrijblijvend gesprek en ontdek wat er mogelijk is.
            </p>
            <div className="mt-6">
              <Btn>
                Plan een gesprek <ArrowRight className="h-3 w-3" />
              </Btn>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="flex items-center justify-between bg-muted/40 px-12 py-14">
          <div>
            <h3 className="max-w-md text-2xl font-semibold tracking-tight">
              Benieuwd wat we voor jou kunnen doen?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">We denken graag met je mee.</p>
          </div>
          <Btn>
            Neem contact op <ArrowRight className="h-3 w-3" />
          </Btn>
        </div>
      );
    case 3:
      return (
        <div className="relative flex flex-col items-center overflow-hidden bg-[#0e1a20] px-10 py-16 text-center">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
          <h3 className="relative text-3xl font-semibold tracking-tight text-white">
            Zet vandaag de eerste stap
          </h3>
          <p className="relative mt-2 text-sm text-white/65">Binnen een dag een reactie.</p>
          <div className="relative mt-6">
            <Btn>Start nu</Btn>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-col items-center bg-background px-10 py-14 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">Blijf op de hoogte</h3>
          <p className="mt-2 text-sm text-muted-foreground">Tips over online groei, een paar keer per jaar.</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5" /> jouw@email.nl
            </span>
            <Btn>Aanmelden</Btn>
          </div>
        </div>
      );
    default:
      return (
        <div className="relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-brand to-[#ff8533] px-10 py-16 text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            Samen jouw online groei aanpakken?
          </h3>
          <p className="mt-2 max-w-sm text-sm text-white/90">
            Eén vast team, van strategie tot beheer.
          </p>
          <div className="mt-6">
            <Btn variant="white">
              Plan een gesprek <ArrowRight className="h-3 w-3" />
            </Btn>
          </div>
        </div>
      );
  }
}

/* ---------------------------------- Footer --------------------------------- */
function Footer({ variant }: { variant: number }) {
  const Socials = ({ light = false }: { light?: boolean }) => (
    <div className="flex gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-6 w-6 rounded-full",
            light ? "bg-white/15" : "bg-muted-foreground/15",
          )}
        />
      ))}
    </div>
  );
  const cols = (light = false) => (
    <div className="grid grid-cols-4 gap-6">
      {["Diensten", "Bedrijf", "Werk", "Contact"].map((titel, c) => (
        <div key={c}>
          <p className={cn("text-xs font-semibold", light ? "text-white" : "text-foreground")}>
            {titel}
          </p>
          <div className="mt-3 space-y-2">
            {Array.from({ length: 3 }).map((_, r) => (
              <div
                key={r}
                className={cn(
                  "h-1.5 rounded",
                  light ? "bg-white/15" : "bg-muted-foreground/15",
                  r === 1 ? "w-20" : "w-14",
                )}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  switch (variant) {
    case 1:
      return (
        <div className="flex flex-col items-center gap-3 border-t border-border bg-card px-10 py-9 text-center">
          <Merk />
          <NavItems />
          <Socials />
          <span className="text-[11px] text-muted-foreground">© 2026 Merk — Alle rechten voorbehouden</span>
        </div>
      );
    case 2:
      return (
        <div className="bg-[#0e1a20] px-10 py-11">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <Merk light />
              <p className="mt-2 max-w-[180px] text-[11px] text-white/50">
                Digitale ecosystemen die meegroeien met jouw bedrijf.
              </p>
            </div>
            <Socials light />
          </div>
          {cols(true)}
        </div>
      );
    case 3:
      return (
        <div className="border-t border-border bg-muted/40 px-10 py-11">
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-7 py-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold">Schrijf je in voor de nieuwsbrief</p>
              <p className="text-xs text-muted-foreground">Geen spam, alleen waardevolle tips.</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">jouw@email.nl</span>
              <Btn>Aanmelden</Btn>
            </div>
          </div>
          <div className="mt-9">{cols()}</div>
        </div>
      );
    case 4:
      return (
        <div className="flex items-center justify-between border-t border-border bg-card px-10 py-7">
          <Merk />
          <NavItems />
          <Socials />
        </div>
      );
    default:
      return (
        <div className="border-t border-border bg-card px-10 py-11">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <Merk />
              <p className="mt-2 max-w-[200px] text-xs text-muted-foreground">
                Van strategie tot beheer — onder één dak.
              </p>
            </div>
            <Socials />
          </div>
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
