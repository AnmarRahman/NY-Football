# JAG FC - Youth Soccer Academy

## 🦅 Project Overview
Production-ready frontend demo for JAG FC, a youth soccer coaching academy. Features a powerful phoenix branding with bold black, gold, and orange colors.

**Team**: JAG FC - Est. 2024
**Colors**: Black, Gold, Orange/Red
**Location**: New York, USA

### Tech Stack
- **Framework**: Next.js (React-based)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Supabase (not connected yet - mocked)
- **Payments**: Stripe (not connected yet - mocked)

## 🚀 Getting Started

### Installation
```bash
git clone https://github.com/AnmarRahman/NY-Football.git
cd NY-Football
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 📄 Pages

### 1. Homepage (`/`)
- Hero section with team photo background
- Academy description and coaching philosophy
- Age groups and location info
- Real team testimonials and photos
- Links to Packages and Signup

### 2. Packages Page (`/packages`)
- 4 coaching packages with pricing
- Age range and session details
- Redirects to auth if not logged in

### 3. Authentication Page (`/auth`)
- Toggle between Sign Up / Log In
- Parent and child information forms
- Simulated authentication

### 4. Parent Dashboard (`/dashboard`)
- Welcome message with parent name
- Selected package summary
- Mock payment section
- Account settings

### 5. Admin Dashboard (`/admin`)
- Subscription management
- User management
- Schedule management
- Package pricing updates

## 🔑 Admin Access

```
Email: admin@jagfc.com
Password: admin123
```

## 🎨 Branding

### Color Palette
- **Primary (Gold)**: #f5ac0a - Main brand color
- **Secondary (Red/Orange)**: #ff8278 - Accent color
- **Accent (Orange)**: #f97316 - Highlights
- **Dark**: #1a1a1a - Text and backgrounds

### Logo
- Phoenix rising design
- Black shield background
- Gold "JAG FC" text
- Red and orange flames
- Est. 2024 banner

## 📁 Project Structure

```
jag-fc/
├── src/
│   ├── app/                    # Pages
│   ├── components/             # UI components
│   ├── services/              # Mock services
│   ├── store/                 # State management
│   └── types/                 # TypeScript types
├── public/                    # Static assets
│   └── logo.png              # JAG FC logo
└── README.md
```

## 🔧 Customization

### Update Packages
Edit `src/services/mockPackageService.ts`

### Update Branding
- Colors: `tailwind.config.ts`
- Business name: Navbar and Footer components
- Logo: `public/logo.png`

## 🔌 Backend Integration

### Supabase Setup
1. Create Supabase project
2. Set up authentication
3. Create database tables
4. Update mock services

### Stripe Setup
1. Create Stripe account
2. Get API keys
3. Create payment intents
4. Update payment service

## 📝 License

Private - JAG FC

---

**Built with ❤️ for JAG FC - Where Champions Rise**