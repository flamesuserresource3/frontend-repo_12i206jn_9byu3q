import { Code2, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'A metrics-rich dashboard with live updates, dark mode, and keyboard navigation.',
    icon: Code2,
    tags: ['React', 'WebSockets', 'Tailwind'],
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive Spline-powered experience embedded within a storefront.',
    icon: Globe,
    tags: ['Spline', 'Three.js', 'Vite'],
  },
  {
    title: 'Mobile Design System',
    description: 'Reusable components, tokens, and motion guidelines for a fintech app.',
    icon: Smartphone,
    tags: ['Figma', 'Design', 'Accessibility'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-gray-600">A snapshot of projects that balance usability, performance, and delight.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon, tags }) => (
            <article key={title} className="group rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gray-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <button className="mt-6 text-sm font-medium text-gray-900 group-hover:underline">View details →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
