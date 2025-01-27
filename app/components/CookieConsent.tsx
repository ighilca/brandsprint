'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait son choix
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const { analytics } = JSON.parse(consent)
      setAnalyticsEnabled(analytics)
      setHasConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const settings = {
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(settings))
    setAnalyticsEnabled(true)
    setShowBanner(false)
    setHasConsent(true)
    window.location.reload() // Recharge la page pour appliquer les changements
  }

  const handleRejectAll = () => {
    const settings = {
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(settings))
    setAnalyticsEnabled(false)
    setShowBanner(false)
    setHasConsent(true)
    window.location.reload() // Recharge la page pour appliquer les changements
  }

  const handleToggleAnalytics = () => {
    const newState = !analyticsEnabled
    const settings = {
      analytics: newState,
      functional: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(settings))
    setAnalyticsEnabled(newState)
    window.location.reload() // Recharge la page pour appliquer les changements
  }

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t-2 border-brand-black"
          >
            <div className="container mx-auto py-6 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm md:text-base">
                    <p className="mb-2">
                      Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                      Vous pouvez personnaliser vos préférences ou accepter l'utilisation par défaut.
                    </p>
                    <button 
                      onClick={() => setShowPreferences(true)}
                      className="text-terracotta underline hover:no-underline"
                    >
                      Gérer mes préférences
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2 border-2 border-brand-black rounded hover:bg-gray-100 transition-colors"
                    >
                      Tout refuser
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2 bg-terracotta text-white rounded hover:bg-opacity-90 transition-colors"
                    >
                      Tout accepter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton flottant pour gérer les préférences */}
      <AnimatePresence>
        {hasConsent && !showBanner && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreferences(true)}
            className="fixed bottom-4 left-4 z-50 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow"
            title="Gérer les préférences de cookies"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 text-terracotta"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal des préférences */}
      <AnimatePresence>
        {showPreferences && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowPreferences(false)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-full max-w-lg"
            >
              <div className="p-6">
                <h2 className="text-2xl font-permanent-marker mb-4">Préférences des cookies</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <h3 className="font-semibold">Cookies essentiels</h3>
                      <p className="text-sm text-gray-600">Nécessaires au fonctionnement du site</p>
                    </div>
                    <div className="bg-gray-200 px-3 py-1 rounded text-sm">Toujours actif</div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <h3 className="font-semibold">Cookies analytiques</h3>
                      <p className="text-sm text-gray-600">Nous aident à améliorer votre expérience</p>
                    </div>
                    <button 
                      onClick={handleToggleAnalytics}
                      className={`px-3 py-1 border-2 rounded text-sm transition-colors ${
                        analyticsEnabled 
                          ? 'bg-terracotta text-white border-terracotta' 
                          : 'border-terracotta text-terracotta hover:bg-terracotta hover:text-white'
                      }`}
                    >
                      {analyticsEnabled ? 'Désactiver' : 'Activer'}
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 border-2 border-brand-black rounded hover:bg-gray-100 transition-colors"
                  >
                    Fermer
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 bg-terracotta text-white rounded hover:bg-opacity-90 transition-colors"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 
