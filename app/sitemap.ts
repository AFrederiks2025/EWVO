import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getCaseSlugs, getPosts, getServiceSlugs } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();

  const [serviceSlugs, caseSlugs, posts] = await Promise.all([
    getServiceSlugs(),
    getCaseSlugs(),
    getPosts(),
  ]);

  const staticRoutes = [
    "",
    "/diensten",
    "/portfolio",
    "/over-ons",
    "/over-ons/team",
    "/blog",
    "/contact",
    "/privacy",
    "/algemene-voorwaarden",
  ].map((route) => ({ url: `${base}${route}`, lastModified: now }));

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${base}/diensten/${slug}`,
    lastModified: now,
  }));

  const caseRoutes = caseSlugs.map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: now,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...postRoutes];
}
