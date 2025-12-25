import { Subscription, User, Package, TrainingSchedule } from '@/types';
import { MockPackageService } from './mockPackageService';

/**
 * Mock Admin Service
 * 
 * TODO: Replace with real Supabase database queries
 * - Create admin role and permissions in Supabase
 * - Implement Row Level Security (RLS) policies
 * - Create subscriptions, schedules tables
 */

export class MockAdminService {
  private static SUBSCRIPTIONS_KEY = 'ny_soccer_subscriptions';
  private static USERS_KEY = 'ny_soccer_all_users';
  private static SCHEDULES_KEY = 'ny_soccer_schedules';

  /**
   * Get all subscriptions
   * Future: supabase.from('subscriptions').select('*, users(*), packages(*)')
   */
  static async getAllSubscriptions(): Promise<Subscription[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const stored = localStorage.getItem(this.SUBSCRIPTIONS_KEY);
    if (stored) {
      return JSON.parse(stored, (key, value) => {
        if (key === 'startDate' || key === 'endDate' || key === 'createdAt') {
          return value ? new Date(value) : value;
        }
        return value;
      });
    }

    // Return mock subscriptions
    return this.getMockSubscriptions();
  }

  /**
   * Update subscription status
   * Future: supabase.from('subscriptions').update({ status }).eq('id', id)
   */
  static async updateSubscriptionStatus(id: string, status: Subscription['status']): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const subscriptions = await this.getAllSubscriptions();
    const updated = subscriptions.map(sub => 
      sub.id === id ? { ...sub, status } : sub
    );
    
    localStorage.setItem(this.SUBSCRIPTIONS_KEY, JSON.stringify(updated));
  }

  /**
   * Get all users
   * Future: supabase.from('users').select('*')
   */
  static async getAllUsers(): Promise<User[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const stored = localStorage.getItem(this.USERS_KEY);
    if (stored) {
      return JSON.parse(stored, (key, value) => {
        if (key === 'createdAt') {
          return new Date(value);
        }
        return value;
      });
    }

    return this.getMockUsers();
  }

  /**
   * Get training schedules
   * Future: supabase.from('schedules').select('*')
   */
  static async getSchedules(): Promise<TrainingSchedule[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const stored = localStorage.getItem(this.SCHEDULES_KEY);
    if (stored) {
      return JSON.parse(stored);
    }

    return this.getMockSchedules();
  }

  /**
   * Update schedule
   * Future: supabase.from('schedules').update(schedule).eq('id', id)
   */
  static async updateSchedule(schedule: TrainingSchedule): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const schedules = await this.getSchedules();
    const updated = schedules.map(s => 
      s.id === schedule.id ? schedule : s
    );
    
    localStorage.setItem(this.SCHEDULES_KEY, JSON.stringify(updated));
  }

  /**
   * Add new schedule
   */
  static async addSchedule(schedule: Omit<TrainingSchedule, 'id'>): Promise<TrainingSchedule> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newSchedule: TrainingSchedule = {
      ...schedule,
      id: `schedule_${Date.now()}`,
    };
    
    const schedules = await this.getSchedules();
    schedules.push(newSchedule);
    
    localStorage.setItem(this.SCHEDULES_KEY, JSON.stringify(schedules));
    return newSchedule;
  }

  /**
   * Delete schedule
   */
  static async deleteSchedule(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const schedules = await this.getSchedules();
    const filtered = schedules.filter(s => s.id !== id);
    
    localStorage.setItem(this.SCHEDULES_KEY, JSON.stringify(filtered));
  }

  /**
   * Update package
   * Future: supabase.from('packages').update(pkg).eq('id', id)
   */
  static async updatePackage(pkg: Package): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    // This would update the package in the database
    console.log('Package updated:', pkg);
  }

  // Mock data generators
  private static getMockSubscriptions(): Subscription[] {
    const packages = [
      { id: 'starter', name: 'Little Kickers', price: 120 },
      { id: 'development', name: 'Skill Builders', price: 200 },
      { id: 'competitive', name: 'Elite Training', price: 300 },
    ];

    return [
      {
        id: 'sub_001',
        userId: 'user_001',
        user: {
          id: 'user_001',
          email: 'sarah.johnson@email.com',
          parentName: 'Sarah Johnson',
          childName: 'Emma',
          childAge: 8,
          createdAt: new Date('2024-01-15'),
          role: 'parent',
        },
        packageId: 'development',
        package: packages[1] as Package,
        status: 'active',
        startDate: new Date('2024-02-01'),
        transactionId: 'txn_abc123',
        amount: 200,
      },
      {
        id: 'sub_002',
        userId: 'user_002',
        user: {
          id: 'user_002',
          email: 'michael.chen@email.com',
          parentName: 'Michael Chen',
          childName: 'Lucas',
          childAge: 12,
          createdAt: new Date('2024-02-20'),
          role: 'parent',
        },
        packageId: 'competitive',
        package: packages[2] as Package,
        status: 'active',
        startDate: new Date('2024-03-01'),
        transactionId: 'txn_def456',
        amount: 300,
      },
      {
        id: 'sub_003',
        userId: 'user_003',
        user: {
          id: 'user_003',
          email: 'lisa.martinez@email.com',
          parentName: 'Lisa Martinez',
          childName: 'Sofia',
          childAge: 6,
          createdAt: new Date('2024-03-10'),
          role: 'parent',
        },
        packageId: 'starter',
        package: packages[0] as Package,
        status: 'pending',
        startDate: new Date('2024-04-01'),
        transactionId: 'txn_ghi789',
        amount: 120,
      },
    ];
  }

  private static getMockUsers(): User[] {
    return [
      {
        id: 'user_001',
        email: 'sarah.johnson@email.com',
        parentName: 'Sarah Johnson',
        childName: 'Emma',
        childAge: 8,
        createdAt: new Date('2024-01-15'),
        role: 'parent',
      },
      {
        id: 'user_002',
        email: 'michael.chen@email.com',
        parentName: 'Michael Chen',
        childName: 'Lucas',
        childAge: 12,
        createdAt: new Date('2024-02-20'),
        role: 'parent',
      },
      {
        id: 'user_003',
        email: 'lisa.martinez@email.com',
        parentName: 'Lisa Martinez',
        childName: 'Sofia',
        childAge: 6,
        createdAt: new Date('2024-03-10'),
        role: 'parent',
      },
    ];
  }

  private static getMockSchedules(): TrainingSchedule[] {
    return [
      {
        id: 'sched_001',
        packageId: 'starter',
        dayOfWeek: 'Monday',
        startTime: '16:00',
        endTime: '17:00',
        location: 'Central Park Field A',
        coachName: 'Coach Mike',
      },
      {
        id: 'sched_002',
        packageId: 'development',
        dayOfWeek: 'Tuesday',
        startTime: '17:00',
        endTime: '18:15',
        location: 'Central Park Field B',
        coachName: 'Coach Sarah',
      },
      {
        id: 'sched_003',
        packageId: 'development',
        dayOfWeek: 'Thursday',
        startTime: '17:00',
        endTime: '18:15',
        location: 'Central Park Field B',
        coachName: 'Coach Sarah',
      },
      {
        id: 'sched_004',
        packageId: 'competitive',
        dayOfWeek: 'Monday',
        startTime: '18:00',
        endTime: '19:30',
        location: 'Riverside Sports Complex',
        coachName: 'Coach David',
      },
    ];
  }
}