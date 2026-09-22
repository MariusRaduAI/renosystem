"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { photoBand } from "@/content/de";

export default function PhotoBand() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".photoband-content",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
      gsap.fromTo(
        ".photoband-image",
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="baustellenalltag" ref={sectionRef} className="relative isolate overflow-hidden bg-concrete-950 py-20 sm:py-28 lg:py-36">
      <Image
        src="/portfolio/wiegelmann-trockenbau-malerarbeiten/before.jpg"
        alt={photoBand.imageAlt}
        fill
        sizes="100vw"
        className="photoband-image object-cover object-center opacity-80"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-concrete-950/80 via-concrete-950/50 to-concrete-950"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-concrete-100 to-transparent"
        aria-hidden="true"
      />

      <div className="photoband-content relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-safety">{photoBand.eyebrow}</p>
        <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-100 sm:text-5xl">
          {photoBand.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-concrete-300">
          {photoBand.body}
        </p>
      </div>
    </section>
  );
}
