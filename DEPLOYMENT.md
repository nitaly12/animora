# Animora - Deployment Guide for Vercel

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account

## Quick Deploy

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login and deploy:
   ```bash
   vercel login
   vercel
   ```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click "Add New Project" and import your repository.

4. Vercel will auto-detect Next.js. Use default build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

5. Click "Deploy".

## Build Settings

The project uses Next.js App Router and requires no special environment variables for basic deployment.

### Optional Environment Variables

- `NEXT_PUBLIC_GA_ID` - Google Analytics (if added)
- `NEXT_PUBLIC_SITE_URL` - Canonical URL for metadata

## Performance Optimization

1. **Image Optimization:** Add real project images to `/public` and use `next/image` for optimal loading.

2. **Three.js:** The 3D scene is loaded with `dynamic()` and `ssr: false` for optimal bundle splitting.

3. **Lenis:** Smooth scroll is initialized client-side only.

## Troubleshooting

### Build fails with "window is not defined"
- Ensure Three.js and Lenis are loaded with `dynamic()` or inside `useEffect`.

### Framer Motion hydration mismatch
- Use `suppressHydrationWarning` on html if needed for client-only features.

### Slow initial load
- Consider lazy-loading the Three.js scene below the fold.
- Reduce particle count in `ParticleField.tsx` for mobile.
