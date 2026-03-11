export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech?: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Web Development Intern',
    company: 'Oasis infobyte',
    period: '2023 – 2023',
    description: ['Developed a responsive and user-friendly website for a client using React and Node.js.'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
];
