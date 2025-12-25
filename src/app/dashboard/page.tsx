'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useStore } from '@/store/useStore';
import { MockAuthService } from '@/services/mockAuthService';
import { MockPaymentService } from '@/services/mockPaymentService';
import { PaymentDetails } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  const { user, setUser, selectedPackage, setSelectedPackage, paymentCompleted, setPaymentCompleted, clearPayment } = useStore();
  
  const [showPayment, setShowPayment] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  // Check authentication on mount
  useEffect(() => {
    const currentUser = MockAuthService.getCurrentUser();
    if (!currentUser) {
      router.push('/auth');
    } else if (currentUser.role === 'admin') {
      // Redirect admins to admin dashboard
      router.push('/admin');
    } else {
      setUser(currentUser);
    }
  }, []);

  // If no user, show loading
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const handlePaymentInputChange = (field: keyof PaymentDetails) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Format card number
    if (field === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (value.length > 19) return;
    }
    
    // Format expiry date
    if (field === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      if (value.length > 5) return;
    }
    
    // Limit CVV
    if (field === 'cvv' && value.length > 3) return;
    
    setPaymentDetails(prev => ({ ...prev, [field]: value }));
    setPaymentError('');
  };

  const handleProcessPayment = async () => {
    if (!selectedPackage) return;
    
    setProcessingPayment(true);
    setPaymentError('');
    
    try {
      const result = await MockPaymentService.processPayment(
        paymentDetails,
        selectedPackage.price,
        selectedPackage.id
      );
      
      if (result.success) {
        setPaymentCompleted(true, result.transactionId);
        setPaymentSuccess(true);
        setShowPayment(false);
      } else {
        setPaymentError(result.message);
      }
    } catch (error) {
      setPaymentError('Payment processing failed. Please try again.');
    } finally {
      setProcessingPayment(false);
    }
  };

  const handleCancelPackage = () => {
    if (confirm('Are you sure you want to cancel your package?')) {
      clearPayment();
      setShowPayment(false);
      setPaymentSuccess(false);
    }
  };

  const handleChangePackage = () => {
    setShowPayment(false);
    setPaymentSuccess(false);
    router.push('/packages');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome back, {user.parentName}! 👋
        </h1>
        <p className="text-gray-600">Manage your account and training packages</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selected Package Section */}
          {selectedPackage ? (
            <Card padding="lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {selectedPackage.name}
                  </h2>
                  <p className="text-gray-600">{selectedPackage.description}</p>
                </div>
                {paymentCompleted && (
                  <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Active
                  </span>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-2xl font-bold text-primary-600">${selectedPackage.price}/mo</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Age Range</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedPackage.ageRange}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sessions</p>
                  <p className="text-lg font-semibold text-gray-900">{selectedPackage.sessionsPerWeek}/week</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Package Includes:</h3>
                <ul className="space-y-1">
                  {selectedPackage.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-secondary-600 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {!paymentCompleted ? (
                  <Button
                    fullWidth
                    onClick={() => setShowPayment(true)}
                  >
                    Proceed to Payment
                  </Button>
                ) : (
                  <div className="flex-1 bg-secondary-50 border border-secondary-200 rounded-lg p-4 text-center">
                    <p className="text-secondary-800 font-semibold">✓ Payment Completed</p>
                    <p className="text-sm text-gray-600 mt-1">Your enrollment is active</p>
                  </div>
                )}
                <Button
                  variant="outline"
                  onClick={handleChangePackage}
                >
                  Change Package
                </Button>
                <Button
                  variant="danger"
                  onClick={handleCancelPackage}
                >
                  Cancel
                </Button>
              </div>
            </Card>
          ) : (
            <Card padding="lg" className="text-center">
              <p className="text-gray-600 mb-4">You haven't selected a package yet.</p>
              <Button onClick={() => router.push('/packages')}>
                Browse Packages
              </Button>
            </Card>
          )}

          {/* Payment Section */}
          {showPayment && selectedPackage && !paymentCompleted && (
            <Card padding="lg" className="border-2 border-primary-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                💳 Payment Information
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  🚧 <strong>Demo Mode:</strong> This is a simulated payment form. 
                  Enter any card details (16 digits, 3-digit CVV) to test the flow.
                </p>
              </div>

              <div className="mb-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Package:</span>
                    <span className="font-semibold text-gray-900">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">Amount:</span>
                    <span className="text-2xl font-bold text-primary-600">${selectedPackage.price}/month</span>
                  </div>
                </div>

                <Input
                  label="Card Number"
                  value={paymentDetails.cardNumber}
                  onChange={handlePaymentInputChange('cardNumber')}
                  placeholder="1234 5678 9012 3456"
                  required
                />

                <Input
                  label="Cardholder Name"
                  value={paymentDetails.cardHolder}
                  onChange={handlePaymentInputChange('cardHolder')}
                  placeholder="John Doe"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Expiry Date"
                    value={paymentDetails.expiryDate}
                    onChange={handlePaymentInputChange('expiryDate')}
                    placeholder="MM/YY"
                    required
                  />
                  <Input
                    label="CVV"
                    type="password"
                    value={paymentDetails.cvv}
                    onChange={handlePaymentInputChange('cvv')}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              {paymentError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {paymentError}
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  fullWidth
                  onClick={handleProcessPayment}
                  disabled={processingPayment}
                >
                  {processingPayment ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </span>
                  ) : (
                    `Confirm Payment - $${selectedPackage.price}`
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPayment(false)}
                  disabled={processingPayment}
                >
                  Cancel
                </Button>
              </div>
            </Card>
          )}

          {/* Success Message */}
          {paymentSuccess && (
            <Card padding="lg" className="bg-secondary-50 border-2 border-secondary-600">
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Payment Successful!
                </h2>
                <p className="text-gray-700 mb-4">
                  Welcome to NY Future Stars Soccer Academy! Your enrollment is now active.
                </p>
                <p className="text-sm text-gray-600">
                  You'll receive a confirmation email shortly with next steps.
                </p>
              </div>
            </Card>
          )}

          {/* Training Schedule (Mock UI) */}
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📅 Training Schedule</h2>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-gray-600 mb-2">Your personalized schedule will appear here</p>
              <p className="text-sm text-gray-500">Available after payment confirmation</p>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Info */}
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">👤 Account Info</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Parent Name</p>
                <p className="font-semibold text-gray-900">{user.parentName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">{user.email}</p>
              </div>
              {user.childName && (
                <div>
                  <p className="text-sm text-gray-600">Child Name</p>
                  <p className="font-semibold text-gray-900">{user.childName}</p>
                </div>
              )}
              {user.childAge && (
                <div>
                  <p className="text-sm text-gray-600">Child Age</p>
                  <p className="font-semibold text-gray-900">{user.childAge} years</p>
                </div>
              )}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card padding="lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Actions</h2>
            <div className="space-y-2">
              <Button fullWidth variant="outline" size="sm">
                Update Profile
              </Button>
              <Button fullWidth variant="outline" size="sm">
                Contact Coach
              </Button>
              <Button fullWidth variant="outline" size="sm">
                View Progress
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              (UI only - not functional in demo)
            </p>
          </Card>

          {/* Help */}
          <Card padding="lg" className="bg-blue-50 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">💬 Need Help?</h3>
            <p className="text-sm text-gray-700 mb-3">
              Our support team is here to assist you with any questions.
            </p>
            <a href="mailto:info@nyfuturestars.com" className="text-sm text-primary-600 hover:underline">
              Contact Support →
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}