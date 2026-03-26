"use client"

import { useState } from "react"

interface Article {
  slug: string
  title: string
  titleJa: string
  publishedDate: string | null
}

export function AdminNewsList({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <ArticleRow key={article.slug} article={article} />
      ))}
      {articles.length === 0 && (
        <p className="text-muted-foreground">
          No news articles configured. Add entries to newsMeta in lib/news.ts.
        </p>
      )}
    </div>
  )
}

function ArticleRow({ article }: { article: Article }) {
  const [publishedDate, setPublishedDate] = useState(article.publishedDate)
  const [date, setDate] = useState(
    article.publishedDate ?? new Date().toISOString().split("T")[0]
  )
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isPublished = publishedDate !== null

  async function handlePublish() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/news/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: article.slug, date }),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error ?? "Failed to publish")
      }
      const data = await res.json()
      setPublishedDate(data.publishedDate)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  async function handleUnpublish() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/news/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "unpublish", slug: article.slug }),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error ?? "Failed to unpublish")
      }
      setPublishedDate(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-lg border border-border p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="font-bold text-foreground">{article.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {article.titleJa}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {article.slug}
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isPublished
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
          }`}
        >
          {isPublished ? "Published" : "Draft"}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <label className="text-sm text-muted-foreground">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded border border-input bg-background px-2 py-1 text-sm text-foreground"
        />

        {isPublished ? (
          <button
            onClick={handleUnpublish}
            disabled={loading}
            className="rounded bg-destructive px-3 py-1 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50"
          >
            {loading ? "..." : "Unpublish"}
          </button>
        ) : (
          <button
            onClick={handlePublish}
            disabled={loading}
            className="rounded bg-primary px-3 py-1 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "..." : "Publish"}
          </button>
        )}

        {isPublished && (
          <button
            onClick={handlePublish}
            disabled={loading}
            className="rounded border border-input px-3 py-1 text-sm font-medium text-foreground hover:bg-accent disabled:opacity-50"
          >
            {loading ? "..." : "Update Date"}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}
