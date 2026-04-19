import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, ShieldCheck, Activity } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="container-custom">
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-10">
          <div className="lg:w-1/2">
            <span className="text-primary font-black text-[10px] tracking-[0.5em] uppercase mb-4 block">01 / Profile</span>
            <h2 className="mb-0 uppercase italic">
              DATA <span className="text-white/30">PRECISION.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          
          <div className="lg:col-span-12 xl:col-span-7 glass-effect rounded-[25px] p-6 md:p-10 overflow-hidden" data-aos="fade-up">
            <h3 className="text-base font-black uppercase text-white mb-8 tracking-widest flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary"></span> Narrative
            </h3>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed font-medium mb-10">
              I specialize in building <span className="text-white font-bold">ETL workflows</span> and dashboards that improved reporting efficiency by <span className="text-primary font-black">40%</span>. Expertise in translating stakeholder requirements into structured datasets.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
               {[
                 { label: 'EFFICIENCY', val: '40%', icon: TrendingUp },
                 { label: 'DISCREPANCY', val: '35%', icon: ShieldCheck },
                 { label: 'DECISION', val: '25%', icon: Activity },
                 { label: 'DATA LOAD', val: '30%', icon: Database }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col">
                   <item.icon className="w-4 h-4 text-primary mb-2" />
                   <span className="text-xl font-black text-white">{item.val}</span>
                   <span className="text-[8px] uppercase font-black tracking-widest text-text-secondary mt-1">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5 glass-effect rounded-[25px] p-6 md:p-10" data-aos="fade-up" data-aos-delay="100">
             <div className="h-full flex flex-col justify-between">
                <h3 className="text-base font-black uppercase text-white mb-8 tracking-widest flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-secondary"></span> Skills
                </h3>
                <div className="space-y-8">
                   {[
                     { name: 'SQL / PLSQL', val: '95%' },
                     { name: 'Python Analytics', val: '90%' },
                     { name: 'BI Visualization', val: '88%' }
                   ].map((tech, i) => (
                     <div key={i} className="w-full">
                       <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2">
                         <span className="text-white/80">{tech.name}</span>
                         <span className="text-primary">{tech.val}</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           className="h-full bg-primary"
                           initial={{ width: 0 }}
                           whileInView={{ width: tech.val }}
                           transition={{ duration: 1.5 }}
                           viewport={{ once: true }}
                         />
                       </div>
                     </div>
                   ))}
                </div>
                <p className="mt-8 text-[9px] text-text-secondary leading-relaxed italic opacity-60">
                   Applied ML for forecasting and risk identification.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
