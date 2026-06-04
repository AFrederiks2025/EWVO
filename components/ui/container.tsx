import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function Section({ className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props} />
  );
}

/** Kleine sectie-koptekst met optioneel label (eyebrow) en titel. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  centered,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
