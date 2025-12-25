import { Package } from '@/types';

/**
 * Mock Package Service
 * 
 * TODO: Replace with real Supabase database queries
 * - Create 'packages' table in Supabase
 * - Fetch packages using supabase.from('packages').select()
 * - Allow admin to update packages through dashboard
 */

export class MockPackageService {
  /**
   * Get all available coaching packages
   * Future: Fetch from Supabase database
   */
  static async getPackages(): Promise<Package[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      {
        id: 'starter',
        name: 'Little Kickers',
        price: 120,
        ageRange: '5-7 years',
        sessionsPerWeek: 1,
        description: 'Perfect introduction to soccer for young children',
        features: [
          '1 weekly training session (60 min)',
          'Focus on basic skills and fun',
          'Small group sizes (max 10 kids)',
          'Qualified youth coaches',
          'End-of-season certificate',
        ],
      },
      {
        id: 'development',
        name: 'Skill Builders',
        price: 200,
        ageRange: '8-11 years',
        sessionsPerWeek: 2,
        description: 'Develop technical skills and game understanding',
        features: [
          '2 weekly training sessions (75 min each)',
          'Technical drills and small-sided games',
          'Video analysis of progress',
          'Monthly parent feedback sessions',
          'Tournament opportunities',
          'Official team jersey included',
        ],
        popular: true,
      },
      {
        id: 'competitive',
        name: 'Elite Training',
        price: 300,
        ageRange: '12-14 years',
        sessionsPerWeek: 3,
        description: 'Advanced training for competitive young players',
        features: [
          '3 weekly training sessions (90 min each)',
          'Advanced tactical training',
          'Strength and conditioning program',
          'Professional coaching staff',
          'League and tournament play',
          'Individual development plans',
          'Full kit and training gear',
        ],
      },
      {
        id: 'academy',
        name: 'Future Stars Academy',
        price: 450,
        ageRange: '14-16 years',
        sessionsPerWeek: 4,
        description: 'Premier program for high-potential athletes',
        features: [
          '4 weekly training sessions (90 min each)',
          'Elite-level coaching',
          'Sports psychology sessions',
          'Nutrition and fitness guidance',
          'College recruitment support',
          'Competitive league placement',
          'Video analysis and performance tracking',
          'Full premium kit package',
        ],
      },
    ];
  }

  /**
   * Get a specific package by ID
   * Future: Query Supabase by ID
   */
  static async getPackageById(id: string): Promise<Package | null> {
    const packages = await this.getPackages();
    return packages.find(pkg => pkg.id === id) || null;
  }
}