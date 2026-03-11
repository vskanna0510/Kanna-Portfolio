'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { useTerminal } from '@/context/TerminalContext';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalLine } from '@/context/TerminalContext';
import clsx from 'clsx';

function LineContent({ line }: { line: TerminalLine }) {
  const content = line.content;
  if (typeof content === 'string' && content.includes('\n')) {
    return (
      <pre className="whitespace-pre-wrap font-mono text-sm text-terminal-green/90">
        {content}
      </pre>
    );
  }
  if (typeof content === 'string') {
    return (
      <span
        className={clsx(
          'font-mono text-sm',
          line.type === 'error' && 'text-terminal-red',
          line.type === 'system' && 'text-terminal-cyan',
          line.type === 'output' && 'text-terminal-green/90',
          line.type === 'command' && 'text-terminal-green'
        )}
      >
        {content}
      </span>
    );
  }
  return <>{content}</>;
}

export default function Terminal() {
  const { lines, executeCommand, getSuggestions, currentSection } = useTerminal();
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const history = useRef<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [lines]);

  const updateSuggestions = useCallback(
    (value: string) => {
      setSuggestions(getSuggestions(value).slice(0, 5));
    },
    [getSuggestions]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;
      history.current = [...history.current, trimmed];
      setHistoryIndex(-1);
      executeCommand(trimmed);
      setInput('');
      setSuggestions([]);
    },
    [input, executeCommand]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (history.current.length === 0) return;
        const next = historyIndex === -1 ? history.current.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(next);
        setInput(history.current[next]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex === -1) return;
        if (historyIndex >= history.current.length - 1) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          const next = historyIndex + 1;
          setHistoryIndex(next);
          setInput(history.current[next]);
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        if (suggestions.length > 0) {
          setInput(suggestions[0]);
          setSuggestions([]);
        }
      } else {
        setHistoryIndex(-1);
      }
    },
    [historyIndex, suggestions]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-lg overflow-hidden box-glow flex flex-col h-full min-h-[400px]"
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-terminal-green/20 bg-terminal-bg/50">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-terminal-red/80" />
          <span className="w-3 h-3 rounded-full bg-terminal-orange/80" />
          <span className="w-3 h-3 rounded-full bg-terminal-green/80" />
        </div>
        <span className="text-terminal-gray text-xs ml-2">terminal — kanna@portfolio</span>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 bg-grid min-h-[280px]"
      >
        <AnimatePresence initial={false}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap gap-x-2 gap-y-1"
            >
              {line.type === 'command' && (
                <span className="text-terminal-cyan shrink-0">{'$'}</span>
              )}
              <LineContent line={line} />
            </motion.div>
          ))}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <span className="text-terminal-cyan shrink-0">{'$'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              updateSuggestions(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => updateSuggestions(input)}
            placeholder="Type a command..."
            className="flex-1 bg-transparent border-none outline-none text-terminal-green font-mono text-sm placeholder:text-terminal-gray/60"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="terminal-cursor inline-block w-2 h-4 bg-terminal-green ml-0.5" />
        </form>

        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pl-6">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setInput(s);
                  setSuggestions([]);
                }}
                className="text-xs px-2 py-1 rounded bg-terminal-green/10 text-terminal-green border border-terminal-green/30 hover:bg-terminal-green/20"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
