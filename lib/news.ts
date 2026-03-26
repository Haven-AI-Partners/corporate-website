import fs from "fs"
import path from "path"
import { neon } from "@neondatabase/serverless"
import type { Locale } from "./content"

const newsDir = path.join(process.cwd(), "content/news")

export interface NewsItem {
  slug: string
  title: string
  date: string
  summary: string
}

export interface NewsArticle extends NewsItem {
  content: string
}

interface NewsMeta {
  ja: {
    title: string
    summary: string
  }
  en: {
    title: string
    summary: string
  }
}

export const newsMeta: Record<string, NewsMeta> = {
  "recursive-partnership": {
    ja: {
      title: "株式会社Recursiveとの戦略的パートナーシップを開始",
      summary:
        "Haven AI Partnersは、2026年1月より株式会社Recursiveとの戦略的パートナーシップを開始しました。Havenの現場実装力とRecursiveの先端技術を融合し、日本全国の中堅・中小企業におけるAI活用を着実に推進します。",
    },
    en: {
      title: "Strategic Partnership with Recursive Inc.",
      summary:
        "Haven AI Partners launched a strategic partnership with Recursive Inc. in January 2026. By combining Haven's field implementation capabilities with Recursive's cutting-edge technology, we steadily advance AI adoption for SMBs across Japan.",
    },
  },
}

function getDb() {
  return neon(process.env.DATABASE_URL!)
}

async function getPublishedDates(): Promise<Record<string, string>> {
  const sql = getDb()
  const rows = await sql`SELECT slug, published_date FROM news_publish`
  const dates: Record<string, string> = {}
  for (const row of rows) {
    dates[row.slug] = row.published_date
  }
  return dates
}

export async function getAllNews(locale: Locale): Promise<NewsItem[]> {
  const publishedDates = await getPublishedDates()

  return Object.entries(newsMeta)
    .filter(([slug]) => slug in publishedDates)
    .map(([slug, meta]) => ({
      slug,
      date: publishedDates[slug],
      ...meta[locale],
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getNewsArticle(
  slug: string,
  locale: Locale
): Promise<NewsArticle | null> {
  const meta = newsMeta[slug]
  if (!meta) return null

  const publishedDates = await getPublishedDates()
  if (!(slug in publishedDates)) return null

  const filePath = path.join(newsDir, slug, `${locale}.md`)
  if (!fs.existsSync(filePath)) return null

  const content = fs.readFileSync(filePath, "utf-8")

  return {
    slug,
    date: publishedDates[slug],
    ...meta[locale],
    content,
  }
}

export async function getAllNewsSlugs(): Promise<string[]> {
  const publishedDates = await getPublishedDates()
  return Object.keys(newsMeta).filter((slug) => slug in publishedDates)
}
