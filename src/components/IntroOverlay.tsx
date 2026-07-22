"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const SEEN_KEY = "renosystem-intro-seen";

// Renders visible by default (server + first client paint) so there is no
// flash of the real page before the overlay appears — the effect below
// either plays the reveal once per browser session, or removes it instantly
// if reduced-motion is set or this session has already seen it.
export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const peakARef = useRef<SVGPathElement>(null);
  const peakBRef = useRef<SVGPathElement>(null);
  const renRef = useRef<HTMLSpanElement>(null);
  const systemRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || sessionStorage.getItem(SEEN_KEY)) {
      // One-time client-only gate: matchMedia/sessionStorage aren't available during
      // SSR, so this can only be decided after mount — not a data effect prone to loops.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }
    sessionStorage.setItem(SEEN_KEY, "1");

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = prevOverflow;
        setVisible(false);
      },
    });

    tl.fromTo(
      peakARef.current,
      { opacity: 0, y: 14, scale: 0.7 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)", transformOrigin: "50% 100%" }
    )
      .fromTo(
        peakBRef.current,
        { opacity: 0, y: 14, scale: 0.7 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)", transformOrigin: "50% 100%" },
        "-=0.35"
      )
      .fromTo(renRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }, "-=0.25")
      .fromTo(
        systemRef.current,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 0.4 })
      .to(overlayRef.current, { yPercent: -100, duration: 0.65, ease: "power3.inOut" });

    return () => {
      tl.kill();
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-concrete-950"
      aria-hidden="true"
    >
      <div className="inline-flex items-baseline whitespace-nowrap font-display text-4xl font-extrabold lowercase tracking-tight sm:text-6xl">
        <span ref={renRef} className="text-wood-500" style={{ opacity: 0 }}>
          ren
        </span>
        <svg viewBox="0 0 40 32" className="mx-[0.03em] h-[0.72em] w-[0.9em] translate-y-[0.08em] shrink-0" fill="var(--color-wood-500)">
          <path ref={peakARef} d="M26 4L38 28H14L26 4Z" style={{ opacity: 0 }} />
          <path ref={peakBRef} d="M14 12L24 28H4L14 12Z" style={{ opacity: 0 }} />
        </svg>
        <span ref={systemRef} className="text-safety" style={{ opacity: 0 }}>
          system
        </span>
      </div>
    </div>
  );
}
