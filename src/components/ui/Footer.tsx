import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <Image
              src="/images/logo.png"
              width={50}
              height={50}
              alt="JAG FC LOGO"
            />
            <p className="text-gray-400 text-sm mt-2">
              Building champions through elite youth soccer training. Where
              passion meets excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-500">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/packages"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/auth"
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-500">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Connecticut, NY</li>
              <li>📧 info@jagfc.com</li>
              <li>📞 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">Our Sponsors</p>
          <div className="flex justify-center items-center space-x-8">
            <a
              href="https://www.vazzys19thholemenu.com/?utm_source=gbp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/sponsor1.png"
                alt="Vazzy's 19th Hole"
                width={120}
                height={60}
              />
            </a>
            <a
              href="https://puertovallartausa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/sponsor2.png"
                alt="Puerto Vallarta USA"
                width={120}
                height={60}
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 JAG FC. All rights reserved.{" "}
            <span className="text-primary-500 font-semibold">
              Where Champions Rise
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
