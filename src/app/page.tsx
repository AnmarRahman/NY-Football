'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Champions,<br />One Kick at a Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional youth soccer coaching in New York for ages 5-16
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" variant="secondary">
                  View Packages
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="bg-white text-primary-600 border-white hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to NY Future Stars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to developing young soccer talent through expert coaching, 
            positive reinforcement, and a focus on both skill development and character building.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover padding="lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Coaching</h3>
              <p className="text-gray-600">
                Our certified coaches have years of experience working with youth players at all skill levels.
              </p>
            </div>
          </Card>

          <Card hover padding="lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our players consistently improve their skills and many go on to play at competitive levels.
              </p>
            </div>
          </Card>

          <Card hover padding="lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We build lasting friendships and teach teamwork, respect, and sportsmanship.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Coaching Philosophy</h2>
              <p className="text-lg text-gray-600 mb-4">
                At NY Future Stars, we believe that every child has the potential to excel. 
                Our approach combines technical skill development with mental and physical conditioning.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Age-appropriate training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Focus on fundamentals and creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Positive, encouraging environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>Individual attention for every player</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <p className="text-6xl">⚽🎯</p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Programs for All Ages</h2>
          <p className="text-xl text-gray-600">We offer specialized training for children ages 5-16</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { age: '5-7', name: 'Mini Stars', desc: 'Fun introduction to soccer' },
            { age: '8-11', name: 'Rising Stars', desc: 'Skill development focus' },
            { age: '12-14', name: 'Elite Stars', desc: 'Competitive training' },
            { age: '14-16', name: 'Future Pros', desc: 'Advanced techniques' },
          ].map((group) => (
            <Card key={group.age} hover className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{group.age}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{group.name}</h3>
              <p className="text-sm text-gray-600">{group.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Parents Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card padding="lg">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "My son has grown so much in confidence and skill since joining. The coaches are amazing!"
                </p>
                <p className="font-semibold text-gray-900">- Sarah M.</p>
                <p className="text-sm text-gray-600">Parent, Upper West Side</p>
              </div>
            </Card>

            <Card padding="lg">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Best investment we've made. The program is well-structured and our daughter loves it!"
                </p>
                <p className="font-semibold text-gray-900">- Michael P.</p>
                <p className="text-sm text-gray-600">Parent, Brooklyn</p>
              </div>
            </Card>

            <Card padding="lg">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Professional coaching at an affordable price. Highly recommend to all NY parents!"
                </p>
                <p className="font-semibold text-gray-900">- Jennifer L.</p>
                <p className="text-sm text-gray-600">Parent, Queens</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center" padding="lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-2">📍 Located in New York, NY</p>
          <p className="text-lg text-blue-100 mb-8">Serving families across all five boroughs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Explore Packages
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}