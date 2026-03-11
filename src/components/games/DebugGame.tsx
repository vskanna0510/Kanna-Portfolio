'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const BUGGY_CODE = `function add(a, b) {
  return a - b;  // bug here
}`;

const FIXED_CODE = `function add(a, b) {
  return a + b;
}`;

const OPTIONS = ['a - b', 'a + b', 'a * b', 'a / b'];

export default function DebugGame() {
  const [selected, setSelected] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setSolved(opt === 'a + b');
  };

  return (
    <div className="space-y-3">
      <p className="text-terminal-gray text-xs">
        The function should add two numbers. Which return statement is correct?
      </p>
      <pre className="bg-terminal-bg rounded p-3 text-terminal-green/90 text-xs overflow-x-auto border border-terminal-green/20">
        {BUGGY_CODE}
      </pre>
      <div className="grid grid-cols-2 gap-2">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`px-3 py-2 rounded text-xs font-mono border transition-colors ${
              selected === opt
                ? opt === 'a + b'
                  ? 'bg-neon-green/20 border-neon-green text-neon-green'
                  : 'bg-terminal-red/20 border-terminal-red text-terminal-red'
                : 'bg-terminal-bg/50 border-terminal-green/20 text-terminal-gray hover:border-terminal-green/40'
            }`}
          >
            return {opt};
          </button>
        ))}
      </div>
      {solved && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-neon-green text-sm"
        >
          Correct! Bug fixed.
        </motion.p>
      )}
    </div>
  );
}
