"use client"

import { Heart, Shield, BookOpen, Zap, Users2 } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

const valueIcons = [Heart, Shield, BookOpen, Zap, Users2]

export function ValuesSection({ locale }: { locale: Locale }) {
  const t = content[locale].values

  return (
    <section id="values" className="pt-16 pb-32 lg:pt-20 lg:pb-40 bg-secondary/30">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-5 lg:gap-8">
          {t.items.map((item, i) => {
            const Icon = valueIcons[i]
            return (
              <div
                key={i}
                className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card px-5 py-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30 lg:px-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <h3 className="text-balance text-base font-medium leading-snug text-foreground lg:text-lg">
                    {item.en}
                  </h3>
                  <p className="text-balance text-sm leading-relaxed text-muted-foreground">
                    {locale === "ja" ? item.ja : item.enSub}
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
