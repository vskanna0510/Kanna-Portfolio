'use client';

import { SKILLS } from '@/data/skills';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import SkillRadarChart from '@/components/extra/SkillRadarChart';

const categories = ['language', 'framework', 'ai-ml', 'security', 'devops', 'tool'] as const;

export default function SkillsSection() {
  const byCategory = useMemo(() => {
    const map: Record<string, typeof SKILLS> = {};
    categories.forEach((c) => (map[c] = []));
    SKILLS.forEach((s) => {
      if (map[s.category]) map[s.category].push(s);
    });
    return map;
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        skills
      </h2>
      <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
        {categories.map((cat) => {
          const list = byCategory[cat];
          if (!list?.length) return null;
          return (
            <div key={cat}>
              <h3 className="text-terminal-gray text-xs uppercase tracking-wider mb-1.5">
                {cat.replace('-', ' ')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s, i) => (
                  <motion.span
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="text-xs px-2 py-1 rounded bg-terminal-green/10 text-terminal-green border border-terminal-green/20"
                  >
                    {s.name}
                    <span className="text-terminal-gray ml-1">({s.level}/5)</span>
                  </motion.span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-terminal-gray text-xs pt-2">
        Type &quot;explore&quot; for 3D skills galaxy.
      </p>
      <div className="pt-3 border-t border-terminal-green/20">
        <h3 className="text-terminal-gray text-xs uppercase tracking-wider mb-2">Radar</h3>
        <SkillRadarChart />
      </div>
    </div>
  );
}
