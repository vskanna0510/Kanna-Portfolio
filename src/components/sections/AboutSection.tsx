'use client';

import { PROFILE, ABOUT } from '@/data/profile';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        about
      </h2>
      <p className="text-terminal-green/90 text-sm leading-relaxed">
        {ABOUT.intro}
      </p>
      <ul className="space-y-1.5 text-sm text-terminal-green/80">
        {ABOUT.highlights.map((h, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2"
          >
            <span className="text-terminal-green">▸</span> {h}
          </motion.li>
        ))}
      </ul>
      <div className="pt-2">
        <h3 className="text-terminal-cyan text-xs font-semibold uppercase tracking-wider mb-2">
          Education
        </h3>
        <ul className="space-y-2 text-sm">
          {ABOUT.education.map((e, i) => (
            <li key={i} className="text-terminal-green/90">
              <span className="font-medium">{e.degree}</span>
              <br />
              <span className="text-terminal-gray">{e.institution}</span>
              <span className="text-terminal-gray"> · {e.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
