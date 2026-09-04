import React from 'react';
import {
  Github,
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  Wallet,
  Bot,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.highlight);
  const otherProjects = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-24 px-6 sm:px-10 border-t border-white/5 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[#00E5FF] font-medium uppercase tracking-widest text-xs sm:text-sm">
              02 // Portfolio Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">
            Applied business intelligence, data modeling, and full-stack software built with rigorous engineering standards.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-10">
          {featuredProjects.map((featuredProject) => {
            const isSmartExpense = featuredProject.id === 'smartexpense';

            return (
              <div
                key={featuredProject.id}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden group hover:border-white/20 transition-all"
              >
                {/* Subtle Clean Minimalism dot grid layer */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-15 data-dot-grid pointer-events-none"
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-sm text-xs font-bold font-mono uppercase tracking-wider bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                        ★ {featuredProject.statsBadge || 'Featured Showcase'}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">
                        {featuredProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#00E5FF] transition-colors">
                      {featuredProject.name}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {featuredProject.shortDescription}
                    </p>

                    {/* Key metrics list */}
                    {featuredProject.keyMetrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {featuredProject.keyMetrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-sm bg-black/40 border border-white/10 text-xs text-gray-300 font-medium flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-sm text-xs font-mono bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link button */}
                    <div className="pt-2 flex items-center gap-3">
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#00E5FF] text-[#0a0a0a] hover:bg-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>View on GitHub</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Visual Preview Graphic: Custom per Featured Project */}
                  <div className="lg:col-span-5">
                    {isSmartExpense ? (
                      /* SmartExpense Full-Stack Architecture Graphic */
                      <div className="p-5 sm:p-6 rounded-xl bg-[#0a0a0a]/95 border border-white/10 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                            <Wallet className="w-4 h-4 text-[#00E5FF]" />
                            <span>System Architecture</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#00E5FF] px-2 py-0.5 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/20 uppercase">
                            Flask • MySQL • AI
                          </span>
                        </div>

                        {/* Budget & AI Advisor KPIs */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">
                              Budget Engine
                            </span>
                            <span className="text-lg font-bold text-white font-mono mt-0.5 block">
                              81% Cap
                            </span>
                            <span className="text-[10px] text-[#00E5FF] flex items-center gap-1 mt-1 font-mono">
                              <TrendingUp className="w-3 h-3" /> Real-time tracking
                            </span>
                          </div>

                          <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">
                              AI Guidance
                            </span>
                            <span className="text-lg font-bold text-white font-mono mt-0.5 block">
                              Advisor
                            </span>
                            <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-1 font-mono">
                              <Bot className="w-3 h-3 text-[#00E5FF]" /> Smart Insights
                            </span>
                          </div>
                        </div>

                        {/* Interactive Feature List */}
                        <div className="space-y-1.5 pt-1 text-xs text-gray-400">
                          <div className="flex items-center justify-between py-1.5 px-3 rounded-sm bg-white/5 border border-white/5">
                            <span className="text-gray-300 flex items-center gap-1.5">
                              <Database className="w-3.5 h-3.5 text-[#00E5FF]" /> Relational ACID Ledger
                            </span>
                            <span className="text-[#00E5FF] font-mono text-[11px]">MySQL CRUD</span>
                          </div>
                          <div className="flex items-center justify-between py-1.5 px-3 rounded-sm bg-white/5 border border-white/5">
                            <span className="text-gray-300 flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" /> Auth & Security
                            </span>
                            <span className="text-[#00E5FF] font-mono text-[11px]">Session Enforced</span>
                          </div>
                          <div className="flex items-center justify-between py-1.5 px-3 rounded-sm bg-white/5 border border-white/5">
                            <span className="text-gray-300 flex items-center gap-1.5">
                              <BarChart3 className="w-3.5 h-3.5 text-[#00E5FF]" /> Spending Analytics
                            </span>
                            <span className="text-[#00E5FF] font-mono text-[11px]">Dynamic Charts</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Amazon Sales Analytics BI Graphic */
                      <div className="p-5 sm:p-6 rounded-xl bg-[#0a0a0a]/95 border border-white/10 space-y-4 shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                            <BarChart3 className="w-4 h-4 text-[#00E5FF]" />
                            <span>Executive Analytics</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#00E5FF] px-2 py-0.5 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/20 uppercase">
                            DAX Star Schema
                          </span>
                        </div>

                        {/* Mini KPI Preview Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">Sales Trends</span>
                            <span className="text-lg font-bold text-white font-mono mt-0.5 block">Dynamic</span>
                            <span className="text-[10px] text-[#00E5FF] flex items-center gap-1 mt-1 font-mono">
                              <TrendingUp className="w-3 h-3" /> Time-Intel
                            </span>
                          </div>

                          <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-mono">Data Model</span>
                            <span className="text-lg font-bold text-white font-mono mt-0.5 block">Star Schema</span>
                            <span className="text-[10px] text-gray-400 mt-1 block font-mono">Fact & Dim Tables</span>
                          </div>
                        </div>

                        {/* Interactive Drill-Through Features */}
                        <div className="space-y-1.5 pt-1 text-xs text-gray-400">
                          <div className="flex items-center justify-between py-1.5 px-3 rounded-sm bg-white/5 border border-white/5">
                            <span className="text-gray-300">Customer Segmentation</span>
                            <span className="text-[#00E5FF] font-mono text-[11px]">RFM & Cohorts</span>
                          </div>
                          <div className="flex items-center justify-between py-1.5 px-3 rounded-sm bg-white/5 border border-white/5">
                            <span className="text-gray-300">Regional Performance</span>
                            <span className="text-[#00E5FF] font-mono text-[11px]">Multi-tier Slicers</span>
                          </div>
                          <div className="flex items-center justify-between py-1.5 px-3 rounded-sm bg-white/5 border border-white/5">
                            <span className="text-gray-300">Drill-Through Reports</span>
                            <span className="text-[#00E5FF] font-mono text-[11px]">Product Matrix</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Divider & Header for Other Projects */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              Additional Analytics & Applications
            </h3>
            <span className="text-xs text-gray-500 font-mono">
              {otherProjects.length} Repositories
            </span>
          </div>

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => {
              const isCustomerAnalysis = project.id === 'customer-shopping-behavior-analysis';

              return (
                <div
                  key={project.id}
                  className="p-6 sm:p-7 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-sm text-[11px] font-mono font-medium bg-white/5 text-[#00E5FF] border border-white/10 uppercase">
                          {project.category}
                        </span>
                        {isCustomerAnalysis && (
                          <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-white/5 text-gray-400 border border-white/10">
                            MIT License
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 font-medium font-mono">
                        {project.statsBadge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {project.keyMetrics && (
                      <ul className="space-y-1.5 pt-1">
                        {project.keyMetrics.map((km, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
                            <span>{km}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-sm text-[11px] font-mono bg-white/5 text-gray-400 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#00E5FF] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

