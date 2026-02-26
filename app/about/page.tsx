"use client"

import { useState } from "react"
import type { Locale } from "@/lib/content"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const [locale, setLocale] = useState<Locale>("ja")

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="about" />
      <div className="pt-16" />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
