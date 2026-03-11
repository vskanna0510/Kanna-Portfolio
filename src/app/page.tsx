'use client';

import dynamic from 'next/dynamic';
import Terminal from '@/components/terminal/Terminal';
import { TerminalProvider, useTerminal } from '@/context/TerminalContext';
import SectionRouter from '@/components/sections/SectionRouter';
import ChatBot from '@/components/extra/ChatBot';
import NeuralBackground from '@/components/background/NeuralBackground';
import TopNav from '@/components/nav/TopNav';

const Scene3D = dynamic(() => import('@/components/three/Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-terminal-bg/80">
      <span className="text-terminal-green animate-pulse">Loading 3D...</span>
    </div>
  ),
});

function MainContent() {
  const { currentSection, setCurrentSection } = useTerminal();
  const show3D = currentSection === 'explore';

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <TopNav />
      {show3D && (
        <div className="fixed inset-0 z-10">
          <Scene3D onClose={() => setCurrentSection(null)} />
        </div>
      )}

      <div className="relative z-20 container mx-auto px-4 py-6 max-w-6xl">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-terminal-green text-glow">
            kanna@portfolio:~$
          </h1>
          <p className="text-terminal-gray mt-1">
            Postgraduate CS · SSN College of Engineering · AI, Security & Full-Stack
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <Terminal />
          </div>
          <div className="lg:col-span-3">
            <SectionRouter />
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}

export default function Home() {
  return (
    <TerminalProvider>
      <MainContent />
    </TerminalProvider>
  );
}
