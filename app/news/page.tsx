"use client"

import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { content } from "@/lib/content"

const newsItems = {
  ja: [
    {
      date: "2026年1月",
      title: "株式会社Recursiveとの戦略的パートナーシップを開始",
      summary:
        "Haven AI Partnersは、2026年1月より株式会社Recursiveとの戦略的パートナーシップを開始しました。Havenの現場実装力とRecursiveの先端技術を融合し、日本全国の中堅・中小企業におけるAI活用を着実に推進します。",
      slug: "recursive-partnership",
    },
  ],
  en: [
    {
      date: "January 2026",
      title: "Strategic Partnership with Recursive Inc.",
      summary:
        "Haven AI Partners launched a strategic partnership with Recursive Inc. in January 2026. By combining Haven's field implementation capabilities with Recursive's cutting-edge technology, we steadily advance AI adoption for SMBs across Japan.",
      slug: "recursive-partnership",
    },
  ],
}

export default function NewsPage() {
  const { locale, setLocale } = useLocale()
  const items = newsItems[locale]

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="news" />
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {content[locale].nav.news}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {locale === "ja" ? "お知らせ・プレスリリース" : "News & Press Releases"}
          </h1>

          <div className="mt-12 flex flex-col gap-8">
            {items.map((item) => (
              <article
                key={item.slug}
                className="group border-b border-border pb-8 last:border-0"
              >
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer locale={locale} />
    </main>
  )
}
