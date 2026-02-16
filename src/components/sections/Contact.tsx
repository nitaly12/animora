'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '@/components/animations';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
  };

  const labelActive = (field: keyof typeof values) => {
    const v = values[field];
    return focused === field || (v && v.length > 0);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Get in Touch
            </p>
            <h2 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s create
              <br />
              <span className="text-violet-400">something amazing</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Ready to bring your vision to life? We&apos;d love to hear about your
              project and explore how we can help.
            </p>
            <div className="mt-12 space-y-4">
              <a
                href="mailto:hello@animora.studio"
                className="block text-violet-400 hover:text-violet-300"
              >
                hello@animora.studio
              </a>
              <a
                href="tel:+1234567890"
                className="block text-zinc-400 hover:text-white"
              >
                +1 (234) 567-890
              </a>
            </div>
          </FadeUp>

          <FadeUp>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="peer w-full border-0 border-b-2 border-zinc-700 bg-transparent py-4 text-white outline-none transition-colors focus:border-violet-500"
                  placeholder=" "
                />
                <motion.label
                  htmlFor="name"
                  className="absolute left-0 top-4 origin-left text-zinc-500"
                  animate={{
                    y: labelActive('name') ? -32 : 0,
                    fontSize: labelActive('name') ? 12 : 16,
                    color: labelActive('name') ? 'rgb(139, 92, 246)' : 'rgb(113, 113, 122)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Your Name
                </motion.label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="peer w-full border-0 border-b-2 border-zinc-700 bg-transparent py-4 text-white outline-none transition-colors focus:border-violet-500"
                  placeholder=" "
                />
                <motion.label
                  htmlFor="email"
                  className="absolute left-0 top-4 origin-left text-zinc-500"
                  animate={{
                    y: labelActive('email') ? -32 : 0,
                    fontSize: labelActive('email') ? 12 : 16,
                    color: labelActive('email') ? 'rgb(139, 92, 246)' : 'rgb(113, 113, 122)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Email Address
                </motion.label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="peer w-full resize-none border-0 border-b-2 border-zinc-700 bg-transparent py-4 text-white outline-none transition-colors focus:border-violet-500"
                  placeholder=" "
                />
                <motion.label
                  htmlFor="message"
                  className="absolute left-0 top-4 origin-left text-zinc-500"
                  animate={{
                    y: labelActive('message') ? -32 : 0,
                    fontSize: labelActive('message') ? 12 : 16,
                    color: labelActive('message') ? 'rgb(139, 92, 246)' : 'rgb(113, 113, 122)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Your Message
                </motion.label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative overflow-hidden rounded-full bg-violet-600 px-10 py-4 font-medium text-white transition-colors hover:bg-violet-500 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.span
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.span
                      className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </motion.span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
