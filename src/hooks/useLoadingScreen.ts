'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export const useLoadingScreen = (duration: number = 2) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.querySelector('.loading-screen');
      if (loader) {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsLoading(false);
          },
        });
      } else {
        setIsLoading(false);
      }
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return { isLoading };
};
