"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale].hero

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="mb-6 text-sm font-normal uppercase tracking-[0.25em] text-primary">
              {t.tagline}
            </p>
            <h1 className="text-balance text-4xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {t.subtitle}
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary px-10 py-4 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                {t.cta}
              </a>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-primary/5 to-primary/15" />
              <div className="absolute inset-8 rounded-xl bg-gradient-to-br from-white/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
