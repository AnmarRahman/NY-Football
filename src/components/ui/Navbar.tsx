"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { MockAuthService } from "@/services/mockAuthService";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const { user, logout } = useStore();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await MockAuthService.logout();
    logout();
    setMobileMenuOpen(false);
    router.push("/");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isAdmin = user?.role === "admin";
  const dashboardLink = isAdmin ? "/admin" : "/dashboard";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Left side: Logo + Slogan */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3"
              onClick={closeMobileMenu}
            >
              <Image
                src="/images/logo.png"
                width={80}
                height={80}
                alt="JAG FC LOGO"
              />
            </Link>

            {/* Mobile Slogan */}
            <div className="flex md:hidden items-center">
              <p className="font-varsity font-bold text-sm text-primary-600 tracking-wide uppercase">
                Rise. Compete. Conquer.
              </p>
            </div>

            {/* Desktop Slogan */}
            <div className="hidden md:flex items-center border-l-2 border-primary-500 pl-6">
              <p className="font-varsity font-bold text-xl text-primary-600 tracking-wider uppercase">
                Rise. Compete. Conquer.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-varsity">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Programs
            </Link>

            {user ? (
              <>
                <Link
                  href={dashboardLink}
                  className="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
                >
                  {isAdmin ? "Admin" : "Dashboard"}
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold border border-gray-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all font-bold shadow-md"
              >
                Join Now
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block text-gray-700 hover:text-primary-600 font-semibold py-2 px-3 rounded-lg hover:bg-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/packages"
              onClick={closeMobileMenu}
              className="block text-gray-700 hover:text-primary-600 font-semibold py-2 px-3 rounded-lg hover:bg-white transition-colors"
            >
              Programs
            </Link>

            {user ? (
              <>
                <Link
                  href={dashboardLink}
                  onClick={closeMobileMenu}
                  className="block text-gray-700 hover:text-primary-600 font-semibold py-2 px-3 rounded-lg hover:bg-white transition-colors"
                >
                  {isAdmin ? "Admin Dashboard" : "Dashboard"}
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                onClick={closeMobileMenu}
                className="block bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-all font-bold text-center"
              >
                Join Now
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
