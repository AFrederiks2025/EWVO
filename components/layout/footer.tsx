import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { services } from "@/lib/content/services";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">
                E
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Diensten</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/diensten/${s.slug}`}
                    className="hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Navigatie</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.hours}</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Voorheen {siteConfig.formerName}.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacyverklaring
            </Link>
            <Link href="/algemene-voorwaarden" className="hover:text-foreground">
              Algemene voorwaarden
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
