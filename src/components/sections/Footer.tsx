'use client';

import React from 'react';
import { MagneticButton } from '../ui/MagneticButton';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Security', 'Roadmap'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Docs', 'Community', 'Support'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookies', 'License'],
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-secondary/50 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accentAlt rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CV</span>
              </div>
              <span className="text-lg font-bold">CropVault</span>
            </div>
            <p className="text-gray-400 text-sm">Premium interactive experiences built with passion and precision.</p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} CropVault. All rights reserved.
            </p>

            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent/20 transition-all duration-300"
                >
                  <span className="text-sm font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>

            <MagneticButton className="px-6 py-2 glass hover:bg-white/10 rounded-lg text-sm font-medium">
              Back to Top
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};
