"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ValuesSection({ locale }: { locale: Locale }) {
  const t = content[locale].values

  return (
    <section id="values" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-16 flex flex-col gap-6 max-w-3xl mx-auto">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="py-4"
            >
              <p className="text-lg font-semibold text-primary">
                {item.en}
              </p>
              <p className="mt-2 text-base text-muted-foreground">
                {item.ja}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
