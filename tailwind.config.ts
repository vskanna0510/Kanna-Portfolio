import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0d1117',
          green: '#3fb950',
          cyan: '#58a6ff',
          purple: '#bc8cff',
          orange: '#d29922',
          red: '#f85149',
          gray: '#8b949e',
        },
        neon: {
          green: '#00ff88',
          cyan: '#00d4ff',
          purple: '#bf00ff',
          pink: '#ff006e',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(63, 185, 80, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(63, 185, 80, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
