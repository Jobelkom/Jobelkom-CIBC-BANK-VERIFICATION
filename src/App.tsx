import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { VerificationForm } from './components/VerificationForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/verification" element={<VerificationForm />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Plateforme de Vérification des Fonds. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;