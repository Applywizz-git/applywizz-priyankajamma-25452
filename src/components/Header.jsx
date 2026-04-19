import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'py-4 glass-effect' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-black tracking-tighter cursor-pointer text-white"
        >
          PRIYANKA J.
        </motion.div>

        {/* Desktop Nav Only */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  className="text-[10px] font-black tracking-[0.2em] uppercase hover:text-primary cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link 
            to="contact" 
            smooth={true} 
            className="px-6 py-2 border border-white/20 rounded-full font-black text-[10px] tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            HIRE ME
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
