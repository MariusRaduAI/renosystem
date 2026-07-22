"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { testimonials } from "@/content/de";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-panel",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-600">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
            {testimonials.headline}
          </h2>
        </div>

        <div className="testimonial-panel relative mt-14 overflow-hidden rounded-[2.5rem] border-2 border-dashed border-clay-500/25 bg-ink-950 noise-texture">
          <div className="h-1.5 w-full stripe-gold" aria-hidden="true" />
          <div className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
            <span className="font-display text-6xl text-clay-500/40" aria-hidden="true">
              &ldquo;
            </span>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-ink-300">{testimonials.intro}</p>
            <div className="mt-2 flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full border border-clay-500/60" />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-300">
              {testimonials.placeholders[0]?.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
