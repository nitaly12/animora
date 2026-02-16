'use client';

import { useEffect, useRef } from 'react';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import('lenis').default | null>(null);

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        lenisRef.current = null;
      };
    };

    const cleanup = initLenis();
    return () => {
      if (typeof cleanup === 'function') (cleanup as () => void)();
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
