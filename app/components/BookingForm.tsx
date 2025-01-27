'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/email'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: false })

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_email: emailConfig.toEmail,
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          team_size: formData.teamSize,
          message: formData.message
        },
        emailConfig.publicKey
      )

      setStatus({ submitting: false, submitted: true, error: false })
      setFormData({
        name: '',
        email: '',
        company: '',
        teamSize: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({ submitting: false, submitted: false, error: true })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (status.submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-permanent-marker text-terracotta mb-6">
          Merci pour votre réservation !
        </h3>
        <p className="text-lg mb-6">
          Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais pour confirmer les détails.
        </p>
        <button
          onClick={() => setStatus({ submitting: false, submitted: false, error: false })}
          className="btn-primary font-montserrat py-3 px-6 text-base"
        >
          Faire une autre réservation
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-permanent-marker text-terracotta mb-6 text-center">
        Réservez votre atelier
      </h3>
      
      {status.error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors"
            placeholder="Votre nom"
            disabled={status.submitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
            Email professionnel
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors"
            placeholder="vous@entreprise.com"
            disabled={status.submitting}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-black mb-2">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors"
            placeholder="Nom de votre entreprise"
            disabled={status.submitting}
          />
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-brand-black mb-2">
            Taille de l'équipe
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors"
            disabled={status.submitting}
          >
            <option value="">Sélectionnez une taille</option>
            <option value="1-5">1-5 personnes</option>
            <option value="6-10">6-10 personnes</option>
            <option value="11-20">11-20 personnes</option>
            <option value="20+">Plus de 20 personnes</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
            Message (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta transition-colors"
            placeholder="Partagez vos attentes ou questions spécifiques..."
            disabled={status.submitting}
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary font-montserrat py-4 text-lg font-medium"
          disabled={status.submitting}
        >
          {status.submitting ? 'Envoi en cours...' : 'Réserver mon atelier'}
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600 text-center">
        Nous vous répondrons sous 24h pour confirmer votre réservation.
      </p>
    </div>
  )
} 
