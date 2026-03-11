'use client';

import { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '@/data/skills';

const categoryOrder = ['language', 'framework', 'ai-ml', 'security', 'devops', 'tool'];

export default function SkillRadarChart() {
  const data = useMemo(() => {
    const byCat: Record<string, { name: string; value: number; fullMark: number }[]> = {};
    categoryOrder.forEach((c) => (byCat[c] = []));
    SKILLS.forEach((s) => {
      const name = s.name.replace(/\s*\/\s*.*$/, '');
      if (byCat[s.category]) {
        byCat[s.category].push({ name, value: s.level, fullMark: 5 });
      }
    });
    const flat: { subject: string; value: number; fullMark: number }[] = [];
    categoryOrder.forEach((cat) => {
      byCat[cat].forEach((s) => flat.push({ subject: s.name.slice(0, 8), value: s.value, fullMark: 5 }));
    });
    return flat.slice(0, 8);
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(63, 185, 80, 0.3)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#8b949e', fontSize: 10 }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fill: '#8b949e', fontSize: 10 }} />
          <Radar
            name="Level"
            dataKey="value"
            stroke="#3fb950"
            fill="#3fb950"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
