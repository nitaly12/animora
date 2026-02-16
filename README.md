# Animora — Premium Creative Agency Website

A fully animated, modern, premium-quality creative agency website built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and Three.js.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, GSAP (ScrollTrigger)
- **Smooth Scroll:** Lenis
- **3D/Background:** Three.js, @react-three/fiber, @react-three/drei

## Folder Structure

```
animora/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers, fonts
│   │   ├── page.tsx            # Home page (client)
│   │   └── globals.css         # Global styles, Tailwind
│   ├── components/
│   │   ├── animations/         # Reusable animation components
│   │   │   ├── FadeUp.tsx
│   │   │   ├── StaggerChildren.tsx
│   │   │   ├── TextReveal.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky nav with scroll-aware bg
│   │   │   ├── PageTransition.tsx
│   │   │   └── index.ts
│   │   ├── providers/
│   │   │   ├── LenisProvider.tsx   # Smooth scroll
│   │   │   ├── GSAPProvider.tsx    # GSAP ScrollTrigger refresh
│   │   │   └── index.ts
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── three/              # Three.js components
│   │   │   ├── Scene.tsx       # Main Canvas
│   │   │   ├── ParticleField.tsx   # Cursor-following particles
│   │   │   ├── GradientBackground.tsx  # Animated shader bg
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       └── ScrollProgress.tsx
│   ├── data/
│   │   └── index.ts            # Content data
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   ├── useScrollProgress.ts
│   │   ├── useMousePosition.ts
│   │   └── index.ts
│   ├── lib/
│   │   └── gsap.ts             # GSAP + ScrollTrigger setup
│   └── types/
│       └── index.ts
├── public/
├── DEPLOYMENT.md
└── package.json
```

## Features

- **Hero:** Staggered text reveal, Three.js particle background, CTA buttons, scroll indicator
- **Smooth Scrolling:** Lenis with GSAP ScrollTrigger
- **About:** Image reveal, timeline, animated counters
- **Services:** Hover card animations, scale + shadow effects
- **Projects:** Animated grid, modal with AnimatePresence
- **Testimonials:** Animated slider with fade transitions
- **Contact:** Floating labels, submit loading animation
- **Custom Cursor:** Desktop-only, hidden on mobile
- **Scroll Progress:** Right-side progress bar
- **Page Transitions:** Fade + slide via Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel deployment.

## Performance Tips

1. **Three.js:** Loaded with `dynamic(..., { ssr: false })` to avoid SSR issues.
2. **Particles:** Reduce `PARTICLE_COUNT` in `ParticleField.tsx` on mobile.
3. **GSAP:** Use `will-change` sparingly; prefer `transform` and `opacity` for GPU acceleration.
4. **Images:** Add real project images to `/public` and use `next/image` for optimization.
5. **Custom Cursor:** Disabled on mobile (via CSS `@media (min-width: 768px)`).
