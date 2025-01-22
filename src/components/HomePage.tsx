import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Clock, Ban as Bank } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Comment ça fonctionne ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="font-semibold mb-2">1. Créez votre profil</h3>
            <p className="text-gray-600">Remplissez vos informations personnelles</p>
          </div>
          <div className="text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bank className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="font-semibold mb-2">2. Choisissez votre opérateur</h3>
            <p className="text-gray-600">Sélectionnez votre operateur mobile</p>
          </div>
          <div className="text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="font-semibold mb-2">3. Vérification</h3>
            <p className="text-gray-600">Nous vérifions vos fonds disponibles</p>
          </div>
          <div className="text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-red-700" />
            </div>
            <h3 className="font-semibold mb-2">4. Confirmation</h3>
            <p className="text-gray-600">Recevez votre attestation de fonds</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi choisir notre service ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Rapide et Efficace</h3>
              <p className="text-gray-600">
                Obtenez votre attestation de fonds en quelques minutes seulement
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">100% Sécurisé</h3>
              <p className="text-gray-600">
                Vos données sont protégées selon les normes canadiennes
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Support 24/7</h3>
              <p className="text-gray-600">
                Une équipe dédiée pour vous accompagner à chaque étape
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Compatible avec tout les operateur</h3>
              <p className="text-gray-600">
                Utilisez votre compte portefeuille habituel
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Prêt à commencer ?
        </h2>
        <Link 
          to="/verification" 
          className="inline-block bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-800 transition-colors"
        >
          Vérifier mes fonds maintenant
        </Link>
      </section>
    </div>
  );
};