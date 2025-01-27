'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

const MobileMenuTrigger = dynamic(() => import('./MobileMenuTrigger'), {
  ssr: false
})

export default function Navigation() {
  const pathname = usePathname()
  const isNotHome = pathname !== '/'

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b-2 border-brand-black nav-height z-[1000] flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="h-[72px] w-auto relative">
          <Image
            src="/images/ighil-ateliers.png"
            alt="Ighil Ateliers"
            width={264}
            height={72}
            className="h-full w-auto"
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            href={isNotHome ? '/#benefits' : '#benefits'}
            className="font-permanent-marker text-lg hover:text-terracotta transition-colors"
          >
            Bénéfices
          </Link>
          <Link 
            href={isNotHome ? '/#process' : '#process'}
            className="font-permanent-marker text-lg hover:text-terracotta transition-colors"
          >
            Processus
          </Link>
          <Link 
            href={isNotHome ? '/#testimonials' : '#testimonials'}
            className="font-permanent-marker text-lg hover:text-terracotta transition-colors"
          >
            Témoignages
          </Link>
          <Link 
            href="/reserver" 
            className="btn-primary font-montserrat text-lg font-medium"
          >
            Réserver
          </Link>
        </div>
        <Suspense fallback={<div className="md:hidden text-2xl font-permanent-marker">☰</div>}>
          <MobileMenuTrigger />
        </Suspense>
      </div>
    </nav>
  )
} 
