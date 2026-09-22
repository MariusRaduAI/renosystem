// Kleine, abhängigkeitsfreie Verwaltung der Cookie-Einwilligung (Analyse-Tools).
// Wird von CookieConsent (Banner) und GoogleAnalytics (Script-Loader) gemeinsam genutzt.

export type ConsentValue = "granted" | "denied";

export const CONSENT_KEY = "renosystem-cookie-consent";
export const CONSENT_EVENT = "renosystem-cookie-consent-changed";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function resetConsent() {
  window.localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
