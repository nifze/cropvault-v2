'use client';

import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GlassCard } from '../ui/GlassCard';
import gsap from 'gsap';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-feature]');
    if (!cards) return;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience 60 FPS performance with optimized rendering and smooth animations.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Crafted with precision using modern design principles and premium aesthetics.',
    },
    {
      icon: '🔮',
      title: 'Interactive 3D',
      description: 'Immersive Three.js scenes with dynamic lighting and interactive elements.',
    },
    {
      icon: '✨',
      title: 'Smooth Animations',
      description: 'GSAP-powered animations and Framer Motion for seamless interactions.',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect experience on all devices with adaptive layouts and touch support.',
    },
    {
      icon: '🌙',
      title: 'Dark Luxury',
      description: 'Premium dark mode with glassmorphism and glowing accents throughout.',
    },
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            Premium Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience cutting-edge technology combined with award-winning design principles.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              data-feature={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accentAlt/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
