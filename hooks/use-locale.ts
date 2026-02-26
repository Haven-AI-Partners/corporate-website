"use client"

import { useState, useEffect } from "react"
import type { Locale } from "@/lib/content"

const STORAGE_KEY = "haven-locale"

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("ja")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved === "en" || saved === "ja") {
      setLocale(saved)
    }
    setMounted(true)
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
  }

  return { locale, setLocale: changeLocale, mounted }
}
