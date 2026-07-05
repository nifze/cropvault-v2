'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GlassCard } from '../ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-step]');
    if (!cards) return;

    // Create a timeline for staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        markers: false,
      },
    });

    cards.forEach((card, index) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          rotationY: index % 2 === 0 ? -10 : 10,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        index * 0.15
      );
    });
  }, []);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Concept',
      description: 'We start with your vision and create a detailed concept that captures the essence of your brand.',
      icon: '💡',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our design team crafts pixel-perfect interfaces with attention to every detail.',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build with cutting-edge technologies ensuring optimal performance and smooth animations.',
      icon: '⚙️',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Every element is optimized for performance, maintaining 60 FPS throughout the experience.',
      icon: '⚡',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we follow a meticulous process to ensure excellence.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <GlassCard
              key={index}
              data-step={index}
              className="flex flex-col items-start relative"
            >
              <div className="flex items-start gap-6 w-full">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-accent to-accentAlt">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-accent font-bold text-lg">{step.number}</p>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden md:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-accent to-transparent" />
              )}
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accentAlt/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
