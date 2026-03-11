'use client';

import { motion } from 'framer-motion';
import HackGame from '@/components/games/HackGame';
import DebugGame from '@/components/games/DebugGame';
import { useState } from 'react';

type GameTab = 'hack' | 'debug';

export default function PlaySection() {
  const [tab, setTab] = useState<GameTab>('hack');

  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        play
      </h2>
      <p className="text-terminal-green/90 text-sm">
        Short mini-games. Optional fun.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setTab('hack')}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            tab === 'hack'
              ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/40'
              : 'bg-terminal-bg/50 text-terminal-gray border border-terminal-green/10 hover:border-terminal-green/30'
          }`}
        >
          Hack the terminal
        </button>
        <button
          onClick={() => setTab('debug')}
          className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            tab === 'debug'
              ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/40'
              : 'bg-terminal-bg/50 text-terminal-gray border border-terminal-green/10 hover:border-terminal-green/30'
          }`}
        >
          Code debug
        </button>
      </div>
      <motion.div
        key={tab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[200px]"
      >
        {tab === 'hack' && <HackGame />}
        {tab === 'debug' && <DebugGame />}
      </motion.div>
    </div>
  );
}
