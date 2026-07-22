"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { serviceGroups, servicesSection } from "@/content/de";
import { serviceDetails } from "@/content/services";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-tile").forEach((tile, i) => {
        gsap.fromTo(
          tile,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            delay: (i % 6) * 0.05,
            scrollTrigger: { trigger: tile, start: "top 92%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="leistungen" ref={containerRef} className="bg-ink-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
              {servicesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
              {servicesSection.headline}
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-base leading-relaxed text-ink-600">{servicesSection.intro}</p>
            <Link
              href={servicesSection.allServicesHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600 hover:text-clay-500"
            >
              {servicesSection.allServicesLink}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          {serviceGroups.map((group) => {
            const groupServices = serviceDetails.filter((s) => s.groupId === group.id);

            return (
              <div key={group.id}>
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-extrabold text-clay-600">{group.number}</span>
                  <h3 className="font-display text-xl font-bold text-ink-950 sm:text-2xl">{group.title}</h3>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {groupServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/leistungen/${service.slug}`}
                      data-magnetic
                      className="service-tile group flex items-start justify-between gap-4 rounded-2xl border-2 border-ink-950/10 bg-white p-5 transition-colors hover:border-clay-500 hover:bg-ink-950"
                    >
                      <div>
                        <h4 className="font-display text-base font-bold text-ink-950 group-hover:text-ink-100">
                          {service.name}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-600 group-hover:text-ink-300">
                          {service.shortDescription}
                        </p>
                      </div>
                      <span
                        className="mt-1 shrink-0 text-lg text-ink-600/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-clay-500"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
