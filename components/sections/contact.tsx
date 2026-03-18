"use client"

import { useActionState } from "react"
import { submitContactForm } from "@/app/actions/contact"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ContactSection({ locale }: { locale: Locale }) {
  const t = content[locale].contact
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="py-32 lg:py-40 bg-primary">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
              {t.description}
            </p>
            <a
              href={`mailto:${t.email}`}
              className="mt-4 text-sm text-white/70 underline underline-offset-4 hover:text-white transition-colors"
            >
              {t.email}
            </a>
          </div>

          {/* Right column - form */}
          <div>
            {state?.success ? (
              <div className="flex items-center justify-center rounded-2xl bg-white/10 p-12 text-center">
                <p className="text-lg text-white">{t.form.success}</p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-6">
                {/* Name row */}
                <div>
                  <p className="text-sm font-medium text-white">{t.form.name}</p>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/60">
                        {t.form.firstName}{" "}
                        <span className="text-white/40">({t.form.required})</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="mt-1 w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-transparent focus:ring-white/30 transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/60">
                        {t.form.lastName}{" "}
                        <span className="text-white/40">({t.form.required})</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="mt-1 w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-transparent focus:ring-white/30 transition-shadow"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-white">
                    {t.form.emailLabel}{" "}
                    <span className="text-xs font-normal text-white/40">({t.form.required})</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-transparent focus:ring-white/30 transition-shadow"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-white">
                    {t.form.message}{" "}
                    <span className="text-xs font-normal text-white/40">({t.form.required})</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-transparent focus:ring-white/30 transition-shadow resize-y"
                  />
                </div>

                {/* Error message */}
                {state?.error && (
                  <p className="text-sm text-red-300">{t.form.error}</p>
                )}

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="rounded-full bg-white px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-white/90 disabled:opacity-60"
                  >
                    {isPending ? t.form.sending : t.form.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
