import { PaymentDetails, PaymentResult } from '@/types';

/**
 * Mock Payment Service
 * 
 * TODO: Replace with real Stripe integration
 * - Install @stripe/stripe-js
 * - Set up Stripe publishable key
 * - Create payment intent on backend
 * - Process real card payments
 * - Handle webhooks for payment confirmation
 */

export class MockPaymentService {
  /**
   * Simulate payment processing
   * Future: Process real Stripe payment
   */
  static async processPayment(
    paymentDetails: PaymentDetails,
    amount: number,
    packageId: string
  ): Promise<PaymentResult> {
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Basic validation (mock)
    if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length < 16) {
      return {
        success: false,
        message: 'Invalid card number',
      };
    }

    if (!paymentDetails.cvv || paymentDetails.cvv.length !== 3) {
      return {
        success: false,
        message: 'Invalid CVV',
      };
    }

    // Simulate successful payment
    return {
      success: true,
      transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      message: 'Payment processed successfully! Welcome to NY Future Stars Soccer Academy.',
    };
  }

  /**
   * Simulate payment cancellation
   * Future: Handle Stripe payment cancellation
   */
  static async cancelPayment(transactionId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  /**
   * Format card number for display
   */
  static formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  }

  /**
   * Validate card number (basic Luhn algorithm)
   * Future: Let Stripe handle validation
   */
  static validateCardNumber(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cleaned);
  }
}