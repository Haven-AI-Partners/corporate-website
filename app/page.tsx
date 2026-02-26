"use client"

import { useState } from "react"
import type { Locale } from "@/lib/content"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { MissionSection } from "@/components/sections/mission"
import { VisionSection } from "@/components/sections/vision"
import { ApproachSection } from "@/components/sections/approach"
import { PartnershipSection } from "@/components/sections/partnership"
import { Footer } from "@/components/footer"

export default function Page() {
  const [locale, setLocale] = useState<Locale>("ja")

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="home" />
      <HeroSection locale={locale} />
      <MissionSection locale={locale} />
      <VisionSection locale={locale} />
      <ApproachSection locale={locale} />
      <PartnershipSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
