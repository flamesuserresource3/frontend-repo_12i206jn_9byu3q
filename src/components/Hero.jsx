import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const words = [
    'Full-Stack Developer',
    'Tech Enthusiast',
    '3D + Web',
    'Gamer at Heart',
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
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/40 to-white/80" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Hi, I’m Sanjai <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">K</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-700">
              <span className="font-semibold text-slate-900">{display}</span>
              <span className="ml-1 inline-block w-1.5 h-6 align-middle bg-slate-900 animate-pulse" />
            </p>
            <p className="text-slate-700 max-w-prose">
              I craft interactive web experiences with modern tech, blending clean UI with playful 3D moments. Always exploring new ideas in code, design, and gaming.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-2.5 font-medium hover:bg-slate-800 transition">
                View Projects
              </a>
              <a href="#about" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 font-medium text-slate-800 hover:bg-slate-50 transition">
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
