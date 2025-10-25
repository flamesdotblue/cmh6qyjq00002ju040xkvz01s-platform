import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return count;
}

export default function Hero() {
  const years = useCounter(5);
  const projects = useCounter(120);
  const clients = useCounter(80);

  return (
    <section className="relative flex min-h-[92vh] w-full items-stretch justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030816]/30 via-[#051327]/70 to-[#030816]" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-[95%] max-w-[1200px] flex-col items-center justify-center py-16">
        <motion.div
          initial={{ y: 24, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
        >
          <div className="mx-auto grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200 shadow-inner shadow-cyan-300/20">
                <Rocket size={14} />
                <span>UI/UX & Graphic Designer</span>
              </div>
              <h1 className="mb-3 bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text font-extrabold text-4xl leading-tight text-transparent md:text-5xl">
                Hola, I’m Alinur Arafat (Cheif)
              </h1>
              <div className="relative mb-5 inline-block">
                <AnimatedHighlight text={`Over ${years}+ years of experience`} />
              </div>
              <p className="mb-8 max-w-xl text-slate-200/90">
                I design thoughtful, conversion-focused digital products and captivating brand visuals. Blending clarity with delight through motion, depth and modern glassmorphism.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-medium text-cyan-100 shadow-[inset_0_0_20px_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  Contact Me
                  <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.35)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  See My Work
                </a>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <StatCard label="Years Experience" value={`${years}+`} />
                <StatCard label="Completed Projects" value={`${projects}+`} />
                <StatCard label="Happy Clients" value={`${clients}+`} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-slate-200/90 backdrop-blur-xl"
              >
                <p>
                  Specialties: Product design, design systems, brand identity, social media creatives, and motion micro-interactions.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedHighlight({ text }) {
  return (
    <span className="relative inline-block">
      <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/20 to-teal-400/20 blur-xl" />
      <motion.span
        initial={{ filter: 'blur(8px)', opacity: 0 }}
        animate={{ filter: 'blur(0px)', opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative rounded-xl border border-cyan-300/30 bg-white/10 px-3 py-1 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)] backdrop-blur-xl"
      >
        {text}
      </motion.span>
    </span>
  );
}

function StatCard({ label, value }) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0, filter: 'blur(6px)' }}
      whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl"
    >
      <div className="text-2xl font-bold text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{value}</div>
      <div className="mt-1 text-xs text-slate-300/90">{label}</div>
    </motion.div>
  );
}
