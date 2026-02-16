'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          ANIMORA
        </Link>
        <div className="flex gap-8 text-sm text-zinc-500">
          <Link href="#" className="transition-colors hover:text-white">Twitter</Link>
          <Link href="#" className="transition-colors hover:text-white">LinkedIn</Link>
          <Link href="#" className="transition-colors hover:text-white">Instagram</Link>
          <Link href="#" className="transition-colors hover:text-white">Dribbble</Link>
        </div>
      </div>
      <motion.div
        className="mx-auto mt-12 max-w-7xl text-center text-sm text-zinc-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Animora. All rights reserved.
      </motion.div>
    </footer>
  );
}
