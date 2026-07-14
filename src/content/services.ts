// Detailseiten-Inhalte je Einzelleistung. Ergänzt `serviceGroups` aus content/de.ts
// um die Tiefe, die eigene SEO-Landingpages brauchen (eigener Intro-Text,
// Leistungsumfang, Zielgruppe, service-spezifische FAQ, verwandte Leistungen).

export type ServiceDetail = {
  slug: string;
  groupId: string;
  name: string;
  shortDescription: string;
  metaDescription: string;
  heroIntro: string;
  highlights: string[];
  idealFor: string;
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "komplettsanierung",
    groupId: "sanierung-umbau",
    name: "Komplettsanierung",
    shortDescription: "Alle Gewerke aus einer Hand — von der Entkernung bis zur schlüsselfertigen Übergabe.",
    metaDescription:
      "Komplettsanierung aus einer Hand in Bad Rappenau und Raum Heilbronn: ein Ansprechpartner, ein Festpreis, keine Koordination zwischen Einzelgewerken. Jetzt Erstgespräch vereinbaren.",
    heroIntro:
      "Eine Komplettsanierung scheitert selten am Handwerk — sie scheitert an der Koordination. Zehn Gewerke, zehn Zeitpläne, zehn Ansprechpartner, und Sie mittendrin. Wir übernehmen genau das: Planung, Reihenfolge, Qualitätskontrolle und Kommunikation, damit Sie einen Termin im Kalender haben statt zehn.",
    highlights: [
      "Ein Vertrag, ein Festpreis, ein Ansprechpartner für das gesamte Projekt",
      "Entkernung, Rohinstallation, Trockenbau, Boden, Türen und Feinschliff aus einer Hand koordiniert",
      "Verbindlicher Zeitplan statt vager Zusagen — Sie wissen, wann welches Gewerk dran ist",
      "Regelmäßige Baustellenfotos und Status-Updates, auch wenn Sie nicht vor Ort sind",
      "Schlüsselfertige Übergabe mit gemeinsamer Abnahme",
    ],
    idealFor:
      "Eigentümer, die eine Wohnung oder ein Haus vollständig auf einen neuen Stand bringen wollen — zur Eigennutzung, Vermietung oder vor dem Verkauf — und keine Zeit oder Lust haben, selbst zehn Handwerksbetriebe zu koordinieren.",
    faq: [
      {
        question: "Wie lange dauert eine Komplettsanierung?",
        answer:
          "Das hängt stark vom Umfang ab — eine sanierte 3-Zimmer-Wohnung ist anders zu kalkulieren als ein freistehendes Einfamilienhaus. Nach der Besichtigung nennen wir Ihnen einen realistischen, verbindlichen Zeitrahmen als Teil des Angebots — keine vage Schätzung, sondern einen Plan, an dem wir uns messen lassen.",
      },
      {
        question: "Muss ich während der Sanierung ausziehen?",
        answer:
          "Bei einer Komplettsanierung mit Entkernung in der Regel ja, zumindest für die staubintensive Phase — wir sprechen das konkret bei der Besichtigung durch und stimmen den Ablauf auf Ihre Situation ab.",
      },
      {
        question: "Bekomme ich einen Festpreis oder wird nach Stunden abgerechnet?",
        answer:
          "Festpreis. Nach der Besichtigung und Ihren Angaben im Fragebogen erhalten Sie ein verbindliches Pauschalangebot — keine Stundenzettel, keine Überraschungen auf der Schlussrechnung.",
      },
    ],
    relatedSlugs: ["haussanierung", "wohnungsrenovierung", "trockenbau"],
  },
  {
    slug: "haussanierung",
    groupId: "sanierung-umbau",
    name: "Haussanierung",
    shortDescription: "Umfassende Sanierung von Ein- und Mehrfamilienhäusern, innen wie außen.",
    metaDescription:
      "Haussanierung für Ein- und Mehrfamilienhäuser im Raum Heilbronn: energetische und optische Modernisierung innen und außen, mit Festpreis und einem festen Ansprechpartner.",
    heroIntro:
      "Ein Haus altert nie an einer einzigen Stelle. Dach, Fassade, Grundriss, Haustechnik — irgendwann kommt vieles gleichzeitig zusammen. Wir sanieren Ein- und Mehrfamilienhäuser innen wie außen als zusammenhängendes Projekt, statt jede Baustelle einzeln zu beauftragen.",
    highlights: [
      "Innensanierung und Fassaden-, Dach- oder Außenarbeiten aus einer Planung heraus",
      "Für Einfamilienhäuser, Mehrfamilienhäuser und Bestandsimmobilien mit Sanierungsstau",
      "Priorisierung nach Dringlichkeit, wenn nicht alles auf einmal möglich oder nötig ist",
      "Abstimmung mit Statik-relevanten oder genehmigungspflichtigen Maßnahmen",
      "Ein Team, ein Zeitplan — auch bei bewohntem Objekt während der Sanierung",
    ],
    idealFor:
      "Eigentümer eines Ein- oder Mehrfamilienhauses mit Sanierungsstau — sei es nach einem Kauf, vor einer Vermietung oder weil mehrere Gewerke gleichzeitig fällig geworden sind.",
    faq: [
      {
        question: "Sanieren Sie auch Mehrfamilienhäuser mit mehreren Parteien?",
        answer:
          "Ja. Bei bewohnten Mehrfamilienhäusern stimmen wir den Ablauf zusätzlich mit den Mietparteien ab, um Lärm- und Zugangszeiten realistisch zu planen — das besprechen wir konkret bei der Besichtigung.",
      },
      {
        question: "Kann ich während der Haussanierung wohnen bleiben?",
        answer:
          "Bei abschnittsweiser Sanierung oft ja, bei umfassenden Maßnahmen mit Entkernung meist nicht durchgehend. Wir sagen Ihnen nach der Besichtigung ehrlich, was in Ihrem Fall realistisch ist.",
      },
    ],
    relatedSlugs: ["komplettsanierung", "fassadenreinigung", "entkernung"],
  },
  {
    slug: "wohnungsrenovierung",
    groupId: "sanierung-umbau",
    name: "Wohnungsrenovierung",
    shortDescription: "Renovierung einzelner Wohnungen für Eigennutzung, Vermietung oder Verkauf.",
    metaDescription:
      "Wohnungsrenovierung in Bad Rappenau und Raum Heilbronn — für Eigennutzung, Vermietung oder Verkauf. Fester Ablauf, Festpreis, ein Ansprechpartner.",
    heroIntro:
      "Nicht jede Wohnung braucht eine Kernsanierung. Manchmal reicht ein gezielter, sauber ausgeführter Umbau — neue Böden, frische Wände, ein modernisiertes Bad —, um aus einer abgewohnten Wohnung wieder ein attraktives Zuhause zu machen.",
    highlights: [
      "Passgenauer Umfang: von der punktuellen Modernisierung bis zur Vollrenovierung",
      "Besonders geeignet vor der Vermietung oder dem Verkauf, um den Wert sichtbar zu machen",
      "Böden, Wände, Bad, Küche und Türen aus einer Hand statt Einzelaufträgen",
      "Klarer Zeitplan — wichtig, wenn ein Mietbeginn oder Verkaufstermin ansteht",
      "Auf Wunsch Abstimmung mit Maklern oder Verwaltungen",
    ],
    idealFor:
      "Eigentümer einer einzelnen Wohnung, die vor dem Vermieten, Verkaufen oder dem eigenen Einzug in neuem Zustand übergeben werden soll.",
    faq: [
      {
        question: "Renovieren Sie auch nur einzelne Räume, zum Beispiel nur das Bad?",
        answer:
          "Ja, punktuelle Renovierungen sind möglich. Bei sehr kleinem Umfang lohnt sich unter Umständen eher eine Einzelleistung — bei der Besichtigung sagen wir Ihnen ehrlich, was für Ihr Vorhaben sinnvoll ist.",
      },
      {
        question: "Wie schnell kann die Renovierung starten, wenn ein Mietbeginn feststeht?",
        answer:
          "Das hängt von unserer aktuellen Auslastung und dem Umfang der Arbeiten ab. Nennen Sie uns Ihren Zieltermin im Erstgespräch — wir sagen Ihnen direkt, ob er realistisch ist.",
      },
    ],
    relatedSlugs: ["bodenverlegung", "innenausbau", "komplettsanierung"],
  },
  {
    slug: "innenausbau",
    groupId: "sanierung-umbau",
    name: "Innenausbau",
    shortDescription: "Wände, Decken, Böden und Details — hochwertig ausgeführt bis ins Detail.",
    metaDescription:
      "Innenausbau in Bad Rappenau und Raum Heilbronn: Wände, Decken, Böden und Details hochwertig umgesetzt — als Teil einer Sanierung oder als eigenständiges Projekt.",
    heroIntro:
      "Am Innenausbau entscheidet sich, ob eine Sanierung nach Handwerk oder nach Zuhause aussieht. Saubere Kanten, plane Wände, stimmige Übergänge — die Details, die man nicht bewusst wahrnimmt, wenn sie richtig gemacht sind.",
    highlights: [
      "Wände, Decken, Böden und Übergänge aus einer Ausführung",
      "Abstimmung von Materialien und Details über alle Räume hinweg",
      "Kombinierbar mit Trockenbau, Bodenverlegung und Türmontage aus unserem Programm",
      "Geeignet als eigenständiges Projekt oder als Teil einer größeren Sanierung",
      "Ausführung in drei Qualitätsstufen — passend zu Anspruch und Budget",
    ],
    idealFor:
      "Eigentümer, die einzelne Räume oder eine ganze Wohnung hochwertig fertigstellen lassen wollen — ohne notwendigerweise eine komplette Sanierung zu benötigen.",
    faq: [
      {
        question: "Was zählt konkret zum Innenausbau?",
        answer:
          "Im Kern: nicht-tragende Wände, Deckenverkleidungen, Bodenaufbau und -verlegung sowie die handwerkliche Fertigstellung von Räumen bis zur letzten Kante. Trockenbau- und Bodenarbeiten führen wir bei Bedarf als eigene, aufeinander abgestimmte Leistungen dazu.",
      },
    ],
    relatedSlugs: ["trockenbau", "bodenverlegung", "wohnungsrenovierung"],
  },
  {
    slug: "trockenbau",
    groupId: "sanierung-umbau",
    name: "Trockenbau",
    shortDescription: "Wände, Decken und Vorsatzschalen — präzise geplant und sauber verarbeitet.",
    metaDescription:
      "Trockenbau in Bad Rappenau und Raum Heilbronn: Wände, Decken und Vorsatzschalen präzise geplant und verarbeitet — als Einzelleistung oder Teil einer Komplettsanierung.",
    heroIntro:
      "Trockenbau ist schnell erklärt und schwer richtig gemacht: gerade Kanten, saubere Verspachtelung, keine sichtbaren Übergänge. Genau daran erkennt man am Ende, ob sauber gearbeitet wurde.",
    highlights: [
      "Neue Raumaufteilungen durch nicht-tragende Trennwände",
      "Vorsatzschalen zur Leitungsführung oder Dämmung",
      "Abgehängte Decken, auch mit integrierter Beleuchtung",
      "Fach- und sauber verarbeitete Übergänge, direkt anschlussfertig für Maler und Bodenleger",
      "Als Einzelleistung oder eingebettet in eine größere Sanierung buchbar",
    ],
    idealFor:
      "Eigentümer, die eine Raumaufteilung ändern, Leitungen sauber verkleiden oder eine Decke abhängen lassen wollen — auch unabhängig von einer Komplettsanierung.",
    faq: [
      {
        question: "Kann ich Trockenbau als reine Einzelleistung beauftragen?",
        answer:
          "Ja. Trockenbau gehört zu unserem Kernprogramm und ist auch ohne begleitende Komplettsanierung buchbar.",
      },
      {
        question: "Übernehmen Sie auch das Verspachteln und Schleifen?",
        answer:
          "Ja, die Trockenbauarbeiten werden bei uns bis zur maler- und bodenfertigen Fläche ausgeführt.",
      },
    ],
    relatedSlugs: ["innenausbau", "komplettsanierung", "entkernung"],
  },
  {
    slug: "entkernung",
    groupId: "sanierung-umbau",
    name: "Abbruch- und Entkernungsarbeiten",
    shortDescription: "Fachgerechter Rückbau als solide Grundlage für jede Sanierung.",
    metaDescription:
      "Abbruch- und Entkernungsarbeiten in Bad Rappenau und Raum Heilbronn: fachgerechter, sauberer Rückbau als Grundlage für Ihre Sanierung — inklusive Entsorgung.",
    heroIntro:
      "Jede gute Sanierung beginnt mit einem sauberen Rückbau. Wer hier improvisiert, trägt das Risiko bis zum letzten Gewerk mit sich — von unerwarteten Leitungen bis zu beschädigter Bausubstanz, die eigentlich stehen bleiben sollte.",
    highlights: [
      "Fachgerechter Rückbau nicht-tragender Wände, alter Böden und Installationen",
      "Sorgfältiger Umgang mit Bausubstanz, die erhalten bleiben soll",
      "Organisierte Entsorgung und Containerlogistik",
      "Grundlage für alle weiteren Gewerke — sauber übergeben für Elektrik, Trockenbau und Boden",
      "Auf Wunsch inklusive Bestandsaufnahme vor Beginn",
    ],
    idealFor:
      "Eigentümer, die eine Wohnung oder ein Haus vor einer Sanierung fachgerecht entkernen lassen wollen — als eigenständiger erster Schritt oder als Teil einer Komplettsanierung.",
    faq: [
      {
        question: "Ist die Entsorgung im Preis enthalten?",
        answer:
          "Ja, Container- und Entsorgungslogistik planen wir als Teil des Angebots mit ein, damit am Ende keine Zusatzrechnung überrascht.",
      },
    ],
    relatedSlugs: ["komplettsanierung", "trockenbau", "haussanierung"],
  },
  {
    slug: "bodenverlegung",
    groupId: "ausfuehrung-montage",
    name: "Bodenverlegung",
    shortDescription: "Verlegung von Parkett, Vinyl, Fliesen und weiteren Bodenbelägen.",
    metaDescription:
      "Bodenverlegung in Bad Rappenau und Raum Heilbronn: Parkett, Vinyl und Fliesen fachgerecht verlegt — als Einzelleistung oder Teil Ihrer Sanierung.",
    heroIntro:
      "Der Boden ist die größte zusammenhängende Fläche jedes Raums — und die, die am wenigsten Fehler verzeiht. Ein sauber vorbereiteter Untergrund und eine präzise Verlegung entscheiden darüber, ob er in zehn Jahren noch genauso gut aussieht wie am ersten Tag.",
    highlights: [
      "Parkett, Vinyl, Fliesen und weitere Bodenbeläge fachgerecht verlegt",
      "Fachgerechte Untergrundvorbereitung vor der Verlegung",
      "Saubere Übergänge zu Türen, Wänden und Sockelleisten",
      "Beratung zur passenden Belagswahl je nach Raum und Nutzung",
      "Als Einzelleistung oder im Rahmen einer Renovierung buchbar",
    ],
    idealFor:
      "Eigentümer, die einen neuen Bodenbelag verlegen lassen möchten — von einzelnen Räumen bis zur kompletten Wohnung.",
    faq: [
      {
        question: "Welchen Bodenbelag empfehlen Sie?",
        answer:
          "Das hängt vom Raum, der Nutzung und Ihrem Budget ab. Wir beraten Sie bei der Besichtigung ehrlich zu Vor- und Nachteilen, statt Ihnen pauschal den teuersten Belag zu empfehlen.",
      },
    ],
    relatedSlugs: ["wohnungsrenovierung", "innenausbau", "tuerenmontage"],
  },
  {
    slug: "tuerenmontage",
    groupId: "ausfuehrung-montage",
    name: "Montage von Innentüren",
    shortDescription: "Fachgerechte Montage von Innentüren inklusive Zargen und Beschlägen.",
    metaDescription:
      "Montage von Innentüren in Bad Rappenau und Raum Heilbronn — inklusive Zargen und Beschlägen, präzise und passgenau eingebaut.",
    heroIntro:
      "Eine schief eingebaute Tür fällt jeden Tag auf — auch wenn der Rest der Renovierung perfekt gelungen ist. Wir montieren Innentüren inklusive Zargen und Beschlägen so, dass sie leichtgängig schließen und sauber im Rahmen sitzen.",
    highlights: [
      "Montage von Zargen, Türblättern und Beschlägen aus einer Hand",
      "Präzise Ausrichtung für einen leichtgängigen, dauerhaft passgenauen Sitz",
      "Kombinierbar mit Bodenverlegung und Innenausbau",
      "Geeignet für Einzelaustausch wie für den kompletten Türsatz einer Wohnung",
    ],
    idealFor:
      "Eigentümer, die einzelne oder alle Innentüren einer Wohnung austauschen oder neu einbauen lassen wollen.",
    faq: [],
    relatedSlugs: ["bodenverlegung", "innenausbau", "bauelemente-montage"],
  },
  {
    slug: "bauelemente-montage",
    groupId: "ausfuehrung-montage",
    name: "Montage genormter Bauelemente",
    shortDescription: "Einbau standardisierter Bauelemente nach geltenden technischen Vorgaben.",
    metaDescription:
      "Montage genormter Bauelemente in Bad Rappenau und Raum Heilbronn — fachgerechter Einbau nach den geltenden technischen Vorgaben.",
    heroIntro:
      "Standardisierte Bauelemente wirken einfach — richtig eingebaut sind sie es auch nur, wenn die technischen Vorgaben eingehalten werden. Wir übernehmen den fachgerechten Einbau, damit Funktion und Dichtigkeit dauerhaft passen.",
    highlights: [
      "Einbau nach den jeweils geltenden technischen Vorgaben",
      "Sorgfältige Abdichtung und Anschlussarbeiten",
      "Kombinierbar mit weiteren Ausführungsleistungen aus unserem Programm",
    ],
    idealFor: "Eigentümer, die genormte Bauelemente fachgerecht eingebaut haben möchten.",
    faq: [],
    relatedSlugs: ["tuerenmontage", "innenausbau", "projektbetreuung"],
  },
  {
    slug: "hausmeisterservice",
    groupId: "pflege-reinigung",
    name: "Hausmeisterservice",
    shortDescription: "Laufende Betreuung und Instandhaltung Ihres Objekts.",
    metaDescription:
      "Hausmeisterservice in Bad Rappenau und Raum Heilbronn: laufende Betreuung und Instandhaltung Ihres Objekts — auch als Anschluss an eine Sanierung.",
    heroIntro:
      "Nach der Sanierung beginnt der Alltag — und mit ihm der laufende Pflegeaufwand. Wir übernehmen die kontinuierliche Betreuung Ihres Objekts, damit der frisch sanierte Zustand nicht durch fehlende Instandhaltung wieder verloren geht.",
    highlights: [
      "Regelmäßige Kontrolle und Instandhaltung des Objekts",
      "Ansprechpartner für kleinere Reparaturen und laufende Anliegen",
      "Besonders sinnvoll im Anschluss an eine Sanierung durch uns",
      "Individuell vereinbarter Betreuungsumfang",
    ],
    idealFor:
      "Eigentümer von Miet- oder Gewerbeobjekten, die eine laufende, verlässliche Betreuung vor Ort wünschen.",
    faq: [],
    relatedSlugs: ["fassadenreinigung", "pflasterreinigung", "terrassenreinigung"],
  },
  {
    slug: "pflasterreinigung",
    groupId: "pflege-reinigung",
    name: "Pflasterreinigung",
    shortDescription: "Professionelle Reinigung von Hofeinfahrten, Wegen und Pflasterflächen.",
    metaDescription:
      "Pflasterreinigung in Bad Rappenau und Raum Heilbronn: professionelle Reinigung von Hofeinfahrten, Wegen und Pflasterflächen.",
    heroIntro:
      "Moos, Algen und eingewaschener Schmutz lassen selbst hochwertiges Pflaster grau und ungepflegt wirken. Eine professionelle Reinigung bringt die ursprüngliche Optik zurück, ohne die Fläche zu beschädigen.",
    highlights: [
      "Schonende, professionelle Reinigung von Hofeinfahrten, Wegen und Terrassenpflaster",
      "Entfernung von Moos, Algen und eingewaschenem Schmutz",
      "Geeignet als Einzelauftrag oder im Rahmen der laufenden Objektpflege",
    ],
    idealFor: "Eigentümer, deren Pflasterflächen durch Witterung und Zeit sichtbar an Optik verloren haben.",
    faq: [],
    relatedSlugs: ["terrassenreinigung", "fassadenreinigung", "hausmeisterservice"],
  },
  {
    slug: "terrassenreinigung",
    groupId: "pflege-reinigung",
    name: "Terrassenreinigung",
    shortDescription: "Gründliche Reinigung und Pflege von Terrassenbelägen.",
    metaDescription:
      "Terrassenreinigung in Bad Rappenau und Raum Heilbronn: gründliche, materialschonende Reinigung und Pflege Ihres Terrassenbelags.",
    heroIntro:
      "Ob Holz, Stein oder WPC — jeder Terrassenbelag braucht eine andere Reinigungsmethode, um lange gut auszusehen. Wir reinigen materialschonend und pflegen den Belag so, dass er auch nach der Sanierung ein Aushängeschild bleibt.",
    highlights: [
      "Materialgerechte Reinigung für Holz-, Stein- und WPC-Terrassen",
      "Entfernung von Grünbelag, Witterungsspuren und Verschmutzungen",
      "Auf Wunsch kombinierbar mit Pflasterreinigung und laufender Objektpflege",
    ],
    idealFor: "Eigentümer, die ihre Terrasse wieder in einen gepflegten, einladenden Zustand bringen wollen.",
    faq: [],
    relatedSlugs: ["pflasterreinigung", "fassadenreinigung", "hausmeisterservice"],
  },
  {
    slug: "fassadenreinigung",
    groupId: "pflege-reinigung",
    name: "Fassadenreinigung",
    shortDescription: "Schonende Reinigung von Fassaden für einen gepflegten Gesamteindruck.",
    metaDescription:
      "Fassadenreinigung in Bad Rappenau und Raum Heilbronn: schonende Reinigung für einen gepflegten Gesamteindruck Ihrer Immobilie.",
    heroIntro:
      "Die Fassade ist der erste Eindruck jeder Immobilie — bei Mietinteressenten genauso wie bei Käufern. Eine schonende, fachgerechte Reinigung sorgt dafür, dass dieser erste Eindruck stimmt.",
    highlights: [
      "Schonende Reinigungsverfahren, abgestimmt auf den jeweiligen Fassadenuntergrund",
      "Entfernung von Algen-, Moos- und Witterungsspuren",
      "Sinnvoll vor einer Vermietung, einem Verkauf oder als Teil der laufenden Objektpflege",
    ],
    idealFor: "Eigentümer, die den optischen Gesamteindruck ihrer Immobilie auffrischen möchten.",
    faq: [],
    relatedSlugs: ["haussanierung", "hausmeisterservice", "pflasterreinigung"],
  },
  {
    slug: "projektbetreuung",
    groupId: "beratung-steuerung",
    name: "Projektbetreuung",
    shortDescription: "Koordination von Gewerken, Terminen und Qualität über die gesamte Projektlaufzeit hinweg.",
    metaDescription:
      "Projektbetreuung für Sanierungsvorhaben in Bad Rappenau und Raum Heilbronn: Koordination von Gewerken, Terminen und Qualität — auch ohne uns als Ausführende.",
    heroIntro:
      "Nicht jedes Projekt braucht uns als ausführenden Betrieb — manchmal reicht die reine Steuerung. Wir koordinieren Gewerke, Termine und Qualität über die gesamte Projektlaufzeit, damit Sie den Überblick behalten, ohne selbst jeden Handwerker einzeln zu managen.",
    highlights: [
      "Koordination mehrerer Gewerke und Terminpläne, unabhängig vom ausführenden Betrieb",
      "Qualitätskontrolle während der Bauphase",
      "Ein fester Ansprechpartner für alle Fragen rund um den Projektfortschritt",
      "Geeignet für Eigentümer mit bereits beauftragten Handwerkern, die dennoch Struktur wünschen",
    ],
    idealFor:
      "Eigentümer, die bereits Handwerker beauftragt haben oder beauftragen wollen, aber eine unabhängige Koordination und Qualitätskontrolle wünschen.",
    faq: [
      {
        question: "Führen Sie bei der Projektbetreuung auch selbst Arbeiten aus?",
        answer:
          "Das besprechen wir individuell — Projektbetreuung ist auch als reine Koordinationsleistung ohne eigene Ausführung buchbar.",
      },
    ],
    relatedSlugs: ["komplettsanierung", "haussanierung"],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
