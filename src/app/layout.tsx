import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kanna | Developer Portfolio — AI, Security & Full-Stack',
  description:
    'Interactive developer portfolio. Postgraduate CS at SSN College of Engineering. AI, Cybersecurity, ML, Full-Stack.',
  openGraph: {
    title: 'Kanna | Developer Portfolio',
    description: 'AI, Cybersecurity, ML & Full-Stack — SSN College of Engineering',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-terminal-bg text-terminal-green min-h-screen">
        {children}
      </body>
    </html>
  );
}
