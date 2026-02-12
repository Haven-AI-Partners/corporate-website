"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function MarketSection({ locale }: { locale: Locale }) {
  const t = content[locale].market

  return (
    <section id="market" className="py-24 lg:py-32 bg-secondary/50">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.highlights.map((highlight) => (
            <div
              key={highlight.stat}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-primary lg:text-3xl">
                {highlight.stat}
              </p>
              <p className="mt-3 text-pretty text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground/60">
          {t.source}
        </p>
      </div>
    </section>
  )
}
