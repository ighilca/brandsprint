import type { Metadata } from 'next'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/permanent-marker'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import GoogleTagManager from './components/GoogleTagManager'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'BrandSprint - Atelier de Branding en 3 Heures',
  description: 'Créez une identité de marque claire et alignée avec notre atelier sur mesure en 3 heures.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Suspense fallback={<div className="nav-height" />}>
          <Navigation />
        </Suspense>
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
        <Suspense>
          <CookieConsent />
          <GoogleTagManager />
        </Suspense>
      </body>
    </html>
  )
} 
