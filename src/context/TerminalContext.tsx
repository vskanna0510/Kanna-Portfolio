'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { COMMANDS, COMMAND_HELP } from '@/data/commands';

export type TerminalLine = {
  type: 'command' | 'output' | 'error' | 'system';
  content: string | React.ReactNode;
  command?: string;
};

interface TerminalContextValue {
  lines: TerminalLine[];
  addLine: (line: TerminalLine) => void;
  executeCommand: (input: string) => void;
  clearTerminal: () => void;
  getSuggestions: (partial: string) => string[];
  currentSection: string | null;
  setCurrentSection: (section: string | null) => void;
}

const TerminalContext = createContext<TerminalContextValue | null>(null);

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<TerminalLine[]>(() => [
    {
      type: 'system',
      content: 'Welcome to the developer terminal. Type "help" for commands.',
    },
  ]);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const addLine = useCallback((line: TerminalLine) => {
    setLines((prev) => [...prev, line]);
  }, []);

  const getSuggestions = useCallback(
    (partial: string) => {
      const p = partial.toLowerCase().trim();
      if (!p) return [...COMMANDS];
      return COMMANDS.filter((c) => c.startsWith(p));
    },
    []
  );

  const clearTerminal = useCallback(() => {
    setLines([
      {
        type: 'system',
        content: 'Terminal cleared. Type "help" for commands.',
      },
    ]);
    setCurrentSection(null);
  }, []);

  const executeCommand = useCallback(
    (input: string) => {
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      addLine({ type: 'command', content: cmd, command: cmd });

      if (cmd === 'clear') {
        clearTerminal();
        return;
      }

      if (cmd === 'help') {
        const helpText = Object.entries(COMMAND_HELP)
          .map(([c, d]) => `  ${c.padEnd(14)} ${d}`)
          .join('\n');
        addLine({
          type: 'output',
          content: `Available commands:\n${helpText}`,
        });
        return;
      }

      if (COMMANDS.includes(cmd as any)) {
        setCurrentSection(cmd);
        const messages: Record<string, string> = {
          about: 'Loading About...',
          projects: 'Loading Projects...',
          skills: 'Loading Skills...',
          experience: 'Loading Experience...',
          resume: 'Preparing resume download...',
          contact: 'Opening Contact...',
          play: 'Loading Games...',
          explore: 'Entering 3D Experience...',
          matrix: 'Access granted. Initiating...',
          hack: 'Launching cybersecurity challenge...',
          sudo: 'Nice try. ;)',
        };
        const msg = messages[cmd] ?? `Opening ${cmd}...`;
        addLine({ type: 'output', content: msg });
        return;
      }

      addLine({
        type: 'error',
        content: `Command not found: ${cmd}. Type "help" for available commands.`,
      });
    },
    [addLine, clearTerminal]
  );

  const value = useMemo(
    () => ({
      lines,
      addLine,
      executeCommand,
      clearTerminal,
      getSuggestions,
      currentSection,
      setCurrentSection,
    }),
    [
      lines,
      addLine,
      executeCommand,
      clearTerminal,
      getSuggestions,
      currentSection,
    ]
  );

  return (
    <TerminalContext.Provider value={value}>{children}</TerminalContext.Provider>
  );
}

export function useTerminal() {
  const ctx = useContext(TerminalContext);
  if (!ctx) throw new Error('useTerminal must be used within TerminalProvider');
  return ctx;
}
