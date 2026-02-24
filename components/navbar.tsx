"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

interface NavbarProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const t = content[locale].nav
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#mission", label: t.philosophy },
    { href: "#leadership", label: t.leadership },
    { href: "#challenges", label: t.business },
    { href: "#partnership", label: t.partnership },
    { href: "#market", label: t.market },
    { href: "#about", label: t.about },
    { href: "#contact", label: t.contact },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className={`text-lg font-bold tracking-tight transition-colors ${
              isScrolled ? "text-primary" : "text-[hsl(0,0%,100%)]"
            }`}
          >
            Haven AI Partners
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-[hsl(216,33%,75%)] hover:text-[hsl(0,0%,100%)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => onLocaleChange(locale === "ja" ? "en" : "ja")}
              className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                isScrolled
                  ? "border-border text-muted-foreground hover:text-foreground hover:border-primary"
                  : "border-[hsl(216,33%,75%/0.3)] text-[hsl(216,33%,75%)] hover:text-[hsl(0,0%,100%)] hover:border-[hsl(0,0%,100%/0.5)]"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              {content[locale].langSwitch}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => onLocaleChange(locale === "ja" ? "en" : "ja")}
              className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                isScrolled
                  ? "border-border text-muted-foreground hover:text-foreground"
                  : "border-[hsl(216,33%,75%/0.3)] text-[hsl(216,33%,75%)] hover:text-[hsl(0,0%,100%)]"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              {content[locale].langSwitch}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`transition-colors ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-[hsl(216,33%,75%)] hover:text-[hsl(0,0%,100%)]"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-b border-border shadow-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
