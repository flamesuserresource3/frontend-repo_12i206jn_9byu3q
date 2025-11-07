import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const words = [
    'Interactive 3D Keyboard',
    'Skills as Keycaps',
    'Playful. Modern. Tech.',
    'Scroll to Explore',
  ];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);
  const speedRef = useRef(90);

  useEffect(() => {
    const current = words[index % words.length];

    const tick = () => {
      if (!deleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setDeleting(true);
          speedRef.current = 1200; // pause at full word
        } else {
          speedRef.current = 90;
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          speedRef.current = 200;
        } else {
          speedRef.current = 40;
        }
      }
    };

    const t = setTimeout(tick, speedRef.current);
    return () => clearTimeout(t);
  }, [display, deleting, index, words]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-24">
      {/* Content overlay lives above the global 3D background */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Crafting Interfaces
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">with Code & 3D</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200">
              <span className="font-semibold text-white">{display}</span>
              <span className="ml-1 inline-block w-1.5 h-6 align-middle bg-white animate-pulse" />
            </p>
            <p className="text-slate-300 max-w-prose">
              A dark-themed portfolio where your skills are keys and the keyboard is the playground. Interact with the scene and scroll to reveal more.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-indigo-500 text-white px-5 py-2.5 font-medium hover:bg-indigo-400 transition">
                View Projects
              </a>
              <a href="#about" className="inline-flex items-center rounded-md border border-white/15 px-5 py-2.5 font-medium text-slate-100 hover:bg-white/10 transition">
                About & Skills
              </a>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
