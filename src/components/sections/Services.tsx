"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { serviceGroups, servicesSection } from "@/content/de";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-row").forEach((row) => {
        gsap.fromTo(
          row,
          { autoAlpha: 0, x: -24 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 92%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leistungen" ref={containerRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
              {servicesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
              {servicesSection.headline}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-concrete-600">{servicesSection.intro}</p>
        </div>

        <div className="mt-16 space-y-20">
          {serviceGroups.map((group) => (
            <div key={group.id}>
              <div className="flex flex-col gap-3 pb-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-xl font-bold text-wood-500">{group.number}</span>
                  <h3 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
                    {group.title}
                  </h3>
                  {group.lead && (
                    <span className="hidden items-center gap-1.5 rounded-full border border-safety/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-safety sm:inline-flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-safety" />
                      Kernleistung
                    </span>
                  )}
                </div>
                <p className="max-w-md text-sm text-concrete-600">{group.intro}</p>
              </div>

              <div className="mt-6 border-t border-concrete-950/10">
                {group.services.map((service, i) => (
                  <div
                    key={service.name}
                    className="service-row group relative grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 border-b border-concrete-950/10 py-5 transition-colors sm:grid-cols-[5rem_minmax(0,1fr)_minmax(0,22rem)] sm:gap-x-8 sm:py-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-safety transition-transform duration-300 ease-out group-hover:scale-y-100"
                    />
                    <span className="font-display text-2xl font-extrabold text-concrete-950/15 transition-colors duration-300 group-hover:text-wood-500 sm:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-display text-lg font-bold text-concrete-950 transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                      {service.name}
                    </h4>
                    <p className="col-span-2 mt-2 text-sm leading-relaxed text-concrete-600 sm:col-span-1 sm:mt-0 sm:text-right">
                      {service.description}
                    </p>
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
