"use client"

import { ArrowDown } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale].hero

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[hsl(224,54%,16%)]">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(224_40%_53%/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(224_40%_53%/0.06)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(224_40%_53%/0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm font-light uppercase tracking-[0.25em] text-[hsl(216,33%,75%)]">
          {t.tagline}
        </p>
        <h1 className="text-balance text-5xl font-light tracking-tight text-[hsl(0,0%,100%)] sm:text-7xl lg:text-8xl">
          {t.title}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[hsl(216,33%,75%)]">
          {t.subtitle}
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            {t.cta}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[hsl(216,33%,75%)] hover:text-[hsl(0,0%,100%)] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
