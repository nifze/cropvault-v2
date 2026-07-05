'use client';

import React from 'react';
import { useLenis } from '@/hooks/useLenis';
import { Navigation } from '@/components/ui/Navigation';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { BackToTopButton } from '@/components/ui/BackToTopButton';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLenis();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollIndicator />
      <Navigation />
      {children}
      <BackToTopButton />
    </>
  );
};
