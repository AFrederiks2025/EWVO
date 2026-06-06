"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, primaryCta, reviewCta, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="border-b border-border bg-accent/15">
        <Container className="flex items-center justify-center gap-2 py-2 text-center text-sm">
          <Star
            className="hidden h-4 w-4 shrink-0 text-brand sm:inline"
            aria-hidden
          />
          <a
            href={reviewCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            {reviewCta.label}
          </a>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <Logo className="h-8 w-8 rounded-lg" />
            <span>{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  isActive(item.href) && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <ButtonLink href={primaryCta.href} size="sm">
              {primaryCta.label}
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                    isActive(item.href) && "bg-muted text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href={primaryCta.href}
                className="mt-2"
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </ButtonLink>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}
