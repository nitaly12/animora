'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { testimonialsData } from '@/data';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            What clients
            <br />
            <span className="text-violet-400">say about us</span>
          </h2>
        </FadeUp>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-zinc-800/50 bg-zinc-900/50 p-12 backdrop-blur-sm md:p-16"
            >
              <blockquote className="text-2xl font-light leading-relaxed text-white md:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <motion.div
                className="mt-12 flex items-center gap-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-violet-700" />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-center gap-4">
            {testimonialsData.map((_, i) => (
              <motion.button
                key={i}
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === activeIndex ? 'bg-violet-500' : 'bg-zinc-600'
                }`}
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
