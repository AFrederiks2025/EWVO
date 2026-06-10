import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "www.ewvo.nl";

/**
 * Padmapping voor de oude eenwebsitevanons.nl-URL's (MERGE-PLAN.md §7A).
 * LET OP: deze paden zijn aannames uit het plan en nog NIET geverifieerd
 * tegen een echte crawl (GATE-B / Fase 0). Aanvullen na de nulmeting.
 */
const VAN_ONS_MAP: Record<string, string> = {
  "/klanten": "/portfolio",
  "/privacy-verklaring": "/privacy",
};

function mapVanOnsPath(pathname: string): string {
  if (VAN_ONS_MAP[pathname]) return VAN_ONS_MAP[pathname];
  // Individuele case-detailpagina's → /portfolio (catch); blog-slugs blijven gelijk.
  if (pathname.startsWith("/klanten/")) return "/portfolio";
  return pathname;
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const { pathname, search } = request.nextUrl;

  // Subdomein voorbeeld.ewvo.nl serveert de voorbeeld-landingspagina (/voorbeeld).
  if (host === "voorbeeld.ewvo.nl") {
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/voorbeeld";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // 1. Oude domein eenwebsitevanons.nl → canoniek EWVO-domein (per pad, 301).
  if (host.includes("eenwebsitevanons.nl")) {
    const target = mapVanOnsPath(pathname);
    return NextResponse.redirect(
      `https://${CANONICAL_HOST}${target}${search}`,
      301,
    );
  }

  // 2. Non-www ewvo.nl → www (301). (Vercel kan dit ook op domeinniveau doen.)
  if (host === "ewvo.nl") {
    return NextResponse.redirect(
      `https://${CANONICAL_HOST}${pathname}${search}`,
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  // Sla Next-interne paden, de API en bestanden met een extensie over.
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
