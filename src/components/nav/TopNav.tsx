'use client';

import { useState } from 'react';
import { useTerminal } from '@/context/TerminalContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, User, FolderOpen, Wrench, Briefcase, Download, Mail, BookOpen, Gamepad2, Box } from 'lucide-react';

const NAV_ITEMS: { id: string | null; label: string; icon: React.ElementType }[] = [
  { id: null, label: 'Home', icon: Terminal },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'resume', label: 'Resume', icon: Download },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'play', label: 'Play', icon: Gamepad2 },
  { id: 'explore', label: 'Explore 3D', icon: Box },
];

export default function TopNav() {
  const { currentSection, setCurrentSection } = useTerminal();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string | null) => {
    setCurrentSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-30 glass border-b border-terminal-green/20 w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-14">
            {/* Logo / title */}
            <button
              onClick={() => handleNav(null)}
              className="flex items-center gap-2 text-terminal-green font-semibold text-sm hover:text-neon-green transition-colors shrink-0"
            >
              <Terminal size={18} />
              <span className="hidden sm:inline">kanna@portfolio</span>
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto max-w-[calc(100vw-12rem)]">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <button
                    key={item.id ?? 'home'}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/40'
                        : 'text-terminal-gray hover:text-terminal-green hover:bg-terminal-green/10 border border-transparent'
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 rounded text-terminal-green hover:bg-terminal-green/10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-terminal-green/20 bg-terminal-bg/95"
            >
              <div className="container mx-auto px-4 py-3 max-w-6xl grid grid-cols-2 sm:grid-cols-3 gap-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentSection === item.id;
                  return (
                    <button
                      key={item.id ?? 'home'}
                      onClick={() => handleNav(item.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-terminal-green/20 text-terminal-green'
                          : 'text-terminal-gray hover:text-terminal-green hover:bg-terminal-green/10'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
