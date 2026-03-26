import { NextRequest, NextResponse } from "next/server"
import { auth, currentUser } from "@clerk/nextjs/server"
import { neon } from "@neondatabase/serverless"
import { newsMeta } from "@/lib/news"

const ALLOWED_DOMAIN = "havenaipartners.com"

function getDb() {
  return neon(process.env.DATABASE_URL!)
}

export async function POST(request: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await currentUser()
  const email = user?.emailAddresses.find(
    (e) => e.id === user.primaryEmailAddressId
  )?.emailAddress

  if (!email || !email.endsWith(`@${ALLOWED_DOMAIN}`)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { action, slug, date } = await request.json()

  if (!slug || typeof slug !== "string") {
    return NextResponse.json({ error: "slug is required" }, { status: 400 })
  }

  const sql = getDb()

  if (action === "unpublish") {
    await sql`DELETE FROM news_publish WHERE slug = ${slug}`
    return NextResponse.json({ slug, status: "unpublished" })
  }

  if (!(slug in newsMeta)) {
    return NextResponse.json(
      { error: `Unknown news slug: ${slug}` },
      { status: 404 }
    )
  }

  const publishedDate = date ?? new Date().toISOString().split("T")[0]

  await sql`
    INSERT INTO news_publish (slug, published_date)
    VALUES (${slug}, ${publishedDate})
    ON CONFLICT (slug) DO UPDATE SET published_date = ${publishedDate}
  `

  return NextResponse.json({ slug, publishedDate, status: "published" })
}
