'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GlassCard } from '../ui/GlassCard';

export const TestimonalsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-testimonial]');
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, rotationX: 10 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Creative Director',
      image: '👨‍💼',
      text: 'This website experience is absolutely phenomenal. The animations are buttery smooth and the 3D interactions feel incredibly polished.',
    },
    {
      name: 'Sarah Chen',
      role: 'Design Lead',
      image: '👩‍🎨',
      text: 'We were blown away by the attention to detail. Every interaction feels intentional and the luxury aesthetic is perfectly executed.',
    },
    {
      name: 'Marcus Williams',
      role: 'Tech Lead',
      image: '👨‍💻',
      text: 'The performance is outstanding. 60 FPS throughout, perfectly optimized. This is how modern web experiences should be built.',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg">What industry leaders are saying</p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} data-testimonial={index} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accentAlt flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <div className="flex gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
