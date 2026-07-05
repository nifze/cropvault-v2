'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-ring') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursorDot, {
        left: mouseX,
        top: mouseY,
        duration: 0,
      });

      gsap.to(cursor, {
        left: mouseX,
        top: mouseY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = (e: Event) => {
      if ((e.target as HTMLElement).closest('button, a')) {
        setIsHoveringButton(true);
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      setIsHoveringButton(false);
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-ring fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
        }}
      />
      <div
        className="cursor-dot fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};
