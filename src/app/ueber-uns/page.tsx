import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCta from "@/components/PageCta";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "Über uns",
  description: about.metaDescription,
};

export default function UeberUnsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader eyebrow={about.eyebrow} headline={about.headline} intro={about.intro} />

        <section className="bg-concrete-100 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
              {about.storyHeading}
            </h2>
            <div className="mt-5 space-y-4">
              {about.story.map((paragraph, i) => (
                <p key={i} className="text-balance text-base leading-relaxed text-concrete-600 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-concrete-950 py-16 noise-texture sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-concrete-100 sm:text-3xl">
              {about.principlesHeading}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.principles.map((principle, i) => (
                <div key={principle.title} className="rounded-2xl bg-concrete-900 p-6">
                  <span className="font-display text-2xl font-extrabold text-wood-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-concrete-100">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-concrete-300">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-concrete-100 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
              {about.areaHeading}
            </h2>
            <p className="mt-4 text-balance text-base leading-relaxed text-concrete-600 sm:text-lg">
              {about.areaText}
            </p>
          </div>
        </section>

        <PageCta />
      </main>
      <Footer />
    </>
  );
}
