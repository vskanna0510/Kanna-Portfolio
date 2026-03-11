'use client';

import { useEffect, useMemo, useState } from 'react';

type DayCount = {
  date: string;
  count: number;
};

const WEEKS = 52;
const DAYS = 7;

function buildGrid(days: DayCount[]): number[][] {
  const grid: number[][] = Array.from({ length: WEEKS }, () =>
    Array.from({ length: DAYS }, () => 0),
  );

  if (!days.length) return grid;

  const byDate = new Map<string, number>();
  days.forEach((d) => byDate.set(d.date, d.count));

  const last = new Date(days[days.length - 1].date);
  last.setHours(0, 0, 0, 0);

  for (let w = WEEKS - 1; w >= 0; w--) {
    for (let d = DAYS - 1; d >= 0; d--) {
      const idxFromEnd = (WEEKS - 1 - w) * DAYS + (DAYS - 1 - d);
      const cur = new Date(last);
      cur.setDate(last.getDate() - idxFromEnd);
      const key = cur.toISOString().slice(0, 10);
      const count = byDate.get(key) ?? 0;
      grid[w][d] = Math.min(4, count);
    }
  }

  return grid;
}

export default function GitHubHeatmap() {
  const [days, setDays] = useState<DayCount[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/github/contributions');
        if (!res.ok) throw new Error('Failed to load contributions');
        const json = await res.json();
        if (!cancelled) {
          setDays(json.days ?? []);
        }
      } catch (e) {
        if (!cancelled) {
          setError('Using sample data (GitHub rate limit or offline).');
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const grid = useMemo(() => buildGrid(days), [days]);

  return (
    <div className="space-y-2">
      <h3 className="text-terminal-cyan text-xs font-semibold">GitHub activity</h3>
      {error && <p className="text-terminal-gray text-[10px]">{error}</p>}
      <div className="flex gap-0.5 overflow-x-auto pb-2">
        {grid.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5 shrink-0">
            {week.map((level, di) => (
              <div
                key={di}
                className="w-2 h-2 rounded-sm"
                style={{
                  backgroundColor:
                    level === 0
                      ? 'rgba(63, 185, 80, 0.08)'
                      : `rgba(63, 185, 80, ${0.18 + level * 0.18})`,
                }}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

