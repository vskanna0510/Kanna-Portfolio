'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const BOT_RESPONSES: Record<string, string> = {
  default: "Hi! I'm the portfolio assistant. Ask about projects, skills, experience, or type 'help'.",
  help: "You can ask: 'Tell me about projects', 'What are your skills?', 'Experience?', 'Contact info?', 'Research?'",
  projects: "I work on AI/ML, cybersecurity tools, and full-stack apps. Type 'projects' in the terminal to see the full list!",
  skills: "Tech stack includes Python, React, Next.js, PyTorch, and security tools. Type 'skills' for the full list.",
  experience: "I've done research internships, software dev internships, and TA roles. Type 'experience' in the terminal for details.",
  contact: "Check the Contact section (type 'contact') for email and LinkedIn.",
  research: "Research focus: ML, NLP, and security. Type 'research' or 'publications' for more.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  if (lower.includes('project')) return BOT_RESPONSES.projects;
  if (lower.includes('skill')) return BOT_RESPONSES.skills;
  if (lower.includes('experience') || lower.includes('work')) return BOT_RESPONSES.experience;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('linkedin')) return BOT_RESPONSES.contact;
  if (lower.includes('research') || lower.includes('paper')) return BOT_RESPONSES.research;
  if (lower.includes('help')) return BOT_RESPONSES.help;
  return BOT_RESPONSES.default;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setMessages((prev) => [...prev, { role: 'bot', text: getResponse(text) }]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass flex items-center justify-center text-terminal-green border border-terminal-green/30 hover:border-terminal-green box-glow"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] glass rounded-lg border border-terminal-green/30 overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-terminal-green/20">
              <span className="text-terminal-cyan text-sm font-medium">Portfolio Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded text-terminal-gray hover:text-terminal-green"
              >
                <X size={18} />
              </button>
            </div>
            <div className="h-48 overflow-y-auto p-3 space-y-2">
              {messages.length === 0 && (
                <p className="text-terminal-gray text-xs">Ask about projects, skills, or experience.</p>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`text-xs ${m.role === 'user' ? 'text-right text-terminal-cyan' : 'text-terminal-green/90'}`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex gap-2 p-2 border-t border-terminal-green/20"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-terminal-bg border border-terminal-green/30 rounded px-3 py-2 text-terminal-green text-sm outline-none focus:border-terminal-green"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded bg-terminal-green/20 text-terminal-green border border-terminal-green/40 hover:bg-terminal-green/30 text-sm font-medium"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
