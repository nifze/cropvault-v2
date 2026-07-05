'use client';

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export const ScrollIndicator: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-accent to-accentAlt origin-left">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-gradient-to-r from-accent via-accentAlt to-accent transition-all duration-300"
      />
    </div>
  );
};
