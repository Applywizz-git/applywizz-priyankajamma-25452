import React from 'react';
import { Award } from 'lucide-react';

const Certification = () => {
  const certs = [
    "Google Data Analytics Professional Certificate",
    "Python for Data Science and Machine Learning",
    "Oracle Cloud Infrastructure Certified Foundations",
    "Cisco - Introduction to Data Science",
    "Simplilearn - Data Analytics"
  ];

  return (
    <section id="certification">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase mb-8 block underline-offset-8 underline decoration-white/10">05 / Credentials</span>
          <h2>CERTIFICATIONS.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              className="glass-effect p-8 rounded-[30px] flex items-center gap-6 group hover:border-secondary transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Award size={20} />
              </div>
              <h3 className="text-sm font-bold text-white leading-tight">
                {cert}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
