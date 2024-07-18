import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quote Web Apps',
  description: 'Get instant pricing quotes for your web application development projects. Accurate tool that provides  estimates based on your specific requirements and preferences, helping you budget effectively.',
  keywords: 'web app pricing, web application quotes, development cost estimation, web development pricing, project budgeting',
  twitter: {
    card: 'summary_large_image',
    site: '@webduno',
    title: 'Web App Pricing Quotes',
    description: 'Get instant quotes for web app development costs and budget your project effectively.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"ma-0"}>{children}</body>
    </html>
  )
}
