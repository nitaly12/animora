'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
      <div className="h-24 w-0.5 overflow-hidden rounded-full bg-zinc-800/50">
        <motion.div
          className="w-full bg-violet-500"
          style={{
            height: `${progress}%`,
            originY: 0,
          }}
          initial={false}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
}
