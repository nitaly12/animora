'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from '@/components/animations';
import { projectsData } from '@/data';
import type { Project } from '@/types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Our Work
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Selected
            <br />
            <span className="text-violet-400">projects</span>
          </h2>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-800/50"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.3)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-zinc-800 to-zinc-900 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-2 border-violet-500/50 bg-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 backdrop-blur-sm"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-violet-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-6 top-6 text-zinc-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video mb-6 rounded-xl bg-zinc-800" />
              <span className="text-sm font-medium uppercase tracking-wider text-violet-400">
                {selectedProject.category}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white">{selectedProject.title}</h2>
              <p className="mb-6 text-zinc-400">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-500/20 px-4 py-1.5 text-sm text-violet-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
