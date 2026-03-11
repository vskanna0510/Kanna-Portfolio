'use client';

import { EXPERIENCE } from '@/data/experience';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        experience
      </h2>
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border-l-2 border-terminal-green/40 pl-3"
          >
            <h3 className="font-medium text-terminal-green text-sm">{exp.role}</h3>
            <p className="text-terminal-cyan text-xs">{exp.company}</p>
            <p className="text-terminal-gray text-xs">{exp.period}</p>
            <ul className="mt-2 space-y-0.5 text-xs text-terminal-green/80">
              {exp.description.map((d, j) => (
                <li key={j} className="flex gap-1.5">
                  <span className="text-terminal-green">•</span> {d}
                </li>
              ))}
            </ul>
            {exp.tech && (
              <div className="flex flex-wrap gap-1 mt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-terminal-green/10 text-terminal-gray"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
