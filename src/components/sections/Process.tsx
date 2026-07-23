"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { process, processSection } from "@/content/de";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: step, start: "top 88%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ablauf"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-concrete-100 via-wood-500/5 to-concrete-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
            {processSection.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {processSection.headline}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {process.map((step, i) => (
            <div
              key={step.number}
              className="process-step relative border-t-2 border-wood-500/25 pt-6"
            >
              <span className="font-display text-5xl font-black text-wood-500/20 sm:text-6xl">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-concrete-950 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-concrete-600">{step.description}</p>
              {i === process.length - 1 && (
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-safety/40 bg-safety/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-safety">
                  <span className="h-1.5 w-1.5 rounded-full bg-safety" />
                  Übergabe
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
