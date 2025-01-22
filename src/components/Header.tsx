import React from 'react';
import { MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-red-700 text-white">
      <div className="bg-white text-gray-800 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" 
              alt="Drapeau du Canada" 
              className="h-8"
            />
            <img 
              src="https://logos-world.net/wp-content/uploads/2021/02/CIBC-Logo.png" 
              alt="CIBC Bank" 
              className="h-8"
            />
          </div>
          <div className="text-sm">
            Partenaire officiel d'Immigration Canada
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="w-8 h-8" />
            <span className="text-xl font-bold">ImmigrationCanada</span>
          </Link>
          <div className="space-x-6">
            <Link 
              to="/" 
              className={`hover:text-red-200 ${isHome ? 'text-red-200' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/verification" 
              className={`hover:text-red-200 ${!isHome ? 'text-red-200' : ''}`}
            >
              Vérification
            </Link>
          </div>
        </div>
      </nav>
      
      {isHome && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/Coat_of_arms_of_Canada.svg" 
              alt="Armoiries du Canada" 
              className="h-32"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vérifiez vos fonds pour l'immigration au Canada
          </h1>
          <p className="text-xl mb-4 text-red-100">
            Une solution simple et sécurisée pour prouver vos ressources financières
          </p>
          <p className="text-lg mb-12 text-red-100">
            En partenariat avec la Banque CIBC
          </p>
          <Link 
            to="/verification" 
            className="inline-block bg-white text-red-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-100 transition-colors"
          >
            Commencer la vérification
          </Link>
        </div>
      )}
    </header>
  );
};