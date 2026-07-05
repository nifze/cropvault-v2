'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GlassCard } from '../ui/GlassCard';

export const GallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-gallery]');
    if (!items) return;

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const galleries = [
    { id: 1, color: 'from-accent to-blue-500' },
    { id: 2, color: 'from-accentAlt to-pink-500' },
    { id: 3, color: 'from-cyan-500 to-accent' },
    { id: 4, color: 'from-purple-500 to-accentAlt' },
    { id: 5, color: 'from-accent to-accentAlt' },
    { id: 6, color: 'from-orange-500 to-accentAlt' },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Gallery
          </h2>
          <p className="text-gray-400 text-lg">Showcase of premium interactions and designs</p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleries.map((item) => (
            <div
              key={item.id}
              data-gallery={item.id}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4">✨</div>
                  <p className="text-white font-bold text-lg">Project {item.id}</p>
                </div>
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
