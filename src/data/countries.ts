import { Country } from '../types';

export const countries: Country[] = [
  {
    name: 'Sénégal',
    code: 'SN',
    operators: [
      {
        name: 'Orange Money',
        code: 'ORANGE_SN',
        phoneFormat: /^(77|78)\d{7}$/,
        phoneFormatDescription: '9 chiffres commençant par 77 ou 78',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'Free Money',
        code: 'FREE_SN',
        phoneFormat: /^76\d{7}$/,
        phoneFormatDescription: '9 chiffres commençant par 76',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'Wave',
        code: 'WAVE_SN',
        phoneFormat: /^70\d{7}$/,
        phoneFormatDescription: '9 chiffres commençant par 70',
        pinLength: { min: 4, max: 5 }
      },
      {
        name: 'Expresso E-Money',
        code: 'EXPRESSO_SN',
        phoneFormat: /^70\d{7}$/,
        phoneFormatDescription: '9 chiffres commençant par 70',
        pinLength: { min: 4, max: 6 }
      }
    ]
  },
   {
    name: "Togo",
    code: "TG",
    operators: [
      {
        name: "Flooz",
        code: "FLOOZ_TG",
        phoneFormat: /^90\d{6}$/,
        phoneFormatDescription: "8 chiffres commençant par 90",
        pinLength: { "min": 4, "max": 6 }
      },
      {
        name: "TMoney",
        code: "TMONEY_TG",
        phoneFormat: /^91\d{6}$/,
        phoneFormatDescription: "8 chiffres commençant par 91",
        pinLength: { "min": 4, "max": 6 }
      }
    ]
  },
  {
    name: 'Côte d\'Ivoire',
    code: 'CI',
    operators: [
      {
        name: 'Orange Money',
        code: 'ORANGE_CI',
        phoneFormat: /^(07|08)\d{8}$/,
        phoneFormatDescription: '10 chiffres commençant par 07 ou 08',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'MTN Mobile Money',
        code: 'MTN_CI',
        phoneFormat: /^05\d{8}$/,
        phoneFormatDescription: '10 chiffres commençant par 05',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'Wave',
        code: 'WAVE_CI',
        phoneFormat: /^01\d{8}$/,
        phoneFormatDescription: '10 chiffres commençant par 01',
        pinLength: { min: 4, max: 5 }
      },
      {
        name: 'Moov Money',
        code: 'MOOV_CI',
        phoneFormat: /^01\d{8}$/,
        phoneFormatDescription: '10 chiffres commençant par 01',
        pinLength: { min: 4, max: 6 }
      }
    ]
  },
  {
    name: 'Mali',
    code: 'ML',
    operators: [
      {
        name: 'Orange Money',
        code: 'ORANGE_ML',
        phoneFormat: /^(77|78)\d{6}$/,
        phoneFormatDescription: '8 chiffres commençant par 77 ou 78',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'Malitel Money',
        code: 'MALITEL_ML',
        phoneFormat: /^(76|75)\d{6}$/,
        phoneFormatDescription: '8 chiffres commençant par 76 ou 75',
        pinLength: { min: 4, max: 6 }
      }
    ]
  },
  {
    name: 'Cameroun',
    code: 'CM',
    operators: [
      {
        name: 'Orange Money',
        code: 'ORANGE_CM',
        phoneFormat: /^(69|65)\d{7}$/,
        phoneFormatDescription: '9 chiffres commençant par 69 ou 65',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'MTN Mobile Money',
        code: 'MTN_CM',
        phoneFormat: /^(67|68)\d{7}$/,
        phoneFormatDescription: '9 chiffres commençant par 67 ou 68',
        pinLength: { min: 4, max: 6 }
      }
    ]
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    operators: [
      {
        name: 'Orange Money',
        code: 'ORANGE_BF',
        phoneFormat: /^(77|78)\d{6}$/,
        phoneFormatDescription: '8 chiffres commençant par 77 ou 78',
        pinLength: { min: 4, max: 6 }
      },
      {
        name: 'Moov Money',
        code: 'MOOV_BF',
        phoneFormat: /^(76|75)\d{6}$/,
        phoneFormatDescription: '8 chiffres commençant par 76 ou 75',
        pinLength: { min: 4, max: 6 }
      }
    ]
  }
];