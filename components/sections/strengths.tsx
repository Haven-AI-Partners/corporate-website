"use client"

import { Check, X } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function StrengthsSection({ locale }: { locale: Locale }) {
  const t = content[locale].strengths

  return (
    <section id="strengths" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Haven card */}
          <div className="rounded-xl border-2 border-primary/40 bg-card p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">{t.haven.title}</h3>
            <p className="mt-1 text-sm font-medium text-primary/70">
              {t.haven.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-6">
              {t.haven.categories.map((category) => (
                <div key={category.label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">
                    {category.label}
                  </p>
                  <ul className="flex flex-col gap-3" role="list">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Fund card */}
          <div className="rounded-xl border border-border bg-card p-8 opacity-75 shadow-sm">
            <h3 className="text-xl font-bold text-muted-foreground">
              {t.fund.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground/70">
              {t.fund.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-6">
              {t.fund.categories.map((category) => (
                <div key={category.label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-3">
                    {category.label}
                  </p>
                  <ul className="flex flex-col gap-3" role="list">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                          <X className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
