'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  data?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, data }) => {
  return (
    <div
      data-scroll={data}
      className={`glass rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accentAlt/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
