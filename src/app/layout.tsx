import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iRecovery Data Panama',
  description: 'Professional physical hard drive recovery services. Retrieve your lost data quickly and securely with our expert team and advanced technology.',
  keywords: 'data recovery, hard drive recovery, data recovery services, physical drive recovery, lost data retrieval',
  twitter: {
    card: 'summary_large_image',
    site: '@datarecovsaas',
    title: 'Data Recovery Services',
    description: 'Retrieve your lost data quickly and securely with our professional physical hard drive recovery services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{background: "#08090D"}}>
      <body className={"ma-0 noverflow-x w-100vw"}>{children}</body>
    </html>
  )
}
