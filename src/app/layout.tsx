import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { varsityFont } from './fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JAG FC',
  description:
    'Professional youth soccer coaching in Connecticut for ages 5-16. Develop skills, build confidence, and make lifelong friends.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={varsityFont.variable}>
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
