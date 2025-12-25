'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useStore } from '@/store/useStore';
import { MockPackageService } from '@/services/mockPackageService';
import { Package } from '@/types';

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, setSelectedPackage } = useStore();
  const router = useRouter();

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    try {
      const data = await MockPackageService.getPackages();
      setPackages(data);
    } catch (error) {
      console.error('Error loading packages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPackage = (pkg: Package) => {
    // If user is not logged in, redirect to auth page
    if (!user) {
      setSelectedPackage(pkg);
      router.push('/auth');
      return;
    }

    // If user is logged in, save package and go to dashboard
    setSelectedPackage(pkg);
    router.push('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading packages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Choose Your Package
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select the perfect training program for your child. All packages include professional coaching and a supportive learning environment.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            hover
            padding="lg"
            className={`relative ${
              pkg.popular ? 'ring-2 ring-primary-600' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pkg.name}
              </h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                ${pkg.price}
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{pkg.ageRange}</p>
              <p className="text-sm font-semibold text-secondary-600">
                {pkg.sessionsPerWeek} session{pkg.sessionsPerWeek > 1 ? 's' : ''} per week
              </p>
            </div>

            <p className="text-gray-700 text-center mb-6 min-h-[3rem]">
              {pkg.description}
            </p>

            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-secondary-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              fullWidth
              variant={pkg.popular ? 'primary' : 'outline'}
              onClick={() => handleSelectPackage(pkg)}
            >
              Select Package
            </Button>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <Card className="bg-blue-50 border border-blue-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            💡 Not sure which package is right for your child?
          </h3>
          <p className="text-gray-700 mb-4">
            All packages can be upgraded or modified at any time. You can also try a free trial session before committing.
          </p>
          <p className="text-sm text-gray-600">
            Contact us at <a href="mailto:info@nyfuturestars.com" className="text-primary-600 hover:underline">info@nyfuturestars.com</a> for personalized recommendations.
          </p>
        </div>
      </Card>
    </div>
  );
}