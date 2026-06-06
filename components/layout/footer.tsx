import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { getServices, getSiteSettings } from "@/lib/cms";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";

export async function Footer() {
  const year = new Date().getFullYear();
  const [services, settings] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);
  const phoneHref = `tel:${settings.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${settings.email}`;

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Logo className="h-8 w-8 rounded-lg" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {settings.description}
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
                  href={phoneHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {settings.phone}
                </a>
              </li>
              <li>
                <a
                  href={emailHref}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {settings.email}
                </a>
              </li>
              <li>{settings.hours}</li>
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
