export interface Country {
  name: string;
  code: string;
  operators: MobileOperator[];
}

export interface MobileOperator {
  name: string;
  code: string;
  phoneFormat: RegExp;
  phoneFormatDescription: string;
  pinLength: {
    min: number;
    max: number;
  };
}

export interface VerificationForm {
  fullName: string;
  email: string;
  idType: 'cni' | 'passport' | 'permis';
  idNumber: string;
  idExpiryDate: string;
  country: string;
  operator: string;
  phoneNumber: string;
  pin: string;
  verificationReason: string;
  amount: number;
}