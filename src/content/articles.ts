// Ratgeber-Artikel für /ratgeber. Echte, nützliche Inhalte mit lokalem und
// thematischem SEO-Wert — keine Füllartikel. Jeder Artikel endet mit einem
// klaren Bezug zurück zu unseren Leistungen und einem Kontakt-CTA.

export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  publishedDate: string;
  readTime: string;
  category: string;
  sections: ArticleSection[];
  relatedSlugs: string[];
};

export const ratgeberIntro = {
  eyebrow: "Ratgeber",
  headline: "Wissen, bevor Sie unterschreiben.",
  intro:
    "Ehrliche Einordnung statt Marketing-Floskeln — damit Sie vor Ihrer Sanierung die richtigen Fragen stellen können, egal ob am Ende wir oder ein anderer Betrieb den Zuschlag bekommt.",
};

export const articles: Article[] = [
  {
    slug: "was-kostet-eine-komplettsanierung",
    title: "Was kostet eine Komplettsanierung? Ein realistischer Überblick",
    excerpt:
      "Warum niemand seriös einen Pauschalpreis am Telefon nennen kann — und welche Faktoren die Kosten einer Komplettsanierung tatsächlich bestimmen.",
    metaDescription:
      "Was kostet eine Komplettsanierung wirklich? Die wichtigsten Kostentreiber im Überblick — verständlich erklärt, ohne unseriöse Pauschalzahlen.",
    publishedDate: "10. Januar 2026",
    readTime: "6 Min. Lesezeit",
    category: "Kosten & Angebot",
    sections: [
      {
        paragraphs: [
          "„Was kostet eine Komplettsanierung pro Quadratmeter?“ ist die häufigste Frage, die wir bekommen — und die einzige ehrliche Antwort lautet: Das kommt darauf an. Nicht als Ausrede, sondern weil eine Komplettsanierung aus so vielen Einzelfaktoren besteht, dass eine pauschale Zahl entweder viel zu niedrig ist, um zu locken, oder viel zu hoch, um sich abzusichern.",
          "Trotzdem lässt sich sehr wohl erklären, welche Faktoren die Kosten tatsächlich treiben — damit Sie eine realistische Erwartung entwickeln können, bevor Sie das erste Angebot in der Hand halten.",
        ],
      },
      {
        heading: "Warum es keine seriöse Pauschalzahl gibt",
        paragraphs: [
          "Zwei Wohnungen mit identischer Quadratmeterzahl können in der Sanierung um das Doppelte auseinanderliegen — je nach Zustand der Bausubstanz, Alter der Installationen und gewünschtem Ausstattungsniveau. Ein Anbieter, der Ihnen am Telefon eine Zahl nennt, ohne das Objekt gesehen zu haben, rät entweder oder kalkuliert bewusst niedrig, um den Auftrag zu bekommen — mit der Rechnung, die später steigt.",
        ],
      },
      {
        heading: "Die wichtigsten Kostentreiber",
        list: [
          "Grundfläche und Grundriss — mehr Fläche und mehr Räume bedeuten mehr Aufwand in jedem Gewerk",
          "Zustand der Bausubstanz — Altbauten mit veralteter Elektrik oder Feuchtigkeitsschäden verursachen oft unsichtbaren Mehraufwand",
          "Umfang der beauftragten Gewerke — nur Boden und Wände ist etwas anderes als Elektrik, Sanitär, Trockenbau und Boden zusammen",
          "Gewünschte Ausstattungsstufe — Materialqualität und Verarbeitungsdetails wirken sich direkt auf den Preis aus",
          "Zugänglichkeit und Logistik — Etage, Parksituation und Anfahrt beeinflussen den Arbeitsaufwand",
        ],
      },
      {
        heading: "Drei Qualitätsstufen — eine Orientierung, kein Preis",
        paragraphs: [
          "Wir arbeiten mit drei Qualitätsstufen — Standard, Gehoben und Premium. Sie unterscheiden sich nicht in der handwerklichen Sorgfalt, sondern in Materialqualität und Gestaltungsaufwand. Nach der Besichtigung empfehlen wir Ihnen die Stufe, die zu Objekt, Budget und Nutzung passt — statt Ihnen automatisch die teuerste Variante vorzuschlagen.",
        ],
      },
      {
        heading: "Was eine seriöse Kalkulation stattdessen braucht",
        paragraphs: [
          "Ein belastbarer Festpreis entsteht in drei Schritten: ein kurzes Telefongespräch zur Grobeinordnung, ein Fragebogen zu Objekt und Wünschen, und eine persönliche Besichtigung vor Ort. Erst danach lässt sich seriös kalkulieren — und genau danach richten wir uns.",
          "Diese Reihenfolge kostet Sie ein wenig mehr Zeit als ein Anruf mit sofortiger Zahl. Sie erspart Ihnen dafür eine Schlussrechnung, die nicht zum ursprünglichen Angebot passt.",
        ],
      },
    ],
    relatedSlugs: ["ablauf-komplettsanierung", "checkliste-vor-der-sanierung"],
  },
  {
    slug: "sanierung-oder-renovierung-unterschied",
    title: "Sanierung oder Renovierung: Was ist eigentlich der Unterschied?",
    excerpt:
      "Die beiden Begriffe werden ständig synonym verwendet — sind aber unterschiedlich genug, um Ihre Planung, Ihr Budget und Ihren Zeitrahmen direkt zu beeinflussen.",
    metaDescription:
      "Sanierung oder Renovierung — wo liegt der Unterschied? Klare Definitionen und eine Entscheidungshilfe, welches Vorgehen zu Ihrem Vorhaben passt.",
    publishedDate: "24. Januar 2026",
    readTime: "4 Min. Lesezeit",
    category: "Grundlagen",
    sections: [
      {
        paragraphs: [
          "Im Alltag werden „Sanierung“ und „Renovierung“ praktisch austauschbar verwendet. Fachlich ist der Unterschied jedoch relevant — weil er bestimmt, welcher Aufwand, welches Budget und welcher Zeitrahmen realistisch sind.",
        ],
      },
      {
        heading: "Renovierung: Optik und Zustand auffrischen",
        paragraphs: [
          "Eine Renovierung verbessert den optischen und funktionalen Zustand, ohne in die Bausubstanz einzugreifen. Neuer Bodenbelag, frische Wände, ein modernisiertes Bad innerhalb der bestehenden Struktur — das sind klassische Renovierungsmaßnahmen. Sie sind planbarer, meist schneller umsetzbar und in der Regel günstiger als eine Sanierung.",
        ],
      },
      {
        heading: "Sanierung: Substanz wiederherstellen oder erneuern",
        paragraphs: [
          "Eine Sanierung behebt Schäden oder Mängel an der Bausubstanz selbst — etwa veraltete Elektrik, marode Leitungen, Feuchtigkeitsschäden oder eine notwendige Entkernung. Sie greift tiefer ein, dauert entsprechend länger und ist schwerer im Vorfeld exakt zu kalkulieren, weil sich der tatsächliche Zustand oft erst während der Arbeiten vollständig zeigt.",
        ],
      },
      {
        heading: "Warum die Unterscheidung für Sie wichtig ist",
        list: [
          "Budget: Sanierungen haben tendenziell mehr Unsicherheitsfaktoren als reine Renovierungen",
          "Zeitrahmen: Substanzeingriffe brauchen mehr Vorlauf und mehr Bauzeit",
          "Auszugsfrage: Bei einer Sanierung mit Entkernung ist ein vorübergehender Auszug oft nötig, bei einer Renovierung seltener",
          "Genehmigungen: Eingriffe in die Bausubstanz können genehmigungspflichtig sein, reine Renovierungen meist nicht",
        ],
      },
      {
        heading: "In der Praxis oft beides zugleich",
        paragraphs: [
          "Die meisten Projekte, die uns erreichen, sind eine Mischung: sanierungsbedürftige Substanz an manchen Stellen, reiner Renovierungsbedarf an anderen. Deshalb sprechen wir bewusst von „Komplettsanierung“, wenn beides zusammenkommt — und klären im Erstgespräch, was in Ihrem konkreten Fall tatsächlich zutrifft, bevor wir kalkulieren.",
        ],
      },
    ],
    relatedSlugs: ["was-kostet-eine-komplettsanierung", "checkliste-vor-der-sanierung"],
  },
  {
    slug: "checkliste-vor-der-sanierung",
    title: "Checkliste: 7 Punkte, die Sie vor der Sanierung klären sollten",
    excerpt:
      "Diese sieben Fragen sollten Sie sich stellen, bevor Sie den ersten Handwerksbetrieb kontaktieren — unabhängig davon, wer am Ende Ihr Projekt umsetzt.",
    metaDescription:
      "Checkliste vor der Sanierung: 7 Punkte, die Sie klären sollten, bevor Sie Handwerker beauftragen — für eine realistische Planung ohne böse Überraschungen.",
    publishedDate: "6. Februar 2026",
    readTime: "5 Min. Lesezeit",
    category: "Planung",
    sections: [
      {
        paragraphs: [
          "Die meisten Probleme bei Sanierungen entstehen nicht während der Bauphase, sondern davor — durch unklare Erwartungen, die erst mitten in der Umsetzung sichtbar werden. Diese sieben Punkte sollten Sie für sich klären, bevor Sie den ersten Betrieb kontaktieren.",
        ],
      },
      {
        heading: "1. Budget realistisch und mit Puffer einschätzen",
        paragraphs: [
          "Legen Sie nicht nur die Zielsumme fest, sondern auch, wie viel finanzieller Spielraum tatsächlich vorhanden ist. Ein Festpreisangebot schützt Sie vor Kostenexplosionen — ersetzt aber nicht die Frage, was Sie sich grundsätzlich leisten wollen.",
        ],
      },
      {
        heading: "2. Zustand der Bausubstanz grob einschätzen",
        paragraphs: [
          "Bei älteren Immobilien lohnt sich ein ehrlicher Blick auf Elektrik, Leitungen und mögliche Feuchtigkeitsspuren, bevor Sie planen. Das ersetzt keine Fachbesichtigung, hilft Ihnen aber, realistische Erwartungen zu entwickeln.",
        ],
      },
      {
        heading: "3. Auszugsfrage klären",
        paragraphs: [
          "Können und wollen Sie während der Bauphase in der Immobilie bleiben? Diese Entscheidung beeinflusst Zeitplan, Ablauf und teils auch die Kosten erheblich.",
        ],
      },
      {
        heading: "4. Pflicht und Wunsch klar trennen",
        paragraphs: [
          "Was muss saniert werden, weil es defekt oder überholt ist — und was wäre schön, ist aber verzichtbar? Diese Trennung hilft, das Budget später sinnvoll zu priorisieren, statt an der falschen Stelle zu sparen.",
        ],
      },
      {
        heading: "5. Genehmigungspflicht prüfen",
        paragraphs: [
          "Eingriffe in tragende Strukturen, an der Fassade oder am Dach können genehmigungspflichtig sein. Klären Sie das frühzeitig, bevor ein Zeitplan darauf aufbaut.",
        ],
      },
      {
        heading: "6. Qualitätsstufe für sich definieren",
        paragraphs: [
          "Solide und funktional, gehoben oder Premium — je klarer Sie für sich wissen, wo Sie stehen, desto passgenauer wird jedes Angebot, das Sie erhalten.",
        ],
      },
      {
        heading: "7. Ansprechpartner und Kommunikationsweg klären",
        paragraphs: [
          "Wie viele Personen sind an der Entscheidung beteiligt, und wer ist während der Bauphase erreichbar? Klare Zuständigkeiten auf Ihrer Seite verhindern Verzögerungen, die durch fehlende Rückmeldungen entstehen.",
        ],
      },
      {
        heading: "Und danach?",
        paragraphs: [
          "Mit diesen sieben Punkten im Kopf ist das Erstgespräch mit jedem Sanierungsbetrieb deutlich konkreter — auch mit uns. Genau diese Themen fragen wir ohnehin über unseren Fragebogen ab, bevor wir zur Besichtigung kommen.",
        ],
      },
    ],
    relatedSlugs: ["was-kostet-eine-komplettsanierung", "ablauf-komplettsanierung"],
  },
  {
    slug: "ablauf-komplettsanierung",
    title: "Ablauf einer Komplettsanierung: Von der Besichtigung bis zur Übergabe",
    excerpt:
      "Ein realistischer Blick auf die einzelnen Bauphasen einer Komplettsanierung — von der Entkernung bis zum letzten Feinschliff.",
    metaDescription:
      "So läuft eine Komplettsanierung Schritt für Schritt ab: von Besichtigung und Angebot über Entkernung und Rohinstallation bis zur schlüsselfertigen Übergabe.",
    publishedDate: "18. Februar 2026",
    readTime: "5 Min. Lesezeit",
    category: "Ablauf",
    sections: [
      {
        paragraphs: [
          "Eine Komplettsanierung wirkt von außen wie ein einziger, unübersichtlicher Prozess. Tatsächlich folgt sie einer klaren Abfolge von Phasen — sowohl in der Vorbereitung als auch auf der Baustelle selbst.",
        ],
      },
      {
        heading: "Phase 1: Vor dem ersten Handschlag",
        list: [
          "Telefon-Erstgespräch — Grobe Einordnung, ob Ihr Vorhaben zum Leistungsspektrum passt",
          "Fragebogen — gezielte Fragen zu Objekt, Umfang und Qualitätsanspruch",
          "Besichtigung vor Ort — die Grundlage jeder seriösen Kalkulation",
          "Festpreisangebot — verbindlich, transparent, ohne Stundensätze",
        ],
      },
      {
        heading: "Phase 2: Entkernen",
        paragraphs: [
          "Der erste sichtbare Schritt auf der Baustelle: nicht-tragende Wände, alte Böden und veraltete Installationen werden fachgerecht zurückgebaut. Diese Phase legt die Grundlage für alles, was danach kommt — ein sauberer Rückbau erspart späteren Gewerken unnötigen Mehraufwand.",
        ],
      },
      {
        heading: "Phase 3: Rohinstallation",
        paragraphs: [
          "Elektrik, Leitungen und technische Installationen werden neu verlegt und sauber geordnet. In dieser Phase entscheidet sich, wie zuverlässig die Haustechnik in den nächsten Jahrzehnten funktioniert — hier lohnt sich keine Abkürzung.",
        ],
      },
      {
        heading: "Phase 4: Verputzen und Trockenbau",
        paragraphs: [
          "Wände und Decken werden fertiggestellt — neue Raumaufteilungen durch Trockenbau, anschließend Verputz oder andere Wandaufbauten. Am Ende dieser Phase ist der Raum bereit für den Bodenbelag und den Innenausbau.",
        ],
      },
      {
        heading: "Phase 5: Boden, Türen und Feinschliff",
        paragraphs: [
          "Bodenverlegung, Türenmontage und alle Detailarbeiten, die aus einer sanierten Baustelle wieder ein Zuhause machen. Hier zeigt sich, ob wirklich sauber gearbeitet wurde — an Kanten, Übergängen und Details, die man erst bemerkt, wenn sie fehlen.",
        ],
      },
      {
        heading: "Phase 6: Übergabe",
        paragraphs: [
          "Gemeinsame Abnahme, letzte Kontrolle, schlüsselfertige Übergabe. Damit endet unsere Rolle als ausführender Betrieb — auf Wunsch übernehmen wir im Anschluss auch die laufende Pflege über unseren Hausmeisterservice.",
        ],
      },
      {
        heading: "Warum ein klarer Ablauf mehr wert ist als ein niedriger Preis",
        paragraphs: [
          "Die meiste Frustration bei Sanierungen entsteht nicht durch die Kosten, sondern durch fehlende Struktur — Gewerke, die aufeinander warten, Unklarheit darüber, was gerade passiert, und ein Ansprechpartner, der sich nach der Unterschrift nicht mehr meldet. Ein verbindlicher Ablauf mit klaren Phasen ist deshalb kein Detail, sondern der eigentliche Wert einer guten Zusammenarbeit.",
        ],
      },
    ],
    relatedSlugs: ["was-kostet-eine-komplettsanierung", "checkliste-vor-der-sanierung"],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
