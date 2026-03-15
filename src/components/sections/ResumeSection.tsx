'use client';

import { PROFILE } from '@/data/profile';
import { motion } from 'framer-motion';
import { Download, ExternalLink, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const RESUME_PDF = '/Kanna_FS_CV.pdf';

export default function ResumeSection() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        resume
      </h2>
      <p className="text-terminal-green/90 text-sm">
        Download my resume for roles in AI, security, and full-stack development.
      </p>
      <div className="flex flex-wrap gap-3">
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
        <motion.a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-terminal-green/10 border border-terminal-green/40 text-terminal-green hover:bg-terminal-green/20 transition-colors text-sm font-medium"
        >
          <ExternalLink size={16} /> Open in new tab
        </motion.a>
      </div>

      <button
        type="button"
        onClick={() => setShowHelp((h) => !h)}
        className="flex items-center gap-2 text-terminal-cyan/90 text-xs hover:text-terminal-cyan"
      >
        <HelpCircle size={14} />
        Resume shows white/blank pages? Fix it here
      </button>
      {showHelp && (
        <div className="rounded border border-terminal-green/30 bg-terminal-bg/80 p-3 text-xs text-terminal-green/90 space-y-2">
          <p className="font-medium text-terminal-cyan">The PDF file has missing or unembedded fonts. Fix it by creating a new PDF:</p>
          <ol className="list-decimal list-inside space-y-1.5 ml-1">
            <li><strong>From Word:</strong> Open your resume → File → Save As → PDF → Options → check &quot;Embed fonts in the file&quot; → Save.</li>
            <li><strong>From Google Docs / Canva:</strong> File → Download → PDF document.</li>
            <li><strong>Or use Print to PDF:</strong> Open the resume, press Ctrl+P → choose &quot;Microsoft Print to PDF&quot; or &quot;Save as PDF&quot; → Save.</li>
            <li>Replace the file in your project: put the new PDF in <code className="text-terminal-cyan/80 bg-terminal-bg px-1 rounded">public/Kanna_FS_CV.pdf</code> (overwrite the old one).</li>
          </ol>
          <p>You can also try a free online tool: <a href="https://www.ilovepdf.com/compress_pdf" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan underline">iLovePDF Compress</a> or <a href="https://smallpdf.com/compress-pdf" target="_blank" rel="noopener noreferrer" className="text-terminal-cyan underline">Smallpdf</a> — upload your PDF and download the result; often it re-embeds fonts. Then replace <code className="text-terminal-cyan/80">public/Kanna_FS_CV.pdf</code> with that file.</p>
        </div>
      )}
    </div>
  );
}
