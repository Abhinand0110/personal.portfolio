import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSkills } from './components/AboutSkills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GlobalBackgroundAnimation } from './components/GlobalBackgroundAnimation';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const section = current as HTMLElement;
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col selection:bg-[#00E5FF]/20 selection:text-[#00E5FF] relative">
      {/* Global Full-Page Ambient Tech & Data Animation Canvas */}
      <GlobalBackgroundAnimation />

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Section 1: Hero with subtle data/tech animation */}
        <Hero />

        {/* Section 2: About + Skills */}
        <AboutSkills />

        {/* Section 3: Projects (Featured Data Analytics case study + others) */}
        <Projects />

        {/* Section 4: Services & Offerings (Business Analytics, Custom Dashboards, Client Websites) */}
        <Services />

        {/* Section 5: Experience + Education */}
        <ExperienceEducation />

        {/* Section 6: Let's Connect */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
