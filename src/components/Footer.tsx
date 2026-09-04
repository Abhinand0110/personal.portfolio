import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-6 sm:px-10 border-t border-white/5 bg-transparent relative z-10 text-gray-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-tighter text-sm">
            AM<span className="text-[#00E5FF]">.</span>
          </span>
          <span className="text-gray-600">|</span>
          <span className="font-medium text-gray-300">{personalInfo.name}</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider">{personalInfo.primaryRole}</span>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-gray-500 text-[11px] uppercase tracking-wider font-mono hidden md:block">
            <span className="text-[#00E5FF]">●</span> Business Intelligence & Analytics • Bengaluru, India
          </p>

          <p className="text-gray-500 text-[11px] uppercase tracking-wider font-mono">
            © {new Date().getFullYear()} Abhinand M. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2 rounded-sm bg-white/5 border border-white/10 text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
