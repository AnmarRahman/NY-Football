'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Team Photo Background */}
      <section 
        className="relative bg-cover bg-center text-white" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop")',
          minHeight: 'calc(100vh - 80px)'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="text-center max-w-4xl mx-auto py-20">
            <div className="mb-6 inline-block">
              <div className="text-8xl mb-4 animate-pulse">🦅</div>
              <h1 className="text-6xl md:text-7xl font-black mb-2 text-primary-500">
                JAG FC
              </h1>
              <p className="text-primary-400 text-xl font-bold tracking-widest">EST. 2024</p>
            </div>
            <p className="text-2xl md:text-3xl mb-8 text-white font-bold">
              Where Champions Rise
            </p>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Elite Youth Soccer Training in New York
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages">
                <Button size="lg" className="bg-primary-500 text-black hover:bg-primary-600 border-2 border-primary-400 shadow-lg font-bold">
                  View Programs
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="lg" className="bg-black text-primary-500 hover:bg-gray-900 border-2 border-primary-500 font-bold shadow-lg">
                  Join the Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 text-primary-500">
            Welcome to JAG FC
          </h2>
          <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Born from a passion for excellence, JAG FC develops young soccer talent through 
            elite coaching, competitive play, and a commitment to building character both on and off the field.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover padding="lg" className="bg-black border-2 border-primary-500/30 hover:border-primary-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🦅</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-500 mb-2">Elite Coaching</h3>
              <p className="text-gray-200">
                Professional coaches with proven track records developing championship-level players.
              </p>
            </div>
          </Card>

          <Card hover padding="lg" className="bg-black border-2 border-accent-500/30 hover:border-accent-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-accent-500 mb-2">Competitive Excellence</h3>
              <p className="text-gray-200">
                Tournament victories and league championships - our teams compete at the highest levels.
              </p>
            </div>
          </Card>

          <Card hover padding="lg" className="bg-black border-2 border-secondary-500/30 hover:border-secondary-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">⚽</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-500 mb-2">Phoenix Mentality</h3>
              <p className="text-gray-200">
                Rising through challenges, building resilience, and emerging stronger with every match.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-primary-500">
              Our Champions
            </h2>
            <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200">See our teams in action - building skills, winning titles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Team Photo 1 - Indoor facility */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-primary-500/50 hover:border-primary-500 transition-all group">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">Indoor Training Excellence</p>
                  <p className="text-primary-400 text-sm">State-of-the-art facilities</p>
                </div>
              </div>
            </div>

            {/* Team Photo 2 - Tournament champions */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-accent-500/50 hover:border-accent-500 transition-all group">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">Tournament Champions</p>
                  <p className="text-accent-400 text-sm">Capelli Cup Winners</p>
                </div>
              </div>
            </div>

            {/* Team Photo 3 - Outdoor training */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-secondary-500/50 hover:border-secondary-500 transition-all group">
              <div className="aspect-video bg-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg">Game Day Ready</p>
                  <p className="text-secondary-400 text-sm">Competitive mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6 text-primary-500">
                The Phoenix Way
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                At JAG FC, we embody the spirit of the phoenix - rising, evolving, and conquering. 
                Our training philosophy combines technical mastery with mental toughness and tactical intelligence.
              </p>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start">
                  <span className="text-primary-500 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-primary-500">Technical Excellence</strong> - Master the fundamentals, perfect the advanced</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-accent-500">Competitive Fire</strong> - Train like champions, play like warriors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-secondary-500">Team Unity</strong> - One team, one goal, one family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 text-xl mr-3 font-bold">✓</span>
                  <span><strong className="text-primary-500">Character Development</strong> - Building leaders on and off the field</span>
                </li>
              </ul>
            </div>
            <div className="bg-black rounded-2xl p-12 flex items-center justify-center border-2 border-primary-500">
              <div className="text-center">
                <p className="text-9xl mb-4">🦅</p>
                <p className="text-5xl font-black text-primary-500">RISE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4 text-primary-500">
            Programs for Every Age
          </h2>
          <div className="h-1 w-32 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200">Elite training from beginner to advanced competitive levels</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover className="text-center bg-black border-2 border-primary-500/30 hover:border-primary-500">
            <div className="text-4xl font-black text-primary-500 mb-2">U8-U10</div>
            <h3 className="text-xl font-bold text-primary-500 mb-2">Phoenix Rising</h3>
            <p className="text-sm text-gray-400">Foundation & fundamentals</p>
          </Card>

          <Card hover className="text-center bg-black border-2 border-accent-500/30 hover:border-accent-500">
            <div className="text-4xl font-black text-accent-500 mb-2">U11-U13</div>
            <h3 className="text-xl font-bold text-accent-500 mb-2">Phoenix Elite</h3>
            <p className="text-sm text-gray-400">Skill development & tactics</p>
          </Card>

          <Card hover className="text-center bg-black border-2 border-secondary-500/30 hover:border-secondary-500">
            <div className="text-4xl font-black text-secondary-500 mb-2">U14-U16</div>
            <h3 className="text-xl font-bold text-secondary-500 mb-2">Phoenix Premier</h3>
            <p className="text-sm text-gray-400">Competitive excellence</p>
          </Card>

          <Card hover className="text-center bg-black border-2 border-primary-500/30 hover:border-primary-500">
            <div className="text-4xl font-black text-primary-500 mb-2">U17-U19</div>
            <h3 className="text-xl font-bold text-primary-500 mb-2">Phoenix Select</h3>
            <p className="text-sm text-gray-400">College prep & showcases</p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-12 text-primary-500">
            What Families Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card padding="lg" className="bg-black border-2 border-primary-500/30">
              <div className="mb-4">
                <div className="flex text-primary-500 mb-3 text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4">
                  "JAG FC transformed my son's game. The coaching is world-class and the competitive environment pushed him to excel."
                </p>
                <p className="font-bold text-primary-500">- Maria R.</p>
                <p className="text-sm text-gray-400">Parent, Manhattan</p>
              </div>
            </Card>

            <Card padding="lg" className="bg-black border-2 border-accent-500/30">
              <div className="mb-4">
                <div className="flex text-accent-500 mb-3 text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4">
                  "Best decision we made! Multiple tournament wins and my daughter's confidence has soared. JAG FC is the real deal."
                </p>
                <p className="font-bold text-accent-500">- James K.</p>
                <p className="text-sm text-gray-400">Parent, Brooklyn</p>
              </div>
            </Card>

            <Card padding="lg" className="bg-black border-2 border-secondary-500/30">
              <div className="mb-4">
                <div className="flex text-secondary-500 mb-3 text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-200 italic mb-4">
                  "The phoenix mentality is real - my kids learned to rise after every challenge. More than soccer, it's life lessons."
                </p>
                <p className="font-bold text-secondary-500">- Sarah L.</p>
                <p className="text-sm text-gray-400">Parent, Queens</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a1a1a' }}>
        <Card className="bg-primary-600 text-black text-center border-2 border-primary-400" padding="lg">
          <div className="text-7xl mb-4">🦅</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Rise?</h2>
          <p className="text-2xl mb-2 font-bold">📍 New York, NY</p>
          <p className="text-xl mb-8">Join the elite. Train with champions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-black text-primary-500 hover:bg-gray-900 font-bold shadow-xl border-2 border-black">
                View Programs
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold shadow-xl border-2 border-white">
                Join JAG FC Now
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}