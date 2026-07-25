"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
    <section ref={sectionRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {testimonials.headline}
          </h2>
        </div>

        <div className="testimonial-panel relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-wood-500 to-safety">
          <Image
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-overlay"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
            <span className="font-display text-6xl text-concrete-100/50" aria-hidden="true">
              &ldquo;
            </span>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-concrete-100">{testimonials.intro}</p>
            <div className="mt-2 flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full border border-concrete-100/70" />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-concrete-100/80">
              {testimonials.placeholders[0]?.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
