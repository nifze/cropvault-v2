# CropVault - Premium Interactive Experience

An award-winning, premium web experience built with modern technologies. This is not a standard landing page—it's an immersive, cinematic digital experience with world-class animations and design.

## 🎯 Features

- **Ultra-Modern Design**: Dark luxury aesthetic with glassmorphism and glowing accents
- **60 FPS Animations**: GSAP timelines, scroll triggers, and smooth transitions
- **3D Interactive Scenes**: Three.js with React Three Fiber for immersive visuals
- **Premium Motion Design**: Framer Motion for component interactions
- **Smooth Scrolling**: Lenis integration for buttery-smooth page scroll
- **Responsive Design**: Perfect on all devices with adaptive layouts
- **Custom Interactions**: Magnetic buttons, custom cursor, scroll indicators
- **Performance Optimized**: Lazy loading, optimized rendering, and efficient code splitting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd cropvault-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: GSAP + Framer Motion
- **Smooth Scrolling**: Lenis
- **Language**: TypeScript
- **Typography**: Space Grotesk

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main homepage
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── three/             # 3D components
│   │   ├── HeroScene.tsx
│   │   └── ShowcaseScene.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── MagneticButton.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Navigation.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── BackToTopButton.tsx
│   │   └── LoadingScreen.tsx
│   └── ClientLayout.tsx    # Client-side layout wrapper
├── hooks/                 # Custom React hooks
│   ├── useScrollAnimation.ts
│   ├── useLoadingScreen.ts
│   └── useLenis.ts
├── utils/
│   └── animations.ts      # Animation utilities
├── styles/
│   └── globals.css        # Global styles
└── public/                # Static assets

next.config.js             # Next.js configuration
tailwind.config.ts         # Tailwind CSS configuration
postcss.config.js          # PostCSS configuration
tsconfig.json             # TypeScript configuration
```

## ✨ Key Components

### UI Components
- **MagneticButton**: Interactive button that follows cursor
- **GlassCard**: Glassmorphic card with hover effects
- **Navigation**: Sticky navigation with mobile menu
- **CustomCursor**: Premium custom cursor effect
- **ScrollIndicator**: Visual scroll progress indicator
- **BackToTopButton**: Smooth back-to-top functionality

### Sections
- **Hero**: Immersive entry with 3D scene and animated text
- **Features**: Grid of feature cards with staggered animations
- **Interactive Showcase**: 3D animation showcase
- **Gallery**: Image gallery with scale animations
- **Testimonials**: Rotating testimonial cards
- **Pricing**: Pricing plans with highlight effect
- **FAQ**: Accordion with smooth transitions
- **Contact**: Form with input focus effects

### 3D Scenes
- **HeroScene**: Particles and rotating geometry
- **ShowcaseScene**: Floating cubes with dynamic lighting

## 🎨 Design System

### Colors
- **Primary**: `#0a0e27` (Dark background)
- **Secondary**: `#1a1f3a` (Secondary background)
- **Accent**: `#00d9ff` (Cyan glow)
- **AccentAlt**: `#ff006e` (Magenta accent)

### Typography
- **Font**: Space Grotesk
- **Sizes**: Responsive with Tailwind utilities
- **Letter Spacing**: Tighter for headers (-0.02em)

### Effects
- **Glassmorphism**: Blur + transparency
- **Glow**: Box shadows with accent colors
- **Gradients**: Multi-stop gradients throughout
- **Animations**: 60 FPS with GSAP and Framer Motion

## 🎬 Animation Patterns

### GSAP Animations
- Text reveal with character stagger
- Scroll-triggered animations
- Parallax effects
- Magnetic button interactions
- Smooth page transitions

### Scroll Animations
- Elements fade in on scroll
- Parallax movement
- Scroll progress indicators
- Smooth scroll behavior (Lenis)

### Microinteractions
- Button hover states
- Input focus effects
- Card hover animations
- Cursor following elements

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Adaptive navigation with mobile menu
- Touch-friendly interactive elements
- Optimized 3D rendering on mobile

## ⚡ Performance

- **60 FPS Target**: Optimized animations and rendering
- **Lazy Loading**: Components load on demand
- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Next.js Image component (ready to use)
- **Bundle Size**: Optimized dependencies and tree-shaking

## 🔧 Customization

### Change Colors
Edit `tailwind.config.ts` and `src/styles/globals.css`:
```typescript
colors: {
  primary: '#your-color',
  accent: '#your-color',
  accentAlt: '#your-color',
}
```

### Adjust Animations
- GSAP animations: Check `src/utils/animations.ts` and individual components
- Scroll speed: Modify `useLenis.ts` duration property
- Animation timing: Update `duration` and `ease` properties in components

### Customize Sections
Each section is a standalone component in `src/components/sections/`. Modify content, styling, or animations independently.

## 📦 Building for Production

```bash
npm run build
npm start
```

The production build is optimized and ready for deployment on Vercel, Netlify, or any Node.js hosting.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
Create a `Dockerfile` in the root:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

MIT License - feel free to use this as a template for your projects.

## 🤝 Contributing

This is a premium template. Feel free to customize and extend for your needs.

## 💡 Tips for Best Results

1. **Keep Animations Smooth**: Monitor FPS in DevTools and adjust animation complexity
2. **Optimize Images**: Use WebP format and appropriate sizes
3. **Test on Devices**: Test animations on actual mobile devices
4. **Lazy Load 3D**: 3D scenes are resource-intensive—consider lazy loading
5. **Monitor Bundle Size**: Keep track of dependencies and their sizes

## 🎯 What Makes This Premium

- **Polish**: Every interaction is intentional and smooth
- **Performance**: 60 FPS animations throughout
- **Design**: Cohesive, modern aesthetic
- **Code Quality**: Clean, modular, production-ready
- **Attention to Detail**: Hover states, focus indicators, micro-interactions
- **Responsiveness**: Works beautifully on all devices
- **Accessibility**: Semantic HTML and keyboard navigation

---

Built with ❤️ and countless hours of attention to detail. This is how modern web experiences should be crafted.
