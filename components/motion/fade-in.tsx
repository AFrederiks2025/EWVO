"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/components/motion/use-in-view";

/**
 * Fade-in + slide-up zodra het element in beeld komt.
 * De animatie zelf zit in CSS (.reveal-item) met Apple-easing; bij
 * prefers-reduced-motion wordt er niets geanimeerd (zie globals.css).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const { ref, inView } = useInView({ once });
  return (
    <div
      ref={ref}
      className={cn("reveal-item", inView && "in-view", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
