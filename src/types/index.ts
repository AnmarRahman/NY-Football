// TypeScript type definitions for the application

export interface User {
  id: string;
  email: string;
  parentName: string;
  childName?: string;
  childAge?: number;
  createdAt: Date;
  role?: 'parent' | 'admin';
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

export interface Subscription {
  id: string;
  userId: string;
  user: User;
  packageId: string;
  package: Package;
  status: 'active' | 'pending' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
  transactionId?: string;
  amount: number;
}

export interface TrainingSchedule {
  id: string;
  packageId: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  location: string;
  coachName: string;
}