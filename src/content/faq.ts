// Inhalte für die Seite /haeufige-fragen. Kategorisiert, damit sowohl die
// FAQPage-Struktur (SEO) als auch die visuelle Gliederung sauber bleiben.

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqIntro = {
  eyebrow: "Häufige Fragen",
  headline: "Was Sie vor der Sanierung wissen sollten.",
  intro:
    "Die Antworten auf die Fragen, die uns Eigentümer am häufigsten stellen — bevor sie überhaupt anrufen. Ist Ihre Frage nicht dabei, schreiben Sie uns direkt.",
};

export const faqCategories: FaqCategory[] = [
  {
    id: "preise-angebot",
    title: "Preise & Angebot",
    items: [
      {
        question: "Warum nennen Sie keinen Preis am Telefon?",
        answer:
          "Weil jede seriöse Kalkulation eine Besichtigung voraussetzt. Ein Preis ohne Besichtigung ist entweder zu hoch angesetzt, um sich abzusichern, oder er wird später „nachjustiert“ — beides zu Ihren Lasten. Wir sehen uns Ihr Objekt persönlich an und legen erst danach einen Festpreis fest, an den wir uns halten.",
      },
      {
        question: "Ist das Angebot wirklich ein Festpreis, oder kommen später Zusatzkosten?",
        answer:
          "Ein echter Festpreis, kein Stundenlohn und keine vagen Pauschalen. Sollte sich während der Arbeiten ein Zusatzaufwand ergeben, der bei der Besichtigung nicht erkennbar war (etwa verdeckte Bauschäden), sprechen wir das offen an, bevor weitergearbeitet wird — nicht erst auf der Schlussrechnung.",
      },
      {
        question: "Was kostet eine Komplettsanierung ungefähr?",
        answer:
          "Das hängt von Fläche, Zustand, gewünschter Qualitätsstufe und Umfang so stark ab, dass eine pauschale Zahl hier niemandem hilft. Nutzen Sie den Fragebogen und die Besichtigung — danach erhalten Sie eine belastbare, verbindliche Zahl statt einer groben Schätzung.",
      },
      {
        question: "Muss ich eine Anzahlung leisten?",
        answer:
          "Die Zahlungsmodalitäten legen wir gemeinsam im Angebot fest und besprechen sie transparent, bevor Sie unterschreiben.",
      },
    ],
  },
  {
    id: "ablauf",
    title: "Ablauf & Zeitplan",
    items: [
      {
        question: "Wie läuft die Zusammenarbeit konkret ab?",
        answer:
          "In vier Schritten: Telefon-Erstgespräch, kurzer Fragebogen zu Ihrem Objekt, persönliche Besichtigung vor Ort, dann ein verbindliches Festpreisangebot. Erst wenn Sie zustimmen, planen wir den konkreten Bauablauf.",
      },
      {
        question: "Wie lange dauert eine Sanierung im Durchschnitt?",
        answer:
          "Die Dauer hängt vom Umfang ab — eine punktuelle Renovierung ist in Tagen erledigt, eine Komplettsanierung eines Hauses kann mehrere Monate umfassen. Nach der Besichtigung erhalten Sie einen konkreten, verbindlichen Zeitrahmen als Teil des Angebots.",
      },
      {
        question: "Kann ich während der Sanierung in der Immobilie wohnen bleiben?",
        answer:
          "Das kommt auf den Umfang an. Bei einer Komplettsanierung mit Entkernung ist ein vorübergehender Auszug meist sinnvoll, bei abschnittsweisen oder punktuellen Arbeiten oft nicht nötig. Wir sprechen das konkret bei der Besichtigung durch.",
      },
      {
        question: "Was passiert, wenn sich während der Bauphase etwas Unerwartetes zeigt?",
        answer:
          "Wir informieren Sie umgehend, erklären die Optionen und deren Kostenfolge — und handeln erst nach Ihrer Freigabe weiter. Keine stillschweigenden Entscheidungen über Ihren Kopf hinweg.",
      },
    ],
  },
  {
    id: "leistungen",
    title: "Leistungen & Umfang",
    items: [
      {
        question: "Übernehmen Sie auch einzelne Gewerke statt einer Komplettsanierung?",
        answer:
          "Ja. Viele unserer Leistungen — etwa Trockenbau, Bodenverlegung oder Türenmontage — sind auch einzeln buchbar, unabhängig von einer Komplettsanierung.",
      },
      {
        question: "Was ist der Unterschied zwischen den drei Qualitätsstufen Standard, Gehoben und Premium?",
        answer:
          "Die Stufen unterscheiden sich in Materialqualität, Ausführungsdetails und Gestaltungsaufwand — nicht in der handwerklichen Sorgfalt, die bei allen drei gleich hoch ist. Nach Fragebogen und Besichtigung empfehlen wir Ihnen die Stufe, die zu Objekt, Anspruch und Budget passt.",
      },
      {
        question: "Arbeiten Sie mit eigenen Handwerkern oder mit Subunternehmern?",
        answer:
          "Wir koordinieren ein festes, eingespieltes Team über alle Gewerke hinweg — genau das ist der Kern unseres Modells: ein Ansprechpartner für Sie, nicht zehn Einzelverträge.",
      },
      {
        question: "Was, wenn ich nicht sicher bin, welche Leistung ich brauche?",
        answer:
          "Genau dafür ist das Telefon-Erstgespräch da. Beschreiben Sie uns Ihre Ausgangssituation — wir sagen Ihnen ehrlich, was aus unserer Erfahrung sinnvoll ist, auch wenn es am Ende weniger ist, als Sie ursprünglich dachten.",
      },
    ],
  },
  {
    id: "zusammenarbeit",
    title: "Zusammenarbeit & Vertrauen",
    items: [
      {
        question: "Nehmen Sie jeden Auftrag an?",
        answer:
          "Nein, bewusst nicht. Wir arbeiten selektiv, weil wir für jedes laufende Projekt Zeit und Qualität garantieren wollen. Passt Ihr Vorhaben nicht zu unserem Leistungsspektrum oder unserer aktuellen Kapazität, sagen wir das offen im Erstgespräch.",
      },
      {
        question: "Wer ist während der Sanierung mein Ansprechpartner?",
        answer:
          "Der Inhaber persönlich — nicht ein wechselndes Callcenter oder eine anonyme Projektnummer.",
      },
      {
        question: "In welchem Gebiet sind Sie tätig?",
        answer: "Bad Rappenau und im Umkreis von 60 km. Bei Projekten außerhalb fragen Sie uns einfach an.",
      },
      {
        question: "Wie schnell erhalte ich eine Rückmeldung auf meine Anfrage?",
        answer:
          "In der Regel innerhalb von 24 Stunden — per Telefon, WhatsApp oder E-Mail, je nachdem, was Sie im Kontaktformular angeben.",
      },
    ],
  },
];
