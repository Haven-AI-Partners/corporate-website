import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)', '/api/news/publish(.*)'])
const ALLOWED_DOMAIN = 'havenaipartners.com'

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const session = await auth.protect()
    const email = session.sessionClaims?.email as string | undefined

    if (!email || !email.endsWith(`@${ALLOWED_DOMAIN}`)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
