import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCta from "@/components/PageCta";
import FaqAccordion from "@/components/FaqAccordion";
import { faqIntro, faqCategories } from "@/content/faq";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description:
    "Antworten auf die häufigsten Fragen zu Preisen, Ablauf und Leistungen einer Sanierung mit RENOSYSTEM ALL-IN-ONE.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <PageHeader eyebrow={faqIntro.eyebrow} headline={faqIntro.headline} intro={faqIntro.intro} />

        <section className="bg-concrete-100 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-16 px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <h2 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
                  {category.title}
                </h2>
                <div className="mt-4">
                  <FaqAccordion items={category.items} idPrefix={category.id} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <PageCta
          headline="Frage nicht dabei?"
          intro="Schreiben Sie uns direkt per WhatsApp oder rufen Sie an — wir antworten persönlich, nicht per Bot."
        />
      </main>
      <Footer />
    </>
  );
}
