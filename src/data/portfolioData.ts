import { Project, ExperienceItem, EducationItem, SkillCategory, CertificationItem } from '../types';

export const personalInfo = {
  name: 'Abhinand M',
  primaryRole: 'Data Analyst',
  secondaryInterests: ['Software Development', 'Web Development', 'Application Development'],
  phone: '8089956236',
  email: 'abhinand5856@gmail.com',
  location: 'Bengaluru, Karnataka',
  linkedinUrl: 'https://www.linkedin.com/in/abhinandm/',
  githubUrl: 'https://github.com/Abhinand0110',
  summary:
    'Final-year BCA Analytics student with hands-on experience in data analytics, business intelligence, and software development through internships and academic projects. Skilled in Python, SQL, Power BI, Excel, Pandas, and MySQL, with specialized experience in data cleaning, pipeline processing, visualization, and executive dashboard engineering.',
  subSummary:
    'Passionate about turning complex datasets into strategic insights, with strong foundational knowledge and active projects in full-stack software and web application development.',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data Analytics',
    description: 'Data transformation, statistical analysis, and interactive business intelligence.',
    skills: [
      'Power BI',
      'Microsoft Excel',
      'Pandas',
      'NumPy',
      'Power Query',
      'DAX',
      'Data Cleaning',
      'Data Visualization',
      'Web Scraping',
      'Exploratory Data Analysis (EDA)',
      'Tableau',
      'Qlik Sense',
    ],
  },
  {
    category: 'Development',
    description: 'Clean backend scripting, database modeling, and responsive web development.',
    skills: [
      'Python',
      'SQL',
      'MySQL',
      'Flask',
      'JavaScript',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Database Design',
    ],
  },
  {
    category: 'Tools',
    description: 'Modern developer workflow and data mining toolsets.',
    skills: [
      'Git',
      'GitHub',
      'Apollo.io',
      'BeautifulSoup',
      'Power BI Service',
      'VS Code',
      'Jupyter Notebook',
      'Requests',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'amazon-sales-analytics',
    name: 'Amazon Sales Analytics Dashboard',
    category: 'Data Analytics',
    highlight: true,
    statsBadge: 'Featured Analytics Case Study',
    shortDescription:
      'Engineered an interactive Power BI sales intelligence dashboard analyzing customer behavior, product trends, and revenue metrics. Implemented a Star Schema data model with Power Query and custom DAX calculations for dynamic KPI cards, filters, and drill-through executive reporting.',
    technologies: ['Power BI', 'Microsoft Excel', 'Power Query', 'DAX', 'Star Schema', 'Data Modeling'],
    githubUrl: 'https://github.com/Abhinand0110',
    keyMetrics: [
      'Star Schema Relational Architecture',
      'Custom DAX for Multi-tier KPIs',
      'Interactive Slicers & Drill-throughs',
    ],
  },
  {
    id: 'smartexpense',
    name: 'SmartExpense – Personal Finance Management System',
    category: 'Web/App Development',
    highlight: true,
    statsBadge: 'Featured Full-Stack System',
    shortDescription:
      'Developed a responsive full-stack web application for personal expense tracking and financial budgeting. Implemented secure user authentication, transactional CRUD operations, and an interactive analytics dashboard for monthly spending insights alongside an AI-powered assistant for budgeting advice.',
    technologies: ['Python (Flask)', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    githubUrl: 'https://github.com/Abhinand0110',
    keyMetrics: [
      'Interactive Expense Analytics Dashboard',
      'AI-Powered Budget Guidance Engine',
      'Relational MySQL Transaction Ledger',
    ],
  },
  {
    id: 'customer-shopping-behavior-analysis',
    name: 'Customer Shopping Behavior Analysis',
    category: 'Data Analytics',
    highlight: false,
    statsBadge: 'E-Commerce & RFM BI',
    shortDescription:
      'End-to-end data analytics workflow on ~3,900 customer shopping records using Python, PostgreSQL, and Power BI. Cleaned raw data, executed in-depth SQL queries to identify revenue drivers and discount trends, and created an interactive dashboard featuring Decomposition Trees and customer segmentation.',
    technologies: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'Power BI', 'EDA', 'Data Cleaning'],
    githubUrl: 'https://github.com/Abhinand0110/customer-behavior-analytics-dashboard',
    keyMetrics: [
      '3,900+ Customer Shopping Records Analyzed',
      'PostgreSQL Queries (CTEs, Window Functions)',
      'Power BI Decomposition Tree & Segment Analysis',
    ],
  },
  {
    id: 'football-analytics',
    name: 'Football Analytics Dashboard',
    category: 'Data Analytics',
    highlight: false,
    statsBadge: 'Sports Performance BI',
    shortDescription:
      'Created an interactive Power BI analytics dashboard evaluating player and club performance across Europe\'s top five football leagues. Built structured data models via Power Query and generated DAX measures to analyze goals, assists, appearances, and disciplinary metrics.',
    technologies: ['Power BI', 'Microsoft Excel', 'Power Query', 'DAX', 'Data Analysis'],
    githubUrl: 'https://github.com/Abhinand0110',
    keyMetrics: [
      'Multi-table Relational League Model',
      'Calculated DAX Columns & Ratios',
      'Cross-league Performance Comparisons',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    organization: 'Orbio Solutions Pvt. Ltd.',
    role: 'Data Analytics Intern',
    duration: 'Jul 2026 – Aug 2026',
    location: 'Remote',
    highlights: [
      'Performed ethical web scraping using Python, Requests, and BeautifulSoup while adhering strictly to site scraping standards.',
      'Cleaned, transformed, and structured complex datasets using Pandas, exporting verified data into CSV and JSON pipelines.',
      'Collaborated closely on data extraction, preprocessing automation, and structured analytical reporting.',
    ],
  },
  {
    organization: 'Uptoskills',
    role: 'Data Mining & Analytics Intern / Senior Team Lead',
    duration: 'Sep 2025 – Jan 2026',
    location: 'Remote',
    highlights: [
      'Extracted and cleaned business data using Apollo.io and Microsoft Excel for targeted analysis and reporting.',
      'Progressed from Team Lead to Senior Team Lead, mentoring 10–15 interns and coordinating 7–8 Team Leads overseeing 60–70 interns.',
      'Developed interactive Power BI dashboards, delivered weekly progress reports, and supported executive decision-making.',
      'Recognized as Best Intern of the Month (Nov 2025).',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (Analytics)',
    institution: 'Kristu Jayanti College, Autonomous, Bengaluru',
    duration: '2024 – 2027',
    location: 'Bengaluru, Karnataka',
    score: '70%',
    notes: 'Actively participated in technical clubs, workshops, and presented a Business Analytics research paper at ICCI 2025.',
  },
  {
    degree: 'Higher Secondary (Class XII, CBSE)',
    institution: 'Good Shepherd Public School',
    duration: '2022 – 2024',
    location: 'Kottayam, Kerala',
    score: '86%',
    notes: 'Specialization in Computer Science and Mathematics.',
  },
];

export const certifications: CertificationItem[] = [
  { title: 'Google Data Analytics Professional Certificate', issuer: 'Coursera', year: '2025' },
  { title: 'Qlik Sense Business Analyst', issuer: 'Qlik', year: '2026' },
  { title: 'CS50x: Introduction to Computer Science', issuer: 'Harvard University' },
  { title: 'Programming in Python for Data Science (Elite)', issuer: 'NPTEL', year: '2025' },
  { title: 'Exploratory Data Analysis (EDA)', issuer: 'Kristu Jayanti University', year: '2025' },
  { title: 'Digital Engineering', issuer: 'NASSCOM FutureSkills Prime' },
];
