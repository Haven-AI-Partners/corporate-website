"use client"

import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { LeadershipSection } from "@/components/sections/leadership"
import { ValuesSection } from "@/components/sections/values"
import { Footer } from "@/components/footer"

export default function LeadershipPage() {
  const { locale, setLocale } = useLocale()

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="leadership" />
      <div className="pt-16" />
      <LeadershipSection locale={locale} />
      <ValuesSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
