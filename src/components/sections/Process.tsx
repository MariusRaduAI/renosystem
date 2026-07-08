"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { process, processSection } from "@/content/de";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      }

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
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ablauf" ref={sectionRef} className="bg-concrete-950 py-24 sm:py-32 noise-texture">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-500">
            {processSection.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-100 sm:text-5xl">
            {processSection.headline}
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-concrete-600/30 lg:block" />
          <div
            ref={lineRef}
            className="absolute left-0 top-6 hidden h-px w-full bg-wood-500 lg:block"
            style={{ transform: "scaleX(0)" }}
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {process.map((step) => (
              <div key={step.number} className="process-step relative">
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-wood-500 bg-concrete-950 font-display text-lg font-bold text-wood-500">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold text-concrete-100">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-concrete-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
