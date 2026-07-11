"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { process, processSection } from "@/content/de";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: pin the section and scroll the steps horizontally —
      // the "Ablauf" reads like a blueprint unrolling left to right.
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        if (!track) return;

        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!counterRef.current) return;
              const step = Math.min(process.length, Math.floor(self.progress * process.length) + 1);
              counterRef.current.textContent = String(step).padStart(2, "0");
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      // Mobile/tablet: plain vertical reveal, no scroll-jacking.
      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              delay: i * 0.05,
              scrollTrigger: { trigger: step, start: "top 88%" },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ablauf" ref={sectionRef} className="relative overflow-hidden bg-concrete-950 noise-texture">
      <div className="flex min-h-[100svh] flex-col justify-center py-24 lg:h-[100svh] lg:min-h-0 lg:justify-start lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-500">
                {processSection.eyebrow}
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-100 sm:text-5xl">
                {processSection.headline}
              </h2>
            </div>
            <div className="hidden shrink-0 items-baseline gap-1 font-display text-concrete-300 lg:flex">
              <span ref={counterRef} className="text-2xl font-bold text-wood-500">
                01
              </span>
              <span className="text-sm">/ {String(process.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-10 px-4 sm:px-6 lg:mt-0 lg:flex-1 lg:px-0">
          <div
            ref={trackRef}
            className="flex flex-col gap-10 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-0 lg:pl-[8vw]"
          >
            {process.map((step, i) => (
              <div
                key={step.number}
                className="process-step relative shrink-0 border-t border-concrete-600/30 pt-6 lg:h-full lg:w-[70vw] lg:max-w-xl lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0 lg:flex lg:flex-col lg:justify-center"
              >
                <span className="font-display text-6xl font-black text-wood-500/25 lg:text-8xl">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-concrete-100 lg:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-concrete-300">
                  {step.description}
                </p>
                {i === process.length - 1 && (
                  <span className="mt-6 hidden w-fit items-center gap-2 rounded-full border border-safety/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-safety lg:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-safety" />
                    Übergabe
                  </span>
                )}
              </div>
            ))}
            <div aria-hidden="true" className="hidden w-[4vw] shrink-0 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
