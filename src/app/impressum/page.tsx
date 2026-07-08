import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { impressum } from "@/content/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG für RENOSYSTEM ALL-IN-ONE.",
};

export default function ImpressumPage() {
  return <LegalPage title={impressum.title} updated={impressum.updated} sections={impressum.sections} />;
}
