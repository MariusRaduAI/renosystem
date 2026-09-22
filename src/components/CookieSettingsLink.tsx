"use client";

import { resetConsent } from "@/lib/consent";

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={resetConsent}
      className="text-sm text-concrete-600 hover:text-concrete-950"
    >
      Cookie-Einstellungen
    </button>
  );
}
