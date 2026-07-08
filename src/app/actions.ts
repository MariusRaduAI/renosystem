"use server";

import { z } from "zod";
import { getSupabaseClient } from "@/lib/supabase";

const leadSchema = z
  .object({
    projectType: z.enum(["komplettsanierung", "einzelleistung", "sonstiges"]),
    name: z.string().trim().min(2),
    phone: z.string().trim().optional(),
    email: z.string().trim().email().optional().or(z.literal("")),
    message: z.string().trim().min(3),
    preferredContact: z.enum(["telefon", "whatsapp", "email"]),
  })
  .refine((data) => (data.phone && data.phone.length > 0) || (data.email && data.email.length > 0), {
    message: "contactMethod",
    path: ["phone"],
  });

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(_prevState: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const parsed = leadSchema.safeParse({
    projectType: formData.get("projectType"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    preferredContact: formData.get("preferredContact"),
  });

  if (!parsed.success) {
    return { status: "error", message: "invalid" };
  }

  const supabase = getSupabaseClient();

  if (!supabase) {
    // Kein Supabase-Projekt konfiguriert (z. B. lokale Entwicklung ohne Zugangsdaten).
    console.warn("[submitLead] Supabase ist nicht konfiguriert — Lead wurde nicht gespeichert:", parsed.data);
    return { status: "error", message: "unavailable" };
  }

  const { error } = await supabase.from("leads").insert({
    project_type: parsed.data.projectType,
    name: parsed.data.name,
    phone: parsed.data.phone || null,
    email: parsed.data.email || null,
    message: parsed.data.message,
    preferred_contact: parsed.data.preferredContact,
    source: "website",
  });

  if (error) {
    console.error("[submitLead] Supabase insert error:", error);
    return { status: "error", message: "insert" };
  }

  // TODO: Benachrichtigung anbinden, sobald Zugangsdaten des Kunden vorliegen —
  // z. B. per Resend (E-Mail) oder einer Supabase Edge Function, die eine
  // WhatsApp-Business-API-Nachricht auslöst. Absichtlich noch nicht verdrahtet.

  return { status: "success" };
}
