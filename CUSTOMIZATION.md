# Customization Guide

## Color Scheme

### Update Primary Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-dark-color',      // Main background
  secondary: '#your-secondary',     // Secondary background
  accent: '#your-accent-color',     // Primary accent (cyan)
  accentAlt: '#your-alt-accent',    // Secondary accent (magenta)
}
```

Edit `src/styles/globals.css`:
```css
:root {
  --foreground: 0 0% 100%;
  --background: 12 10% 15%;
}
```

### Update Gradient Colors

In section components, modify gradient classes:
```jsx
// Before
<div className="bg-gradient-to-r from-accent to-accentAlt">

// After
<div className="bg-gradient-to-r from-your-color to-another-color">
```

## Typography

### Change Font Family

1. Update imports in `src/styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');
```

2. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Your Font', ...defaultTheme.fontFamily.sans],
  display: ['Your Font', ...defaultTheme.fontFamily.sans],
}
```

### Adjust Font Sizes

In section components, modify heading classes:
```jsx
<h1 className="text-4xl md:text-7xl">  // Change to your preference
```

## Animation Customization

### GSAP Animations

Modify timing in component files:
```typescript
gsap.to(element, {
  duration: 0.8,        // Change duration
  delay: 0.2,           // Adjust delay
  ease: 'power2.out',   // Change easing function
  opacity: 1,
  y: 0,
});
```

### Available Easing Functions

- `power1.in` / `power1.out` / `power1.inOut`
- `power2.in` / `power2.out` / `power2.inOut`
- `power3.in` / `power3.out` / `power3.inOut`
- `quad.in` / `quad.out` / `quad.inOut`
- `cubic.in` / `cubic.out` / `cubic.inOut`
- `sine.in` / `sine.out` / `sine.inOut`
- `elastic.out(1, 0.5)`
- `back.out(1.7)`
- `bounce.out`

### Scroll Animation Speed

Edit `src/hooks/useLenis.ts`:
```typescript
const lenis = new Lenis({
  duration: 1.2,  // Change scroll duration (higher = slower)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

### Animation Constants

Edit `src/utils/constants.ts`:
```typescript
export const animationDurations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
};
```

## Section Customization

### Modify Hero Section

File: `src/components/sections/HeroSection.tsx`

```typescript
// Change headline
<h1>Your Custom Headline</h1>

// Change subtitle
<p>Your custom description</p>

// Modify button text
<MagneticButton>Your Text</MagneticButton>
```

### Update Features Section

File: `src/components/sections/FeaturesSection.tsx`

```typescript
const features = [
  {
    icon: '⚡',
    title: 'Your Feature',
    description: 'Your description',
  },
  // Add more features
];
```

### Customize Pricing Section

File: `src/components/sections/PricingSection.tsx`

```typescript
const plans = [
  {
    name: 'Your Plan Name',
    price: '99',
    description: 'Plan description',
    features: ['Feature 1', 'Feature 2'],
    highlighted: true,
  },
];
```

### Edit FAQ Items

File: `src/components/sections/FAQSection.tsx`

```typescript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer here...',
  },
];
```

## Navigation Customization

File: `src/components/ui/Navigation.tsx`

```typescript
const navItems = [
  { label: 'Your Link', href: '#section' },
  { label: 'Another Link', href: '#section' },
];
```

## 3D Scene Customization

### Hero 3D Scene

File: `src/components/three/HeroScene.tsx`

```typescript
// Change particle count
<Particles count={150} />

// Modify lighting
<pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />

// Adjust camera
<Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
```

### Showcase 3D Scene

File: `src/components/three/ShowcaseScene.tsx`

```typescript
// Change cube count
<FloatingCubes count={30} />

// Modify geometry
<boxGeometry args={[0.3, 0.3, 0.3]} />

// Update colors
color={`hsl(${Math.random() * 360}, 100%, 50%)`}
```

## Component Styling

### Update Button Styles

File: `src/components/ui/MagneticButton.tsx`

```typescript
className={`relative overflow-hidden rounded-lg font-semibold transition-all duration-300 ${className}`}
```

### Modify Card Styling

File: `src/components/ui/GlassCard.tsx`

```typescript
className={`glass rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 group ${className}`}
```

## Layout Modifications

### Change Section Spacing

Edit component files, modify padding:
```jsx
<section className="py-32">  // Adjust padding (py = padding-y)
```

### Update Container Width

Edit `src/styles/globals.css`:
```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  /* Change max-w-7xl to max-w-6xl or max-w-8xl */
}
```

## Add New Sections

1. Create a new component:
```bash
touch src/components/sections/YourSection.tsx
```

2. Import and add to `src/app/page.tsx`:
```typescript
import { YourSection } from '@/components/sections/YourSection';

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <YourSection />
    </main>
  );
}
```

## Add New Pages

1. Create new directory in `src/app/`:
```bash
mkdir src/app/your-page
touch src/app/your-page/page.tsx
```

2. Create page content:
```typescript
export default function YourPage() {
  return (
    <main>
      {/* Your content */}
    </main>
  );
}
```

## Performance Customization

### Reduce Animation Complexity

Lower animation count or simplify keyframes in:
- `src/components/three/HeroScene.tsx`
- `src/components/three/ShowcaseScene.tsx`

### Optimize 3D Scenes

```typescript
// Reduce geometry complexity
<icosahedronGeometry args={[1, 2]} />  // Lower second value = fewer polygons

// Disable wireframe
<meshPhongMaterial wireframe={false} />

// Reduce particle count
<Particles count={50} />
```

## Dark Mode (Currently Enabled)

To add light mode toggle:

1. Create a theme provider
2. Add toggle button in Navigation
3. Update Tailwind config with `darkMode: 'class'`

See Next.js documentation for dark mode implementation patterns.

## Responsive Adjustments

Update Tailwind breakpoints in `tailwind.config.ts`:
```typescript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
}
```

## Browser-Specific Styles

Use `-webkit` prefixes in `src/styles/globals.css`:
```css
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Tips & Best Practices

1. **Test Performance**: Use Chrome DevTools to monitor FPS
2. **Mobile Testing**: Test on actual devices
3. **A/B Testing**: Try different animations and timings
4. **User Testing**: Get feedback on animations
5. **Accessibility**: Maintain keyboard navigation
6. **SEO**: Keep semantic HTML structure

---

Happy customizing! 🎨
