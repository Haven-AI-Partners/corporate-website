"use client"

import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { content } from "@/lib/content"
import type { NewsItem } from "@/lib/news"

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr)
  if (locale === "ja") {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })
}

export function NewsListView({
  itemsJa,
  itemsEn,
}: {
  itemsJa: NewsItem[]
  itemsEn: NewsItem[]
}) {
  const { locale, setLocale } = useLocale()
  const items = locale === "ja" ? itemsJa : itemsEn

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="news" />
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-normal uppercase tracking-[0.25em] text-primary">
            {content[locale].nav.news}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {locale === "ja" ? "お知らせ・プレスリリース" : "News & Press Releases"}
          </h1>

          <div className="mt-12 flex flex-col gap-8">
            {items.length === 0 && (
              <p className="text-muted-foreground">
                {locale === "ja"
                  ? "現在、お知らせはありません。"
                  : "No news at this time."}
              </p>
            )}
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group border-b border-border pb-8 last:border-0 block"
              >
                <p className="text-sm text-muted-foreground">
                  {formatDate(item.date, locale)}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
