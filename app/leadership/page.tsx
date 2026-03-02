"use client"

import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { LeadershipSection } from "@/components/sections/leadership"
import { ValuesSection } from "@/components/sections/values"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function LeadershipPage() {
  const { locale, setLocale } = useLocale()

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="leadership" />
      <div className="pt-24" />
      <LeadershipSection locale={locale} />
      <ValuesSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
