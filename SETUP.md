# Setup Guide

## Prerequisites

- **Node.js**: v18.17 or higher
- **npm** or **yarn**: Latest version
- **Git**: For version control
- **A modern code editor**: VSCode recommended

## Installation Steps

### 1. Clone or Navigate to Project
```bash
cd cropvault-v2
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Three.js + React Three Fiber
- GSAP (GreenSock Animation Platform)
- Framer Motion
- Tailwind CSS
- Lenis (smooth scroll)
- TypeScript

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at **http://localhost:3000**

## Folder Structure Explanation

```
cropvault-v2/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with global setup
│   │   └── page.tsx         # Main homepage
│   ├── components/
│   │   ├── ClientLayout.tsx # Client-side wrapper
│   │   ├── sections/        # Page sections
│   │   ├── three/           # 3D components
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript types
│   └── styles/              # Global CSS
├── public/                  # Static files
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind CSS config
├── next.config.js           # Next.js config
└── tsconfig.json            # TypeScript config
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npm run type-check
```

## Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update environment variables as needed:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run type-check

# Run linter
npm run lint
```

### 3D Scene Not Rendering
- Check browser console for WebGL errors
- Ensure your GPU supports WebGL
- Try using a different browser
- Disable hardware acceleration if issues persist

## Next Steps

1. **Customize Colors**: Edit `tailwind.config.ts` and `src/styles/globals.css`
2. **Modify Content**: Update section components in `src/components/sections/`
3. **Add Pages**: Create new files in `src/app/`
4. **Adjust Animations**: Fine-tune in component files or `src/utils/animations.ts`
5. **Deploy**: Follow deployment instructions in README.md

## Performance Tips

1. **Monitor FPS**: Use Chrome DevTools Performance tab
2. **Lighthouse**: Run Lighthouse audit for performance metrics
3. **Bundle Analysis**: Use `next/bundle-analyzer` to optimize
4. **Image Optimization**: Use Next.js Image component
5. **Lazy Loading**: Components use code splitting automatically

## Need Help?

- Check the README.md for comprehensive documentation
- Review CUSTOMIZATION.md for customization guide
- Examine component files for implementation examples
- Check console for error messages

---

Happy building! 🚀
