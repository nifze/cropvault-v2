'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';

export const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      0
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        0.2
      )
      .fromTo(
        buttonsRef.current?.querySelectorAll('button') || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        0.4
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accentAlt/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Experience the Future of</span>
            <br />
            <span className="text-gradient glow-text">Interactive Design</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Premium, cinematic website experiences with cutting-edge animations, immersive 3D scenes, and
            luxury design. Built for those who demand excellence.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <MagneticButton className="px-8 py-4 bg-gradient-to-r from-accent to-accentAlt text-black font-bold text-lg rounded-lg hover:shadow-glow-lg">
              Explore Now
            </MagneticButton>
            <MagneticButton className="px-8 py-4 glass font-bold text-lg rounded-lg hover:bg-white/10">
              Learn More
            </MagneticButton>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-accent text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
