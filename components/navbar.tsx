"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

interface NavbarProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  activePage?: "home" | "leadership" | "about" | "news" | "terms" | "privacy"
}

export function Navbar({ locale, onLocaleChange, activePage = "home" }: NavbarProps) {
  const t = content[locale].nav
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: t.home, key: "home" },
    { href: "/leadership", label: t.leadership, key: "leadership" },
    { href: "/about", label: t.about, key: "about" },
    { href: "/news", label: t.news, key: "news" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <Image
              src="/images/haven-wordmark-sapphire.png"
              alt="Haven AI Partners"
              width={280}
              height={70}
              style={{ width: 280, height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors ${
                  activePage === item.key
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://www.linkedin.com/company/haven-ai-partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <button
              type="button"
              onClick={() => onLocaleChange(locale === "ja" ? "en" : "ja")}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {content[locale].langSwitch}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              {content[locale].hero.cta}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => onLocaleChange(locale === "ja" ? "en" : "ja")}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-3.5 w-3.5" />
              {content[locale].langSwitch}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-sm transition-colors py-1 ${
                  activePage === item.key
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 mt-2"
            >
              {content[locale].hero.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
