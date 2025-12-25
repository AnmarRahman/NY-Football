import Image from 'next/image';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <Image src="/logo.png"
                        width={50}
                        height={50} 
                        alt='JAG FC LOGO'/>
            <p className="text-gray-400 text-sm">
              Building champions through elite youth soccer training. Where passion meets excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/packages" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/auth" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Join Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-500">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Connecticut, NY</li>
              <li>📧 info@jagfc.com</li>
              <li>📞 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 JAG FC. All rights reserved. <span className="text-primary-500 font-semibold">Where Champions Rise</span></p>
        </div>
      </div>
    </footer>
  );
};