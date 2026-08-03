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
    <section id="preise" ref={sectionRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">{pricing.eyebrow}</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {pricing.headline}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-concrete-600">{pricing.body}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="pricing-card flex flex-col justify-center rounded-3xl bg-gradient-to-br from-wood-500 to-safety p-8 sm:p-10">
            <span className="inline-flex w-fit items-center rounded-full bg-concrete-100/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-concrete-100">
              {pricing.priceFrom}
            </span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-6xl font-black leading-none text-concrete-100 sm:text-7xl">
                {pricing.priceValue}
              </span>
              <span className="text-lg font-medium text-concrete-100/85">{pricing.priceUnit}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-concrete-100/70">{pricing.priceVat}</p>
          </div>

          <div className="pricing-card flex flex-col justify-center gap-6 rounded-3xl border border-wood-500/20 bg-white p-8 sm:p-10">
            <p className="flex items-start gap-3 text-base leading-relaxed text-concrete-950">
              <span className="mt-0.5 text-lg text-wood-600" aria-hidden="true">
                ℹ
              </span>
              {pricing.note}
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex min-h-[48px] w-fit items-center justify-center gap-2 rounded-full bg-wood-500 px-6 text-sm font-semibold text-concrete-100 transition-colors hover:bg-safety"
            >
              {pricing.cta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
