import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import { initScrollAnimations, cleanupScrollAnimations } from './utils/scrollAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  
  useEffect(() => {
    // Initialize scroll animations (works both up and down)
    const scrollObserver = initScrollAnimations();

    return () => {
      cleanupScrollAnimations(scrollObserver);
    };
  }, []);

  const styles = {
    appWrapper: {
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      background: 'var(--bg-primary)',
      overflowX: 'hidden',
    },
    ambientOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(226, 165, 83, 0.015) 0%, transparent 45%),
        radial-gradient(circle at 90% 50%, rgba(197, 168, 128, 0.015) 0%, transparent 45%),
        radial-gradient(circle at 50% 80%, rgba(208, 106, 76, 0.01) 0%, transparent 50%)
      `,
      backgroundSize: '100% 100%, 100% 100%, 100% 100%',
      pointerEvents: 'none',
      zIndex: 1,
    },

  };

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      <div style={styles.appWrapper}>


        {/* Grid overlay for high-end styling */}
        <div className="ambient-overlay" style={styles.ambientOverlay}></div>

        {/* Moving Aurora Glow Background Sweep */}
        <div className="aurora-glow-container">
          <div className="aurora-blob aurora-blob-1"></div>
          <div className="aurora-blob aurora-blob-2"></div>
        </div>

        {/* Scroll Progress Indicator on Right Side */}
        <ScrollProgress />

        {/* Main Sections */}
        <Header />
        <main style={{ position: 'relative', zIndex: 5 }}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
