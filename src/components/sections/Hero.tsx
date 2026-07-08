"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { hero } from "@/content/de";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerFarRef = useRef<HTMLDivElement>(null);
  const layerMidRef = useRef<HTMLDivElement>(null);
  const layerNearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      if (layerFarRef.current) {
        tl.to(layerFarRef.current, { yPercent: isMobile ? 10 : 18, ease: "none" }, 0);
      }
      if (!isMobile && layerMidRef.current) {
        tl.to(layerMidRef.current, { yPercent: 34, ease: "none" }, 0);
      }
      if (!isMobile && layerNearRef.current) {
        tl.to(layerNearRef.current, { yPercent: 55, rotate: 2, ease: "none" }, 0);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-concrete-950 noise-texture"
    >
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      <div
        ref={layerFarRef}
        aria-hidden="true"
        className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-wood-600/10 blur-3xl"
      />
      <div
        ref={layerMidRef}
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
      >
        <svg className="absolute right-[6%] top-[12%] h-[70%] w-auto opacity-20" viewBox="0 0 200 600" fill="none">
          <line x1="20" y1="0" x2="20" y2="600" stroke="#6B7280" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="600" stroke="#6B7280" strokeWidth="1" />
          <line x1="180" y1="0" x2="180" y2="600" stroke="#6B7280" strokeWidth="1" />
          <line x1="0" y1="120" x2="200" y2="120" stroke="#6B7280" strokeWidth="1" />
          <line x1="0" y1="340" x2="200" y2="340" stroke="#6B7280" strokeWidth="1" />
        </svg>
      </div>
      <div ref={layerNearRef} aria-hidden="true" className="absolute inset-0 hidden md:block">
        <svg className="absolute left-[8%] top-[20%] h-[55%] w-auto opacity-25" viewBox="0 0 160 400" fill="none">
          <path d="M10 390L80 10L150 390" stroke="#B5713B" strokeWidth="1.5" />
          <line x1="45" y1="200" x2="115" y2="200" stroke="#B5713B" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-wood-500 animate-fade-up">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-tight text-concrete-100 sm:text-6xl lg:text-[6rem] animate-fade-up">
          {hero.headline}
        </h1>
        <p
          className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-concrete-300 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {hero.subline}
        </p>

        <div
          className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#kontakt"
            className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-wood-500 px-7 text-base font-semibold text-concrete-950 transition-colors hover:bg-wood-600 hover:text-concrete-100"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#leistungen"
            className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-concrete-100/25 px-7 text-base font-semibold text-concrete-100 transition-colors hover:border-concrete-100/60"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <p
          className="mt-8 flex items-center gap-2 text-sm text-concrete-300 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-wood-500" aria-hidden="true" />
          {hero.trustSignal}
        </p>
      </div>
    </section>
  );
}
