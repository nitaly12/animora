'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 8, 0)', 'rgba(5, 5, 8, 0.95)']
  );

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 backdrop-blur-xl transition-[backdrop-filter]"
      style={{ backgroundColor: headerBg }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          ANIMORA
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-violet-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden rounded-full bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-violet-500 md:block"
        >
          Get in Touch
        </Link>

        <motion.button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="h-0.5 w-6 bg-white"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-white"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-white"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
          />
        </motion.button>
      </nav>

      <motion.div
        className="fixed inset-0 z-40 bg-[#050508] md:hidden"
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <ul className="flex flex-col items-center justify-center gap-8 pt-24">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
