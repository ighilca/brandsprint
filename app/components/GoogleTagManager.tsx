'use client'

import { useEffect } from 'react'

const GTM_ID = 'GTM-XXXXX' // Remplacez par votre ID GTM

export default function GoogleTagManager() {
  useEffect(() => {
    // Vérifie le consentement des cookies
    const consent = localStorage.getItem('cookieConsent')
    if (consent) {
      const { analytics } = JSON.parse(consent)
      
      if (analytics) {
        // Charge GTM seulement si les cookies analytiques sont acceptés
        const script = document.createElement('script')
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `
        document.head.appendChild(script)

        // Ajoute le noscript fallback
        const noscript = document.createElement('noscript')
        const iframe = document.createElement('iframe')
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`
        iframe.height = '0'
        iframe.width = '0'
        iframe.style.display = 'none'
        iframe.style.visibility = 'hidden'
        noscript.appendChild(iframe)
        document.body.appendChild(noscript)
      }
    }

    // Écoute les changements de consentement
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        window.location.reload()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return null
} 