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
  region: "Bad Rappenau und Umgebung, Raum Heilbronn", // TODO: Einsatzgebiet final bestätigen
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
    "RENOSYSTEM ALL-IN-ONE plant und realisiert Komplettsanierungen, Haussanierungen und Wohnungsrenovierungen im Raum Heilbronn — mit Festpreis nach persönlicher Besichtigung.",
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
      "Sie erhalten ein verbindliches Festpreisangebot — transparent, nachvollziehbar, ohne Stundensätze.",
  },
];

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

export const testimonials = {
  eyebrow: "Kundenstimmen",
  headline: "Was zufriedene Kunden über uns sagen — bald hier.",
  intro:
    "Wir veröffentlichen ausschließlich echte Bewertungen unserer Kunden. Sobald erste Projekte abgeschlossen und Rückmeldungen freigegeben sind, erscheinen sie an dieser Stelle.",
  placeholders: [
    { label: "Kundenstimme folgt in Kürze" },
    { label: "Kundenstimme folgt in Kürze" },
    { label: "Kundenstimme folgt in Kürze" },
  ],
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
