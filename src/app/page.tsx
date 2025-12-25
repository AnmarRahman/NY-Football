'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white " 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop")',
          minHeight: 'calc(100vh - 80px)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="text-center max-w-4xl mx-auto py-20">
            {/* <div className="mb-6 inline-block">
              <Image src="/logo.png"
                          width={120}
                          height={120} 
                          alt='JAG FC LOGO'/>
            </div> */}
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold ">
              Where Champions Rise
            </p>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Elite Youth Soccer Training in New Jersey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" className="bg-primary-500 text-white hover:bg-primary-600 shadow-lg font-bold">
                  View Programs
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold">
                  Join the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 text-gray-900">
            Welcome to <span className="text-primary-600">JAG FC</span>
          </h2>
          <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Born from a passion for excellence, JAG FC develops young soccer talent through 
            elite coaching, competitive play, and a commitment to building character both on and off the field.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover padding="lg" className="bg-white border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🦅</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-2">Elite Coaching</h3>
              <p className="text-gray-700">
                Professional coaches with proven track records developing championship-level players.
              </p>
            </div>
          </Card>

          <Card hover padding="lg" className="bg-white border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-accent-600 mb-2">Competitive Excellence</h3>
              <p className="text-gray-700">
                Tournament victories and league championships - our teams compete at the highest levels.
              </p>
            </div>
          </Card>

          <Card hover padding="lg" className="bg-white border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⚽</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-600 mb-2">Phoenix Mentality</h3>
              <p className="text-gray-700">
                Rising through challenges, building resilience, and emerging stronger with every match.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              Our <span className="text-primary-600">Champions</span>
            </h2>
            <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700">See our teams in action - building skills, winning titles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-primary-200 hover:border-primary-500 transition-all">
              <div className="aspect-video bg-gray-200 bg-[url('/image1.jpg')] bg-cover relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 ">
                  <p className="text-white font-bold text-lg">Indoor Training Excellence</p>
                  <p className="text-primary-300 text-sm">State-of-the-art facilities</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-accent-200 hover:border-accent-500 transition-all">
              <div className="aspect-video bg-gray-200 bg-[url('/image2.jpg')] bg-cover relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">Tournament Champions</p>
                  <p className="text-accent-300 text-sm">Capelli Cup Winners</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-secondary-200 hover:border-secondary-500 transition-all">
              <div className="aspect-video bg-gray-200 bg-[url('/image3.jpg')] bg-cover relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">Game Day Ready</p>
                  <p className="text-secondary-300 text-sm">Competitive mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                The <span className="text-primary-600">Phoenix Way</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At JAG FC, we embody the spirit of the phoenix - rising, evolving, and conquering. 
                Our training philosophy combines technical mastery with mental toughness and tactical intelligence.
              </p>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-primary-600">Technical Excellence</strong> - Master the fundamentals, perfect the advanced</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-accent-600">Competitive Fire</strong> - Train like champions, play like warriors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-secondary-600">Team Unity</strong> - One team, one goal, one family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-primary-600">Character Development</strong> - Building leaders on and off the field</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 flex items-center justify-center border-2 border-primary-200">
              <div className="text-center">
                <p className="text-9xl mb-4">🦅</p>
                <p className="text-5xl font-black text-primary-600">RISE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 text-gray-900">
            Programs for <span className="text-primary-600">Every Age</span>
          </h2>
          <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">Elite training from beginner to advanced competitive levels</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover className="text-center bg-white border-2 border-primary-200 hover:border-primary-500">
            <div className="text-4xl font-black text-primary-600 mb-2">U8-U10</div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">Phoenix Rising</h3>
            <p className="text-sm text-gray-600">Foundation & fundamentals</p>
          </Card>

          <Card hover className="text-center bg-white border-2 border-accent-200 hover:border-accent-500">
            <div className="text-4xl font-black text-accent-600 mb-2">U11-U13</div>
            <h3 className="text-xl font-bold text-accent-600 mb-2">Phoenix Elite</h3>
            <p className="text-sm text-gray-600">Skill development & tactics</p>
          </Card>

          <Card hover className="text-center bg-white border-2 border-secondary-200 hover:border-secondary-500">
            <div className="text-4xl font-black text-secondary-600 mb-2">U14-U16</div>
            <h3 className="text-xl font-bold text-secondary-600 mb-2">Phoenix Premier</h3>
            <p className="text-sm text-gray-600">Competitive excellence</p>
          </Card>

          <Card hover className="text-center bg-white border-2 border-primary-200 hover:border-primary-500">
            <div className="text-4xl font-black text-primary-600 mb-2">U17-U19</div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">Phoenix Select</h3>
            <p className="text-sm text-gray-600">College prep & showcases</p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            What <span className="text-primary-600">Families Say</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card padding="lg" className="bg-white border border-gray-200 shadow-sm">
              <div className="mb-4">
                <div className="flex text-primary-500 mb-3 text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "JAG FC transformed my son's game. The coaching is world-class and the competitive environment pushed him to excel."
                </p>
                <p className="font-bold text-primary-600">- Maria R.</p>
                <p className="text-sm text-gray-500">Parent, Manhattan</p>
              </div>
            </Card>

            <Card padding="lg" className="bg-white border border-gray-200 shadow-sm">
              <div className="mb-4">
                <div className="flex text-accent-500 mb-3 text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Best decision we made! Multiple tournament wins and my daughter's confidence has soared. JAG FC is the real deal."
                </p>
                <p className="font-bold text-accent-600">- James K.</p>
                <p className="text-sm text-gray-500">Parent, Brooklyn</p>
              </div>
            </Card>

            <Card padding="lg" className="bg-white border border-gray-200 shadow-sm">
              <div className="mb-4">
                <div className="flex text-secondary-500 mb-3 text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The phoenix mentality is real - my kids learned to rise after every challenge. More than soccer, it's life lessons."
                </p>
                <p className="font-bold text-secondary-600">- Sarah L.</p>
                <p className="text-sm text-gray-500">Parent, Queens</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-center shadow-xl" padding="lg">
          <div className="text-7xl mb-4">🦅</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Rise?</h2>
          <p className="text-2xl mb-2 font-bold">📍 New Jersey, NY</p>
          <p className="text-xl mb-8">Join the elite. Train with champions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-white !text-primary-600 hover:bg-gray-100 hover:!text-white font-bold shadow-lg">
                View Programs
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold">
                Join JAG FC Now
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}