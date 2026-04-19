import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const BottomNav = () => {
  const tabs = [
    { name: 'Home', to: 'hero', icon: Home },
    { name: 'About', to: 'about', icon: User },
    { name: 'Experience', to: 'experience', icon: Briefcase },
    { name: 'Projects', to: 'projects', icon: Code },
    { name: 'Contact', to: 'contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[150] md:hidden">
      <div className="bg-[#030303]/95 backdrop-blur-xl border-t border-white/10 flex justify-around items-center px-4 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.to}
            smooth={true}
            offset={-80}
            spy={true}
            activeClass="text-primary"
            className="flex flex-col items-center justify-center transition-all duration-300 text-text-secondary cursor-pointer"
          >
            <tab.icon size={22} strokeWidth={2.5} />
            <span className="text-[9px] font-black uppercase tracking-widest mt-1.5">{tab.name}</span>
          </Link>
        ))}
      </div>
      {/* Safe area for home indicator on mobile */}
      <div className="h-4 bg-[#030303]"></div>
    </nav>
  );
};

export default BottomNav;
