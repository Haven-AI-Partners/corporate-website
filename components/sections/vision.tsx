"use client"

import { TrendingUp, Lightbulb, Users } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const pillarsConfig = [
  {
    Icon: TrendingUp,
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary text-primary-foreground",
    accent: "bg-primary",
  },
  {
    Icon: Lightbulb,
    gradient: "from-accent/15 to-accent/5",
    iconBg: "bg-accent text-accent-foreground",
    accent: "bg-accent",
  },
  {
    Icon: Users,
    gradient: "from-[hsl(224,54%,16%)]/12 to-[hsl(224,54%,16%)]/4",
    iconBg: "bg-[hsl(224,54%,16%)] text-white",
    accent: "bg-[hsl(224,54%,16%)]",
  },
]

export function VisionSection({ locale }: { locale: Locale }) {
  const t = content[locale].vision

  return (
    <section id="vision" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 lg:gap-12">
          {t.pillars.map((pillar, i) => {
            const { Icon, gradient, iconBg, accent } = pillarsConfig[i]
            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                {/* Gradient header area with centered icon */}
                <div className={`h-44 bg-gradient-to-br ${gradient} relative flex items-center justify-center`}>
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${iconBg} shadow-lg transition-transform group-hover:scale-110`}>
                    <Icon className="h-10 w-10" />
                  </div>
                </div>

                {/* Accent bar */}
                <div className={`h-1 ${accent} opacity-50`} />

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
