'use client';

import { useEffect, useState } from 'react';
import { PROJECTS } from '@/data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'ai-ml': 'text-neon-cyan',
  cybersecurity: 'text-neon-pink',
  fullstack: 'text-neon-green',
  research: 'text-terminal-purple',
  other: 'text-terminal-orange',
};

type GitHubRepo = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
};

export default function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/github/projects');
        if (!res.ok) return;
        const json = await res.json();
        if (!cancelled) {
          setRepos(json.repos ?? []);
        }
      } catch {
        // silent fallback to static projects
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        projects
      </h2>
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="glass rounded p-3 border border-terminal-green/10 hover:border-terminal-green/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-terminal-green text-sm">{p.title}</h3>
              <span className={`text-xs shrink-0 ${categoryColors[p.category] ?? 'text-terminal-gray'}`}>
                {p.category}
              </span>
            </div>
            <p className="text-xs text-terminal-gray mt-1">
              <span className="text-terminal-cyan">Problem:</span> {p.problem}
            </p>
            <p className="text-xs text-terminal-green/80 mt-1">
              <span className="text-terminal-cyan">Solution:</span> {p.solution}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {p.techStack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-terminal-green/10 text-terminal-green/90"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-terminal-cyan hover:underline"
                >
                  <Github size={12} /> GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-terminal-cyan hover:underline"
                >
                  <ExternalLink size={12} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}

        {repos.length > 0 && (
          <div className="pt-3 border-t border-terminal-green/20 space-y-2">
            <h3 className="text-terminal-cyan text-xs font-semibold uppercase tracking-wide">
              GitHub projects ({repos.length})
            </h3>
            {repos.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.04 }}
                className="rounded border border-terminal-green/15 bg-terminal-bg/70 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-terminal-green text-sm hover:text-terminal-cyan"
                  >
                    <Github size={12} />
                    {r.name}
                  </a>
                  <span className="text-[10px] text-terminal-gray shrink-0">
                    ★ {r.stars}
                  </span>
                </div>
                {r.description && (
                  <p className="text-terminal-gray text-xs mt-1 line-clamp-2">
                    {r.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-terminal-gray">
                    {r.language ?? 'Multiple'}
                  </span>
                  <span className="text-[10px] text-terminal-gray/70">
                    updated {new Date(r.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

