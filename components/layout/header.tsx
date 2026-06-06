"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, primaryCta, reviewCta, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navPill =
    "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

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
        <Container
          className={cn(
            "flex items-center justify-between gap-4 transition-all duration-300 motion-reduce:transition-none",
            scrolled ? "h-14" : "h-16",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <Logo className="h-8 w-8 rounded-lg" />
            <span>{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      navPill,
                      "inline-flex items-center gap-1",
                      isActive(item.href) && "text-foreground",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-48 rounded-xl border border-border bg-card p-1 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                            pathname === child.href && "text-foreground",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(navPill, isActive(item.href) && "text-foreground")}
                >
                  {item.label}
                </Link>
              ),
            )}
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
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      isActive(item.href) && "bg-muted text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                      {item.children
                        .filter((child) => child.href !== item.href)
                        .map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                              pathname === child.href && "bg-muted text-foreground",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
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
