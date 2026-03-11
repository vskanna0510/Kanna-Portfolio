'use client';

import { PUBLICATIONS } from '@/data/publications';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function PublicationsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        publications
      </h2>
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {PUBLICATIONS.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-3 rounded border border-terminal-green/20"
          >
            <h3 className="font-medium text-terminal-green text-sm">{pub.title}</h3>
            <p className="text-terminal-gray text-xs mt-1">{pub.venue} · {pub.year}</p>
            <p className="text-terminal-cyan/80 text-xs mt-0.5">{pub.authors}</p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-terminal-cyan hover:underline mt-2"
              >
                <ExternalLink size={12} /> Link
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
