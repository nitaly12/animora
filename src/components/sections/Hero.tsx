'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TextReveal } from '@/components/animations';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-violet-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creative Agency
        </motion.p>

        <h1 className="mb-8 max-w-5xl mx-auto text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          <TextReveal text="We craft digital experiences that inspire" delay={0.4} />
        </h1>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg text-zinc-400 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Blending creativity with technology to build brands and products
          that leave a lasting impression.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link href="#projects">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 text-base font-medium text-white"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
            </motion.span>
          </Link>
          <Link href="#contact">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-8 py-4 text-base font-medium text-white"
              whileHover={{ borderColor: 'rgb(139, 92, 246)', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-violet-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
