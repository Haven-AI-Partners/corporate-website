import React from "react"
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Noto_Serif_JP } from 'next/font/google'

import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haven AI Partners',
  description:
    'Haven AI Partners - Empowering Japanese enterprises through AI transformation. AIを原動力に日本企業が新たな価値を創り続ける社会を目指す。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="font-serif antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
