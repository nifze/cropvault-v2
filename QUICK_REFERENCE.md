# Quick Reference Guide

## File Locations

| What | Where |
|------|-------|
| Main page | `src/app/page.tsx` |
| Global layout | `src/app/layout.tsx` |
| Global styles | `src/styles/globals.css` |
| Components | `src/components/` |
| Hooks | `src/hooks/` |
| Utilities | `src/utils/` |
| Types | `src/types/index.ts` |

## Common Tasks

### Add New Section
1. Create component in `src/components/sections/NewSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to main export

### Change Colors
- Edit `tailwind.config.ts` colors
- Update `src/styles/globals.css` CSS variables

### Adjust Animations
- GSAP: Components in `src/components/`
- Scroll: `src/hooks/useScrollAnimation.ts`
- Timing: `src/utils/constants.ts`

### Add New Page
1. Create folder in `src/app/new-page/`
2. Add `page.tsx` inside
3. Add navigation link

### Modify Navigation
- File: `src/components/ui/Navigation.tsx`
- Edit `navItems` array

## Component Quick Links

| Component | File | Purpose |
|-----------|------|---------|
| Hero | `sections/HeroSection.tsx` | Landing section |
| Features | `sections/FeaturesSection.tsx` | Feature showcase |
| Gallery | `sections/GallerySection.tsx` | Image gallery |
| Stats | `sections/StatsSection.tsx` | Statistics |
| Process | `sections/ProcessSection.tsx` | Steps/process |
| Testimonials | `sections/TestimonialsSection.tsx` | Reviews |
| Pricing | `sections/PricingSection.tsx` | Plans |
| FAQ | `sections/FAQSection.tsx` | Questions |
| Contact | `sections/ContactSection.tsx` | Form |
| Footer | `sections/Footer.tsx` | Footer |

## Animation Easing Presets

```typescript
// Common easings in components
'power2.out'      // Smooth out
'power2.inOut'    // Smooth in and out
'elastic.out'     // Bouncy
'back.out'        // Snappy
'sine.out'        // Gentle
```

## Tailwind Utilities

```html
<!-- Spacing -->
<div class="p-8 mb-6 mt-4">

<!-- Colors -->
<div class="text-accent bg-secondary">

<!-- Sizing -->
<div class="w-full h-screen max-w-7xl">

<!-- Responsive -->
<div class="text-lg md:text-2xl lg:text-4xl">

<!-- Animations -->
<div class="animate-pulse hover:shadow-glow">
```

## Terminal Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Check code quality
npm run type-check       # Check TypeScript

# Cleaning
rm -rf .next             # Clear build cache
rm -rf node_modules      # Remove dependencies
npm cache clean --force  # Clear npm cache
```

## Keyboard Shortcuts (VSCode)

```
Ctrl+P                   # Quick file open
Ctrl+Shift+F            # Find in files
Alt+Up/Down             # Move line
Ctrl+D                  # Select word
Ctrl+/                  # Toggle comment
```

## Environment Variables

```env
# Production URL
NEXT_PUBLIC_SITE_URL=https://domain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (if needed)
API_SECRET=your_secret_key
```

## Project Structure at a Glance

```
src/
├── app/                 # Next.js app directory
├── components/
│   ├── sections/        # Full-page sections
│   ├── three/           # 3D React Three Fiber components
│   ├── ui/              # Reusable UI components
│   └── ClientLayout.tsx # Layout wrapper
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
├── types/               # TypeScript interfaces
└── styles/              # CSS files
```

## Performance Tips

- Check FPS in Chrome DevTools
- Use Lighthouse for metrics
- Lazy load 3D components
- Optimize images
- Monitor bundle size

## Debugging

```javascript
// Log animations
console.log(gsap.getProperty(element, 'y'));

// Check element
console.log(document.querySelector('.your-class'));

// Monitor performance
performance.mark('start');
// ... code ...
performance.mark('end');
```

## Useful Extensions (VSCode)

- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Thunder Client (API testing)
- GitLens

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [GSAP Docs](https://greensock.com/docs/)
- [Three.js Docs](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Need more help? See README.md, SETUP.md, CUSTOMIZATION.md**
