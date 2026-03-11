export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: 'ai-ml' | 'cybersecurity' | 'fullstack' | 'research' | 'other';
}

export const PROJECTS: Project[] = [
  {
    id: 'moodapp',
    title: 'ML-Powered Fraud Detection',
    problem: 'Modern work and study environments often have inconsistent background noise (office chatter, traffic, sudden silence, or random disturbances). These unpredictable sound patterns can break concentration, increase cognitive load, and reduce productivity. Existing solutions like white noise apps or Lo-Fi playlists are static, meaning they do not adapt to the real-time acoustic environment around the user.',
    solution: 'MoodMap solves this by using the device microphone to analyze the surrounding sound environment and automatically generating a dynamic Lo-Fi soundscape that complements the existing audio profile. By recording a short ambient clip and performing frequency analysis, the system detects the room’s sound characteristics and assigns a mood profile (e.g., Warm & Deep, Balanced, Bright & Airy). It then procedurally generates adaptive background music that fills acoustic gaps, creating a more stable and focus-friendly auditory environment.',
    techStack: ['React Native', 'Android AudioRecord API', 'Python', 'Librosa', 'TensorFlow', 'FFT', 'Tone.js', 'Superpowered SDK', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Docker', 'AWS'],
    github: 'https://github.com/vskanna0510/MoodApp',
    category: 'MobileApp',
  },
  {
    id: 'depression-detection',
    title: 'Mulitmodal Depression Detection',
    problem: 'Early detection of depression and suicide risk is challenging because traditional assessment methods rely mainly on manual evaluation or single-type data (such as only text or questionnaires), which often fails to capture complex emotional and behavioral signals from multiple sources like speech, images, and written expressions.',
    solution: 'To address this issue, a multimodal AI-based system was developed that analyzes text, image, and audio inputs together using deep learning models. By combining information from multiple modalities and applying attention mechanisms, the system can better identify patterns related to depression levels and suicide risk, providing a more accurate and automated mental health screening tool.',
    techStack: ['Python', 'PyTorch', 'Transformers', 'Librosa', 'OpenCV', 'Gradio', 'Scikit-learn', 'Docker', 'Hugging Face Spaces'],
    github: 'https://github.com/vskanna0510/Multimodal-Mental-Health-Risk-Detection',
    category: 'ai-nlp',
  },
  {
    id: 'kanna-portfolio',
    title: 'My personal Portfolio',
    problem: 'Recruiters often spend only a few seconds reviewing portfolios, making it difficult for students to effectively demonstrate their skills, creativity, and project experience.',
    solution: 'Develop an interactive developer portfolio that combines a terminal-style interface, 3D visualizations, and gamified exploration to create an engaging user experience. The platform allows visitors and recruiters to explore projects, skills, and research through commands, interactive elements, and immersive design, making the portfolio both memorable and informative.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Three.js', 'React Three Fiber', 'Framer Motion', 'TypeScript', 'Node.js', 'Express.js', 'WebGL', 'GitHub API', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://huggingface.co',
    category: 'ai-ml',
  },
  {
    id: 'dev-portal',
    title: 'Developer Portal',
    problem: 'Internal docs and API playground for engineering teams.',
    solution: 'Next.js app with interactive API docs, auth, and live demos.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'tRPC'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'fullstack',
  },
  {
    id: 'research-nlp',
    title: 'NLP Research Prototype',
    problem: 'Domain-specific entity recognition and relation extraction.',
    solution: 'Transformer-based NER with custom tokenization and evaluation pipeline.',
    techStack: ['PyTorch', 'Hugging Face', 'spaCy', 'Python'],
    category: 'research',
  },
];
