import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
            <div>
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
            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl lg:block">
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1000&auto=format&fit=crop"
                alt=""
                fill
                sizes="28rem"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-concrete-100 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-concrete-950 sm:text-3xl">
              {about.principlesHeading}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.principles.map((principle, i) => (
                <div
                  key={principle.title}
                  className={`rounded-2xl p-6 ${i % 2 === 0 ? "bg-wood-500" : "bg-safety"}`}
                >
                  <span className="font-display text-2xl font-extrabold text-concrete-100/60">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-concrete-100">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-concrete-100/85">{principle.description}</p>
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
