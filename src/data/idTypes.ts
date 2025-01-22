import { IdType } from '../types';

export const idTypes: IdType[] = [
  {
    value: 'cni',
    label: 'Carte Nationale d\'Identité',
    format: /^[A-Z0-9]{9,14}$/,
    description: '9 à 14 caractères alphanumériques'
  },
  {
    value: 'passport',
    label: 'Passeport',
    format: /^[A-Z]{2}[0-9]{7}$/,
    description: '2 lettres suivies de 7 chiffres'
  },
  {
    value: 'permis',
    label: 'Permis de Conduire',
    format: /^[A-Z0-9]{12}$/,
    description: '12 caractères alphanumériques'
  }
];