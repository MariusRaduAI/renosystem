"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { whyUs } from "@/content/de";

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".point-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: i * 0.07,
            scrollTrigger: { trigger: card, start: "top 92%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="warum-wir" ref={sectionRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">{whyUs.eyebrow}</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-concrete-950 sm:text-6xl">
              {whyUs.headline}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-concrete-600">{whyUs.body}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyUs.points.map((point, i) => (
              <div
                key={point}
                className={`point-card flex flex-col justify-between gap-6 rounded-2xl p-6 ${
                  i % 2 === 0 ? "bg-wood-500" : "bg-safety"
                }`}
              >
                <span className="font-display text-3xl font-extrabold text-concrete-100/60">
                  0{i + 1}
                </span>
                <span className="font-display text-lg font-bold leading-snug text-concrete-100">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
