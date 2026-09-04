import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-10 border-t border-white/5 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-[#00E5FF] font-medium uppercase tracking-widest text-xs sm:text-sm">
            05 // Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I'm currently seeking opportunities in Data Analytics, Business Intelligence, and Software Development. Whether you have an open role, project inquiry, or just want to talk data, feel free to reach out.
          </p>

          <div className="pt-2">
            <a
              href={`mailto:${personalInfo.email}?subject=Opportunity%20Discussion%20-%20Abhinand%20M`}
              id="btn-send-email"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-[#00E5FF] hover:bg-white text-[#0a0a0a] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Send Me an Email</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left pt-6">
          {/* Email */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 group shadow-lg">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF]">
                <Mail className="w-4 h-4" />
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Copy email to clipboard"
                aria-label="Copy email address"
                className="text-xs text-gray-400 hover:text-[#00E5FF] p-1 rounded transition-colors"
              >
                {copiedType === 'email' ? (
                  <span className="text-[#00E5FF] flex items-center gap-1 text-[11px] font-mono">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-widest">Email</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-semibold text-gray-200 hover:text-[#00E5FF] break-all transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 group shadow-lg">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF]">
                <Phone className="w-4 h-4" />
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
                className="text-xs text-gray-400 hover:text-[#00E5FF] p-1 rounded transition-colors"
              >
                {copiedType === 'phone' ? (
                  <span className="text-[#00E5FF] flex items-center gap-1 text-[11px] font-mono">
                    <Check className="w-3.5 h-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-widest">Phone</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm font-semibold text-gray-200 hover:text-[#00E5FF] transition-colors"
              >
                +91 {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF]">
                <Linkedin className="w-4 h-4" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-widest">LinkedIn</span>
              <span className="text-sm font-semibold text-gray-200 group-hover:text-[#00E5FF] transition-colors">
                in/abhinandm
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF]">
                <Github className="w-4 h-4" />
              </span>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#00E5FF] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-widest">GitHub</span>
              <span className="text-sm font-semibold text-gray-200 group-hover:text-[#00E5FF] transition-colors">
                Abhinand0110
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
