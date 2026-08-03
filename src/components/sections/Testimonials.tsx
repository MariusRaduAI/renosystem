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
        ".testimonial-card",
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
    <section ref={sectionRef} className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
              {testimonials.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
              {testimonials.headline}
            </h2>
            <p className="mt-4 text-base text-concrete-600">{testimonials.intro}</p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-concrete-950/8 bg-white px-5 py-4">
            <span className="font-display text-3xl font-extrabold text-concrete-950">
              {testimonials.googleRatingLabel}
            </span>
            <div>
              <div className="flex items-center gap-0.5 text-safety" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-xs text-concrete-600">{testimonials.googleReviewCountLabel}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.reviews.map((review) => (
            <div
              key={review.name}
              className="testimonial-card mb-6 flex flex-col break-inside-avoid rounded-2xl border border-concrete-950/8 bg-white p-6 shadow-sm shadow-concrete-950/5 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wood-500 font-display text-sm font-bold text-concrete-100">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-concrete-950">{review.name}</p>
                  <p className="text-xs text-concrete-600">
                    {review.reviewCount} · {review.timeAgo}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-0.5 text-safety" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < review.rating ? "" : "text-concrete-950/15"}>
                    ★
                  </span>
                ))}
              </div>

              <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-concrete-600">
                {review.text}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-wood-600">
                {review.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
