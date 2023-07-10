import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Lucas Heck',
  description: 'React app to display my portfolio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
