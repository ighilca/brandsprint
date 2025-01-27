'use client'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl mb-8 text-brand-black">Politique de Confidentialité</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Introduction</h2>
              <p className="mb-4">
                Chez BrandSprint, nous accordons une grande importance à la protection de vos renseignements personnels. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre site web et nos services, conformément à la Loi sur la protection des renseignements 
                personnels dans le secteur privé (Loi 25) du Québec et au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Responsable de la protection des renseignements personnels</h2>
              <p className="mb-4">
                Nous avons désigné une personne responsable de la protection des renseignements personnels au sein de notre organisation. 
                Vous pouvez la contacter à l'adresse suivante : <a href="mailto:djamel@ighil.ca" className="text-terracotta hover:underline">
                djamel@ighil.ca</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Collecte des renseignements personnels</h2>
              <p className="mb-4">Nous collectons uniquement les renseignements nécessaires aux fins suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La gestion de votre réservation d'atelier (nom, email, entreprise)</li>
                <li>L'amélioration de nos services via des données d'utilisation anonymisées</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
              <p className="mt-4">
                Nous vous informons de la finalité de la collecte au moment où nous recueillons vos renseignements personnels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Consentement</h2>
              <p className="mb-4">
                Nous obtenons votre consentement explicite avant de collecter ou d'utiliser vos renseignements personnels. 
                Vous pouvez retirer votre consentement à tout moment, sous réserve des restrictions légales et d'un préavis raisonnable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Utilisation des cookies</h2>
              <p className="mb-4">Notre site utilise deux types de cookies :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Cookies essentiels :</span> Nécessaires au fonctionnement du site
                </li>
                <li>
                  <span className="font-semibold">Cookies analytiques :</span> Pour comprendre comment notre site est utilisé 
                  (avec votre consentement uniquement)
                </li>
              </ul>
              <p className="mt-4">
                Vous pouvez à tout moment modifier vos préférences concernant les cookies via le bouton 
                "Gérer les préférences" en bas de page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Conservation des renseignements</h2>
              <p className="mb-4">
                Nous conservons vos renseignements personnels uniquement pour la durée nécessaire à la réalisation 
                des fins déterminées. Une fois ces fins atteintes, les renseignements sont détruits ou anonymisés 
                conformément à nos politiques de conservation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Protection des renseignements</h2>
              <p className="mb-4">
                Nous appliquons des mesures de sécurité conformes aux normes de l'industrie pour protéger vos 
                renseignements personnels contre l'accès, l'utilisation ou la divulgation non autorisés, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Contrôles d'accès stricts</li>
                <li>Formation régulière de notre personnel</li>
                <li>Évaluation continue de nos mesures de sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Vos droits</h2>
              <p className="mb-4">Conformément à la loi, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos renseignements personnels</li>
                <li>Droit de rectification des renseignements inexacts</li>
                <li>Droit de retirer votre consentement</li>
                <li>Droit à la portabilité de vos renseignements</li>
                <li>Droit de déposer une plainte auprès de la Commission d'accès à l'information du Québec</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Incident de confidentialité</h2>
              <p className="mb-4">
                En cas d'incident de confidentialité présentant un risque de préjudice sérieux, nous vous en 
                informerons promptement et prendrons toutes les mesures nécessaires pour réduire les risques et 
                prévenir la récurrence de l'incident.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Communication transfrontalière</h2>
              <p className="mb-4">
                Si nous devons transférer vos renseignements personnels hors du Québec, nous nous assurons que 
                ces renseignements bénéficieront d'une protection équivalente à celle prévue par la loi québécoise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Contact</h2>
              <p className="mb-4">
                Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
                vous pouvez contacter notre responsable de la protection des renseignements personnels à : 
                <a href="mailto:djamel@ighil.ca" className="text-terracotta hover:underline ml-1">
                djamel@ighil.ca</a>
              </p>
              <p>
                Vous pouvez également contacter la Commission d'accès à l'information du Québec : 
                <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer" 
                   className="text-terracotta hover:underline ml-1">
                  www.cai.gouv.qc.ca
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications 
                entrent en vigueur dès leur publication sur cette page, et nous vous en informerons par un avis 
                sur notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-terracotta">Date de dernière mise à jour</h2>
              <p>Cette politique a été mise à jour le 14 mars 2024.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 
