import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageSquare } from 'lucide-react';
import Magnetic from './Magnetic';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden !bg-dark-bg">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/10 blur-[150px] rounded-full"></div>
      
      <div className="container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div className="z-10 text-center lg:text-left">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="mb-6">
                <span className="block text-white">Hello, I'm</span>
                <span className="block text-primary italic">Priyanka</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                Data Analyst with 3+ years of experience delivering business intelligence, reporting, and data analytics solutions. Skilled in SQL, Python, and Power BI to drive data-informed decisions.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <Magnetic>
                  <a 
                    href="/AWL-25452-13042026-2014-resume_priya-j_da.pdf" 
                    download 
                    className="px-8 py-4 bg-primary text-white font-black text-[11px] tracking-widest rounded-full shadow-2xl transition-all flex items-center gap-3"
                  >
                    DOWNLOAD RESUME <Download size={14} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <Link 
                    to="contact" 
                    smooth={true}
                    className="px-8 py-4 border border-white/10 text-white font-black text-[11px] tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 cursor-pointer"
                  >
                    HIRE ME <MessageSquare size={14} />
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] w-full max-w-[420px] mx-auto rounded-[30px] overflow-hidden border border-white/5"
            >
              <img 
                src="/assets/portrait.png" 
                alt="Priyanka" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
