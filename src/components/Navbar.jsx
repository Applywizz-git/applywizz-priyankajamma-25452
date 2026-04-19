import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-lg border-b border-white/10 py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tighter">
          P<span className="text-accent">J</span>
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-accent to-accent-purple text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
