# RENOSYSTEM ALL-IN-ONE — Website

Premium One-Page-Website für RENOSYSTEM ALL-IN-ONE (Bausanierung & Komplettsanierung, Bad Rappenau und 60 km Umkreis).

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (Design-Tokens als CSS-Variablen in `src/app/globals.css`)
- GSAP + ScrollTrigger für Scroll-Animationen, Lenis für Smooth Scroll
- Supabase (Postgres) für Leads und die Projekt-Galerie
- Vercel-Hosting vorgesehen

## Projektstruktur

- `src/content/de.ts` — sämtliche sichtbaren Marketing-Texte der Seite (eine Quelle der Wahrheit; für EN/RO künftig `content/en.ts` usw. ergänzen)
- `src/content/legal.ts` — Impressum- und Datenschutztexte (separat gehalten, da lange Fließtexte)
- `src/components/sections/*` — je eine Komponente pro Landingpage-Abschnitt
- `supabase/schema.sql` — Tabellen `leads` und `projects` inkl. RLS-Policies
- `src/app/actions.ts` — Server Action für das Kontaktformular (Insert in `leads`)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Ohne gesetzte Supabase-Umgebungsvariablen läuft die Seite trotzdem: das Kontaktformular zeigt dann kontrolliert die Fehlermeldung mit WhatsApp-Fallback, und die Projekt-Galerie fällt auf die Platzhalterbilder aus `content/de.ts` zurück.

## Vor dem Livegang zu erledigen

Diese Punkte sind im Code als `TODO`-Kommentare markiert und müssen vor dem Launch geklärt werden:

1. **USt-IdNr. / Kleinunternehmer-Hinweis** — `src/content/legal.ts` (Impressum, Abschnitt „Umsatzsteuer“)
2. **Reaktionszeit im Formular** (aktuell „innerhalb von 24 Stunden“ als Platzhalterwert) — `src/content/de.ts` (`contact.success.message`)
3. **Konkrete Erfahrungsjahre** in der Vertrauensleiste (aktuell bewusst ohne Zahl formuliert) — `src/content/de.ts` (`trustBar`)
4. ~~Einsatzgebiet final bestätigen~~ — erledigt: 60 km Umkreis um Bad Rappenau, `src/content/de.ts` (`business.region`)
5. **Echte Projektfotos** — ersetzen die Unsplash-Platzhalter in der `projects`-Tabelle bzw. in `portfolio.projects`
6. **Supabase-Projekt anlegen** (Region `eu-central-1` empfohlen, siehe `supabase/schema.sql`) und `.env.local` gemäß `.env.example` befüllen
7. **Benachrichtigungs-Hook für neue Leads** — in `src/app/actions.ts` als TODO markiert; Anbindung an E-Mail (z. B. Resend) oder WhatsApp Business API folgt, sobald Zugangsdaten vorliegen
8. **Logo-Vektordateien** — `renosystem_logo_light.svg`, `renosystem_logo_dark.svg`, `renosystem_icon.svg` in `public/logo/` sowie `src/app/icon.svg` und `src/components/Logo.tsx` sind aus der gelieferten PNG-Vorschau nachgebaut, keine offiziellen Vektordateien lagen vor. Bei Erhalt der echten Dateien ersetzen.
9. **Social-Media-Links** (Instagram/Facebook) im Footer ergänzen, sobald vorhanden
10. **Analytics** — Vercel Analytics / GA4 sind bewusst nicht eingebaut; bei Bedarf env-var-gated ergänzen (dann ggf. Cookie-Consent-Banner prüfen, siehe Datenschutzerklärung Abschnitt 5)
11. **Domain in `metadataBase`** — aktuell Platzhalter `https://www.renosystem.de` in `src/app/layout.tsx`; an die tatsächliche Produktions-Domain anpassen

## Design-Hinweis zur Bildauswahl

Die vier Platzhalterbilder in der Projekte-Galerie wurden manuell auf sichtbare Fremdmarken/Logos geprüft (ein ursprünglich ausgewähltes Unsplash-Bild mit Markenschriftzügen auf Kissen wurde ausgetauscht). Bei zukünftigen Bildwechseln in `content/de.ts` empfiehlt sich derselbe Check.

## Bekannte Einschränkung dieser Session

Der Screenshot-Mechanismus des hier verwendeten Vorschau-Tools zeigte bei größeren (Desktop-)Viewport-Größen kombiniert mit einer gescrollten Position ein leeres Bild, obwohl DOM/Konsole fehlerfrei waren und mobile Viewports bei jeder Scroll-Position korrekt rendern. Alle Desktop-Abschnitte wurden daher zusätzlich über Computed-Style-Prüfungen verifiziert; ein erneuter manueller Check im echten Browser wird dennoch empfohlen.
