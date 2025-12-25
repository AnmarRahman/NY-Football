# Admin Dashboard Guide

## 🔑 Admin Access

### Login Credentials (Demo)
```
Email: admin@nyfuturestars.com
Password: admin123
```

### How to Access
1. Go to `/auth` page
2. Enter admin credentials
3. Click "Log In"
4. You'll be automatically redirected to `/admin`

---

## 📊 Admin Dashboard Overview

The admin dashboard provides complete control over the NY Future Stars Soccer Academy platform.

### Quick Stats
The dashboard header shows:
- **Total Subscriptions**: All subscriptions (active, pending, cancelled)
- **Active Subscriptions**: Currently active enrollments
- **Total Users**: Registered parents/students
- **Monthly Revenue**: Sum of all active subscription fees

---

## 📦 Features by Tab

### 1️⃣ Subscriptions Tab

**Purpose:** Manage all user subscriptions

**Features:**
- View all subscriptions in a table format
- See user details (parent name, email, child info)
- Package information (name, price)
- Update subscription status with dropdown:
  - 🟢 **Active**: Subscription is active and paid
  - 🟡 **Pending**: Awaiting payment or approval
  - 🔴 **Cancelled**: User cancelled subscription
  - ⚫ **Expired**: Subscription expired
- View start dates
- Click "View Details" for more information (UI placeholder)

**Status Color Coding:**
- Active: Green background
- Pending: Yellow background
- Cancelled/Expired: Red background

**How to Update Status:**
1. Find the subscription row
2. Click the status dropdown
3. Select new status
4. Change is saved automatically

---

### 2️⃣ Users Tab

**Purpose:** View all registered users

**Information Displayed:**
- Parent name
- Email address
- Child name (if provided)
- Child age (if provided)
- Registration date

**Note:** Currently read-only. Future versions will allow editing user details.

---

### 3️⃣ Schedules Tab

**Purpose:** Manage training schedules for all packages

**Features:**
- View all training schedules in card format
- Each schedule shows:
  - Day of week
  - Time (start - end)
  - Location
  - Coach name
  - Associated package

**Actions Available:**

**Add New Schedule:**
1. Click "Add Schedule" button
2. Fill in the form:
   - Day of week (dropdown)
   - Package (dropdown)
   - Start time
   - End time
   - Location
   - Coach name
3. Click "Save Schedule"

**Edit Existing Schedule:**
1. Click "Edit" on any schedule card
2. Modify fields as needed
3. Click "Save Schedule"

**Delete Schedule:**
1. Click "Delete" on schedule card
2. Confirm deletion
3. Schedule is permanently removed

---

### 4️⃣ Packages Tab

**Purpose:** Update coaching package details and pricing

**Current Packages:**
1. **Little Kickers** - $120/month (Ages 5-7)
2. **Skill Builders** - $200/month (Ages 8-11)
3. **Elite Training** - $300/month (Ages 12-14)
4. **Future Stars Academy** - $450/month (Ages 14-16)

**Features:**
- View all package details in card format
- See pricing, age range, sessions per week
- View complete feature lists

**Edit Package:**
1. Click "Edit" button on any package card
2. Update fields:
   - Package name
   - Price (monthly)
   - Age range
   - Sessions per week
   - Description
3. Click "Save Changes"

**Note:** Package feature list editing will be added in future versions.

---

## 🛠️ Technical Details

### Data Storage (Current Demo)
All admin data is stored in `localStorage`:
- **Subscriptions**: `ny_soccer_subscriptions`
- **Users**: `ny_soccer_all_users`
- **Schedules**: `ny_soccer_schedules`

### Mock Data
The system comes pre-loaded with sample data:
- 3 mock subscriptions
- 3 mock users
- 4 mock training schedules

### Future Integration

**Supabase Database Tables to Create:**

```sql
-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  package_id TEXT,
  status TEXT CHECK (status IN ('active', 'pending', 'cancelled', 'expired')),
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  transaction_id TEXT,
  amount INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Training schedules table
CREATE TABLE training_schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  package_id TEXT,
  day_of_week TEXT,
  start_time TIME,
  end_time TIME,
  location TEXT,
  coach_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_schedules ENABLE ROW LEVEL SECURITY;

-- Admin-only access policies
CREATE POLICY "Admins can manage subscriptions"
  ON subscriptions
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can manage schedules"
  ON training_schedules
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');
```

---

## 🔒 Security

### Current (Demo)
- Simple role-based check (`user.role === 'admin'`)
- Hardcoded admin credentials
- Frontend-only validation

### Production Requirements
1. **Backend Authentication**: Implement Supabase Auth with admin roles
2. **Row Level Security**: Use Supabase RLS policies
3. **API Validation**: Validate admin status on every API call
4. **Secure Credentials**: Remove hardcoded passwords
5. **Audit Logging**: Track all admin actions

---

## 📝 Common Tasks

### Approve a Pending Subscription
1. Go to Subscriptions tab
2. Find subscription with "Pending" status
3. Change dropdown to "Active"
4. User will now have full access

### Add Weekly Training Session
1. Go to Schedules tab
2. Click "Add Schedule"
3. Select package (e.g., "Skill Builders")
4. Choose day (e.g., "Wednesday")
5. Set times (e.g., 17:00 - 18:15)
6. Enter location and coach name
7. Save

### Update Package Pricing
1. Go to Packages tab
2. Click "Edit" on desired package
3. Update price field
4. Save changes
5. Note: Affects new enrollments only (existing subscriptions unchanged)

### View User Information
1. Go to Users tab
2. Browse or search for user
3. View all registered information

---

## ⚠️ Important Notes

### Demo Limitations
- All data is stored locally in browser
- Data resets when localStorage is cleared
- No real payment processing
- No email notifications
- No data persistence across devices

### Best Practices
1. **Regular Backups**: Export data regularly (future feature)
2. **Status Updates**: Keep subscription statuses current
3. **Schedule Maintenance**: Remove outdated schedules
4. **Package Updates**: Communicate pricing changes to users

---

## 🔄 Navigation

### From Admin Dashboard
- **Home**: Click logo or "Home" in navbar
- **Packages**: View public packages page
- **Logout**: Click "Logout" button (redirects to homepage)

### To Admin Dashboard
- Must be logged in as admin
- Navigate to `/admin` or click "Admin" in navbar
- Regular users cannot access (auto-redirected)

---

## 🚀 Future Enhancements

### Planned Features
- 📊 Analytics dashboard with charts
- 📧 Email notifications to users
- 📝 Export data to CSV/Excel
- 🔍 Advanced search and filters
- 💰 Revenue reports and analytics
- 📅 Calendar view for schedules
- 👥 Bulk actions (approve multiple subscriptions)
- 📝 User notes and comments
- 📢 Announcement system
- 📱 Mobile app for coaches

---

## 📞 Support

For technical support or questions:
- Email: admin@nyfuturestars.com
- Create an issue on GitHub

---

**Last Updated**: December 2024