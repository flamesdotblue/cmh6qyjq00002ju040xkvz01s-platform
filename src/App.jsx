import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialContact from './components/SocialContact';

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, Math.max(0, (scrollTop / height) * 100)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto h-1 w-full max-w-[1200px] rounded-b-full bg-white/10 backdrop-blur-sm">
        <div
          className="h-1 rounded-b-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const toggled = useRef(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-[#030816] bg-[radial-gradient(ellipse_at_top,rgba(0,90,120,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,180,210,0.15),transparent_60%)] text-slate-100 antialiased">
      <ScrollProgressBar />
      <header className="pointer-events-none fixed top-3 left-0 right-0 z-50 flex justify-center">
        <div className="pointer-events-auto flex w-[95%] max-w-[1200px] items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400/70 via-teal-400/70 to-blue-600/70 shadow-[0_0_18px_4px_rgba(56,189,248,0.35)]" />
            <span className="select-none bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text font-semibold text-transparent">Alinur Arafat (Cheif)</span>
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-200 shadow-inner shadow-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            <AnimatePresence initial={false} mode="wait">
              {dark ? (
                <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <Moon size={18} />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Sun size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <SocialContact />
      </main>
    </div>
  );
}
