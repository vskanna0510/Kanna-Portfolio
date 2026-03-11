export interface Skill {
  name: string;
  level: number; // 1-5 for radar
  category: 'language' | 'framework' | 'ai-ml' | 'security' | 'devops' | 'tool';
}

export const SKILLS: Skill[] = [
  { name: 'Python', level: 5, category: 'language' },
  { name: 'JavaScript/TypeScript', level: 5, category: 'language' },
  { name: 'React / Next.js', level: 5, category: 'framework' },
  { name: 'PyTorch / TensorFlow', level: 4, category: 'ai-ml' },
  { name: 'Node.js', level: 4, category: 'framework' },
  { name: 'Cybersecurity', level: 4, category: 'security' },
  { name: 'Docker', level: 3, category: 'devops' },
  { name: 'SQL / NoSQL', level: 4, category: 'tool' },
  { name: 'Linux / Bash', level: 4, category: 'tool' },
  { name: 'Git', level: 5, category: 'tool' },
];
