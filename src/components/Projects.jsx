import { ExternalLink, Github, Tag } from 'lucide-react';

const projects = [
  {
    title: 'Robotic Arm Interaction',
    description: 'An interactive Spline scene embedded as a dark hero cover that follows the cursor.',
    tags: ['React', 'Spline', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'FastAPI + Mongo Starter',
    description: 'Production-ready template with auth-ready patterns and clean structure.',
    tags: ['FastAPI', 'MongoDB', 'Pydantic'],
    live: '#',
    repo: '#',
  },
  {
    title: 'UI Motion Kit',
    description: 'Collection of polished UI micro-interactions with Framer Motion.',
    tags: ['Framer Motion', 'Design', 'Accessibility'],
    live: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-slate-400">A few things I’ve been building recently.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-slate-900 shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full bg-white/10 text-slate-200 px-2.5 py-1 text-xs">
                      <Tag size={12} /> {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-5 pb-5 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                  <ExternalLink size={14} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-slate-200 hover:text-white text-sm font-medium">
                  <Github size={14} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
