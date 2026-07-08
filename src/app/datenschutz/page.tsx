import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von RENOSYSTEM ALL-IN-ONE.",
};

export default function DatenschutzPage() {
  return (
    <LegalPage title={datenschutz.title} updated={datenschutz.updated} sections={datenschutz.sections} />
  );
}
