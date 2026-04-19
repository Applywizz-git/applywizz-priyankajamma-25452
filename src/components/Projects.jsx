import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const component = useRef();
  const slider = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      num: "01",
      title: "Sales Performance Analytics",
      tag: "Python | SQL | Power BI",
      image: "/assets/project1.png",
      desc: "Predictive analysis of retail datasets improving reporting efficiency by 30%."
    },
    {
      num: "02",
      title: "Food Safety Compliance",
      tag: "Anomaly Detection | ML",
      image: "/assets/project2.png",
      desc: "Developed a system to flag unusual inspection patterns using Python."
    },
    {
      num: "03",
      title: "Workforce Analytics Dashboard",
      tag: "Scikit-Learn | Classification",
      image: "/assets/project3.png",
      desc: "Predictive dashboard for skill gap analysis and workforce planning."
    }
  ];

  useLayoutEffect(() => {
    if (isMobile) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          start: "top top",
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={component} id="projects">
      <div ref={slider} className={`relative ${isMobile ? 'h-auto py-20' : 'h-screen'} w-full flex ${isMobile ? 'flex-col gap-10' : 'overflow-hidden'}`}>
        
        <div className={`panel min-w-full ${isMobile ? 'px-6' : 'h-full px-12 md:px-32'} flex flex-col justify-center`}>
          <div className="container-custom flex flex-col items-start w-full">
            <span className="text-primary font-black text-[10px] tracking-[0.5em] uppercase mb-6">03 / Projects</span>
            <h2 className="mb-8 uppercase">PROJECTS.</h2>
            <div className="flex items-center gap-10">
               <div className="w-16 h-[1px] bg-white/20"></div>
               <p className="text-text-secondary font-bold tracking-widest text-[9px] uppercase">
                 {isMobile ? 'Scroll down' : 'Keep scrolling'}
               </p>
            </div>
          </div>
        </div>

        {projects.map((project, i) => (
          <div key={i} className={`panel min-w-full ${isMobile ? 'px-6' : 'h-full flex items-center justify-center'} px-6 md:px-0`}>
            <div className="container-custom flex items-center w-full">
              <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
                <div className="relative aspect-square max-w-[400px] lg:max-w-[450px] mx-auto lg:mx-0 rounded-[30px] overflow-hidden group border border-white/5 shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-1000 scale-105" />
                  <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                        <ArrowUpRight size={24} />
                      </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 text-[8rem] md:text-[10rem] font-black text-white/5 select-none leading-none z-0">
                    {project.num}
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="text-accent font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
                    {project.desc}
                  </p>
                  <button className="px-8 py-3 bg-white/[0.05] border border-white/10 text-white font-black text-[9px] tracking-widest rounded-full hover:bg-white hover:text-black transition-all">
                    CASE STUDY / 0{i + 1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
