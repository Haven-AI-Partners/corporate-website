"use client"

import { Handshake, Sprout } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const featureIcons = [Handshake, Sprout]

export function FeaturesSection({ locale }: { locale: Locale }) {
  const t = content[locale].features

  return (
    <section id="features" className="py-24 lg:py-32">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
