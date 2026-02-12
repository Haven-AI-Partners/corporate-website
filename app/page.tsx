"use client"

import { useState } from "react"
import type { Locale } from "@/lib/content"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { MissionSection } from "@/components/sections/mission"
import { VisionSection } from "@/components/sections/vision"
import { LeadershipSection } from "@/components/sections/leadership"
import { FeaturesSection } from "@/components/sections/features"
import { StrengthsSection } from "@/components/sections/strengths"
import { PartnershipSection } from "@/components/sections/partnership"
import { MarketSection } from "@/components/sections/market"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  const [locale, setLocale] = useState<Locale>("ja")

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <MissionSection locale={locale} />
      <VisionSection locale={locale} />
      <LeadershipSection locale={locale} />
      <FeaturesSection locale={locale} />
      <StrengthsSection locale={locale} />
      <PartnershipSection locale={locale} />
      <MarketSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
