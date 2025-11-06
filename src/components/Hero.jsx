import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Interactive 3D • Portfolio
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
            Crafting modern, playful & immersive web experiences
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            I blend clean UI, smooth interactions, and real-time 3D to bring ideas to life. Explore selected work and get in touch to build something remarkable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-medium shadow hover:bg-gray-800 transition">
              View Projects
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
