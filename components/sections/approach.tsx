"use client"

import { Users, Brain, Settings, Layers } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const pillarIcons = [Users, Brain, Settings, Layers]

export function ApproachSection({ locale }: { locale: Locale }) {
  const t = content[locale].approach

  return (
    <section id="approach" className="py-32 lg:py-40 bg-[hsl(224,54%,16%)] text-white relative overflow-hidden">
      {/* Subtle grid pattern matching hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(224_40%_53%/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(224_40%_53%/0.06)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(224_40%_53%/0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-[hsl(224,40%,70%)]">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-6 text-pretty text-lg text-[hsl(216,33%,75%)]">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i]
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 transition-all hover:bg-white/[0.08] hover:border-white/20"
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-extralight leading-none text-white/10">
                    {String(pillar.number).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-primary/30">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-[hsl(224,40%,70%)]">
                  {pillar.subtitle}
                </p>
                {pillar.description && (
                  <p className="mt-4 text-base leading-relaxed text-[hsl(216,33%,75%)]">
                    {pillar.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
