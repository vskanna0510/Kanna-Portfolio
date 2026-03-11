'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const SECRET_PASSWORD = 'ssn2024';
const HINT = 'Try the year SSN was founded + 2024';

export default function HackGame() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const attempt = input.trim().toLowerCase();
    if (attempt === SECRET_PASSWORD) {
      setMessage('Access granted! You unlocked the hidden achievement.');
      setUnlocked(true);
    } else {
      setMessage('Access denied. Hint: ' + HINT);
    }
    setInput('');
  };

  return (
    <div className="space-y-3">
      <p className="text-terminal-gray text-xs">
        Find the secret password to unlock the terminal. (Easter egg: try &quot;ssn2024&quot;)
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password..."
          className="flex-1 bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green text-sm outline-none focus:border-terminal-green"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded bg-terminal-green/20 text-terminal-green border border-terminal-green/40 hover:bg-terminal-green/30 text-sm font-medium"
        >
          Hack
        </button>
      </form>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm ${unlocked ? 'text-neon-green' : 'text-terminal-orange'}`}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
