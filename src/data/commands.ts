export const COMMANDS = [
  'help',
  'about',
  'projects',
  'skills',
  'experience',
  'resume',
  'contact',
  'blog',
  'play',
  'explore',
  'clear',
  'matrix',
  'hack',
  'sudo',
] as const;

export type CommandType = (typeof COMMANDS)[number];

export const COMMAND_HELP: Record<string, string> = {
  help: 'Show available commands',
  about: 'About me & background',
  projects: 'View my projects',
  skills: 'Skills & technologies',
  experience: 'Work experience',
  resume: 'Download resume',
  contact: 'Get in touch',
  blog: 'Blog & insights',
  play: 'Mini games',
  explore: 'Enter 3D experience',
  clear: 'Clear terminal',
  matrix: 'Easter egg',
  hack: 'Cybersecurity challenge',
  sudo: 'Easter egg',
};
