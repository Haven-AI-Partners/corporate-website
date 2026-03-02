"use client"

import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer
  const nav = content[locale].nav

  return (
    <footer className="border-t border-border bg-white">
      <div>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-8">
          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:items-center">
            <div>
              <Image
                src="/images/haven-wordmark-sapphire.png"
                alt="Haven AI Partners"
                width={280}
                height={70}
                style={{ width: 280, height: "auto" }}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {t.confidential}
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {[
                  { href: "/", label: nav.home },
                  { href: "/leadership", label: nav.leadership },
                  { href: "/about", label: nav.about },
                  { href: "/news", label: nav.news },
                  { href: "/terms", label: locale === "ja" ? "利用規約" : "Terms" },
                  { href: "/privacy", label: locale === "ja" ? "プライバシーポリシー" : "Privacy" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="https://www.linkedin.com/company/haven-ai-partners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
