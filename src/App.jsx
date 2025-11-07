import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutSkills from './components/AboutSkills.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
      </main>
    </div>
  );
}
