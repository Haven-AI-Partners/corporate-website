"use client"

import { Building2 } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function AboutSection({ locale }: { locale: Locale }) {
  const t = content[locale].about

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {t.label}
        </p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.title}
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <dl className="flex flex-col gap-5">
              {t.items.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-base font-medium text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-center">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
