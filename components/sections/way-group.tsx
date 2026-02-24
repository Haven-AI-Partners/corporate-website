"use client"

import { ArrowRight, Check } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function WayGroupSection({ locale }: { locale: Locale }) {
  const t = content[locale].wayGroup

  return (
    <section id="wayGroup" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Dual tracks */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.tracks.map((track) => (
            <div
              key={track.label}
              className="rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">
                  {track.label}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-lg font-semibold text-foreground">
                  {track.title}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        {/* Synergies */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-foreground mb-8">
            {t.synergiesTitle}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.synergies.map((synergy) => (
              <div
                key={synergy.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {synergy.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {synergy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
