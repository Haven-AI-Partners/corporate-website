"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ApproachSection({ locale }: { locale: Locale }) {
  const t = content[locale].approach

  return (
    <section id="approach" className="py-32 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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
              className="p-8"
            >
              <span className="text-5xl font-extralight leading-none text-primary/20">
                {pillar.number}
              </span>
              <h3 className="mt-4 text-base font-medium text-foreground">
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
