import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statische 1:1 301-redirects (MERGE-PLAN.md §7B).
  // Host-gebaseerde redirects (eenwebsitevanons.nl → ewvo.nl) staan in middleware.ts.
  async redirects() {
    return [
      // Oude EWVO EN-routes → nieuwe NL-routes (GATE-A: routetaal = Nederlands)
      { source: "/services", destination: "/diensten", permanent: true },
      { source: "/about", destination: "/over-ons", permanent: true },
      { source: "/terms", destination: "/algemene-voorwaarden", permanent: true },
      { source: "/cases", destination: "/portfolio", permanent: true },
      // /werk is hernoemd naar /portfolio — oude links/SEO blijven werken.
      { source: "/werk", destination: "/portfolio", permanent: true },
      { source: "/werk/:slug", destination: "/portfolio/:slug", permanent: true },
      // Niet-werkende SPA-blogplaceholder van de oude ewvo.nl → blogoverzicht
      { source: "/blog/post", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
