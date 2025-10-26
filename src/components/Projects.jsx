import { useMemo, useState } from 'react';
import { ExternalLink, Star, X } from 'lucide-react';

const rawProjects = [
  {
    id: 'ui-kit',
    title: 'SaaS Dashboard UI Kit',
    category: 'UI',
    description: 'Design system and dashboard templates with dark glassmorphism and accessible components.',
    tools: ['Figma', 'Auto Layout', 'Variants'],
    image: 'from-cyan-500 via-teal-400 to-blue-500',
    link: '#',
  },
  {
    id: 'brand',
    title: 'Fintech Brand Identity',
    category: 'Graphic',
    description: 'Logo, color system, and social media templates for a modern fintech startup.',
    tools: ['Illustrator', 'Photoshop'],
    image: 'from-cyan-400 via-blue-500 to-indigo-500',
    link: '#',
  },
  {
    id: 'social',
    title: 'Campaign Social Creatives',
    category: 'Social',
    description: 'Animated posts and stories with bold typography and neon accents.',
    tools: ['After Effects', 'Photoshop'],
    image: 'from-teal-400 via-cyan-500 to-blue-600',
    link: '#',
  },
  {
    id: 'mobile',
    title: 'Wellness Mobile App',
    category: 'UI',
    description: 'Flow-focused mobile experience with playful micro-interactions.',
    tools: ['Figma', 'Prototyping'],
    image: 'from-sky-500 via-cyan-500 to-teal-400',
    link: '#',
  },
];

const tabs = ['All', 'Graphic', 'UI', 'Social'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const projects = useMemo(() => {
    if (active === 'All') return rawProjects;
    return rawProjects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="relative mx-auto mt-16 w-[95%] max-w-[1200px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
          Featured Projects
        </h2>
        <div className="relative flex gap-2 rounded-2xl border border-white/15 bg-white/10 p-1 backdrop-blur-xl">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative rounded-xl px-3 py-1.5 text-sm transition ${active === t ? 'text-cyan-100' : 'text-slate-200/80 hover:text-slate-100'}`}
            >
              {t}
              {active === t && (
                <span className="pointer-events-none absolute inset-0 -z-0 rounded-xl bg-cyan-400/20" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className="group relative translate-y-2 overflow-hidden rounded-3xl border border-white/15 bg-white/10 text-left opacity-0 backdrop-blur-xl transition-all duration-500 ease-out [animation-delay:var(--d)] [animation-duration:700ms] [animation-fill-mode:forwards] [animation-name:fadeUp]"
            style={{ ['--d']: `${i * 60}ms` }}
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <div className={`h-full w-full bg-gradient-to-br ${p.image}`} />
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030816] via-transparent to-transparent opacity-70" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2">
                <Star size={14} className="text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]" />
                <span className="text-xs text-cyan-100">{p.category}</span>
              </div>
              <h3 className="mt-1 text-lg font-semibold text-slate-50">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-200/90">{p.description}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-cyan-300/0 transition group-hover:ring-4 group-hover:ring-cyan-300/40" />
          </button>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#051327]/95 p-0 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className={`h-48 w-full bg-gradient-to-br ${selected.image}`} />
            <div className="p-6">
              <div className="mb-1 text-xs text-cyan-200">{selected.category}</div>
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="mt-2 text-slate-200/90">{selected.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {selected.tools.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-100 backdrop-blur-xl">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <a
                  href={selected.link}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  Visit <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 rounded-xl border border-white/15 bg-white/10 p-2 text-slate-100 backdrop-blur-xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
      <style>{`@keyframes fadeUp{from{transform:translateY(8px);opacity:0;filter:blur(6px)}to{transform:translateY(0);opacity:1;filter:blur(0)}}`}</style>
    </section>
  );
}
