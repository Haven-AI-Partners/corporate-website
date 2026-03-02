"use client"

import { TrendingUp, Lightbulb, Users } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const icons = [TrendingUp, Lightbulb, Users]

export function VisionSection({ locale }: { locale: Locale }) {
  const t = content[locale].vision

  return (
    <section id="vision" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 lg:gap-12">
          {t.pillars.map((pillar, i) => {
            const Icon = icons[i]
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-secondary/40 p-14 min-h-[500px] flex flex-col justify-center transition-colors hover:bg-secondary/60"
              >
                <Icon className="h-12 w-12 text-primary mb-8" />
                <h3 className="text-2xl font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
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
