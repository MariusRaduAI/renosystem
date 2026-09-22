"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_EVENT, getConsent, setConsent } from "@/lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(getConsent() === null);
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border border-concrete-950/10 bg-white p-5 shadow-lg shadow-concrete-950/10 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-sm">
      <p className="text-sm leading-relaxed text-concrete-600">
        Wir nutzen Google Analytics, um zu verstehen, wie Besucher unsere Website nutzen. Das geschieht nur mit Ihrer Einwilligung — mehr dazu in unserer{" "}
        <Link href="/datenschutz" className="font-semibold text-wood-600 hover:text-safety">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-wood-500 px-5 text-sm font-semibold text-concrete-100 transition-colors hover:bg-safety"
        >
          Akzeptieren
        </button>
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-concrete-950/15 px-5 text-sm font-semibold text-concrete-950 transition-colors hover:bg-concrete-100"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}
