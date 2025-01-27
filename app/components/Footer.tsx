'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 text-center text-sm text-gray-600 font-montserrat">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div>
            © {currentYear} Djamel Ighil. Tous droits réservés.
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/politique-de-confidentialite" 
              className="text-gray-600 hover:text-terracotta transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
