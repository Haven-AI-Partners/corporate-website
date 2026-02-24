"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ApproachSection({ locale }: { locale: Locale }) {
  const t = content[locale].approach

  return (
    <section id="approach" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary text-lg font-bold">
                {pillar.number}
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-1 text-xs text-primary/70">
                {pillar.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
