import { useState } from 'react';
import { Menu, X, Rocket, User, Folder } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home', icon: Rocket },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Folder },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </span>
            <span>Sanjai K</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="group inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition">
                <Icon size={16} className="opacity-70 group-hover:opacity-100" />
                <span>{label}</span>
              </a>
            ))}
            <a href="#projects" className="ml-2 inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition">
              Explore Work
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 bg-white">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-slate-800 hover:bg-black/5">
                  {label}
                </a>
              ))}
              <a href="#projects" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-slate-900 text-white">Explore Work</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
