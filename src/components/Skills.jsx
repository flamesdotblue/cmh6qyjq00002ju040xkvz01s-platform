const skills = [
  { name: 'Figma', level: 'Expert' },
  { name: 'Adobe XD', level: 'Advanced' },
  { name: 'Photoshop', level: 'Expert' },
  { name: 'Illustrator', level: 'Advanced' },
  { name: 'After Effects', level: 'Intermediate' },
  { name: 'Framer', level: 'Advanced' },
  { name: 'Webflow', level: 'Advanced' },
  { name: 'HTML/CSS', level: 'Advanced' },
  { name: 'Prototyping', level: 'Expert' },
  { name: 'Design Systems', level: 'Advanced' },
  { name: 'Brand Identity', level: 'Advanced' },
  { name: 'Social Creatives', level: 'Expert' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto mt-8 w-[95%] max-w-[1200px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
          Technical Skills
        </h2>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-100 backdrop-blur-xl">
          <span>Glass-cards with motion</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="group translate-y-2 rounded-2xl border border-white/15 bg-white/10 p-4 opacity-0 backdrop-blur-xl transition-all duration-500 ease-out [animation-delay:var(--d)] [animation-duration:700ms] [animation-fill-mode:forwards] [animation-name:fadeUp] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.18)]"
            style={{ ['--d']: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-100">{s.name}</span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-2 py-0.5 text-[10px] text-cyan-100">
                {s.level}
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 shadow-[0_0_14px_rgba(56,189,248,0.6)]"
                style={{ width: `${levelToPercent(s.level)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeUp{from{transform:translateY(8px);opacity:0;filter:blur(6px)}to{transform:translateY(0);opacity:1;filter:blur(0)}}`}</style>
    </section>
  );
}

function levelToPercent(level) {
  switch (level) {
    case 'Expert':
      return 95;
    case 'Advanced':
      return 85;
    case 'Intermediate':
      return 70;
    default:
      return 60;
  }
}
