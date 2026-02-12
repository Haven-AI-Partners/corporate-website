import React from "react"
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, M_PLUS_1p } from 'next/font/google'

import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const mPlus1p = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mplus1p',
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
    <html lang="ja" className={`${plusJakarta.variable} ${mPlus1p.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
