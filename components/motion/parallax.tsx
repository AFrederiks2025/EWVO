"use client";

import { useEffect, useRef, type ReactNode } from "react";

function prefersReduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Subtiele parallax: verschuift de inhoud verticaal op basis van de
 * scrollpositie. `speed` ~0.1–0.3 = subtiel. Alleen transform (geen layout
 * shift), rAF-gethrottled, en uit bij prefers-reduced-motion.
 */
export function Parallax({
  children,
  className,
  speed = 0.12,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const offset = (rect.top + rect.height / 2 - vh / 2) / vh; // ~ -1..1
      el.style.transform = `translate3d(0, ${(-offset * speed * 100).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

/**
 * Laat de inhoud licht inzoomen en vervagen naarmate die uit beeld scrollt
 * (boven de viewport). Bedoeld voor hero-titels. Alleen transform/opacity.
 */
export function ScrollFade({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.min(Math.max(-rect.top / (vh * 0.6), 0), 1);
      el.style.transform = `scale(${(1 + p * 0.08).toFixed(4)})`;
      el.style.opacity = (1 - p).toFixed(3);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform, opacity", transformOrigin: "center" }}
    >
      {children}
    </div>
  );
}
