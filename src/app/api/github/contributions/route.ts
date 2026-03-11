import { NextResponse } from 'next/server';

const USERNAME = 'vskanna0510';

export const revalidate = 3600; // 1 hour

type DayCount = {
  date: string;
  count: number;
};

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      next: { revalidate },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }

    const events: any[] = await res.json();

    const counts: Record<string, number> = {};
    for (const ev of events) {
      const date = (ev.created_at ?? '').slice(0, 10);
      if (!date) continue;
      counts[date] = (counts[date] ?? 0) + 1;
    }

    const days: DayCount[] = Object.entries(counts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => (a.date < b.date ? -1 : 1))
      .slice(-365);

    return NextResponse.json({ days });
  } catch (e) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

