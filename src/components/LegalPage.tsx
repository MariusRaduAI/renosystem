import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="bg-concrete-100 pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance font-display text-3xl font-extrabold tracking-tight text-concrete-950 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-concrete-600">{updated}</p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-bold text-concrete-950">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed text-concrete-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
