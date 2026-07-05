'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { GlassCard } from '../ui/GlassCard';

export const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = [
    {
      question: 'How does the animation performance stay so smooth?',
      answer:
        'We utilize GSAP for timeline animations, Framer Motion for component interactions, and optimized Three.js rendering. Combined with hardware acceleration and lazy loading, we maintain consistent 60 FPS performance.',
    },
    {
      question: 'Is this website truly responsive?',
      answer:
        'Absolutely. Every section, animation, and interaction is tested across all device sizes. The layout adapts gracefully using Tailwind CSS, and touch interactions are fully optimized for mobile devices.',
    },
    {
      question: 'Can I customize the design for my brand?',
      answer:
        'Yes! The entire design system is modular and customizable. Colors, animations, typography, and layout can all be adjusted to match your brand guidelines.',
    },
    {
      question: 'What technologies power this experience?',
      answer:
        'Next.js 14 with App Router, React 18, Three.js with React Three Fiber, GSAP, Framer Motion, Tailwind CSS, TypeScript, and Lenis for smooth scrolling.',
    },
    {
      question: 'Is SEO optimization included?',
      answer:
        'Yes. Next.js App Router provides excellent SEO capabilities with built-in optimizations, proper metadata, and structured data support for search engine visibility.',
    },
  ];

  useEffect(() => {
    if (expandedIndex !== null && contentRefs.current[expandedIndex]) {
      const element = contentRefs.current[expandedIndex];
      gsap.to(element, {
        height: 'auto',
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    contentRefs.current.forEach((el, index) => {
      if (index !== expandedIndex && el) {
        gsap.to(el, {
          height: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });
  }, [expandedIndex]);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about this experience</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              className="cursor-pointer overflow-hidden"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </div>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="overflow-hidden h-0"
              >
                <p className="text-gray-400 pt-4">{faq.answer}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
