'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { GlassCard } from '../ui/GlassCard';

export const PricingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-pricing]');
    if (!cards) return;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for getting started',
      features: ['5 Projects', '10GB Storage', 'Basic Support', 'Standard Animations'],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '149',
      description: 'For growing teams',
      features: ['Unlimited Projects', '500GB Storage', 'Priority Support', 'Advanced 3D', 'Custom Domain'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Everything in Pro', 'Dedicated Support', 'Custom Development', 'White Label', 'SLA'],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include our premium experience.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <GlassCard
              key={index}
              data-pricing={index}
              className={`flex flex-col ${plan.highlighted ? 'md:scale-105 border-accent/50' : ''}`}
            >
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-accent to-accentAlt text-black px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <MagneticButton
                className={`w-full py-3 font-bold rounded-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-accent to-accentAlt text-black hover:shadow-glow-lg'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </MagneticButton>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-accentAlt/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
