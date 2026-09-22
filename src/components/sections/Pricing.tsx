"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { pricing } from "@/content/de";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="preise" ref={sectionRef} className="bg-concrete-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">{pricing.eyebrow}</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {pricing.headline}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-concrete-600">{pricing.body}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pricing.points.map((point) => (
            <div
              key={point.title}
              className="pricing-card flex flex-col gap-3 rounded-3xl border border-wood-500/15 bg-white p-8"
            >
              <h3 className="font-display text-lg font-bold text-concrete-950">{point.title}</h3>
              <p className="text-sm leading-relaxed text-concrete-600">{point.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex min-h-[48px] w-fit items-center justify-center gap-2 rounded-full bg-wood-500 px-6 text-sm font-semibold text-concrete-100 transition-colors hover:bg-safety"
          >
            {pricing.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
