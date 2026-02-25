"use client"

import { TrendingUp, Lightbulb, Users } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const icons = [TrendingUp, Lightbulb, Users]

export function VisionSection({ locale }: { locale: Locale }) {
  const t = content[locale].vision

  return (
    <section id="vision" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          {t.description && (
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-muted-foreground">
              {t.description}
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {t.pillars.map((pillar, i) => {
            const Icon = icons[i]
            return (
              <div
                key={pillar.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
