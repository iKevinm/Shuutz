import React from 'react';
import { NAV_ITEMS } from '../constants';
import logo from '../assets/shuutzlg.svg';

import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.works'), href: '#works' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#0B1222]/80 backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center justify-between px-4 md:px-12 h-16 md:h-20 max-w-[1920px] mx-auto">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 md:gap-3 group">
            <img src={logo} alt="Shuutz" className="h-6 md:h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-lg md:text-2xl font-brand font-extrabold tracking-tighter text-[#E7E5E4] uppercase">SHUUTZ</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-12 lg:gap-20">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mono text-[10px] uppercase font-bold tracking-[0.4em] text-[#E7E5E4]/30 hover:text-[#E7E5E4] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => setLanguage('en')}
              className={`mono text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-full transition-all ${language === 'en' ? 'bg-[#E7E5E4] text-[#0B1222]' : 'text-[#E7E5E4]/40 hover:text-[#E7E5E4]'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`mono text-[9px] md:text-[10px] font-bold px-3 py-1.5 rounded-full transition-all ${language === 'es' ? 'bg-[#E7E5E4] text-[#0B1222]' : 'text-[#E7E5E4]/40 hover:text-[#E7E5E4]'}`}
            >
              ES
            </button>
          </div>
          <a href="#contact">
            <button className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] bg-[#E7E5E4] text-[#0B1222] px-6 py-2.5 md:px-10 md:py-3.5 hover:bg-white transition-all rounded-full shadow-lg hidden xs:block">
              {t('nav.contact')}
            </button>
            <button className="mono text-[9px] font-bold uppercase tracking-[0.3em] bg-[#E7E5E4] text-[#0B1222] px-4 py-2.5 hover:bg-white transition-all rounded-full shadow-lg xs:hidden">
              Say Hi
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
