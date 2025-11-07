import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const fullText = 'Developer • Innovator • Creator of Code Constellation';
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full shadow-sm ring-1 ring-indigo-100">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Interactive 3D • Portfolio
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Hi, I’m Sanjai <span aria-hidden>👋</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-800 min-h-[1.75rem]">
            {typed}
            <span className="inline-block w-3 h-5 align-middle bg-gray-900 ml-1 animate-pulse" style={{ maskImage: 'linear-gradient(#000,#000)' }} />
          </p>
          <p className="mt-4 text-lg text-gray-600">
            I’m a young developer passionate about AI, web development, and space-based technology. I love creating immersive interfaces and intelligent systems that feel magical yet practical.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-medium shadow hover:bg-gray-800 transition">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 font-medium shadow border border-gray-200 hover:bg-gray-50 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
