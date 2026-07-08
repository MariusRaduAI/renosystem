import { createClient, SupabaseClient } from "@supabase/supabase-js";

let cachedClient: SupabaseClient | null | undefined;

// Gibt `null` zurück, solange keine Supabase-Zugangsdaten konfiguriert sind,
// damit die Seite auch ohne angebundenes Projekt (z. B. lokal) lauffähig bleibt.
export function getSupabaseClient(): SupabaseClient | null {
  if (cachedClient !== undefined) return cachedClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  cachedClient = url && anonKey ? createClient(url, anonKey) : null;
  return cachedClient;
}
