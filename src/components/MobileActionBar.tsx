"use client";

import { useEffect, useState } from "react";
import { business } from "@/content/de";

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex gap-px bg-concrete-600/20 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={business.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-concrete-950 py-4 text-base font-semibold text-concrete-100 active:bg-concrete-800"
        aria-label={`Anrufen: ${business.phoneDisplay}`}
      >
        <span aria-hidden="true">📞</span> Anrufen
      </a>
      <a
        href={business.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-wood-600 py-4 text-base font-semibold text-concrete-100 active:bg-wood-500"
        aria-label="Per WhatsApp schreiben"
      >
        <span aria-hidden="true">💬</span> WhatsApp
      </a>
    </div>
  );
}
