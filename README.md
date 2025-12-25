# NY Future Stars Soccer Academy - Frontend Demo

## 🎯 Project Overview
Production-ready frontend demo for a youth soccer coaching business based in New York, USA. This is a fully functional demo website showcasing modern web development practices with simulated backend functionality.

**Live Demo:** Ready to deploy and run locally!

### 🏆 Business Context
- **Business Name:** NY Future Stars Soccer Academy (placeholder)
- **Industry:** Youth soccer/football coaching
- **Target Audience:** Parents of children ages 5–16
- **Goal:** Professional, trustworthy, parent-friendly coaching website
- **Branding:** Blue/green sporty colors, temporary text-based logo

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **Supabase** | Database (not connected - mocked) |
| **Stripe** | Payments (not connected - mocked) |

> **Note:** Using Next.js instead of NestJS as NestJS is a backend framework. Next.js provides the best frontend development experience with React.

---

## 📁 Project Structure

```
ny-future-stars-soccer/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── packages/          # Packages page
│   │   │   └── page.tsx
│   │   ├── auth/              # Authentication page
│   │   │   └── page.tsx
│   │   ├── dashboard/         # Parent dashboard
│   │   │   └── page.tsx
│   │   ├── layout.tsx         # Root layout with navbar/footer
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   ├── services/             # Mock services
│   │   ├── mockAuthService.ts       # Simulated auth
│   │   ├── mockPackageService.ts    # Package data
│   │   └── mockPaymentService.ts    # Payment simulation
│   ├── store/                # State management
│   │   └── useStore.ts
│   └── types/                # TypeScript definitions
│       └── index.ts
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/AnmarRahman/NY-Football.git
cd NY-Football

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📝 Pages & Features

### 1️⃣ Homepage (`/`)
**Purpose:** First impression and trust building

**Features:**
- ✨ Hero section with compelling headline and CTAs
- 🎯 Academy description and values
- ⚽ Coaching philosophy
- 👶 Age groups (5-7, 8-11, 12-14, 14-16)
- 📍 Location information (New York)
- 💬 Mock parent testimonials with 5-star ratings
- 👉 Call-to-action buttons linking to Packages and Signup

### 2️⃣ Packages Page (`/packages`)
**Purpose:** Display coaching programs and pricing

**Features:**
- 4 coaching packages:
  - **Little Kickers** ($120/mo, ages 5-7)
  - **Skill Builders** ($200/mo, ages 8-11) - Most Popular
  - **Elite Training** ($300/mo, ages 12-14)
  - **Future Stars Academy** ($450/mo, ages 14-16)
- Each package displays:
  - Price, age range, sessions per week
  - Detailed feature list
  - "Select Package" button
- **Smart Redirect Logic:**
  - Not logged in? → Redirect to `/auth`
  - Logged in? → Redirect to `/dashboard` with selected package

### 3️⃣ Authentication Page (`/auth`)
**Purpose:** Simulated user signup and login

**Features:**
- 🔄 Toggle between Sign Up and Log In
- 📝 Form fields:
  - Email and password (required)
  - Parent name (signup only)
  - Child name and age (optional)
- ✅ Form validation
- 🚧 Demo mode indicator
- ➡️ Auto-redirect after authentication
- 💾 Stores user in localStorage (simulates session)

### 4️⃣ Parent Dashboard (`/dashboard`)
**Purpose:** Account and package management

**Features:**
- 👋 Personalized welcome message
- 📦 Selected package summary with:
  - Price, age range, sessions
  - Full feature list
  - Status badge (Active/Pending)
- 💳 **Mock Payment Section:**
  - Credit card input fields
  - Card number formatting (auto-spaces)
  - Expiry date formatting (MM/YY)
  - CVV field
  - Real-time validation
  - 2-second processing simulation
  - Success/error states
- 🔄 Package management:
  - Change package button
  - Cancel package button
- 📅 Training schedule (UI placeholder)
- 👤 Account info sidebar
- ⚡ Quick actions (UI only)

---

## 🔒 Mock Services

All backend functionality is currently simulated with clear integration points:

### MockAuthService (`src/services/mockAuthService.ts`)
```typescript
// Current: localStorage-based auth
// Future: Supabase authentication

- signUp()     // TODO: supabase.auth.signUp()
- login()      // TODO: supabase.auth.signInWithPassword()
- logout()     // TODO: supabase.auth.signOut()
- getCurrentUser()
- isAuthenticated()
```

### MockPackageService (`src/services/mockPackageService.ts`)
```typescript
// Current: Hardcoded package data
// Future: Supabase database queries

- getPackages()        // TODO: supabase.from('packages').select()
- getPackageById(id)   // TODO: supabase.from('packages').select().eq('id', id)
```

### MockPaymentService (`src/services/mockPaymentService.ts`)
```typescript
// Current: Simulated payment processing
// Future: Stripe integration

- processPayment()     // TODO: Stripe payment intent
- cancelPayment()      // TODO: Stripe refund
- validateCardNumber()
- formatCardNumber()
```

---

## 🎨 Design System

### Color Palette
```css
Primary (Blue):
- 50:  #eff6ff (lightest)
- 600: #2563eb (main)
- 700: #1d4ed8 (hover)

Secondary (Green):
- 50:  #f0fdf4 (lightest)
- 600: #16a34a (main)
- 700: #15803d (hover)
```

### Components
- **Button:** 3 variants (primary, secondary, outline), 3 sizes
- **Card:** Reusable with hover effects, customizable padding
- **Input:** With labels, validation, error states
- **Navbar:** Sticky, responsive, shows auth state
- **Footer:** 3-column layout with links and contact info

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, clear hierarchy
- Body: Regular weight, good contrast

### Layout Principles
- 📱 Fully responsive (mobile-first)
- 🎴 Modern card-based design
- 🔲 Rounded corners and soft shadows
- ✨ Smooth transitions and animations
- 👨‍👩‍👧 Parent-friendly UX

---

## ⚙️ State Management

Using **Zustand** for global state:

```typescript
// src/store/useStore.ts

interface AppState {
  user: User | null;
  selectedPackage: Package | null;
  paymentCompleted: boolean;
  transactionId: string | null;
  
  // Actions
  setUser()
  setSelectedPackage()
  setPaymentCompleted()
  clearPayment()
  logout()
}
```

**Why Zustand?**
- Lightweight (1KB)
- No boilerplate
- Easy to integrate with Next.js
- TypeScript support

---

## 🔧 Customization Guide

### Update Packages
Edit `src/services/mockPackageService.ts`:

```typescript
return [
  {
    id: 'your-package-id',
    name: 'Your Package Name',
    price: 150,
    ageRange: '8-10 years',
    sessionsPerWeek: 2,
    description: 'Your description',
    features: [
      'Feature 1',
      'Feature 2',
    ],
  },
  // Add more packages...
];
```

### Update Branding

**Colors** (`tailwind.config.ts`):
```typescript
colors: {
  primary: {
    600: '#YOUR_COLOR',
  },
}
```

**Business Name** (`src/components/ui/Navbar.tsx`, `src/components/ui/Footer.tsx`):
```typescript
<h1>Your Academy Name</h1>
```

### Add Real Logo
1. Add logo image to `/public/logo.png`
2. Update Navbar component:
```tsx
<Image src="/logo.png" alt="Logo" width={48} height={48} />
```

---

## 🔌 Backend Integration Roadmap

### Phase 1: Supabase Authentication
```bash
npm install @supabase/supabase-js
```

1. Create Supabase project
2. Update `mockAuthService.ts` to use Supabase
3. Configure environment variables
4. Test authentication flow

### Phase 2: Supabase Database
```sql
-- Create packages table
CREATE TABLE packages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  age_range TEXT,
  sessions_per_week INTEGER,
  description TEXT,
  features JSONB
);

-- Create enrollments table
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  package_id TEXT REFERENCES packages(id),
  status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Phase 3: Stripe Payments
```bash
npm install @stripe/stripe-js stripe
```

1. Set up Stripe account
2. Create payment intent endpoint
3. Update `mockPaymentService.ts`
4. Configure webhooks
5. Test payment flow

---

## 🚦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
```

---

## ✅ Features Checklist

- [x] Clean, modular code structure
- [x] TypeScript for type safety
- [x] Responsive design (mobile-first)
- [x] Mock authentication (localStorage)
- [x] Mock package management
- [x] Mock payment processing
- [x] State management (Zustand)
- [x] Form validation
- [x] Error handling
- [x] Loading states
- [x] Success/error messages
- [x] Comments for future integration
- [x] Production-ready code quality
- [ ] Supabase integration
- [ ] Stripe integration
- [ ] Real logo and images
- [ ] Email notifications
- [ ] Admin dashboard

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe Docs](https://stripe.com/docs)

---

## 💬 Support

For questions or issues:
- Create an issue on GitHub
- Email: info@nyfuturestars.com (placeholder)

---

## 📝 License

Private - NY Future Stars Soccer Academy

---

## 🚀 Next Steps

1. **Test the demo**
   ```bash
   npm install
   npm run dev
   ```

2. **Customize branding**
   - Update colors in `tailwind.config.ts`
   - Change business name in components
   - Add real logo

3. **Connect backend services**
   - Set up Supabase project
   - Configure Stripe account
   - Update mock services

4. **Deploy to production**
   - Push to GitHub
   - Deploy on Vercel
   - Configure domain

---

**Built with ❤️ for NY Future Stars Soccer Academy**