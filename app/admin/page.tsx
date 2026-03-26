import { getAllNews } from "@/lib/news"
import { newsMeta } from "@/lib/news"
import { UserButton } from "@clerk/nextjs"
import { AdminNewsList } from "./admin-news-list"

export default async function AdminPage() {
  const publishedItems = await getAllNews("en")
  const publishedSlugs = new Map(
    publishedItems.map((item) => [item.slug, item.date])
  )

  const allArticles = Object.entries(newsMeta).map(([slug, meta]) => ({
    slug,
    title: meta.en.title,
    titleJa: meta.ja.title,
    publishedDate: publishedSlugs.get(slug) ?? null,
  }))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">
            Haven Admin — News
          </h1>
          <UserButton />
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <AdminNewsList articles={allArticles} />
      </div>
    </div>
  )
}
