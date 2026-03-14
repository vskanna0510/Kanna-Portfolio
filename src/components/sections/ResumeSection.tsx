'use client';

import { PROFILE } from '@/data/profile';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ResumeSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        resume
      </h2>
      <p className="text-terminal-green/90 text-sm">
        Download my resume for roles in AI, security, and full-stack development.
      </p>
      <motion.a
        href={PROFILE.resumeUrl}
        download="Kanna_FS_CV.pdf"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-terminal-green/20 border border-terminal-green text-terminal-green hover:bg-terminal-green/30 transition-colors text-sm font-medium"
      >
        <Download size={16} /> Download PDF
      </motion.a>
    </div>
  );
}
