import { create } from 'zustand';
import { User, Package } from '@/types';

/**
 * Global State Management using Zustand
 * 
 * This store manages:
 * - User authentication state
 * - Selected package
 * - Payment status
 * 
 * Future: Sync with Supabase real-time subscriptions
 */

interface AppState {
  user: User | null;
  selectedPackage: Package | null;
  paymentCompleted: boolean;
  transactionId: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setSelectedPackage: (pkg: Package | null) => void;
  setPaymentCompleted: (completed: boolean, transactionId?: string) => void;
  clearPayment: () => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  selectedPackage: null,
  paymentCompleted: false,
  transactionId: null,

  setUser: (user) => set({ user }),
  
  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
  
  setPaymentCompleted: (completed, transactionId) => 
    set({ paymentCompleted: completed, transactionId: transactionId || null }),
  
  clearPayment: () => 
    set({ paymentCompleted: false, transactionId: null, selectedPackage: null }),
  
  logout: () => 
    set({ user: null, selectedPackage: null, paymentCompleted: false, transactionId: null }),
}));