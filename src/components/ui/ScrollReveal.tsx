'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directionMap = {
      up: { y: 30, x: 0 },
      down: { y: -30, x: 0 },
      left: { y: 0, x: 30 },
      right: { y: 0, x: -30 },
    };

    const initial = directionMap[direction];

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: initial.y,
        x: initial.x,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          markers: false,
        },
      }
    );
  }, [delay, duration, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
