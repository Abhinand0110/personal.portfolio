import React from 'react';
import { motion } from 'motion/react';
import {
  Linkedin,
  Github,
  Mail,
  ArrowDown,
  FolderGit2,
  Award,
  FileText,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { CyberBotCompanion } from './CyberBotCompanion';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-10 overflow-hidden bg-transparent"
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Typography & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-xs font-mono mb-3 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                Data Analyst & Software Developer
              </div>
              <h1
                id="hero-name"
                className="text-5xl sm:text-7xl font-bold tracking-tight leading-none text-white mb-4"
              >
                {personalInfo.name}
              </h1>
              <h2
                id="hero-role"
                className="text-xl sm:text-2xl text-gray-300 font-light flex flex-wrap items-center gap-2"
              >
                <span>{personalInfo.primaryRole}</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">Software & Web Developer</span>
              </h2>
            </div>

            {/* Resume Summary */}
            <p id="hero-summary" className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {personalInfo.summary}
            </p>

            {/* Action Buttons & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                id="hero-btn-view-work"
                className="px-6 py-3 bg-[#00E5FF] text-[#0a0a0a] font-bold rounded-sm text-xs sm:text-sm hover:bg-white transition-all uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
              >
                View Analytics & Projects
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('services')}
                id="hero-btn-services"
                className="px-6 py-3 border border-white/20 text-white font-bold rounded-sm text-xs sm:text-sm hover:bg-white/5 hover:border-white/40 transition-all uppercase tracking-wider cursor-pointer"
              >
                Explore Services
              </button>

              {/* Minimalist Connect Chips */}
              <div className="flex items-center gap-2.5 sm:ml-2">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  id="hero-social-linkedin"
                  className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/60 hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  id="hero-social-github"
                  className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/60 hover:bg-white/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  id="hero-social-email"
                  className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/60 hover:bg-white/10 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cyber Robot Companion Saying Hi */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <CyberBotCompanion />
          </div>
        </motion.div>

        {/* Analytics Impact Telemetry Bar */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3.5 shadow-sm hover:border-[#00E5FF]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0">
              <FolderGit2 className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold font-mono text-white block">No. of Projects</span>
              <span className="text-xs text-gray-400 font-mono">
                <span className="text-[#00E5FF] font-semibold">5+</span> Analytics & Software
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3.5 shadow-sm hover:border-[#00E5FF]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold font-mono text-white block">Research Paper</span>
              <span className="text-xs text-gray-400 font-mono">
                Presented at <span className="text-[#00E5FF] font-semibold">ICCI 2025</span>
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3.5 shadow-sm hover:border-[#00E5FF]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold font-mono text-white block">Industry Award</span>
              <span className="text-xs text-gray-400 font-mono">
                <span className="text-[#00E5FF] font-semibold">Best Intern</span> • Uptoskills
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
