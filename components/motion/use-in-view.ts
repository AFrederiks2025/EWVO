"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Detecteert wanneer een element in beeld komt (IntersectionObserver).
 * `once` (default) houdt het zichtbaar nadat het één keer in beeld was.
 * Valt veilig terug op "zichtbaar" als IntersectionObserver ontbreekt.
 */
export function useInView<T extends Element = HTMLDivElement>(options?: {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  const once = options?.once ?? true;
  const threshold = options?.threshold ?? 0.15;
  const rootMargin = options?.rootMargin ?? "0px 0px -10% 0px";

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
