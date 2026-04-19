import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const eduData = [
    {
      degree: "Master of Science in Information Systems",
      school: "Saint Louis University | St. Louis, MO",
      date: "May 2025"
    },
    {
      degree: "Bachelor of Technology in IT",
      school: "Jawaharlal Nehru Technological University | India",
      date: "May 2021"
    }
  ];

  return (
    <section id="education" className="bg-[#050505]">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-primary font-black text-xs tracking-[0.5em] uppercase mb-8 block underline-offset-8 underline decoration-white/10">06 / Education</span>
          <h2>ACADEMIC JOURNEY.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {eduData.map((edu, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              className="glass-effect p-10 rounded-[30px] border-white/5 flex gap-8 items-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-primary font-black text-[10px] tracking-widest uppercase mb-2 block">{edu.date}</span>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-text-secondary tracking-wide italic">
                  {edu.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
