"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ContactSection({ locale }: { locale: Locale }) {
  const t = content[locale].contact

  return (
    <section id="contact" className="py-32 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              {t.description}
            </p>
            <a
              href={`mailto:${t.email}`}
              className="mt-4 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              {t.email}
            </a>
          </div>

          {/* Right column - form */}
          <div>
            <form
              action={`mailto:${t.email}`}
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-6"
            >
              {/* Name row */}
              <div>
                <p className="text-sm font-medium text-foreground">{t.form.name}</p>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground">
                      {t.form.firstName}{" "}
                      <span className="text-muted-foreground/60">({t.form.required})</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-foreground outline-none ring-1 ring-transparent focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground">
                      {t.form.lastName}{" "}
                      <span className="text-muted-foreground/60">({t.form.required})</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-foreground outline-none ring-1 ring-transparent focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-foreground">
                  {t.form.emailLabel}{" "}
                  <span className="text-xs font-normal text-muted-foreground/60">({t.form.required})</span>
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-foreground outline-none ring-1 ring-transparent focus:ring-primary/30 transition-shadow"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-foreground">
                  {t.form.message}{" "}
                  <span className="text-xs font-normal text-muted-foreground/60">({t.form.required})</span>
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-foreground outline-none ring-1 ring-transparent focus:ring-primary/30 transition-shadow resize-y"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                >
                  {t.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
