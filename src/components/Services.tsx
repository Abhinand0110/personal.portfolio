import React from 'react';
import {
  BarChart3,
  Globe,
  Database,
  LineChart,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  offerings: string[];
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'business-intelligence',
    category: 'Analytics & BI',
    badge: 'Decision Support',
    title: 'Executive Dashboards & Business Analytics',
    description:
      'Transform complex transactional and operational data into clear, interactive Power BI and SQL dashboards. Designed to uncover revenue drivers, customer cohorts, sales trends, and actionable business intelligence.',
    icon: <BarChart3 className="w-5 h-5 text-[#00E5FF]" />,
    offerings: [
      'Interactive Power BI & SQL dashboard design',
      'KPI tracking, revenue drivers & sales decomposition',
      'RFM customer segmentation & cohort analysis',
      'Robust DAX measures & Star Schema data modeling',
    ],
    deliverables: ['Custom .PBIX files', 'Automated data refreshes', 'Executive summary reports'],
  },
  {
    id: 'web-development',
    category: 'Engineering',
    badge: 'Full-Stack',
    title: 'Custom Client Website & Web App Development',
    description:
      'End-to-end development of high-performance, responsive websites and database-backed web applications tailored to business requirements. Clean architecture, secure authentication, and seamless user experiences.',
    icon: <Globe className="w-5 h-5 text-[#00E5FF]" />,
    offerings: [
      'Responsive modern business websites & landing pages',
      'Full-stack web applications with Python (Flask) & React',
      'Relational database integration (MySQL / PostgreSQL)',
      'Secure user authentication & transactional CRUD systems',
    ],
    deliverables: ['Production-ready codebases', 'Responsive mobile-first UI', 'API & Database setup'],
  },
  {
    id: 'data-engineering-cleaning',
    category: 'Data Pipeline',
    badge: 'Data Wrangling',
    title: 'Data Cleaning, Transformation & SQL Pipelines',
    description:
      'Turn messy spreadsheets, CSVs, and disparate tables into clean, structured, and validated datasets ready for reporting, forecasting, and analytical queries using Python and SQL.',
    icon: <Database className="w-5 h-5 text-[#00E5FF]" />,
    offerings: [
      'Automated data cleaning & validation with Python (Pandas/NumPy)',
      'Complex SQL query optimization, CTEs & window functions',
      'ETL workflow development & data pipeline modeling',
      'Exploratory Data Analysis (EDA) & anomaly detection',
    ],
    deliverables: ['Cleaned datasets & schemas', 'Optimized SQL scripts', 'Documented data dictionaries'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 sm:px-10 border-t border-white/5 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[#00E5FF] font-medium uppercase tracking-widest text-xs sm:text-sm">
              03 // What I Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Services & Capabilities
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">
            Delivering data-driven insights and scalable software solutions tailored for businesses, founders, and teams.
          </p>
        </div>

        {/* Services 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-7 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00E5FF]/40 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] px-2.5 py-1 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                    {service.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00E5FF] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Offerings checklist */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block font-semibold">
                    Core Solutions
                  </span>
                  <ul className="space-y-2">
                    {service.offerings.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables footer */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                  Typical Deliverables
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.map((deliv, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2 py-0.5 rounded-sm text-[11px] font-mono bg-black/40 text-gray-300 border border-white/10"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 group-hover:text-[#00E5FF] transition-colors"
                  >
                    <span>Discuss Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5FF]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Strip */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl text-center md:text-left">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Have a custom analytics or web development requirement?
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Available for freelance engagements, contract analytics sprints, and full-time opportunities.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-sm bg-[#00E5FF] text-[#0a0a0a] hover:bg-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
