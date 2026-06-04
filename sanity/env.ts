export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/**
 * True zodra een echt Sanity-project is gekoppeld via env-variabelen.
 * Zolang dit false is, valt de site terug op de lokale seed-content
 * (lib/content/*), zodat alles blijft werken zonder CMS.
 */
export const isSanityConfigured = projectId.length > 0;
