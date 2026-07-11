"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { whyUs } from "@/content/de";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tier-stamp").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40, rotate: 0 },
          {
            autoAlpha: 1,
            y: 0,
            rotate: i === 0 ? -2 : i === 1 ? 1 : -1,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".point-line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { autoAlpha: 0, x: -16 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.06,
            scrollTrigger: { trigger: line, start: "top 92%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="warum-wir" ref={sectionRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">{whyUs.eyebrow}</p>
        <h2 className="mt-4 max-w-4xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-concrete-950 sm:text-6xl">
          {whyUs.headline}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-concrete-600">{whyUs.body}</p>

            <ul className="mt-9 space-y-1">
              {whyUs.points.map((point) => (
                <li
                  key={point}
                  className="point-line flex items-center gap-3 border-b border-concrete-950/10 py-3.5 text-concrete-950"
                >
                  <span className="text-safety" aria-hidden="true">
                    ▸
                  </span>
                  <span className="font-display text-base font-bold sm:text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col gap-5 pt-2 sm:items-end">
            {whyUs.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`tier-stamp blueprint-corners flex w-full max-w-md items-center gap-6 rounded-sm bg-concrete-950 p-6 noise-texture transition-transform duration-300 hover:rotate-0 ${rotations[i]}`}
              >
                <span className="font-display text-4xl font-extrabold text-wood-500">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-concrete-100">{tier.name}</h3>
                  <p className="mt-1 text-sm text-concrete-300">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
