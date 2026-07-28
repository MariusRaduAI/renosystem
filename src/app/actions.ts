"use server";

import { z } from "zod";
import { getSupabaseClient } from "@/lib/supabase";
import { getResendClient } from "@/lib/resend";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  komplettsanierung: "Komplettsanierung",
  einzelleistung: "Einzelne Leistung",
  sonstiges: "Sonstiges",
};

const PREFERRED_CONTACT_LABELS: Record<string, string> = {
  telefon: "Telefon",
  whatsapp: "WhatsApp",
  email: "E-Mail",
};

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

  let saved = false;

  const supabase = getSupabaseClient();
  if (supabase) {
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
    } else {
      saved = true;
    }
  } else {
    console.warn("[submitLead] Supabase ist nicht konfiguriert — Lead wird nicht gespeichert.");
  }

  let notified = false;

  const resend = getResendClient();
  const notifyTo = process.env.LEAD_NOTIFICATION_EMAIL;
  if (resend && notifyTo) {
    const { name, phone, email, message, projectType, preferredContact } = parsed.data;
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "RENOSYSTEM Website <onboarding@resend.dev>",
      to: notifyTo,
      replyTo: email || undefined,
      subject: `Neue Anfrage über die Website — ${name}`,
      text: [
        `Name: ${name}`,
        `Projektart: ${PROJECT_TYPE_LABELS[projectType] ?? projectType}`,
        `Bevorzugter Kontakt: ${PREFERRED_CONTACT_LABELS[preferredContact] ?? preferredContact}`,
        `Telefon: ${phone || "—"}`,
        `E-Mail: ${email || "—"}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[submitLead] Resend send error:", error);
    } else {
      notified = true;
    }
  } else {
    console.warn(
      "[submitLead] Resend ist nicht konfiguriert (RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL) — keine Benachrichtigung versendet."
    );
  }

  if (!saved && !notified) {
    console.warn("[submitLead] Lead konnte weder gespeichert noch zugestellt werden:", parsed.data);
    return { status: "error", message: "unavailable" };
  }

  return { status: "success" };
}
