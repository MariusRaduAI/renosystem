"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { hero } from "@/content/de";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerFarRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Floor-plan outline draws itself in on load — signature detail that
      // sets up the "blueprint becomes real" motif carried through the site.
      if (planRef.current && !reduced) {
        const length = planRef.current.getTotalLength();
        planRef.current.style.setProperty("--path-length", String(length));
        gsap.fromTo(
          planRef.current,
          { strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 2.4, ease: "power2.inOut", delay: 0.3 }
        );
      }

      // Rotating construction-stage words behind the headline. Standing in
      // for the future generated video background — swap the word layer for
      // a <video> element later without touching layout.
      const words = gsap.utils.toArray<HTMLElement>(".hero-word");
      if (words.length && !reduced) {
        const wordTl = gsap.timeline({ repeat: -1, delay: 1 });
        words.forEach((word) => {
          wordTl
            .to(word, { autoAlpha: 1, filter: "blur(0px)", scale: 1, duration: 1, ease: "power2.out" })
            .to(word, { autoAlpha: 0, filter: "blur(10px)", scale: 1.04, duration: 0.9, ease: "power2.in" }, "+=1.35");
        });
      } else if (words[0]) {
        gsap.set(words[0], { autoAlpha: 0.5, filter: "blur(0px)", scale: 1 });
      }

      if (!reduced) {
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
        if (wordsRef.current) {
          tl.to(wordsRef.current, { yPercent: isMobile ? 6 : 12, ease: "none" }, 0);
        }
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

      {/* Rotating stage words — huge outlined type, sits between grid and content */}
      <div
        ref={wordsRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div className="relative flex h-[40vw] max-h-[420px] w-full items-center justify-center sm:h-[26vw]">
          {hero.stageWords.map((word) => (
            <span
              key={word}
              className="hero-word text-outline invisible absolute whitespace-nowrap font-display text-[16vw] font-black uppercase leading-none tracking-tight opacity-0 sm:text-[9vw]"
              style={{ filter: "blur(10px)", transform: "scale(1.04)" }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Floor-plan line drawing — decorative, draws itself on load */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-[14%] hidden h-[62%] w-auto opacity-30 md:block"
        viewBox="0 0 220 420"
        fill="none"
      >
        <path
          ref={planRef}
          className="line-draw"
          d="M10 10H150V70H210V180H150V410H10V260H60V180H10V70H80V10"
          stroke="var(--color-wood-500)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-wood-500 animate-fade-up">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-safety" aria-hidden="true" />
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
            data-magnetic
            className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-wood-500 px-7 text-base font-semibold text-concrete-950 transition-colors hover:bg-safety hover:text-concrete-100"
          >
            {hero.ctaPrimary}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#leistungen"
            data-magnetic
            className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-concrete-100/25 px-7 text-base font-semibold text-concrete-100 transition-colors hover:border-concrete-100/60"
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

      <div className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2 text-concrete-300">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scrollen</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-wood-500 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
