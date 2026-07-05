'use client';

import React, { Suspense } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonalsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { ShowcaseScene } from '@/components/three/ShowcaseScene';

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-secondary" />}>
          <ShowcaseScene />
        </Suspense>
      </div>

      <div className="relative z-10 container-custom text-center pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Interactive Showcase</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Watch as 3D objects dance through space with perfect precision and smooth motion.
        </p>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-accentAlt/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ShowcaseSection />
      <GallerySection />
      <ProcessSection />
      <TestimonalsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
