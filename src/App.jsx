import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import KeyboardSkills from './components/KeyboardSkills';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Global interactive 3D model visible across the site */}
      <Background3D />

      {/* Content sits above the 3D canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="py-8">
            <KeyboardSkills />
          </div>
          <AboutSkills />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
