"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function MissionSection({ locale }: { locale: Locale }) {
  const t = content[locale].mission

  return (
    <section id="mission" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {t.label}
        </p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.subtitle}
        </h2>
        <div className="mx-auto mt-8 h-px w-16 bg-primary" />
        <p className="mt-8 text-pretty text-lg text-muted-foreground">
          {t.title}
        </p>
      </div>
    </section>
  )
}
