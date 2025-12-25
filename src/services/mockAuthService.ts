import { User, AuthCredentials } from '@/types';

/**
 * Mock Authentication Service
 * 
 * TODO: Replace with real Supabase authentication
 * - Import Supabase client
 * - Use supabase.auth.signUp() for registration
 * - Use supabase.auth.signInWithPassword() for login
 * - Use supabase.auth.signOut() for logout
 * - Handle real session management
 */

export class MockAuthService {
  private static STORAGE_KEY = 'ny_soccer_user';

  /**
   * Simulate user signup
   * Future: Connect to Supabase auth.signUp()
   */
  static async signUp(credentials: AuthCredentials): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user: User = {
      id: `user_${Date.now()}`,
      email: credentials.email,
      parentName: credentials.parentName || 'Parent',
      childName: credentials.childName,
      childAge: credentials.childAge,
      createdAt: new Date(),
    };

    // Store in localStorage (temporary - will be replaced by Supabase session)
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    
    return user;
  }

  /**
   * Simulate user login
   * Future: Connect to Supabase auth.signInWithPassword()
   */
  static async login(credentials: AuthCredentials): Promise<User> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user exists in localStorage
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    
    if (storedUser) {
      return JSON.parse(storedUser);
    }

    // Create a mock user if none exists
    const user: User = {
      id: `user_${Date.now()}`,
      email: credentials.email,
      parentName: credentials.parentName || 'Parent',
      createdAt: new Date(),
    };

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  /**
   * Simulate user logout
   * Future: Connect to Supabase auth.signOut()
   */
  static async logout(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Get current user from storage
   * Future: Get from Supabase session
   */
  static getCurrentUser(): User | null {
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  }

  /**
   * Check if user is authenticated
   * Future: Check Supabase session
   */
  static isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }
}