'use client';

import { PROFILE } from '@/data/profile';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-terminal-cyan font-semibold text-lg border-b border-terminal-green/30 pb-2">
        contact
      </h2>
      <p className="text-terminal-green/90 text-sm">
        Open to research collaborations, internships, and full-time roles.
      </p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2 text-terminal-green/90">
          <Mail size={14} className="text-terminal-cyan shrink-0" />
          <a href={`mailto:${PROFILE.email}`} className="hover:text-terminal-cyan hover:underline">
            {PROFILE.email}
          </a>
        </li>
        <li className="flex items-center gap-2 text-terminal-green/90">
          <MapPin size={14} className="text-terminal-cyan shrink-0" />
          {PROFILE.location}
        </li>
        <li className="flex items-center gap-2 text-terminal-green/90">
          <Github size={14} className="text-terminal-cyan shrink-0" />
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-terminal-cyan hover:underline">
            GitHub
          </a>
        </li>
        <li className="flex items-center gap-2 text-terminal-green/90">
          <Linkedin size={14} className="text-terminal-cyan shrink-0" />
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-terminal-cyan hover:underline">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
