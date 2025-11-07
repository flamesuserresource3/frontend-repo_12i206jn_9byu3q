import { useMemo } from 'react';

const keys = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Vite', 'Tailwind',
  'Node', 'Express', 'MongoDB', 'PostgreSQL',
  'Python', 'FastAPI', 'Docker', 'Git',
];

export default function KeyboardSkills() {
  const layout = useMemo(() => {
    const rows = [
      keys.slice(0, 6),
      keys.slice(6, 11),
      keys.slice(11, 16),
    ];
    return rows;
  }, []);

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-4">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Skills keypad</h3>
        <div className="space-y-3">
          {layout.map((row, i) => (
            <div key={i} className="flex flex-wrap gap-2">
              {row.map((k) => (
                <button
                  key={k}
                  className="px-3 py-2 text-sm rounded-md bg-slate-800 text-slate-200 border border-white/10 shadow hover:bg-slate-700 hover:shadow-lg transition active:scale-95"
                  onClick={() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {k}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
