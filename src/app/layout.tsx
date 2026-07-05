import type { Metadata } from 'next';
import { ClientLayout } from '@/components/ClientLayout';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'CropVault - Premium Interactive Experience',
  description:
    'Experience the future of interactive web design. Premium, cinematic website with smooth animations, 3D scenes, and luxury design. Built for those who demand excellence.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%2300d9ff" width="100" height="100"/><text x="50" y="50" font-size="60" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">CV</text></svg>',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'CropVault - Premium Interactive Experience',
    description: 'Experience cutting-edge web design with GSAP animations, 3D scenes, and luxury aesthetics.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CropVault - Premium Interactive Experience',
    description: 'Experience cutting-edge web design with GSAP animations, 3D scenes, and luxury aesthetics.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
