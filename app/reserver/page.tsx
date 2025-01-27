'use client'

import BookingForm from '../components/BookingForm'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6 text-brand-black font-permanent-marker">
            Réservez votre atelier de branding
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous pour réserver votre atelier. 
            Nous vous contacterons rapidement pour confirmer les détails.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  )
} 