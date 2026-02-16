'use client';

import { motion } from 'framer-motion';
import { FadeUp, StaggerChildren } from '@/components/animations';
import { servicesData } from '@/data';

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            What We Do
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting experiences that
            <br />
            <span className="text-violet-400">create impact</span>
          </h2>
        </FadeUp>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, i) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 hover:bg-zinc-900/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <motion.span
                  className="mb-6 block text-3xl text-violet-500"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.span>
                <h3 className="mb-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
