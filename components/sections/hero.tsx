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

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-8">
        <div>
          <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t.tagline}
          </h1>
          <p className="mt-10 max-w-3xl text-pretty text-lg leading-relaxed text-primary/80 lg:text-xl">
            {t.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
