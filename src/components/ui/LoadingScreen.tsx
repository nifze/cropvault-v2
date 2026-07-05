'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';

export const LoadingScreen: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.loading-bar', {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut',
    })
      .to('.loading-screen', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        pointerEvents: 'none',
      })
      .to(
        '.loading-bar',
        {
          scaleX: 0,
          transformOrigin: 'right',
          duration: 0.5,
        },
        '<'
      );
  }, []);

  return (
    <div className="loading-screen fixed inset-0 bg-gradient-to-br from-primary via-secondary to-primary z-50 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="loading-bar h-1 bg-gradient-to-r from-accent via-accentAlt to-accent w-0" />
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-2 border-accent border-t-accentAlt rounded-full animate-spin mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-white animate-pulse">Loading Experience</h2>
        <p className="text-accent text-sm mt-2">Preparing something amazing...</p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-accent rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};
