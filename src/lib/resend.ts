import { Resend } from "resend";

let cachedClient: Resend | null | undefined;

// Gibt `null` zurück, solange kein Resend-API-Key konfiguriert ist,
// damit Lead-Versand ohne angebundenes Projekt (z. B. lokal) nicht crasht.
export function getResendClient(): Resend | null {
  if (cachedClient !== undefined) return cachedClient;

  const apiKey = process.env.RESEND_API_KEY;
  cachedClient = apiKey ? new Resend(apiKey) : null;
  return cachedClient;
}
