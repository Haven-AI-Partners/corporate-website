"use client"

import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale].hero

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24">
      {/* Background water image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-water.jpg')" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
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
      </div>
    </section>
  )
}
