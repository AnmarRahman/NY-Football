'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useStore } from '@/store/useStore';
import { MockAuthService } from '@/services/mockAuthService';
import { AuthCredentials } from '@/types';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setUser, selectedPackage } = useStore();
  const router = useRouter();

  const [formData, setFormData] = useState<AuthCredentials>({
    email: '',
    password: '',
    parentName: '',
    childName: '',
    childAge: undefined,
  });

  // Check if user is already logged in
  useEffect(() => {
    const currentUser = MockAuthService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      router.push(selectedPackage ? '/dashboard' : '/');
    }
  }, []);

  const handleInputChange = (field: keyof AuthCredentials) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'childAge' ? parseInt(e.target.value) || undefined : e.target.value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Basic validation
      if (!formData.email || !formData.password) {
        throw new Error('Email and password are required');
      }

      if (!isLogin && !formData.parentName) {
        throw new Error('Parent name is required for signup');
      }

      // Call appropriate auth method
      const user = isLogin 
        ? await MockAuthService.login(formData)
        : await MockAuthService.signUp(formData);

      // Update global state
      setUser(user);

      // Redirect based on selected package
      if (selectedPackage) {
        router.push('/dashboard');
      } else {
        router.push('/');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-varsity">
            {isLogin ? 'Welcome Back!' : 'Join JAG FC'}
          </h1>
          <p className="text-gray-600 font-varsity">
            {isLogin 
              ? 'Sign in to access your account' 
              : 'Create an account to get started'
            }
          </p>
          {selectedPackage && (
            <div className="mt-4 bg-primary-100 text-primary-800 px-4 py-2 rounded-lg">
              🎯 Selected: <strong>{selectedPackage.name}</strong>
            </div>
          )}
        </div>

        {/* Auth Form */}
        <Card padding="lg">
          {/* Toggle Login/Signup */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-md font-medium transition-colors ${
                isLogin 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-md font-medium transition-colors ${
                !isLogin 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="parent@example.com"
              required
            />

            {/* Password */}
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange('password')}
              placeholder="••••••••"
              required
            />

            {/* Signup-only fields */}
            {!isLogin && (
              <>
                <Input
                  label="Parent Name"
                  value={formData.parentName || ''}
                  onChange={handleInputChange('parentName')}
                  placeholder="Your full name"
                  required
                />

                <Input
                  label="Child Name (Optional)"
                  value={formData.childName || ''}
                  onChange={handleInputChange('childName')}
                  placeholder="Child's first name"
                />

                <Input
                  label="Child Age (Optional)"
                  type="number"
                  value={formData.childAge?.toString() || ''}
                  onChange={handleInputChange('childAge')}
                  placeholder="5-16"
                />
              </>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              className="mb-4"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </span>
              ) : (
                isLogin ? 'Log In' : 'Create Account'
              )}
            </Button>

            {/* Demo Note */}
            <div className="text-center text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
              🚧 <strong>Demo Mode:</strong> This is a frontend demo. 
              Enter any email/password to simulate {isLogin ? 'login' : 'signup'}.
            </div>
          </form>
        </Card>

        {/* Additional Info */}
        <p className="text-center text-sm text-gray-600 mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}