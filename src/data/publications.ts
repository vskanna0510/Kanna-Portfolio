export interface Publication {
  title: string;
  venue: string;
  year: string;
  link?: string;
  authors: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Sample Paper: Efficient ML for Edge Devices',
    venue: 'IEEE Conference / Journal',
    year: '2024',
    link: '#',
    authors: 'You, A., Co-author, B.',
  },
  {
    title: 'Another Paper: Security in IoT',
    venue: 'Springer / ACM',
    year: '2023',
    authors: 'You, A., et al.',
  },
];
