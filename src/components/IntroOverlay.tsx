"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const SEEN_KEY = "renosystem-intro-seen";

// Renders visible by default (server + first client paint) so there is no
// flash of the real page before the overlay appears — the effect below
// either plays the reveal once per browser session, or removes it instantly
// if reduced-motion is set or this session has already seen it.
export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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
      markRef.current,
      { opacity: 0, scale: 0.5, rotate: -8 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.55, ease: "back.out(2.2)" }
    )
      .to(markRef.current, { opacity: 0, scale: 0.85, duration: 0.3, ease: "power2.in" }, "+=0.25")
      .fromTo(
        logoRef.current,
        { opacity: 0, y: 10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" },
        "<"
      )
      .to({}, { duration: 0.45 })
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
      <div ref={markRef} className="absolute" style={{ opacity: 0 }}>
        <Image src="/logo/renosystem-mark.png" alt="" width={122} height={122} priority className="h-20 w-20 sm:h-28 sm:w-28" />
      </div>
      <div ref={logoRef} className="absolute" style={{ opacity: 0 }}>
        <Image src="/logo/renosystem-logo.png" alt="RENOSYSTEM" width={800} height={150} priority className="h-10 w-auto sm:h-14" />
      </div>
    </div>
  );
}
