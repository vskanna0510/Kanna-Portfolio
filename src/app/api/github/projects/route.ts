import { NextResponse } from 'next/server';

const USERNAME = 'vskanna0510';

export const revalidate = 3600; // 1 hour

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=50`, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      // Let Next.js cache this for revalidate seconds
      next: { revalidate },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch repos' }, { status: 500 });
    }

    const repos: any[] = await res.json();

    const filtered = repos
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((r) => ({
        id: r.id,
        name: r.name,
        fullName: r.full_name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
        updatedAt: r.updated_at,
      }));

    return NextResponse.json({ repos: filtered });
  } catch (e) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

