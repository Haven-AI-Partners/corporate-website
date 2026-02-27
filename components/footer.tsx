"use client"

import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/content"
import { content } from "@/lib/content"

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer
  const nav = content[locale].nav

  return (
    <footer className="border-t border-[hsl(224,40%,24%)] bg-[hsl(224,54%,13%)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <Image
              src="/haven-logo.png"
              alt="Haven AI Partners"
              width={200}
              height={50}
              style={{ width: 200, height: "auto" }}
            />
            <p className="mt-1 text-xs text-[hsl(216,33%,65%)]">
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
                    className="text-sm text-[hsl(216,33%,65%)] hover:text-[hsl(0,0%,100%)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-[hsl(224,40%,24%)] pt-8 text-center">
          <p className="text-xs text-[hsl(216,33%,65%)]">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
