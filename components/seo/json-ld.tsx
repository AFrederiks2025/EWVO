import { getSiteSettings } from "@/lib/cms";
import { siteConfig } from "@/lib/site";

/** Organization / ProfessionalService structured data (MERGE-PLAN.md §7). */
export async function OrganizationJsonLd() {
  const settings = await getSiteSettings();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: siteConfig.formerName,
    url: siteConfig.url,
    description: settings.description,
    telephone: settings.phone,
    email: settings.email,
    sameAs: settings.socials
      .map((s) => s.href)
      .filter((href) => href && href !== "#"),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Breadcrumb structured data voor detailpagina's (blog, cases, diensten). */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
