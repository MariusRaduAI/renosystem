// Zentrale Inhaltsebene (Deutsch). Alle sichtbaren Texte der Website leben hier,
// damit Kopien angepasst werden können, ohne Komponenten zu berühren.
// Für eine spätere Mehrsprachigkeit (EN/RO) würde diese Datei durch
// content/en.ts, content/ro.ts usw. ergänzt und per Locale ausgewählt.

export const business = {
  name: "RENOSYSTEM ALL-IN-ONE",
  shortName: "RENOSYSTEM",
  legalForm: "Einzelunternehmen (Gewerbe)",
  owner: "Panc Nicodin Ciprian",
  street: "Mühlstraße 9/1",
  zip: "74906",
  city: "Bad Rappenau",
  region: "60 km rund um Bad Rappenau",
  phoneDisplay: "+49 176 60344045",
  phoneHref: "tel:+4917660344045",
  whatsappHref: "https://wa.me/4917660344045",
  whatsappDisplay: "+49 176 60344045",
  email: "contact@renosystem.com",
} as const;

export const site = {
  name: business.name,
  tagline: "Ihr Partner für komplette Renovierungen",
  metaDescription:
    "RENOSYSTEM ALL-IN-ONE plant und realisiert Komplettsanierungen, Haussanierungen und Wohnungsrenovierungen in Bad Rappenau und im Umkreis von 60 km — mit Festpreis nach persönlicher Besichtigung.",
};

export const nav = {
  links: [
    { label: "Leistungen", href: "/leistungen" },
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Warum wir", href: "/#warum-wir" },
    { label: "FAQ", href: "/haeufige-fragen" },
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Kontakt", href: "/#kontakt" },
  ],
  cta: "Anfragen",
};

export const hero = {
  eyebrow: "RENOSYSTEM ALL-IN-ONE · Bausanierung & Komplettsanierung",
  // Headline-Optionen (Auswahl siehe `headline`) — bei Bedarf leicht austauschbar.
  headlineOptions: [
    "Sanierung, die keine Fragen offen lässt.",
    "Ihr Zuhause. Ein Plan. Ein Festpreis.",
    "Komplettsanierung mit Plan statt Zufall.",
    "Struktur, wo andere improvisieren.",
  ],
  headline: "Sanierung, die keine Fragen offen lässt.",
  subline:
    "Kein Kostenvoranschlag, der später explodiert. Kein Hin- und Herschieben zwischen Handwerkern. Sie bekommen einen Festpreis nach persönlicher Besichtigung — und einen Ansprechpartner, der von der Entkernung bis zur Übergabe an Ihrer Seite bleibt.",
  ctaSecondary: "Unsere Leistungen",
  trustSignal: "Festpreis nach Besichtigung · Kein Preis am Telefon",
};

export const trustBar = [
  { label: "Festpreis-Garantie", detail: "Ein Preis. Ohne Überraschungen." },
  { label: "Persönliche Betreuung", detail: "Ein Ansprechpartner, der Inhaber selbst." },
  { label: "Erfahrung am Bau", detail: "Langjährige Praxis in Sanierung & Umbau" }, // TODO: konkrete Jahreszahl ergänzen
  { label: business.region, detail: "Vor Ort verwurzelt, persönlich erreichbar" },
];

export type ServiceItem = {
  name: string;
  description: string;
};

export type ServiceGroup = {
  id: string;
  number: string;
  title: string;
  intro: string;
  lead?: boolean;
  services: ServiceItem[];
};

export const servicesSection = {
  eyebrow: "Leistungen",
  headline: "Ein Team. Alle Gewerke. Ein Plan.",
  intro:
    "Von der Entkernung bis zur letzten Fliese: 14 Leistungen aus einer Hand, damit Sie nie selbst zwischen Handwerkern vermitteln müssen — und nie den Überblick verlieren, wer gerade wofür verantwortlich ist.",
  allServicesLink: "Alle Leistungen im Detail",
  allServicesHref: "/leistungen",
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "sanierung-umbau",
    number: "01",
    title: "Sanierung & Umbau",
    intro:
      "Der Kern unserer Arbeit: vollständige Sanierungen und Umbauten aus einer Hand — geplant, koordiniert und ausgeführt von einem Team.",
    lead: true,
    services: [
      {
        name: "Komplettsanierung",
        description:
          "Alle Gewerke aus einer Hand — von der Entkernung bis zur schlüsselfertigen Übergabe.",
      },
      {
        name: "Haussanierung",
        description: "Umfassende Sanierung von Ein- und Mehrfamilienhäusern, innen wie außen.",
      },
      {
        name: "Wohnungsrenovierung",
        description: "Renovierung einzelner Wohnungen für Eigennutzung, Vermietung oder Verkauf.",
      },
      {
        name: "Innenausbau",
        description: "Wände, Decken, Böden und Details — hochwertig ausgeführt bis ins Detail.",
      },
      {
        name: "Trockenbau",
        description: "Wände, Decken und Vorsatzschalen — präzise geplant und sauber verarbeitet.",
      },
      {
        name: "Abbruch- und Entkernungsarbeiten",
        description: "Fachgerechter Rückbau als solide Grundlage für jede Sanierung.",
      },
    ],
  },
  {
    id: "ausfuehrung-montage",
    number: "02",
    title: "Ausführung & Montage",
    intro: "Präzise Ausführungsarbeiten, die jeder Sanierung den letzten Schliff geben.",
    services: [
      {
        name: "Bodenverlegung",
        description: "Verlegung von Parkett, Vinyl, Fliesen und weiteren Bodenbelägen.",
      },
      {
        name: "Montage von Innentüren",
        description: "Fachgerechte Montage von Innentüren inklusive Zargen und Beschlägen.",
      },
      {
        name: "Montage genormter Bauelemente",
        description: "Einbau standardisierter Bauelemente nach geltenden technischen Vorgaben.",
      },
    ],
  },
  {
    id: "pflege-reinigung",
    number: "03",
    title: "Pflege & Reinigung",
    intro: "Damit Ihr Objekt auch nach der Sanierung gepflegt bleibt und einen guten Eindruck macht.",
    services: [
      {
        name: "Hausmeisterservice",
        description: "Laufende Betreuung und Instandhaltung Ihres Objekts.",
      },
      {
        name: "Pflasterreinigung",
        description: "Professionelle Reinigung von Hofeinfahrten, Wegen und Pflasterflächen.",
      },
      {
        name: "Terrassenreinigung",
        description: "Gründliche Reinigung und Pflege von Terrassenbelägen.",
      },
      {
        name: "Fassadenreinigung",
        description: "Schonende Reinigung von Fassaden für einen gepflegten Gesamteindruck.",
      },
    ],
  },
  {
    id: "beratung-steuerung",
    number: "04",
    title: "Beratung & Steuerung",
    intro: "Struktur und Überblick über den gesamten Projektverlauf — bei Bedarf auch ohne uns als Ausführende.",
    services: [
      {
        name: "Projektbetreuung",
        description:
          "Koordination von Gewerken, Terminen und Qualität über die gesamte Projektlaufzeit hinweg.",
      },
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSection = {
  eyebrow: "So arbeiten wir",
  headline: "Ein Ablauf wie ein Bauplan — Schritt für Schritt.",
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Telefon-Erstgespräch",
    description:
      "In einem kurzen Gespräch klären wir, worum es geht, und prüfen, ob Ihr Projekt zu unserem Leistungsspektrum passt.",
  },
  {
    number: "02",
    title: "Fragebogen",
    description:
      "Sie beantworten gezielte Fragen zu Objekt, gewünschtem Umfang und Qualitätsanspruch. Das schafft die Grundlage für ein passgenaues Angebot.",
  },
  {
    number: "03",
    title: "Besichtigung vor Ort",
    description:
      "Erst nach einer persönlichen Besichtigung können wir seriös kalkulieren. Ohne Besichtigung nennen wir keinen Preis.",
  },
  {
    number: "04",
    title: "Pauschal-Angebot",
    description:
      "Sie erhalten ein verbindliches Festpreisangebot — transparent, nachvollziehbar, ohne Überraschungen auf der Schlussrechnung.",
  },
];

export const pricing = {
  eyebrow: "Preise",
  headline: "Transparent von Anfang an.",
  body: "Kein Preis am Telefon, kein Rätselraten. Unser Stundensatz ist die Kalkulationsgrundlage — abgerechnet wird bei Ihrem Projekt aber immer der Festpreis, den wir gemeinsam nach einer kostenlosen Besichtigung vor Ort festlegen.",
  priceFrom: "ab",
  priceValue: "48 €",
  priceUnit: "pro Stunde",
  priceVat: "zzgl. MwSt.",
  note: "Dieser Stundensatz dient zur Orientierung. Der finale Festpreis für Ihr Projekt wird individuell im Rahmen einer kostenlosen Besichtigung vor Ort ermittelt.",
  cta: "Besichtigungstermin anfragen",
};

export const whyUs = {
  eyebrow: "Warum RENOSYSTEM",
  headline: "Ein Standard. Kein Kompromiss.",
  body: "Wir verkaufen Ihnen nicht die teuerste Variante, die Ihr Budget hergibt, und auch keine Billig-Ausführung, die in zwei Jahren wieder Thema wird. Jedes Projekt bekommt dieselbe sorgfältige Ausführung und dieselbe Qualität bei Material und Verarbeitung — unabhängig davon, wie groß der Auftrag ist.",
  points: [
    "Festpreis statt Stundenlohn",
    "Ein Ansprechpartner — vom ersten Anruf bis zur Übergabe",
    "Klarer Ablauf statt Chaos auf der Baustelle",
    "Wir arbeiten selektiv, um Qualität zu sichern",
  ],
};

export const portfolio = {
  eyebrow: "Projekte",
  headline: "Referenzen im Aufbau",
  intro:
    "Diese Galerie zeigt aktuell Platzhalterbilder im Stil unserer Projekte. Echte Vorher-Nachher-Fotos folgen, sobald abgeschlossene Projekte freigegeben sind.",
  placeholderNote: "Platzhalterbild",
  beforeLabel: "Vorher",
  afterLabel: "Nachher",
  dragHint: "Regler ziehen",
  projects: [
    {
      title: "Komplettsanierung Altbauwohnung",
      category: "Wohnungsrenovierung",
      imageUrl:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
      alt: "Renoviertes Wohnzimmer mit hellem Parkettboden und moderner Einrichtung (Platzhalterbild)",
    },
    {
      title: "Haussanierung Einfamilienhaus",
      category: "Haussanierung",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      alt: "Modernisiertes Hausinnere mit klaren Linien und Betonoptik (Platzhalterbild)",
    },
    {
      title: "Innenausbau mit Trockenbau",
      category: "Innenausbau",
      imageUrl:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
      alt: "Rohbau mit sichtbarer Trockenbau-Konstruktion vor Fertigstellung (Platzhalterbild)",
    },
    {
      title: "Komplettsanierung Bad & Küche",
      category: "Komplettsanierung",
      imageUrl:
        "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1600&auto=format&fit=crop",
      alt: "Sanierte Wohnfläche mit Blick auf offenen Küchenbereich (Platzhalterbild)",
    },
  ],
};

export type GoogleReview = {
  name: string;
  initials: string;
  reviewCount: string;
  timeAgo: string;
  rating: number;
  service: string;
  text: string;
};

export const testimonials = {
  eyebrow: "Kundenstimmen",
  headline: "Was unsere Kunden bei Google sagen.",
  intro: "Echte Bewertungen unserer Kunden — unbearbeitet, direkt von Google.",
  googleRatingLabel: "5,0",
  googleReviewCountLabel: "5 Bewertungen bei Google",
  reviews: [
    {
      name: "Petra Lang",
      initials: "PL",
      reviewCount: "2 Rezensionen",
      timeAgo: "vor 2 Wochen",
      rating: 5,
      service: "Hausrenovierungen",
      text: "Die Firma RenoSystem gefunden zu haben ist ein Segen und grenzt an ein Wunder! Ob im Haus oder Außerhalb, alles wird fachgerecht renoviert mit Können und viel Liebe zum Detail!\n\nDer Chef pflegt einen sehr guten Umgang mit seinen Mitarbeitern und geht strukturiert voran. Zu jedem Problem steht er mit Rat und Tat zur Seite.\n\nDieses Team kann ich nur weiterempfehlen! Sie sind schnell, zuverlässig und verwenden hochwertige Materialien.",
    },
    {
      name: "Helena Lang",
      initials: "HL",
      reviewCount: "9 Rezensionen",
      timeAgo: "vor 2 Wochen",
      rating: 5,
      service: "Hausrenovierungen",
      text: "Mit dem Renosystem-Team sind wir sehr zufrieden, sie sind pünktlich, schnell, hilfsbereit und sehr freundlich! Ideen, Material und Durchführung sind top! Wenn wir Handwerker brauchen, wissen wir auf jeden Fall auf wen wir uns verlassen können!!!\n\nSehr empfehlenswert!",
    },
    {
      name: "Ilona Plichta",
      initials: "IP",
      reviewCount: "2 Rezensionen",
      timeAgo: "vor 3 Wochen",
      rating: 5,
      service: "Hausrenovierungen",
      text: "Meine Erfahrungen mit dieser Firma waren durchweg positiv!! Über ein ganzes Jahr hindurch halfen die Jungs mir, meinen Traum vom sanierten Häuschen zu erfüllen. Es war immer möglich, mit dem Chef gemeinsam nach konstruktiven Lösungen zu suchen, und diese wurden dann mit viel Herzblut realisiert.\n\nIch glaube nicht, dass mein Projekt ohne RenoSystem gelungen wäre. Der Innenausbau eines halb zerfallenen Fachwerkhauses wurde sauber, schnell und fachlich einwandfrei ausgeführt.\n\nDarüber hinaus war es menschlich ein wertvolles Miteinander.\n\nIch kann nur Danke, Danke, Danke sagen für alle Kraft und Anstrengung, welche die Jungs für uns aufgebracht haben.\n\nDer Himmel hat euch uns geschickt.....\n\nWir haben den Glauben an ehrliche, fleißige und hilfsbereite Arbeiter wiedergefunden.\n\nWir haben die Firma allen Freunden weiterempfohlen, und auch dort waren alle hoch zufrieden.\n\nGut, dass es Cipri und seine Jungs gibt.....",
    },
    {
      name: "K. L.",
      initials: "KL",
      reviewCount: "1 Rezension",
      timeAgo: "vor 3 Wochen",
      rating: 5,
      service: "Hausrenovierungen",
      text: "Ich kann über RenoSystem nur das Beste sagen. Die Arbeiten (Innenausbau) wurden schnell, sauber und sorgfältig ausgeführt.\n\nIch schätze die Pünktlichkeit und Zuverlässigkeit. Absprachen wurden eingehalten. Alles in allem sehr empfehlenswert!",
    },
    {
      name: "Chan",
      initials: "C",
      reviewCount: "3 Rezensionen · 2 Fotos",
      timeAgo: "vor 4 Wochen",
      rating: 5,
      service: "Hausrenovierungen",
      text: "Excellent & Zuverlässig! 5 Sterne ⭐️⭐️⭐️⭐️⭐️",
    },
  ] as GoogleReview[],
};

export const contact = {
  eyebrow: "Kontakt",
  headline: "Lassen Sie uns über Ihr Projekt sprechen.",
  intro:
    "Füllen Sie das kurze Formular aus oder schreiben Sie uns direkt per WhatsApp — beides führt zu einem persönlichen Erstgespräch.",
  whatsappCta: "Direkt per WhatsApp schreiben",
  callCta: "Direkt anrufen",
  regionNote: `Einsatzgebiet: ${business.region}`,
  step1: {
    question: "Um welche Art von Projekt geht es?",
    options: [
      { value: "komplettsanierung", label: "Komplettsanierung" },
      { value: "einzelleistung", label: "Einzelne Leistung" },
      { value: "sonstiges", label: "Sonstiges" },
    ],
  },
  step2: {
    title: "Ihre Kontaktdaten",
    nameLabel: "Name",
    namePlaceholder: "Vor- und Nachname",
    phoneLabel: "Telefon",
    phonePlaceholder: "Ihre Telefonnummer",
    emailLabel: "E-Mail",
    emailPlaceholder: "ihre@email.de",
    messageLabel: "Nachricht",
    messagePlaceholder: "Kurz beschrieben: Was möchten Sie sanieren lassen?",
    preferredContactLabel: "Bevorzugter Kontaktweg",
    preferredContactOptions: [
      { value: "telefon", label: "Telefon" },
      { value: "whatsapp", label: "WhatsApp" },
      { value: "email", label: "E-Mail" },
    ],
    back: "Zurück",
    submit: "Anfrage absenden",
    submitting: "Wird gesendet …",
  },
  success: {
    title: "Vielen Dank für Ihre Anfrage.",
    message:
      "Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.", // TODO: Reaktionszeit final bestätigen
  },
  error: {
    title: "Etwas ist schiefgelaufen.",
    message:
      "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per WhatsApp.",
  },
  validation: {
    projectType: "Bitte wählen Sie eine Option aus.",
    name: "Bitte geben Sie Ihren Namen ein.",
    contactMethod: "Bitte geben Sie mindestens Telefon oder E-Mail an.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    message: "Bitte geben Sie eine kurze Nachricht ein.",
  },
};

export const footer = {
  description: site.tagline,
  servicesTitle: "Leistungen",
  companyTitle: "Unternehmen",
  companyLinks: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Projekte", href: "/#projekte" },
    { label: "Häufige Fragen", href: "/haeufige-fragen" },
    { label: "Ratgeber", href: "/ratgeber" },
  ],
  contactTitle: "Kontakt",
  legalTitle: "Rechtliches",
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutzerklärung", href: "/datenschutz" },
  ],
  copyright: `© ${business.shortName} ALL-IN-ONE. Alle Rechte vorbehalten.`,
};
