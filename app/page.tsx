'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-off-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/images/workshop-1.jpg"
                alt="Atelier de branding en action"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl mb-6 text-brand-black">
                Créez une identité de marque percutante en 3 heures
              </h1>
              <p className="text-xl mb-8">
                Un atelier intensif pour aligner votre équipe et poser les bases d'une marque forte
              </p>
              <Link href="/reserver" className="btn-primary text-lg inline-block">
                Réserver votre atelier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">Pourquoi cet atelier est fait pour vous</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aligner votre équipe",
                description: "Clarifiez la vision et assurez-vous que tout le monde travaille dans la même direction."
              },
              {
                title: "Définir les bases",
                description: "Concentrez-vous sur les valeurs, la mission et la personnalité de votre marque."
              },
              {
                title: "Avancer efficacement",
                description: "Obtenez des résultats concrets et applicables en seulement 3 heures."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4 text-terracotta">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-off-white">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">À qui s'adresse l'atelier</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Startups en croissance",
                description: "Vous développez votre entreprise et avez besoin d'une identité de marque solide pour vous démarquer sur le marché."
              },
              {
                title: "PME en transformation",
                description: "Votre entreprise évolue et vous souhaitez redéfinir votre positionnement pour mieux refléter vos nouvelles ambitions."
              },
              {
                title: "Équipes marketing",
                description: "Vous cherchez à aligner vos équipes autour d'une vision commune et cohérente de votre marque."
              },
              {
                title: "Entrepreneurs",
                description: "Vous lancez un nouveau projet et voulez poser des bases solides pour votre identité de marque."
              },
              {
                title: "Organisations à impact",
                description: "Vous avez une mission sociale ou environnementale et souhaitez mieux communiquer vos valeurs."
              },
              {
                title: "Équipes produit",
                description: "Vous développez de nouvelles offres et voulez assurer leur cohérence avec l'identité de votre marque."
              }
            ].map((target, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4 text-terracotta font-permanent-marker">{target.title}</h3>
                <p className="text-lg">{target.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-terracotta text-white">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-3xl md:text-4xl font-permanent-marker leading-relaxed">
              Les marques présentées de manière cohérente ont <span className="text-4xl md:text-5xl block mt-4">3,5 fois plus de chances</span> de bénéficier d'une excellente visibilité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-off-white py-16">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">Comment se déroule l'atelier ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Échauffement créatif",
                duration: "30 minutes",
                description: "Imaginez l'avenir de votre produit et développez une vision commune."
              },
              {
                title: "Définition de l'identité",
                duration: "1 heure",
                description: "Explorez vos valeurs et votre mission avec le cercle d'or de Simon Sinek."
              },
              {
                title: "Analyse du contexte",
                duration: "45 minutes",
                description: "Identifiez vos concurrents et clarifiez votre positionnement unique."
              },
              {
                title: "Création de personnalité",
                duration: "45 minutes",
                description: "Définissez les attributs qui reflètent au mieux votre identité."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-terracotta text-lg mb-2">{step.duration}</div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">Ce qu'ils en disent</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "L'atelier nous a permis de transformer nos idées floues en une vision claire et alignée. En 3 heures, notre équipe a trouvé une direction commune.",
                author: "Mathieu L.",
                role: "Fondateur d'une startup technologique"
              },
              {
                quote: "Grâce à cet atelier, nous avons enfin défini une identité qui reflète parfaitement nos valeurs et nos ambitions. Un processus efficace et inspirant.",
                author: "Amélie C.",
                role: "Directrice Marketing"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-off-white p-8 rounded-lg">
                <p className="text-lg mb-4">« {testimonial.quote} »</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-16 bg-off-white">
        <div className="container">
          <h2 className="text-4xl text-center mb-4">Ce que vous obtenez</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Un document synthétique et actionnable qui servira de référence pour toutes vos communications futures.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Vision et mission",
                description: "Une vision et une mission clairement définies qui donnent une direction claire à votre marque."
              },
              {
                title: "Valeurs fondamentales",
                description: "Les valeurs essentielles qui guideront toutes les décisions et communications de votre marque."
              },
              {
                title: "Positionnement unique",
                description: "Une proposition de valeur distinctive qui vous démarque sur votre marché."
              },
              {
                title: "Personnalité et ton",
                description: "Une voix et une personnalité authentiques qui résonnent avec votre audience."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4 text-terracotta font-permanent-marker">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-terracotta text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl mb-6">Prêt à clarifier votre vision ?</h2>
          <p className="text-xl mb-8">Réservez votre atelier dès maintenant et posez les bases d'une marque forte.</p>
          <Link 
            href="/reserver"
            className="bg-white text-terracotta px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
          >
            Planifier une session
          </Link>
        </div>
      </section>
    </div>
  )
} 
