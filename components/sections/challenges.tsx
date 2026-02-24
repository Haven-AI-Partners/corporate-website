"use client"

import { Users, TrendingDown, UserX, Unplug, Database, Cog, Shield } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const challengeIcons = [Users, TrendingDown, UserX, Unplug]
const barrierIcons = [Database, Cog, Shield]

export function ChallengesSection({ locale }: { locale: Locale }) {
  const t = content[locale].challenges

  return (
    <section id="challenges" className="py-24 lg:py-32">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = challengeIcons[i]
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-primary/70">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <p className="text-center text-pretty text-base font-medium text-foreground/80 mb-8">
            {t.barrierTagline}
          </p>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 text-center">
              {t.barrierLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.barriers.map((barrier, i) => {
                const Icon = barrierIcons[i]
                return (
                  <div
                    key={barrier.title}
                    className="rounded-lg border border-border bg-card/50 p-5 text-center"
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {barrier.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {barrier.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
