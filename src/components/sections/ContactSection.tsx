'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const handleInputFocus = (index: number) => {
    gsap.to(inputsRef.current[index], {
      boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
      duration: 0.3,
    });
  };

  const handleInputBlur = (index: number) => {
    gsap.to(inputsRef.current[index], {
      boxShadow: '0 0 0px rgba(0, 217, 255, 0)',
      duration: 0.3,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                ref={(el) => {
                  if (el) inputsRef.current[0] = el;
                }}
                type="text"
                placeholder="Your name"
                onFocus={() => handleInputFocus(0)}
                onBlur={() => handleInputBlur(0)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent/50 transition-all duration-300 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                ref={(el) => {
                  if (el) inputsRef.current[1] = el;
                }}
                type="email"
                placeholder="your@email.com"
                onFocus={() => handleInputFocus(1)}
                onBlur={() => handleInputBlur(1)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent/50 transition-all duration-300 text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input
              ref={(el) => {
                if (el) inputsRef.current[2] = el;
              }}
              type="text"
              placeholder="Project details"
              onFocus={() => handleInputFocus(2)}
              onBlur={() => handleInputBlur(2)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent/50 transition-all duration-300 text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              ref={(el) => {
                if (el) inputsRef.current[3] = el as any;
              }}
              placeholder="Tell us about your project..."
              rows={5}
              onFocus={() => handleInputFocus(3)}
              onBlur={() => handleInputBlur(3)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent/50 transition-all duration-300 text-white placeholder-gray-500 resize-none"
            />
          </div>

          <MagneticButton className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accentAlt text-black font-bold text-lg rounded-lg hover:shadow-glow-lg">
            Send Message
          </MagneticButton>

          <p className="text-center text-gray-500 text-sm">
            We'll get back to you within 24 hours.
          </p>
        </form>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
