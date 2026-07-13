"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { hero } from "@/content/de";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageLabelRef = useRef<HTMLSpanElement>(null);
  const stageIndexRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const video = videoRef.current;

    const setStage = (i: number) => {
      const clamped = Math.max(0, Math.min(hero.stageWords.length - 1, i));
      if (stageLabelRef.current) stageLabelRef.current.textContent = hero.stageWords[clamped];
      if (stageIndexRef.current) stageIndexRef.current.textContent = String(clamped + 1).padStart(2, "0");
      if (dotsRef.current) {
        Array.from(dotsRef.current.children).forEach((dot, idx) => {
          dot.classList.toggle("bg-wood-500", idx <= clamped);
          dot.classList.toggle("bg-concrete-100/20", idx > clamped);
        });
      }
    };

    if (reduced || !video) {
      setStage(0);
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      let lastStage = -1;

      const onVideoProgress = (t: number, duration: number) => {
        const segment = duration / hero.stageWords.length;
        const stage = Math.min(hero.stageWords.length - 1, Math.floor(t / segment));
        if (stage !== lastStage) {
          lastStage = stage;
          setStage(stage);
        }
      };

      // Desktop/tablet: video playback is fully driven by scroll position —
      // the room only "renovates" as far as the visitor has scrolled.
      mm.add("(min-width: 768px)", () => {
        // iOS Safari needs a primed play/pause before currentTime scrubbing works.
        video.muted = true;
        video.play().then(() => video.pause()).catch(() => {});

        const start = () => {
          const duration = video.duration || 0;
          if (!duration) return;

          const tween = gsap.to(video, {
            currentTime: duration,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.4,
              onUpdate: () => onVideoProgress(video.currentTime, duration),
            },
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        };

        if (video.readyState >= 1) {
          return start();
        }
        const onLoaded = () => start();
        video.addEventListener("loadedmetadata", onLoaded, { once: true });
        return () => video.removeEventListener("loadedmetadata", onLoaded);
      });

      // Mobile: scroll-scrubbing feels janky on touch momentum scrolling and
      // is heavier on battery — just loop the video and cycle labels on a timer.
      mm.add("(max-width: 767px)", () => {
        video.loop = true;
        video.play().catch(() => {});

        const labelTl = gsap.timeline({ repeat: -1 });
        hero.stageWords.forEach((_, i) => {
          labelTl.call(() => setStage(i), [], `+=${i === 0 ? 0 : 2.6}`);
        });

        return () => {
          labelTl.kill();
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-concrete-950"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero-renovation.webm" type="video/webm" />
        <source src="/video/hero-renovation.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/60 to-concrete-950/45"
        aria-hidden="true"
      />
      <div className="absolute inset-0 blueprint-grid opacity-[0.08]" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-wood-500 animate-fade-up">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-safety" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance font-display text-[2.6rem] font-extrabold leading-[1.03] tracking-tight text-concrete-100 sm:text-6xl lg:text-[6rem] animate-fade-up">
          {hero.headline}
        </h1>
        <p
          className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-concrete-300 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {hero.subline}
        </p>

        <div
          className="mt-9 flex flex-col gap-4 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#kontakt"
            data-magnetic
            className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-wood-500 px-7 text-base font-semibold text-concrete-950 transition-colors hover:bg-safety hover:text-concrete-100"
          >
            {hero.ctaPrimary}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#leistungen"
            data-magnetic
            className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-concrete-100/25 px-7 text-base font-semibold text-concrete-100 transition-colors hover:border-concrete-100/60"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <p
          className="mt-8 flex items-center gap-2 text-sm text-concrete-300 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-wood-500" aria-hidden="true" />
          {hero.trustSignal}
        </p>
      </div>

      {/* Centered stage title — tracks the renovation video as the visitor scrolls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-32 z-10 hidden flex-col items-center gap-3 sm:flex">
        <div className="flex items-baseline gap-2 font-display text-concrete-100">
          <span ref={stageIndexRef} className="text-sm font-bold text-wood-500">
            01
          </span>
          <span ref={stageLabelRef} className="text-lg font-bold uppercase tracking-[0.15em]">
            {hero.stageWords[0]}
          </span>
        </div>
        <div ref={dotsRef} className="flex items-center gap-1.5" aria-hidden="true">
          {hero.stageWords.map((word, i) => (
            <span
              key={word}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === 0 ? "bg-wood-500" : "bg-concrete-100/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2 text-concrete-300">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scrollen</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-wood-500 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
