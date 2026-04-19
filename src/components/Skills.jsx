import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Analysis & Programming",
      skills: ["Python (Pandas, Scikit-learn)", "SQL (Advanced, Joins)", "R"]
    },
    {
      title: "Visualization & BI",
      skills: ["Power BI (DAX, Modeling)", "Tableau", "Excel", "KPI Reporting"]
    },
    {
      title: "Data Engineering",
      skills: ["ETL Pipelines", "Data Integration", "Informatica", "Oracle ODI"]
    },
    {
      title: "AI & ML Analytics",
      skills: ["EDA", "Predictive Analytics", "Statistical Analysis", "ML Modeling"]
    }
  ];

  return (
    <section id="skills">
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-accent font-black text-[10px] tracking-[0.5em] uppercase mb-6 block">04 / Stack</span>
          <h2>CAPABILITIES & <span className="text-white/30 italic">TOOLBOX.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="glass-effect p-8 rounded-[30px] border-white/5" data-aos="fade-up" data-aos-delay={i * 100}>
              <h3 className="text-[12px] font-black uppercase text-white mb-8 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-accent"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-[9px] font-bold tracking-widest text-text-secondary uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
