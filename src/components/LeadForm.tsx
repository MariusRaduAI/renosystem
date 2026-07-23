"use client";

import { useActionState, useState } from "react";
import { contact } from "@/content/de";
import { submitLead, type LeadFormState } from "@/app/actions";

const initialState: LeadFormState = { status: "idle" };

export default function LeadForm() {
  const [projectType, setProjectType] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-concrete-950/10 ring-1 ring-concrete-950/5 sm:p-8">
      {state.status === "success" ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
          <span className="text-3xl text-wood-600" aria-hidden="true">
            ✓
          </span>
          <h3 className="mt-4 font-display text-xl font-bold text-concrete-950">{contact.success.title}</h3>
          <p className="mt-2 max-w-sm text-sm text-concrete-600">{contact.success.message}</p>
        </div>
      ) : projectType === null ? (
        <div>
          <h3 className="font-display text-lg font-bold text-concrete-950">{contact.step1.question}</h3>
          <div className="mt-5 flex flex-col gap-3">
            {contact.step1.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setProjectType(option.value)}
                className="min-h-[48px] rounded-2xl border border-concrete-600/25 bg-white px-5 text-left text-base font-medium text-concrete-950 transition-colors hover:border-safety"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form action={formAction}>
          <input type="hidden" name="projectType" value={projectType} />
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-concrete-950">{contact.step2.title}</h3>
            <button
              type="button"
              onClick={() => setProjectType(null)}
              className="text-sm font-medium text-concrete-600 underline-offset-2 hover:underline"
            >
              {contact.step2.back}
            </button>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-concrete-950">
                {contact.step2.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={contact.step2.namePlaceholder}
                className="min-h-[48px] w-full rounded-xl border border-concrete-600/25 bg-white px-4 text-base text-concrete-950 outline-none focus:border-safety"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-concrete-950">
                  {contact.step2.phoneLabel}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={contact.step2.phonePlaceholder}
                  className="min-h-[48px] w-full rounded-xl border border-concrete-600/25 bg-white px-4 text-base text-concrete-950 outline-none focus:border-safety"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-concrete-950">
                  {contact.step2.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contact.step2.emailPlaceholder}
                  className="min-h-[48px] w-full rounded-xl border border-concrete-600/25 bg-white px-4 text-base text-concrete-950 outline-none focus:border-safety"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-concrete-950">
                {contact.step2.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder={contact.step2.messagePlaceholder}
                className="w-full rounded-xl border border-concrete-600/25 bg-white px-4 py-3 text-base text-concrete-950 outline-none focus:border-safety"
              />
            </div>

            <fieldset>
              <legend className="mb-1.5 text-sm font-medium text-concrete-950">
                {contact.step2.preferredContactLabel}
              </legend>
              <div className="flex flex-wrap gap-4">
                {contact.step2.preferredContactOptions.map((option, i) => (
                  <label key={option.value} className="flex items-center gap-2 text-sm text-concrete-950">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      defaultChecked={i === 0}
                      required
                      className="h-4 w-4 accent-wood-500"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {state.status === "error" && (
              <p className="rounded-xl bg-safety/10 px-4 py-3 text-sm text-safety">{contact.error.message}</p>
            )}

            <button
              type="submit"
              disabled={isPending}
              data-magnetic
              className="min-h-[48px] w-full rounded-full bg-wood-500 px-6 text-base font-semibold text-concrete-100 transition-colors hover:bg-safety disabled:opacity-60"
            >
              {isPending ? contact.step2.submitting : contact.step2.submit}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
