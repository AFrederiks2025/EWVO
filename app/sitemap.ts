import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/content/services";
import { cases } from "@/lib/content/cases";
import { posts } from "@/lib/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/diensten",
    "/werk",
    "/over-ons",
    "/over-ons/team",
    "/blog",
    "/contact",
    "/privacy",
    "/algemene-voorwaarden",
  ].map((route) => ({ url: `${base}${route}`, lastModified: now }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/diensten/${s.slug}`,
    lastModified: now,
  }));

  const caseRoutes = cases.map((c) => ({
    url: `${base}/werk/${c.slug}`,
    lastModified: now,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...postRoutes];
}
