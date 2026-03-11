export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'getting-started-ml',
    title: 'Getting Started with Machine Learning',
    excerpt: 'A practical guide to your first ML project.',
    date: '2024-01-15',
    tags: ['ML', 'Python', 'Tutorial'],
  },
  {
    slug: 'secure-coding-tips',
    title: 'Secure Coding Practices for Web Apps',
    excerpt: 'Common vulnerabilities and how to avoid them.',
    date: '2024-02-01',
    tags: ['Security', 'Web', 'Best Practices'],
  },
];
