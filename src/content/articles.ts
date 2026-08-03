// Artikel für /artikel. Echte, nützliche Inhalte mit lokalem und
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

export const articlesIntro = {
  eyebrow: "Artikel",
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
          "Festpreisangebot — verbindlich, transparent, ohne Überraschungen auf der Schlussrechnung",
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
  {
    slug: "handwerker-auswahl-worauf-achten",
    title: "Handwerker auswählen: Worauf Sie wirklich achten sollten",
    excerpt:
      "Gewerbeanmeldung und ein günstiges Angebot sagen wenig über die tatsächliche Qualität aus. Diese Punkte verraten mehr.",
    metaDescription:
      "Handwerker auswählen: Woran Sie einen zuverlässigen Sanierungsbetrieb erkennen — jenseits von Bauchgefühl und dem günstigsten Angebot.",
    publishedDate: "25. Februar 2026",
    readTime: "4 Min. Lesezeit",
    category: "Planung",
    sections: [
      {
        paragraphs: [
          "Die meisten Menschen sanieren nur alle paar Jahrzehnte einmal. Entsprechend schwer fällt es, einen Betrieb einzuschätzen, bevor man mit ihm zusammengearbeitet hat. Ein paar konkrete Punkte helfen trotzdem — unabhängig davon, wen Sie am Ende beauftragen.",
        ],
      },
      {
        heading: "Wer kommt zur Besichtigung?",
        paragraphs: [
          "Kommt der Inhaber oder eine feste Ansprechperson, oder wechselt das Gesicht bei jedem Termin? Wer während der Besichtigung genau hinschaut, nachfragt und sich Zeit nimmt, kalkuliert danach auch genauer — statt später nachzubessern.",
        ],
      },
      {
        heading: "Wie konkret ist das Angebot?",
        list: [
          "Ein seriöses Angebot benennt Leistungen, nicht nur eine Endsumme",
          "Referenzen oder Fotos abgeschlossener Projekte sollten auf Nachfrage verfügbar sein",
          "Eine grobe zeitliche Einordnung gehört zu einem vollständigen Angebot dazu",
          "Vorsicht bei Preisen, die ohne Besichtigung am Telefon genannt werden",
        ],
      },
      {
        heading: "Ein Ansprechpartner statt vieler Weiterleitungen",
        paragraphs: [
          "Fragen Sie konkret: Wer ist während der Bauphase erreichbar, wenn etwas unklar ist? Ein wechselndes Callcenter oder eine anonyme Projektnummer sind ein schlechtes Zeichen — genau wie eine Betriebsstruktur, bei der niemand die Gesamtverantwortung trägt.",
        ],
      },
    ],
    relatedSlugs: ["checkliste-vor-der-sanierung", "ablauf-komplettsanierung"],
  },
  {
    slug: "feuchtigkeit-schimmel-altbau-erkennen",
    title: "Feuchtigkeit und Schimmel im Altbau: Erste Anzeichen erkennen",
    excerpt:
      "Schimmel entsteht selten über Nacht. Diese frühen Warnzeichen sollten Sie kennen, bevor aus einem kleinen Fleck ein großes Problem wird.",
    metaDescription:
      "Feuchtigkeit und Schimmel im Altbau erkennen: die häufigsten frühen Anzeichen und wann eine fachliche Einschätzung sinnvoll ist.",
    publishedDate: "4. März 2026",
    readTime: "4 Min. Lesezeit",
    category: "Grundlagen",
    sections: [
      {
        paragraphs: [
          "Feuchtigkeitsschäden sind einer der häufigsten Gründe, warum aus einer geplanten Renovierung plötzlich eine Sanierung wird. Wer die frühen Anzeichen kennt, kann reagieren, bevor sich das Problem in die Bausubstanz frisst.",
        ],
      },
      {
        heading: "Worauf Sie achten sollten",
        list: [
          "Dunkle Verfärbungen an Wandecken, besonders hinter Möbeln oder in wenig belüfteten Räumen",
          "Muffiger Geruch, der auch nach Lüften wiederkehrt",
          "Abblätternde oder blasige Farbe und Tapete",
          "Kondenswasser an Fensterrahmen, das dauerhaft auftritt statt nur an einzelnen kalten Tagen",
          "Kühle, leicht feuchte Wandflächen im Vergleich zum Rest des Raums",
        ],
      },
      {
        heading: "Warum die Ursache wichtiger ist als der Fleck selbst",
        paragraphs: [
          "Ein Fleck an der Wand lässt sich überstreichen — die Ursache dahinter nicht. Baujahr, Dämmzustand, Lüftungsverhalten und mögliche undichte Stellen an Dach oder Leitungen können alle eine Rolle spielen. Wird nur die Oberfläche behandelt, kommt das Problem zuverlässig zurück.",
        ],
      },
      {
        heading: "Wann Sie fachliche Hilfe hinzuziehen sollten",
        paragraphs: [
          "Bei einzelnen kleinen Flecken nach einem konkreten Vorfall — etwa einem undichten Fenster — reicht oft eine gezielte Reparatur. Treten die Anzeichen jedoch wiederholt, großflächig oder ohne erkennbaren Auslöser auf, lohnt sich eine fachliche Einschätzung vor Ort, bevor weitergeplant wird.",
        ],
      },
    ],
    relatedSlugs: ["sanierung-oder-renovierung-unterschied", "elektrik-im-altbau-wann-austausch-noetig"],
  },
  {
    slug: "elektrik-im-altbau-wann-austausch-noetig",
    title: "Elektrik im Altbau: Wann ein Austausch wirklich notwendig ist",
    excerpt:
      "Nicht jede alte Leitung muss sofort raus. Diese Anzeichen zeigen, wann ein Austausch der Elektrik keine Kür, sondern notwendig ist.",
    metaDescription:
      "Elektrik im Altbau: Anzeichen für veraltete oder unsichere Installationen — und wann ein Austausch bei der Sanierung sinnvoll ist.",
    publishedDate: "11. März 2026",
    readTime: "4 Min. Lesezeit",
    category: "Grundlagen",
    sections: [
      {
        paragraphs: [
          "Bei einer Sanierung wird die Elektrik oft erst spät zum Thema — dabei ist sie eine der Installationen, die sich nach dem Verputzen am schwersten nachträglich ändern lässt. Ein früher, ehrlicher Blick darauf lohnt sich.",
        ],
      },
      {
        heading: "Typische Warnzeichen",
        list: [
          "Sicherungen mit Schraubkappen statt moderner Leitungsschutzschalter",
          "Zu wenige Steckdosen pro Raum, sichtbar an Mehrfachsteckern und Verlängerungskabeln",
          "Kein Fehlerstromschutzschalter (FI-Schalter) in der Verteilung",
          "Stoffummantelte oder brüchige Kabel, sichtbar im Keller oder Dachboden",
          "Flackerndes Licht oder Sicherungen, die regelmäßig auslösen",
        ],
      },
      {
        heading: "Warum das bei einer Sanierung besonders relevant ist",
        paragraphs: [
          "Wenn ohnehin Wände geöffnet oder neu verputzt werden, ist der günstigste Zeitpunkt für eine Erneuerung der Elektrik genau jetzt — nicht erst, wenn frisch gestrichene Wände wieder aufgestemmt werden müssten. Das gilt besonders bei Komplettsanierungen, bei denen Rohinstallation ohnehin Teil des Ablaufs ist.",
        ],
      },
      {
        heading: "Was eine Einschätzung vor Ort leistet",
        paragraphs: [
          "Ob ein Teilaustausch reicht oder eine komplette Neuinstallation sinnvoll ist, hängt vom tatsächlichen Zustand der Bestandsleitungen ab — das lässt sich seriös nur vor Ort beurteilen, nicht anhand des Baujahrs allein.",
        ],
      },
    ],
    relatedSlugs: ["feuchtigkeit-schimmel-altbau-erkennen", "ablauf-komplettsanierung"],
  },
  {
    slug: "badsanierung-planungsfehler-vermeiden",
    title: "Badsanierung: Die häufigsten Planungsfehler — und wie Sie sie vermeiden",
    excerpt:
      "Ein Bad wird nur selten saniert — Planungsfehler fallen dafür umso länger auf. Diese Punkte werden am häufigsten übersehen.",
    metaDescription:
      "Badsanierung planen: die häufigsten Fehler bei Grundriss, Beleuchtung und Stauraum — und wie Sie sie von Anfang an vermeiden.",
    publishedDate: "18. März 2026",
    readTime: "4 Min. Lesezeit",
    category: "Planung",
    sections: [
      {
        paragraphs: [
          "Ein Bad wird oft nur alle 15 bis 20 Jahre neu geplant — Fehler in der Planung fallen entsprechend lange auf. Wer diese Punkte vorher klärt, spart sich später viel Ärger.",
        ],
      },
      {
        heading: "Die häufigsten Fehler",
        list: [
          "Stauraum wird erst am Ende mitgedacht, statt von Anfang an eingeplant",
          "Beleuchtung besteht nur aus einer zentralen Deckenleuchte statt mehrerer Lichtzonen",
          "Steckdosen sind falsch platziert für Föhn, Rasierer oder elektrische Zahnbürste",
          "Belüftung wird unterschätzt, obwohl sie über Schimmelbildung mitentscheidet",
          "Bodenablauf oder Duschgefälle werden nicht mit dem gewünschten Duschtyp abgestimmt",
        ],
      },
      {
        heading: "Barrierefreiheit von Anfang an mitdenken",
        paragraphs: [
          "Auch wer aktuell keinen Bedarf hat: Eine bodengleiche Dusche und ausreichend Bewegungsfläche lassen sich bei der Sanierung deutlich einfacher einplanen als Jahre später nachrüsten. Das erhöht zugleich den Wert der Immobilie.",
        ],
      },
      {
        heading: "Warum sich eine Besichtigung vor der Planung lohnt",
        paragraphs: [
          "Leitungsführung, tragende Wände und die vorhandene Raumhöhe bestimmen, was tatsächlich umsetzbar ist. Eine Wunschplanung ohne diesen Blick auf die Substanz führt oft zu Änderungen mitten in der Bauphase — genau das lässt sich mit einer frühen Besichtigung vermeiden.",
        ],
      },
    ],
    relatedSlugs: ["bodenbelag-waehlen-parkett-vinyl-fliesen", "checkliste-vor-der-sanierung"],
  },
  {
    slug: "bodenbelag-waehlen-parkett-vinyl-fliesen",
    title: "Bodenbelag wählen: Parkett, Vinyl oder Fliese — was passt wohin?",
    excerpt:
      "Der Bodenbelag prägt einen Raum mehr als fast jede andere Entscheidung. Eine ehrliche Einordnung, welcher Belag wo wirklich funktioniert.",
    metaDescription:
      "Bodenbelag wählen: Parkett, Vinyl oder Fliese im Vergleich — Vor- und Nachteile je Raum, damit die Entscheidung zur Nutzung passt.",
    publishedDate: "25. März 2026",
    readTime: "4 Min. Lesezeit",
    category: "Planung",
    sections: [
      {
        paragraphs: [
          "Es gibt keinen objektiv „besten“ Bodenbelag — nur den, der zum jeweiligen Raum und seiner Nutzung passt. Diese Einordnung hilft bei der Entscheidung.",
        ],
      },
      {
        heading: "Parkett: Wohnräume und Schlafzimmer",
        paragraphs: [
          "Parkett wirkt hochwertig, ist angenehm warm und lässt sich bei Verschleiß abschleifen und auffrischen. Weniger geeignet für Feuchträume oder stark beanspruchte Bereiche mit viel Wasser- und Sandeintrag.",
        ],
      },
      {
        heading: "Vinyl: Vielseitig und pflegeleicht",
        paragraphs: [
          "Moderne Vinylböden sind wasserfest, robust und optisch kaum von Holz oder Stein zu unterscheiden. Eine gute Wahl für Flure, Küchen oder Familienhaushalte mit hoher Beanspruchung — bei niedrigerer Wärme- und Trittwirkung als echtes Holz.",
        ],
      },
      {
        heading: "Fliesen: Bad, Küche und stark beanspruchte Flächen",
        paragraphs: [
          "Fliesen sind unschlagbar bei Feuchtigkeit, Hygiene und Langlebigkeit — ideal für Bad und häufig auch für die Küche. Ohne Fußbodenheizung können sie sich kühl anfühlen, was bei der Planung mitbedacht werden sollte.",
        ],
      },
      {
        heading: "Die Entscheidung hängt vom Raum ab, nicht vom Trend",
        paragraphs: [
          "Ein durchgängiger Bodenbelag im gesamten Zuhause sieht oft stimmig aus, ist aber nicht immer praktisch. Die Kombination verschiedener Beläge je nach Raumnutzung ist der Normalfall — nicht die Ausnahme.",
        ],
      },
    ],
    relatedSlugs: ["badsanierung-planungsfehler-vermeiden", "fenster-tueren-austausch-lohnt-sich"],
  },
  {
    slug: "fenster-tueren-austausch-lohnt-sich",
    title: "Fenster und Türen: Wann sich ein Austausch wirklich lohnt",
    excerpt:
      "Nicht jedes alte Fenster muss raus. Diese Anzeichen zeigen, wann ein Austausch spürbaren Unterschied macht — und wann eine Reparatur reicht.",
    metaDescription:
      "Fenster und Türen austauschen oder reparieren: die wichtigsten Anzeichen für Zugluft, Feuchtigkeit und Wärmeverlust im Überblick.",
    publishedDate: "1. April 2026",
    readTime: "3 Min. Lesezeit",
    category: "Grundlagen",
    sections: [
      {
        paragraphs: [
          "Fenster und Türen beeinflussen Wohnkomfort und Energieverbrauch stärker, als viele erwarten. Trotzdem lohnt sich nicht in jedem Fall ein kompletter Austausch.",
        ],
      },
      {
        heading: "Anzeichen für Handlungsbedarf",
        list: [
          "Spürbare Zugluft trotz geschlossenem Fenster",
          "Kondenswasser zwischen den Scheiben — ein sicheres Zeichen für eine defekte Isolierverglasung",
          "Schwergängige oder klemmende Griffe und Beschläge",
          "Sichtbar verzogene Rahmen, besonders bei älteren Holzfenstern",
          "Deutlich kühlere Wandflächen rund um den Rahmen im Vergleich zur restlichen Wand",
        ],
      },
      {
        heading: "Reparatur oder Austausch?",
        paragraphs: [
          "Klemmende Beschläge oder undichte Dichtungen lassen sich oft reparieren, ohne das ganze Fenster zu ersetzen. Verzogene Rahmen, defekte Isolierverglasung oder grundsätzlich veraltete Fenstertechnik sprechen dagegen für einen vollständigen Austausch — inklusive fachgerechtem Einbau mit passenden Anschlussfugen.",
        ],
      },
      {
        heading: "Warum der Einbau genauso wichtig ist wie das Fenster selbst",
        paragraphs: [
          "Auch das beste Fenster bringt wenig, wenn der Einbau nicht sauber abgedichtet ist. Undichte Anschlussfugen sind einer der häufigsten Gründe, warum neue Fenster trotzdem noch Zugluft durchlassen.",
        ],
      },
    ],
    relatedSlugs: ["bodenbelag-waehlen-parkett-vinyl-fliesen", "sanierung-mit-oder-ohne-auszug"],
  },
  {
    slug: "sanierung-mit-oder-ohne-auszug",
    title: "Sanierung mit oder ohne Auszug: Eine ehrliche Entscheidungshilfe",
    excerpt:
      "Bleiben oder ausziehen? Diese Frage hat mehr Einfluss auf Ablauf, Zeitplan und Nerven als die meisten Bauherren zu Beginn ahnen.",
    metaDescription:
      "Sanierung mit oder ohne Auszug: Vor- und Nachteile beider Wege, damit Sie realistisch entscheiden können, was für Ihr Projekt passt.",
    publishedDate: "8. April 2026",
    readTime: "4 Min. Lesezeit",
    category: "Planung",
    sections: [
      {
        paragraphs: [
          "Diese Frage wird bei der Planung oft zu spät gestellt — dabei beeinflusst sie Zeitplan, Ablauf und die tägliche Belastung während der Bauphase erheblich.",
        ],
      },
      {
        heading: "Wohnen bleiben: Vorteile und Grenzen",
        paragraphs: [
          "Kein doppelter Umzug, keine Zwischenmiete — dafür Baulärm, Staub und eingeschränkte Nutzung einzelner Räume über Wochen. Realistisch machbar bei Sanierungen, die sich in klar abgegrenzten Bauabschnitten durchführen lassen, etwa Raum für Raum.",
        ],
      },
      {
        heading: "Vorübergehend ausziehen: Vorteile und Grenzen",
        paragraphs: [
          "Schnellerer Baufortschritt, da alle Gewerke gleichzeitig arbeiten können, und deutlich weniger Belastung im Alltag — dafür Kosten und Aufwand für eine Zwischenlösung. Bei umfassenden Komplettsanierungen mit Entkernung meist die praktikablere Wahl.",
        ],
      },
      {
        heading: "Woran Sie sich orientieren können",
        list: [
          "Betrifft die Sanierung die gesamte Wohnfläche oder nur einzelne Räume?",
          "Sind Bad und Küche zeitweise komplett nicht nutzbar?",
          "Wie empfindlich reagieren Sie und Ihr Haushalt auf Lärm und Staub im Alltag?",
          "Steht eine Zwischenlösung überhaupt realistisch zur Verfügung?",
        ],
      },
      {
        heading: "Es gibt keine grundsätzlich richtige Antwort",
        paragraphs: [
          "Beide Wege sind machbar — welcher zu Ihnen passt, hängt vom Umfang der Sanierung und Ihrer persönlichen Situation ab. Wir sprechen diese Frage bewusst im Erstgespräch an, weil sie den gesamten Zeitplan mitbestimmt.",
        ],
      },
    ],
    relatedSlugs: ["ablauf-komplettsanierung", "checkliste-vor-der-sanierung"],
  },
  {
    slug: "nach-der-sanierung-pflege-tipps",
    title: "Nach der Sanierung: So pflegen Sie Ihr frisch renoviertes Zuhause",
    excerpt:
      "Die ersten Monate nach der Übergabe entscheiden mit, wie lange das Ergebnis gut aussieht. Diese einfachen Gewohnheiten machen den Unterschied.",
    metaDescription:
      "Nach der Sanierung: einfache Pflegetipps für neue Böden, frisch verputzte Wände und Sanitäranlagen, damit das Ergebnis lange hält.",
    publishedDate: "15. April 2026",
    readTime: "3 Min. Lesezeit",
    category: "Ablauf",
    sections: [
      {
        paragraphs: [
          "Nach der Übergabe endet die eigentliche Baustelle — die ersten Monate danach entscheiden trotzdem mit, wie lange alles gut aussieht. Ein paar einfache Gewohnheiten reichen dafür meist aus.",
        ],
      },
      {
        heading: "Neue Böden richtig einlaufen lassen",
        paragraphs: [
          "Frisch verlegtes Parkett oder Vinyl braucht ein paar Wochen, um sich an Raumklima und Belastung zu gewöhnen. Filzgleiter unter Möbeln und regelmäßiges, aber nicht übermäßiges Feuchtwischen schützen die Oberfläche von Anfang an.",
        ],
      },
      {
        heading: "Frisch verputzte Wände richtig lüften",
        paragraphs: [
          "Neuer Putz und frische Farbe brauchen Zeit zum vollständigen Durchtrocknen — regelmäßiges Stoßlüften statt dauerhaft gekippter Fenster beugt Feuchtigkeitsstau in dieser Phase am besten vor.",
        ],
      },
      {
        heading: "Kleine Nachjustierungen sind normal",
        paragraphs: [
          "Türen, die sich leicht setzen, oder Fugen, die minimal nachgeben — das ist in den ersten Monaten nach einer Sanierung üblich und kein Zeichen mangelhafter Arbeit. Wer sich unsicher ist, spricht das am besten direkt mit dem ausführenden Betrieb ab.",
        ],
      },
      {
        heading: "Laufende Pflege danach",
        paragraphs: [
          "Für die Zeit nach der Sanierung — von der Pflasterreinigung bis zur laufenden Instandhaltung — bieten wir auch einen eigenständigen Hausmeisterservice an, unabhängig davon, ob wir die ursprüngliche Sanierung durchgeführt haben.",
        ],
      },
    ],
    relatedSlugs: ["ablauf-komplettsanierung", "sanierung-mit-oder-ohne-auszug"],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
