export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech?: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Research Intern',
    company: 'Lab / Company Name',
    period: '2024 – Present',
    description: ['ML model development', 'Paper implementation', 'Dataset curation'],
    tech: ['PyTorch', 'Python', 'Git'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Tech Company',
    period: 'Summer 2023',
    description: ['Full-stack features', 'API design', 'Code reviews'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Teaching Assistant',
    company: 'SSN College of Engineering',
    period: '2023 – 2024',
    description: ['Data Structures', 'Algorithms', 'Lab sessions'],
    tech: ['C++', 'Python'],
  },
];
