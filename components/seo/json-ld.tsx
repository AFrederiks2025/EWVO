import { siteConfig } from "@/lib/site";

/** Organization / ProfessionalService structured data (MERGE-PLAN.md §7). */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    alternateName: siteConfig.formerName,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    sameAs: siteConfig.socials
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
