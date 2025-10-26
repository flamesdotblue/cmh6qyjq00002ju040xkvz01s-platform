import { Award, Quote, Send, Linkedin, Instagram, Mail } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike Morrison',
    role: 'Product Lead, Northbay',
    quote:
      'Alinur delivered beyond expectations. Crisp UI, thoughtful UX, and fast iterations. Our metrics improved within weeks.',
  },
  {
    name: 'Sara Kim',
    role: 'Founder, Finovate',
    quote:
      'A rare blend of visual craft and systems thinking. The design system saved our team countless hours.',
  },
];

const certs = [
  { title: 'Google UX Design', org: 'Coursera', year: '2022' },
  { title: 'Brand Identity Essentials', org: 'Skillshare', year: '2021' },
  { title: 'Advanced Prototyping', org: 'Figma', year: '2023' },
];

export default function SocialContact() {
  return (
    <section id="contact" className="relative mx-auto mt-16 w-[95%] max-w-[1200px] pb-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
            Some Reviews
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative translate-y-2 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 opacity-0 backdrop-blur-xl transition-all duration-500 ease-out [animation-delay:var(--d)] [animation-duration:700ms] [animation-fill-mode:forwards] [animation-name:fadeUp]"
                style={{ ['--d']: `${i * 80}ms` }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl" />
                <Quote className="text-cyan-300" size={18} />
                <p className="mt-2 text-slate-200/90">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-300/90">
                  <span className="font-semibold text-slate-100">{t.name}</span> — {t.role}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 mb-3 flex items-center gap-2 text-lg font-semibold text-slate-100">
            <Award className="text-cyan-300" size={18} /> Certifications
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {certs.map((c, i) => (
              <div
                key={c.title}
                className="translate-y-2 rounded-2xl border border-white/15 bg-white/10 p-4 opacity-0 backdrop-blur-xl transition-all duration-500 ease-out [animation-delay:var(--d)] [animation-duration:700ms] [animation-fill-mode:forwards] [animation-name:fadeUp]"
                style={{ ['--d']: `${i * 60}ms` }}
              >
                <div className="text-slate-100">{c.title}</div>
                <div className="text-xs text-slate-300/90">{c.org} • {c.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
            Let’s Build Something
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
          >
            <label className="mb-3 block">
              <span className="mb-2 block text-sm text-slate-300/90">Name</span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-cyan-400/0 transition placeholder:text-slate-400 focus:ring-2"
                placeholder="Your name"
              />
            </label>
            <label className="mb-3 block">
              <span className="mb-2 block text-sm text-slate-300/90">Email</span>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-cyan-400/0 transition placeholder:text-slate-400 focus:ring-2"
                placeholder="you@example.com"
              />
            </label>
            <label className="mb-4 block">
              <span className="mb-2 block text-sm text-slate-300/90">Message</span>
              <textarea
                rows={5}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-cyan-400/0 transition placeholder:text-slate-400 focus:ring-2"
                placeholder="Tell me about your project..."
              />
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.35)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              Send Message <Send size={16} className="transition group-hover:translate-x-0.5" />
            </button>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-100 backdrop-blur-xl transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-100 backdrop-blur-xl transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hello@alinur.dev"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-cyan-100 backdrop-blur-xl transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-10 flex items-center justify-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur-xl">
          Designed & Built by Alinur Arafat • 2025
        </div>
      </footer>
      <style>{`@keyframes fadeUp{from{transform:translateY(8px);opacity:0;filter:blur(6px)}to{transform:translateY(0);opacity:1;filter:blur(0)}}`}</style>
    </section>
  );
}
