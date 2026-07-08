"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { serviceGroups, servicesSection } from "@/content/de";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 36, rotate: i % 2 === 0 ? -2 : 2 },
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leistungen" ref={containerRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
            {servicesSection.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {servicesSection.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-concrete-600">{servicesSection.intro}</p>
        </div>

        <div className="mt-16 space-y-16">
          {serviceGroups.map((group) => (
            <div key={group.id}>
              <div className="flex flex-col gap-3 border-b border-concrete-600/20 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-bold text-wood-500">{group.number}</span>
                  <h3 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
                    {group.title}
                  </h3>
                  {group.lead && (
                    <span className="hidden rounded-full border border-wood-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wood-600 sm:inline-block">
                      Kernleistung
                    </span>
                  )}
                </div>
                <p className="max-w-md text-sm text-concrete-600">{group.intro}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <div
                    key={service.name}
                    className="service-card blueprint-corners rounded-sm bg-white/60 p-6 shadow-sm ring-1 ring-concrete-600/10"
                  >
                    <h4 className="font-display text-lg font-bold text-concrete-950">{service.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-concrete-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
