import { getSupabaseClient } from "@/lib/supabase";
import { portfolio } from "@/content/de";
import PortfolioGrid, { type PortfolioItem } from "./PortfolioGrid";

async function getProjects(): Promise<PortfolioItem[]> {
  const supabase = getSupabaseClient();

  if (supabase) {
    const { data, error } = await supabase
      .from("projects")
      .select("title, category, image_url, alt_text, is_placeholder")
      .order("sort_order", { ascending: true });

    if (!error && data && data.length > 0) {
      return data.map((row) => ({
        title: row.title,
        category: row.category,
        imageUrl: row.image_url,
        alt: row.alt_text,
        isPlaceholder: row.is_placeholder,
      }));
    }
  }

  // Fallback: statische Platzhalterprojekte aus der Content-Konfiguration,
  // solange kein Supabase-Projekt mit echten Daten angebunden ist.
  return portfolio.projects.map((project) => ({
    title: project.title,
    category: project.category,
    imageUrl: project.imageUrl,
    alt: project.alt,
    isPlaceholder: true,
  }));
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <section id="projekte" className="bg-concrete-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood-600">
            {portfolio.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-concrete-950 sm:text-5xl">
            {portfolio.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-concrete-600">{portfolio.intro}</p>
        </div>

        <div className="mt-14">
          <PortfolioGrid
            items={projects}
            placeholderNote={portfolio.placeholderNote}
            beforeLabel={portfolio.beforeLabel}
            afterLabel={portfolio.afterLabel}
            dragHint={portfolio.dragHint}
          />
        </div>
      </div>
    </section>
  );
}
