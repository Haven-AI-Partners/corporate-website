"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ValuesSection({ locale }: { locale: Locale }) {
  const t = content[locale].values

  return (
    <section id="values" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-5">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-secondary/40 p-10 min-h-[500px] flex flex-col justify-center"
            >
              <p className="text-lg font-medium text-foreground lg:text-xl">
                {item.en}
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                {item.ja}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
