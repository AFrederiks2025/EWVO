"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/motion/use-in-view";

/**
 * Container die zijn directe kinderen met een lichte stagger laat fade-in-sliden
 * zodra de container in beeld komt. Behoudt de grid-layout (kinderen blijven
 * directe grid-items), dus geen layout shift en gelijke kaarthoogtes blijven.
 * Geef de grid-classes mee via `className`.
 */
export function Stagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  const { ref, inView } = useInView({ once });
  return (
    <div ref={ref} className={cn("reveal", inView && "in-view", className)}>
      {children}
    </div>
  );
}
