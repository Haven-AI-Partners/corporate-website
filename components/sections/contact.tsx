"use client"

import { Mail } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function ContactSection({ locale }: { locale: Locale }) {
  const t = content[locale].contact

  return (
    <section id="contact" className="py-32 lg:py-40 bg-[hsl(224,58%,16%)]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-6 text-pretty text-lg text-[hsl(224,30%,65%)]">
          {t.description}
        </p>
        <div className="mt-10">
          <a
            href={`mailto:${t.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            {t.cta}
          </a>
        </div>
        <p className="mt-6 text-sm text-[hsl(224,30%,65%)]">{t.email}</p>
      </div>
    </section>
  )
}
