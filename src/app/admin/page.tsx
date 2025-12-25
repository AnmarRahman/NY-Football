'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useStore } from '@/store/useStore';
import { MockAuthService } from '@/services/mockAuthService';
import { MockAdminService } from '@/services/mockAdminService';
import { MockPackageService } from '@/services/mockPackageService';
import { Subscription, User, TrainingSchedule, Package } from '@/types';

type TabType = 'subscriptions' | 'users' | 'schedules' | 'packages';

export default function AdminDashboard() {
  const router = useRouter();
  const { user, setUser } = useStore();
  const [activeTab, setActiveTab] = useState<TabType>('subscriptions');
  const [loading, setLoading] = useState(true);
  
  // Data states
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [schedules, setSchedules] = useState<TrainingSchedule[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  
  // Edit states
  const [editingSchedule, setEditingSchedule] = useState<TrainingSchedule | null>(null);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const currentUser = MockAuthService.getCurrentUser();
    
    if (!currentUser || currentUser.role !== 'admin') {
      router.push('/auth');
      return;
    }
    
    setUser(currentUser);
    await loadData();
    setLoading(false);
  };

  const loadData = async () => {
    const [subs, usersData, scheds, pkgs] = await Promise.all([
      MockAdminService.getAllSubscriptions(),
      MockAdminService.getAllUsers(),
      MockAdminService.getSchedules(),
      MockPackageService.getPackages(),
    ]);
    
    setSubscriptions(subs);
    setUsers(usersData);
    setSchedules(scheds);
    setPackages(pkgs);
  };

  const handleUpdateSubscriptionStatus = async (id: string, status: Subscription['status']) => {
    await MockAdminService.updateSubscriptionStatus(id, status);
    await loadData();
  };

  const handleUpdateSchedule = async () => {
    if (!editingSchedule) return;
    await MockAdminService.updateSchedule(editingSchedule);
    setEditingSchedule(null);
    await loadData();
  };

  const handleDeleteSchedule = async (id: string) => {
    if (confirm('Are you sure you want to delete this schedule?')) {
      await MockAdminService.deleteSchedule(id);
      await loadData();
    }
  };

  const handleUpdatePackage = async () => {
    if (!editingPackage) return;
    await MockAdminService.updatePackage(editingPackage);
    setEditingPackage(null);
    await loadData();
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const stats = {
    totalSubscriptions: subscriptions.length,
    activeSubscriptions: subscriptions.filter(s => s.status === 'active').length,
    totalUsers: users.length,
    monthlyRevenue: subscriptions
      .filter(s => s.status === 'active')
      .reduce((sum, s) => sum + s.amount, 0),
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Admin Dashboard 👨‍💼
        </h1>
        <p className="text-gray-600">Welcome back, {user.parentName}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card padding="lg">
          <p className="text-sm text-gray-600 mb-1">Total Subscriptions</p>
          <p className="text-3xl font-bold text-primary-600">{stats.totalSubscriptions}</p>
        </Card>
        <Card padding="lg">
          <p className="text-sm text-gray-600 mb-1">Active Subscriptions</p>
          <p className="text-3xl font-bold text-secondary-600">{stats.activeSubscriptions}</p>
        </Card>
        <Card padding="lg">
          <p className="text-sm text-gray-600 mb-1">Total Users</p>
          <p className="text-3xl font-bold text-primary-600">{stats.totalUsers}</p>
        </Card>
        <Card padding="lg">
          <p className="text-sm text-gray-600 mb-1">Monthly Revenue</p>
          <p className="text-3xl font-bold text-secondary-600">${stats.monthlyRevenue}</p>
        </Card>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'subscriptions', label: 'Subscriptions', icon: '💳' },
              { id: 'users', label: 'Users', icon: '👥' },
              { id: 'schedules', label: 'Schedules', icon: '📅' },
              { id: 'packages', label: 'Packages', icon: '📦' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {/* Subscriptions Tab */}
        {activeTab === 'subscriptions' && (
          <Card padding="lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscription Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Package</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subscriptions.map((sub) => (
                    <tr key={sub.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{sub.user.parentName}</div>
                          <div className="text-sm text-gray-500">{sub.user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {sub.package.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        ${sub.amount}/mo
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={sub.status}
                          onChange={(e) => handleUpdateSubscriptionStatus(sub.id, e.target.value as Subscription['status'])}
                          className={`text-sm font-semibold px-3 py-1 rounded-full ${
                            sub.status === 'active' ? 'bg-secondary-100 text-secondary-800' :
                            sub.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}
                        >
                          <option value="active">Active</option>
                          <option value="pending">Pending</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="expired">Expired</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sub.startDate.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-primary-600 hover:text-primary-900">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <Card padding="lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Parent Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Child Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Child Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.parentName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.childName || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.childAge || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.createdAt.toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Schedules Tab */}
        {activeTab === 'schedules' && (
          <div className="space-y-6">
            <Card padding="lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Training Schedules</h2>
                <Button onClick={() => setEditingSchedule({
                  id: '',
                  packageId: '',
                  dayOfWeek: '',
                  startTime: '',
                  endTime: '',
                  location: '',
                  coachName: '',
                })}>
                  Add Schedule
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {schedules.map((schedule) => (
                  <Card key={schedule.id} className="border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{schedule.dayOfWeek}</h3>
                        <p className="text-sm text-gray-600">{schedule.startTime} - {schedule.endTime}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingSchedule(schedule)}
                          className="text-primary-600 hover:text-primary-900 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteSchedule(schedule.id)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">📍 {schedule.location}</p>
                    <p className="text-sm text-gray-700">👨‍🏫 {schedule.coachName}</p>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Edit Schedule Modal */}
            {editingSchedule && (
              <Card padding="lg" className="border-2 border-primary-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {editingSchedule.id ? 'Edit Schedule' : 'Add New Schedule'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Day of Week</label>
                    <select
                      value={editingSchedule.dayOfWeek}
                      onChange={(e) => setEditingSchedule({...editingSchedule, dayOfWeek: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package</label>
                    <select
                      value={editingSchedule.packageId}
                      onChange={(e) => setEditingSchedule({...editingSchedule, packageId: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Package</option>
                      {packages.map(pkg => (
                        <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                      ))}
                    </select>
                  </div>
                  <Input
                    label="Start Time"
                    type="time"
                    value={editingSchedule.startTime}
                    onChange={(e) => setEditingSchedule({...editingSchedule, startTime: e.target.value})}
                  />
                  <Input
                    label="End Time"
                    type="time"
                    value={editingSchedule.endTime}
                    onChange={(e) => setEditingSchedule({...editingSchedule, endTime: e.target.value})}
                  />
                  <Input
                    label="Location"
                    value={editingSchedule.location}
                    onChange={(e) => setEditingSchedule({...editingSchedule, location: e.target.value})}
                  />
                  <Input
                    label="Coach Name"
                    value={editingSchedule.coachName}
                    onChange={(e) => setEditingSchedule({...editingSchedule, coachName: e.target.value})}
                  />
                </div>
                <div className="flex gap-3 mt-6">
                  <Button onClick={handleUpdateSchedule}>Save Schedule</Button>
                  <Button variant="outline" onClick={() => setEditingSchedule(null)}>Cancel</Button>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Packages Tab */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} padding="lg" className="border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                      <p className="text-3xl font-bold text-primary-600 mt-2">
                        ${pkg.price}<span className="text-lg text-gray-600">/month</span>
                      </p>
                    </div>
                    <Button size="sm" onClick={() => setEditingPackage(pkg)}>Edit</Button>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Age Range: <span className="font-semibold">{pkg.ageRange}</span></p>
                    <p className="text-sm text-gray-600">Sessions: <span className="font-semibold">{pkg.sessionsPerWeek}/week</span></p>
                  </div>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-secondary-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Edit Package Modal */}
            {editingPackage && (
              <Card padding="lg" className="border-2 border-primary-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Edit Package</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Package Name"
                    value={editingPackage.name}
                    onChange={(e) => setEditingPackage({...editingPackage, name: e.target.value})}
                  />
                  <Input
                    label="Price (monthly)"
                    type="number"
                    value={editingPackage.price.toString()}
                    onChange={(e) => setEditingPackage({...editingPackage, price: parseInt(e.target.value)})}
                  />
                  <Input
                    label="Age Range"
                    value={editingPackage.ageRange}
                    onChange={(e) => setEditingPackage({...editingPackage, ageRange: e.target.value})}
                  />
                  <Input
                    label="Sessions Per Week"
                    type="number"
                    value={editingPackage.sessionsPerWeek.toString()}
                    onChange={(e) => setEditingPackage({...editingPackage, sessionsPerWeek: parseInt(e.target.value)})}
                  />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={editingPackage.description}
                      onChange={(e) => setEditingPackage({...editingPackage, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button onClick={handleUpdatePackage}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setEditingPackage(null)}>Cancel</Button>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                  💡 Note: In production, package changes will update the database and affect all future enrollments.
                </div>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}