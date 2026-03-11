'use client';

import { useTerminal } from '@/context/TerminalContext';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import BlogSection from './BlogSection';
import PlaySection from './PlaySection';
import ResumeSection from './ResumeSection';

const SECTION_MAP: Record<string, React.ComponentType> = {
  about: AboutSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  contact: ContactSection,
  blog: BlogSection,
  play: PlaySection,
  resume: ResumeSection,
};

export default function SectionRouter() {
  const { currentSection } = useTerminal();

  const Component = currentSection ? SECTION_MAP[currentSection] : null;

  return (
    <AnimatePresence mode="wait">
      {Component ? (
        <motion.div
          key={currentSection!}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass rounded-lg p-4 md:p-5 h-fit max-h-[70vh] overflow-y-auto"
        >
          <Component />
        </motion.div>
      ) : (
        <motion.div
          key="placeholder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="glass rounded-lg p-6 flex flex-col items-center justify-center min-h-[280px] text-center"
        >
          <p className="text-terminal-gray text-sm">
            Type a command to explore.
          </p>
          <p className="text-terminal-green/60 text-xs mt-2">
            try: about, projects, skills
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
