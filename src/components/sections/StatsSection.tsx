'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface StatsBlockProps {
  number: string;
  label: string;
  delay?: number;
}

const StatsBlock: React.FC<StatsBlockProps> = ({ number, label, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{number}</div>
      <div className="text-gray-400 text-sm md:text-base">{label}</div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { number: '60', label: 'FPS Performance' },
    { number: '10+', label: 'Animations' },
    { number: '3D', label: 'Interactive Scenes' },
    { number: '100%', label: 'Responsive' },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatsBlock key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
