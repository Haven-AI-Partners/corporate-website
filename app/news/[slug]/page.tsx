import { getAllNewsSlugs, getNewsArticle } from "@/lib/news"
import { NewsArticleView } from "./news-article-view"

export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getNewsArticle(slug, "en")
  if (!article) return { title: "Not Found" }
  return { title: `${article.title} | Haven AI Partners` }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const [articleJa, articleEn] = await Promise.all([
    getNewsArticle(slug, "ja"),
    getNewsArticle(slug, "en"),
  ])

  if (!articleJa || !articleEn) {
    return <div>Article not found</div>
  }

  return <NewsArticleView articleJa={articleJa} articleEn={articleEn} />
}
