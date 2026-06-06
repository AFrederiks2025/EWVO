"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "@/components/motion/use-in-view";

/** Splitst "10+" → prefix "", getal 10, suffix "+". */
function parseValue(value: string) {
  const m = value.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return null;
  return {
    prefix: m[1],
    num: parseFloat(m[2].replace(",", ".")),
    suffix: m[3],
  };
}

/**
 * Telt op naar de eindwaarde zodra het in beeld komt (easeOutCubic).
 * Respecteert prefers-reduced-motion (toont dan direct de eindwaarde).
 */
export function Counter({
  value,
  duration = 1.6,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true });
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || !parsed) return;
    started.current = true;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(parsed.num);
      return;
    }

    let raf = 0;
    let startTs = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / (duration * 1000), 1);
      setDisplay(parsed.num * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisplay(parsed.num);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  const shown = Number.isInteger(parsed.num)
    ? Math.round(display).toString()
    : display.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {shown}
      {parsed.suffix}
    </span>
  );
}
