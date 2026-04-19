import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Cursor from './components/Cursor';
import BottomNav from './components/BottomNav';

// Lazy loading components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certification = lazy(() => import('./components/Certification'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingScreen = () => (
  <motion.div 
    initial={{ y: 0 }} 
    exit={{ y: '-100%' }} 
    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
  >
    <div className="overflow-hidden mb-4">
      <motion.h2 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white text-6xl font-black tracking-tighter"
      >
        PRIYANKA J.
      </motion.h2>
    </div>
    <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-primary"
      />
    </div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Fade out loader
    const timer = setTimeout(() => setLoading(false), 2500);

    // Scroll top listener
    const handleScroll = () => setShowScrollTop(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dark">
      <Cursor />
      
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen bg-dark-bg transition-colors duration-500 selection:bg-primary selection:text-white relative">
        <Suspense fallback={<div />}>
          <Header />
          <main className="pb-32 md:pb-0">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certification />
            <Education />
            <Contact />
          </main>
          <Footer />
        </Suspense>

        <BottomNav />

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              <ChevronUp size={28} font-weight="black" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
