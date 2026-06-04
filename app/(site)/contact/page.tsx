import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { getSiteSettings } from "@/lib/cms";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact — Plan een Gratis Adviesgesprek",
  description:
    "Bel, mail of vul het formulier in. We denken graag vrijblijvend met je mee over jouw online groei.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const phoneHref = `tel:${settings.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${settings.email}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Plan een gratis adviesgesprek"
        description="Heb je een vraag of een plan? We denken graag vrijblijvend met je mee."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/50"
            >
              <Phone className="mt-0.5 h-5 w-5 text-brand" />
              <span>
                <span className="block font-medium">Bel ons</span>
                <span className="text-sm text-muted-foreground">
                  {settings.phone}
                </span>
              </span>
            </a>
            <a
              href={emailHref}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/50"
            >
              <Mail className="mt-0.5 h-5 w-5 text-brand" />
              <span>
                <span className="block font-medium">Mail ons</span>
                <span className="text-sm text-muted-foreground">
                  {settings.email}
                </span>
              </span>
            </a>
            <a
              href={settings.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/50"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-brand" />
              <span>
                <span className="block font-medium">WhatsApp</span>
                <span className="text-sm text-muted-foreground">
                  Stuur ons een appje
                </span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <Clock className="mt-0.5 h-5 w-5 text-brand" />
              <span>
                <span className="block font-medium">Bereikbaarheid</span>
                <span className="text-sm text-muted-foreground">
                  {settings.hours}
                </span>
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold">Stuur ons een bericht</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We reageren meestal binnen één werkdag.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
