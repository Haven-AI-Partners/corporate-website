"use client"

import { Blocks } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function PartnershipSection({ locale }: { locale: Locale }) {
  const t = content[locale].partnership

  return (
    <section id="partnership" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-8 lg:p-12 shadow-sm">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="text-lg font-bold">H</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Blocks className="h-5 w-5 text-accent" />
                  <span className="text-xs text-muted-foreground">{"&"}</span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="text-lg font-bold">R</span>
                </div>
              </div>
            </div>
            <p className="text-pretty text-center text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
