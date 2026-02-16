'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { FadeUp, AnimatedCounter } from '@/components/animations';
import { timelineData } from '@/data';

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeUp className="space-y-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              A creative collective pushing boundaries
            </h2>
            <p className="text-lg text-zinc-400">
              We&apos;re a team of designers, developers, and strategists united by a
              passion for crafting exceptional digital experiences. From brand
              identity to interactive installations, we bring ideas to life.
            </p>

            <div ref={timelineRef} className="space-y-8 pt-8">
              {timelineData.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-violet-500 font-mono text-sm">{item.year}</span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          <div className="relative">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-800/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-zinc-800/80 backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-700/50 bg-zinc-900/90 p-6 backdrop-blur-xl">
              {[
                { value: 150, suffix: '+', label: 'Projects' },
                { value: 12, suffix: 'yr', label: 'Experience' },
                { value: 98, suffix: '%', label: 'Client Retention' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-violet-400 md:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
