import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-xl">✨ My Portfolio</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#work" className="hover:text-black/70 transition-colors">Work</a>
          <a href="#about" className="hover:text-black/70 transition-colors">About</a>
          <a href="#contact" className="hover:text-black/70 transition-colors">Contact</a>
          <div className="w-px h-5 bg-black/10 mx-2" />
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-black/5"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-black/5"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="p-2 rounded-md hover:bg-black/5"
          >
            <Mail className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
