import React from 'react';
import { CONTACT_INFO } from '../constants';
import logo from '../assets/shuutzlg.svg';

import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B1222] text-[#E7E5E4] px-6 md:px-12 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">
          <div>
            <img src={logo} alt="Shuutz" className="h-10 w-auto opacity-80 mb-8" />
            <p className="text-[#E7E5E4]/40 text-lg leading-relaxed font-light max-w-sm">
              {t('footer.desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase mb-6 tracking-widest">{t('footer.studio')}</p>
              <ul className="space-y-3 text-sm font-semibold uppercase tracking-tight text-[#E7E5E4]/80">
                <li>{CONTACT_INFO.OWNER}</li>
                <li>{CONTACT_INFO.PHONE}</li>
              </ul>
            </div>
            <div>
              <p className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase mb-6 tracking-widest">{t('footer.connect')}</p>
              <ul className="space-y-3 text-sm font-semibold uppercase tracking-tight">
                <li><a href={`https://instagram.com/${CONTACT_INFO.INSTAGRAM.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E7E5E4]/60 transition-colors">Instagram</a></li>
                <li><a href="mailto:hello@shuutz.studio" className="hover:text-[#E7E5E4]/60 transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <p className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase mb-6 tracking-widest">{t('footer.based')}</p>
            <p className="text-lg font-medium leading-tight text-[#E7E5E4]/80">{CONTACT_INFO.LOCATION}<br />Westchester County</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="mono text-[9px] text-[#E7E5E4]/20 uppercase tracking-[0.4em] flex items-center gap-2">
            <span>&copy; 2025 {CONTACT_INFO.NAME}</span>
            <span className="opacity-40">//</span>
            <span>{t('footer.made_with')} <span className="text-[#E7E5E4]/60">Anardo</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
