"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { serviceGroups, servicesSection } from "@/content/de";
import { serviceDetails } from "@/content/services";

const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
const CHIP_LIMIT = 3;

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Rotation stays a static Tailwind class (so the hover:rotate-0 CSS
      // transition keeps working) — GSAP only handles the entrance fade/rise.
      gsap.utils.toArray<HTMLElement>(".group-stamp").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 2) * 0.08,
            scrollTrigger: { trigger: card, start: "top 90%" },
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
          <div className="max-w-sm">
            <p className="text-base leading-relaxed text-concrete-600">{servicesSection.intro}</p>
            <Link
              href={servicesSection.allServicesHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wood-600 hover:text-wood-500"
            >
              {servicesSection.allServicesLink}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {serviceGroups.map((group, i) => {
            const groupServices = serviceDetails.filter((s) => s.groupId === group.id);
            const chips = groupServices.slice(0, CHIP_LIMIT);
            const remaining = groupServices.length - chips.length;

            return (
              <Link
                key={group.id}
                href={`/leistungen#${group.id}`}
                data-magnetic
                className={`group-stamp group blueprint-corners flex flex-col justify-between gap-8 rounded-sm bg-concrete-950 p-8 noise-texture transition-transform duration-300 hover:rotate-0 sm:p-10 ${
                  rotations[i % rotations.length]
                } ${i % 2 === 0 ? "sm:-translate-y-4" : "sm:translate-y-4"}`}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-4xl font-extrabold text-wood-500">
                      {group.number}
                    </span>
                    {group.lead && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-safety/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-safety">
                        <span className="h-1.5 w-1.5 rounded-full bg-safety" />
                        Kernleistung
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-concrete-100 sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-concrete-300">{group.intro}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {chips.map((service) => (
                    <span
                      key={service.slug}
                      className="rounded-full border border-concrete-100/15 px-3 py-1.5 text-xs font-medium text-concrete-100"
                    >
                      {service.name}
                    </span>
                  ))}
                  {remaining > 0 && (
                    <span className="rounded-full bg-wood-500 px-3 py-1.5 text-xs font-semibold text-concrete-950 transition-colors group-hover:bg-safety">
                      +{remaining} weitere
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
