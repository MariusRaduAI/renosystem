"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { hero } from "@/content/de";

// Fractions of the overall scroll timeline (0..1). The video itself only
// scrubs between INTRO_END and SCRUB_END — before and after that it holds
// still, so visitors get real time to read the intro and admire the final,
// fully renovated frame instead of it flashing by right before unpinning.
const INTRO_END = 0.22;
const SCRUB_END = 0.82;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const stageGroupRef = useRef<HTMLDivElement>(null);
  const stageLabelRef = useRef<HTMLSpanElement>(null);
  const stageDescRef = useRef<HTMLParagraphElement>(null);
  const stageIndexRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const video = videoRef.current;

    let lastStage = -1;
    const setStage = (i: number) => {
      const clamped = Math.max(0, Math.min(hero.stages.length - 1, i));
      if (clamped === lastStage) return;
      lastStage = clamped;
      const stage = hero.stages[clamped];
      if (stageLabelRef.current) {
        gsap.fromTo(
          stageLabelRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }
        );
        stageLabelRef.current.textContent = stage.word;
      }
      if (stageDescRef.current) {
        gsap.fromTo(
          stageDescRef.current,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out", delay: 0.05 }
        );
        stageDescRef.current.textContent = stage.description;
      }
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

      // Desktop/tablet: hero pins in place for a long, deliberate scroll —
      // intro copy holds, then hands off to a big centered stage title
      // synced to the video's actual keyframes, then holds again on the
      // finished frame before releasing the pin.
      mm.add("(min-width: 768px)", () => {
        video.muted = true;
        video.play().then(() => video.pause()).catch(() => {});

        const start = () => {
          const duration = video.duration || 0;
          if (!duration) return;

          // Video has 3 morph segments between 4 source photos: label each
          // stage by whichever keyframe the current frame is closest to,
          // instead of splitting progress into even quarters.
          const segLen = duration / (hero.stages.length - 1);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${window.innerHeight * 5.5}`,
              scrub: 0.5,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: () => {
                const stage = Math.round(video.currentTime / segLen);
                setStage(stage);
              },
            },
          });

          tl.to(video, { currentTime: duration, ease: "none", duration: SCRUB_END - INTRO_END }, INTRO_END)
            .to(video, { scale: 1.07, ease: "none", duration: 1 }, 0)
            .to(
              introRef.current,
              { autoAlpha: 0, y: -28, scale: 0.97, duration: 0.1, ease: "power1.out" },
              INTRO_END - 0.1
            )
            .to(stageGroupRef.current, { autoAlpha: 1, duration: 0.1, ease: "power1.in" }, INTRO_END - 0.1);

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        };

        if (video.readyState >= 1) {
          return start();
        }
        const onLoaded = () => start();
        video.addEventListener("loadedmetadata", onLoaded, { once: true });
        return () => video.removeEventListener("loadedmetadata", onLoaded);
      });

      // Mobile: no scroll-jacking (touch momentum makes pins feel broken) —
      // the marketing copy stays put and the video just loops behind it.
      mm.add("(max-width: 767px)", () => {
        video.loop = true;
        video.play().catch(() => {});
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
        className="absolute inset-0 bg-gradient-to-t from-concrete-950 via-concrete-950/55 to-concrete-950/45"
        aria-hidden="true"
      />
      <div className="absolute inset-0 blueprint-grid opacity-[0.08]" aria-hidden="true" />

      {/* Intro: marketing headline + CTAs — hands off to the stage title once scrolling starts */}
      <div
        ref={introRef}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6"
      >
        <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-wood-500 animate-fade-up">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-safety" aria-hidden="true" />
          {hero.eyebrow}
        </p>
        <h1 className="text-balance font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-concrete-100 sm:text-6xl lg:text-[5.5rem] animate-fade-up">
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

        <div className="mt-12 hidden flex-col items-center gap-2 text-concrete-300 sm:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scrollen</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-wood-500 to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Big centered stage title — takes over once the visitor starts scrolling */}
      <div
        ref={stageGroupRef}
        className="pointer-events-none invisible absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-4 opacity-0"
      >
        <span ref={stageIndexRef} className="font-display text-sm font-bold tracking-[0.3em] text-wood-500">
          01
        </span>
        <span
          ref={stageLabelRef}
          className="text-balance text-center font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-concrete-100 sm:text-7xl lg:text-8xl"
        >
          {hero.stages[0].word}
        </span>
        <p
          ref={stageDescRef}
          className="max-w-md text-balance text-center text-base leading-relaxed text-concrete-300 sm:text-lg"
        >
          {hero.stages[0].description}
        </p>
        <div ref={dotsRef} className="mt-2 flex items-center gap-2" aria-hidden="true">
          {hero.stages.map((stage, i) => (
            <span
              key={stage.word}
              className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${
                i === 0 ? "bg-wood-500" : "bg-concrete-100/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
