import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/content/services";
import { ServiceIcon } from "@/components/sections/icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/diensten/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/50"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
        Meer over deze dienst
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
