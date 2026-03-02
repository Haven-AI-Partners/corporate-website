"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function MissionSection({ locale }: { locale: Locale }) {
  const t = content[locale].mission

  return (
    <section id="mission" className="py-32 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
          {t.label}
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t.subtitle}
        </h2>
        <div className="mx-auto mt-8 h-[2px] w-20 bg-primary" />
        <p className="mt-8 text-pretty text-lg lg:text-xl text-muted-foreground">
          {t.title}
        </p>
      </div>
    </section>
  )
}
