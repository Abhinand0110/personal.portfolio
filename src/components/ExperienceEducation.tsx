import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 border-t border-white/5 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-1">
          <p className="text-[#00E5FF] font-medium uppercase tracking-widest text-xs sm:text-sm">
            04 // Trajectory
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Education
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <Briefcase className="w-4 h-4 text-[#00E5FF]" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 ml-3 pl-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-2 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#0a0a0a] group-hover:bg-[#00E5FF] group-hover:scale-125 transition-all duration-200" />

                  <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-3 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="text-[11px] font-mono text-[#00E5FF] px-2.5 py-0.5 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center gap-1.5 uppercase">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                    </div>

                    <div className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="font-semibold text-gray-300">{exp.organization}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 pt-1 text-xs text-gray-300">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <GraduationCap className="w-4 h-4 text-[#00E5FF]" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-white/10 ml-3 pl-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-2 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#0a0a0a] group-hover:bg-[#00E5FF] group-hover:scale-125 transition-all duration-200" />

                  <div className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-3 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] font-mono text-[#00E5FF] px-2.5 py-0.5 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center gap-1.5 uppercase">
                        <Calendar className="w-3 h-3" />
                        {edu.duration}
                      </span>
                    </div>

                    <div className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-300">{edu.institution}</span>
                      {edu.location && <span> — {edu.location}</span>}
                    </div>

                    {edu.score && (
                      <div className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-sm bg-white/5 text-gray-300 border border-white/10">
                        Score / Percentage: <strong className="text-[#00E5FF]">{edu.score}</strong>
                      </div>
                    )}

                    {edu.notes && (
                      <p className="text-xs text-gray-400 leading-relaxed pt-1">
                        {edu.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
