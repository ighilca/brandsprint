'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('./MobileMenu'), {
  ssr: false
})

export default function MobileMenuTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        className="md:hidden text-2xl font-permanent-marker"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  )
} 

