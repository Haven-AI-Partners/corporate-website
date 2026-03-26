import { getAllNews } from "@/lib/news"
import { NewsListView } from "./news-list-view"

export default async function NewsPage() {
  const [itemsJa, itemsEn] = await Promise.all([
    getAllNews("ja"),
    getAllNews("en"),
  ])

  return <NewsListView itemsJa={itemsJa} itemsEn={itemsEn} />
}
