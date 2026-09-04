import React from 'react';
import { motion } from 'motion/react';
import {
  Database,
  Terminal,
  Wrench,
  Award,
  MapPin,
  CheckCircle2,
  FileSearch,
  Layers,
  BarChart3,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { personalInfo, skillCategories, certifications } from '../data/portfolioData';

export const AboutSkills: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 border-t border-white/5 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-1">
          <p className="text-[#00E5FF] font-medium uppercase tracking-widest text-xs sm:text-sm">
            01 // Background & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me & Technical Skills
          </h2>
        </div>

        {/* 2-Column Clean Minimalism Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* About Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-xl bg-white/5 border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span>Professional Profile</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                I am a final-year <strong className="text-white font-semibold">BCA Analytics</strong> student at Kristu Jayanti College, Bengaluru, with hands-on internship experience in data analytics, web scraping, and business intelligence.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                My work spans extracting raw data, building structured data models, and developing executive dashboards in Power BI and Excel, alongside full-stack development using Python Flask, SQL, and JavaScript.
              </p>

              <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Based in {personalInfo.location} (Open to Pan India)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Recognized as Best Intern of the Month (UptoSkills, Nov 2025)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                  <span>Presented Research Paper on Business Analytics at ICCI 2025</span>
                </div>
              </div>
            </div>

            {/* Compact Certifications Bar */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
                <Award className="w-4 h-4" />
                <span>Selected Certifications</span>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-300">
                {certifications.slice(0, 4).map((cert, idx) => (
                  <li key={idx} className="flex items-baseline justify-between gap-2 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-300 font-medium">{cert.title}</span>
                    <span className="text-gray-500 shrink-0 font-mono text-[11px]">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Skills Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {skillCategories.map((group) => {
              const getIcon = () => {
                switch (group.category) {
                  case 'Data Analytics':
                    return <Database className="w-4 h-4 text-[#00E5FF]" />;
                  case 'Development':
                    return <Terminal className="w-4 h-4 text-[#00E5FF]" />;
                  case 'Tools':
                    return <Wrench className="w-4 h-4 text-[#00E5FF]" />;
                  default:
                    return null;
                }
              };

              return (
                <div
                  key={group.category}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      {getIcon()}
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                      Core Stack
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-4">
                    {group.description}
                  </p>

                  {/* Skills badges / chips with Clean Minimalism font-mono and borders */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-sm text-xs font-mono font-medium bg-white/5 text-gray-300 border border-white/10 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] hover:bg-white/10 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analytics Lifecycle & Workflow Pipeline */}
        <div className="pt-4 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 font-mono">
              <Cpu className="w-4 h-4 text-[#00E5FF]" />
              Data Analytics Methodology & Pipeline
            </h3>
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              End-to-End Execution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest block font-bold">
                01 // Ingestion
              </span>
              <h4 className="text-sm font-bold text-white">Extraction & Mining</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Automated web scraping with BeautifulSoup/Requests, Apollo.io B2B lead mining, and database ingestion.
              </p>
              <div className="pt-2 text-[10px] font-mono text-gray-500">
                Python • REST APIs • CSVs
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest block font-bold">
                02 // Wrangling
              </span>
              <h4 className="text-sm font-bold text-white">Cleaning & Validation</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transforming unorganized records, handling missing values, type casting, deduplication, and anomaly checks.
              </p>
              <div className="pt-2 text-[10px] font-mono text-gray-500">
                Pandas • NumPy • Power Query
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest block font-bold">
                03 // Modeling
              </span>
              <h4 className="text-sm font-bold text-white">SQL & Star Schema</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Structuring dimensional Fact & Dimension tables, relational foreign keys, CTE queries, and window functions.
              </p>
              <div className="pt-2 text-[10px] font-mono text-gray-500">
                PostgreSQL • MySQL • Normalization
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest block font-bold">
                04 // Storytelling
              </span>
              <h4 className="text-sm font-bold text-white">BI & Executive Impact</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Crafting executive Power BI dashboards with DAX measures, decomposition trees, RFM cohorts, and slicers.
              </p>
              <div className="pt-2 text-[10px] font-mono text-gray-500">
                Power BI • DAX • KPI Storytelling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
