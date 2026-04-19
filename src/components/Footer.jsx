import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-dark-bg text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tighter mb-2">
              PRIYANKA J.
            </h2>
            <p className="text-text-secondary font-bold tracking-[0.2em] text-[10px] uppercase opacity-60">
              Senior Data Analyst & BI Architect
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
               Precision Engineered by PJ &copy; 2026
             </p>
             <p className="text-text-secondary text-[10px] font-medium italic opacity-30">
               St. Louis, Missouri, United States
             </p>
          </div>
        </div>

        <div className="flex justify-center border-t border-white/5 pt-10">
          <div className="text-text-secondary text-[10px] font-black uppercase tracking-widest flex gap-8">
            <Link to="about" smooth={true} className="hover:text-primary cursor-pointer transition-colors">About</Link>
            <Link to="experience" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Experience</Link>
            <Link to="projects" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Projects</Link>
            <Link to="contact" smooth={true} className="hover:text-primary cursor-pointer transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
