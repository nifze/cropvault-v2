'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TextAnimateProps {
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
}

export const TextAnimate: React.FC<TextAnimateProps> = ({
  text,
  className = '',
  duration = 0.6,
  stagger = 0.02,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = text.split('');
    ref.current.innerHTML = chars
      .map((char, i) => `<span class="inline-block" style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const spans = ref.current.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      duration,
      stagger,
      ease: 'power2.out',
    });
  }, [text, duration, stagger]);

  return <span ref={ref} className={className} />;
};
