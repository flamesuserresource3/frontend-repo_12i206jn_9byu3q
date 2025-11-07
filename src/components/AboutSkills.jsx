import { Code, Rocket, Brain, Wrench } from 'lucide-react';

export default function AboutSkills() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start gap-6">
              <img
                src="https://unavatar.io/github/sanjaik-07"
                alt="Sanjai K portrait"
                className="h-28 w-28 rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
              />
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">About Me</h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  I’m <span className="font-semibold">Sanjai K</span>, a developer and tech content creator from India. I run
                  <span className="font-semibold"> Code Constellation</span> and <span className="font-semibold">Coding Sanjai</span>,
                  where I teach coding, share projects, and explore the future of tech. I love building AI-powered systems,
                  web apps, and impactful solutions that merge creativity with technology.
                </p>
                <p className="mt-4 text-gray-800 font-medium">“I aim to inspire young minds to explore technology through innovation, education, and community.”</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {['AI', 'Space Tech', 'Full Stack', 'Game Dev'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <SkillCard icon={<Code className="h-5 w-5" />} title="Frontend" items={[
                'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'
              ]} />
              <SkillCard icon={<Rocket className="h-5 w-5" />} title="Backend" items={[
                'Node.js', 'Express.js', 'Python', 'Flask'
              ]} />
              <SkillCard icon={<Brain className="h-5 w-5" />} title="AI & ML" items={[
                'TensorFlow', 'PyTorch', 'OpenAI API', 'Deep Learning'
              ]} />
              <SkillCard icon={<Wrench className="h-5 w-5" />} title="Tools & Other" items={[
                'GitHub', 'VS Code', 'Replit', 'Figma', 'Canva', 'Cloud', 'Security', 'Networking', 'Blockchain'
              ]} />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 ring-1 ring-black/5">
              <h3 className="text-xl font-bold text-gray-900">Skill Radar</h3>
              <p className="text-sm text-gray-600 mt-1">A snapshot of my current focus areas</p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Frontend', value: 90, color: 'bg-indigo-500' },
                  { label: 'Backend', value: 80, color: 'bg-violet-500' },
                  { label: 'AI & ML', value: 75, color: 'bg-fuchsia-500' },
                  { label: 'Dev Tools', value: 85, color: 'bg-purple-500' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between text-sm text-gray-700">
                      <span>{s.label}</span>
                      <span>{s.value}%</span>
                    </div>
                    <div className="mt-1 h-2.5 w-full bg-white rounded-full ring-1 ring-black/5 overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full transition-all duration-700 ease-out`} style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-500">Continuously learning and experimenting with new ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-gray-900 font-semibold">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-800">
          {icon}
        </span>
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-gray-700 border border-gray-200">{i}</span>
        ))}
      </div>
    </div>
  );
}
