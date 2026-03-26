"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { useLocale } from "@/hooks/use-locale"
import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { content } from "@/lib/content"
import type { NewsArticle } from "@/lib/news"

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr)
  if (locale === "ja") {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function NewsArticleView({
  articleJa,
  articleEn,
}: {
  articleJa: NewsArticle
  articleEn: NewsArticle
}) {
  const { locale, setLocale } = useLocale()
  const article = locale === "ja" ? articleJa : articleEn

  return (
    <main>
      <Navbar locale={locale} onLocaleChange={setLocale} activePage="news" />
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/news"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {content[locale].nav.news}
          </Link>

          <p className="mt-8 text-sm text-muted-foreground">
            {formatDate(article.date, locale)}
          </p>

          <div className="mt-6 prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </div>
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
