import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase mb-8 block underline-offset-8 underline decoration-white/10">07 / Connect</span>
          <h2>GET IN TOUCH.</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5" data-aos="fade-right">
             <div className="space-y-12 h-full flex flex-col justify-between py-4">
                <div className="space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1">Email</p>
                      <a href="mailto:priyankajamma2@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">priyankajamma2@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1">Phone</p>
                      <a href="tel:+13142244793" className="text-xl font-bold text-white hover:text-secondary transition-colors">+1 (314) 224-4793</a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1">Location</p>
                      <p className="text-xl font-bold text-white transition-colors">St. Louis, MO</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[40px] bg-primary/5 border border-primary/10 italic text-sm text-text-secondary">
                   "Available for strategic data analytics roles and business intelligence consulting."
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <form className="glass-effect p-8 md:p-12 rounded-[50px] space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-4 mb-3 block">Name</label>
                  <input type="text" placeholder="Your Identity" className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white font-bold" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-4 mb-3 block">Email</label>
                  <input type="email" placeholder="Contact Point" className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white font-bold" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary ml-4 mb-3 block">Message</label>
                <textarea placeholder="How can I help you?" rows="5" className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all text-white font-bold resize-none"></textarea>
              </div>
              <button disabled className="w-full py-5 bg-primary text-white font-black rounded-full shadow-2xl transition-all flex items-center justify-center gap-4 cursor-not-allowed opacity-80">
                INITIATE PROTOCOL <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
