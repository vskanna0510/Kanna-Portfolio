'use client';

import { PROJECTS } from '@/data/projects';
import { motion } from 'framer-motion';

const researchProjects = PROJECTS.filter((p) => p.category === 'research' || p.category === 'ai-ml');

export default function ResearchSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        research
      </h2>
      <p className="text-terminal-green/90 text-sm">
        Focus: ML, NLP, security, and applied AI.
      </p>
      <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
        {researchProjects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-3 rounded border border-terminal-green/20 bg-terminal-bg/50"
          >
            <h3 className="font-medium text-terminal-green text-sm">{p.title}</h3>
            <p className="text-xs text-terminal-gray mt-1">{p.solution}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {p.techStack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-terminal-cyan/10 text-terminal-cyan"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
