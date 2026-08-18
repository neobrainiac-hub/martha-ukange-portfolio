import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Learning from './components/Learning';
import TechTots from './components/TechTots';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Mount scroll-reveal observer
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Skip to content link for keyboard / screen reader users */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Work />
        <Learning />
        <TechTots />
        <Skills />
        <Journey />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
