'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const isNotHome = pathname !== '/'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 bg-white z-[1001] flex flex-col items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-2xl font-permanent-marker"
          >
            ✕
          </button>
          
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <Link
              href={isNotHome ? '/#benefits' : '#benefits'}
              onClick={onClose}
              className="font-permanent-marker hover:text-terracotta transition-colors"
            >
              Bénéfices
            </Link>
            <Link
              href={isNotHome ? '/#process' : '#process'}
              onClick={onClose}
              className="font-permanent-marker hover:text-terracotta transition-colors"
            >
              Processus
            </Link>
            <Link
              href={isNotHome ? '/#testimonials' : '#testimonials'}
              onClick={onClose}
              className="font-permanent-marker hover:text-terracotta transition-colors"
            >
              Témoignages
            </Link>
            <Link
              href="/reserver"
              onClick={onClose}
              className="btn-primary font-montserrat text-lg font-medium mt-4"
            >
              Réserver
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
