import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryProvider } from '@/components/ReactQueryProvider'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Vegnar GFRP - Leading Composite Solutions',
  description: 'Revolutionary Glass Fiber Reinforced Polymer technology transforming construction industry with superior strength and durability',
  icons: {
    icon: '/images/fevicon.png',
    shortcut: '/images/fevicon.png',
    apple: '/images/fevicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <ReactQueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="min-h-screen flex flex-col overflow-x-hidden">
              <Header />
              <main className="flex-1 overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}