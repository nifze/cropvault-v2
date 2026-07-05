'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accentAlt flex items-center justify-center text-white font-bold text-lg shadow-glow-lg hover:shadow-glow transition-all duration-300 animate-pulse"
    >
      ↑
    </button>
  );
};
