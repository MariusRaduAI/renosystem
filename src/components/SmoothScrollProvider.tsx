"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const HEADER_OFFSET = -96;

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.3,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(ScrollTrigger.update);
    };
  }, []);

  // Lenis takes over scrolling, which breaks the browser's native jump to a
  // URL hash (e.g. "/#kontakt" from another page, or a same-page hash link)
  // — the native jump either never happens or gets immediately overridden by
  // Lenis's own scroll position. Handle both cases explicitly instead.
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (!hash) return;
      window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) return;
        if (lenisRef.current) {
          lenisRef.current.scrollTo(hash, { offset: HEADER_OFFSET });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    };

    if (window.location.hash) scrollToHash(window.location.hash);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const url = new URL(anchor.href);
      if (!url.hash || url.pathname !== window.location.pathname) return;
      e.preventDefault();
      window.history.pushState(null, "", url.hash);
      scrollToHash(url.hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return <>{children}</>;
}
