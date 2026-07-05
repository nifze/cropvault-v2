'use client';

import React, { useState } from 'react';
import { MagneticButton } from './MagneticButton';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-primary/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accentAlt rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CV</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">CropVault</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton className="px-6 py-2 bg-gradient-to-r from-accent to-accentAlt text-black font-bold rounded-lg hover:shadow-glow-lg">
              Get Started
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-accent hover:bg-white/5 transition-all duration-300 rounded"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <MagneticButton className="w-full px-6 py-2 bg-gradient-to-r from-accent to-accentAlt text-black font-bold rounded-lg hover:shadow-glow-lg">
                Get Started
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
