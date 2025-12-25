// TypeScript type definitions for the application

export interface User {
  id: string;
  email: string;
  parentName: string;
  childName?: string;
  childAge?: number;
  createdAt: Date;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  ageRange: string;
  sessionsPerWeek: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface PaymentDetails {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  message: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
  parentName?: string;
  childName?: string;
  childAge?: number;
}