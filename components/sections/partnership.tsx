"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function PartnershipSection({ locale }: { locale: Locale }) {
  const t = content[locale].partnership

  return (
    <section id="partnership" className="py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {t.label}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl bg-secondary/30 p-10 lg:p-16">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-6">
                <span className="text-2xl font-semibold text-primary">Haven</span>
                <span className="text-muted-foreground">&</span>
                <span className="text-2xl font-semibold text-primary">Recursive</span>
              </div>
            </div>
            <p className="text-pretty text-center text-lg leading-relaxed text-muted-foreground">
              {t.description}
            </p>
          </div>
        </div>

        {/* 3-Step Implementation Model */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            {t.steps.map((step) => (
              <div key={step.number}>
                <div className="rounded-2xl bg-secondary/30 p-8 h-full">
                  <div className="mb-4">
                    <span className="text-5xl font-extralight text-primary/30">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
