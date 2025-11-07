import { Brain, Code2, Cpu, Sparkles } from 'lucide-react';

const skills = [
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 78 },
  { name: 'Python', level: 80 },
  { name: 'MongoDB', level: 72 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'FastAPI', level: 70 },
];

export default function AboutSkills() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-200">
              <Sparkles size={14} className="text-indigo-400" /> About me
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Designing in the dark — building for the light</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m Sanjai, a developer passionate about creating smooth, interactive interfaces and performant backends. I experiment with 3D on the web and love shipping polished, delightful products.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200">
              <li className="inline-flex items-center gap-2"><Cpu size={16} className="text-indigo-400"/> Systems thinking</li>
              <li className="inline-flex items-center gap-2"><Brain size={16} className="text-indigo-400"/> Problem solving</li>
              <li className="inline-flex items-center gap-2"><Code2 size={16} className="text-indigo-400"/> Clean code</li>
              <li className="inline-flex items-center gap-2"><Sparkles size={16} className="text-indigo-400"/> Subtle motion</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name} className="">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-100">{s.name}</span>
                    <span className="text-slate-400">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
