import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/80 py-4'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand with Clean Minimalism theme token */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-2 text-white font-bold text-xl tracking-tighter hover:opacity-90 transition-opacity"
          id="navbar-brand-link"
        >
          <span>AM</span>
          <span className="text-[#00E5FF]">.</span>
          <span className="text-[10px] text-[#00E5FF] font-mono font-semibold tracking-wider uppercase ml-2 px-2.5 py-0.5 rounded-sm bg-[#00E5FF]/10 border border-[#00E5FF]/30 hidden sm:inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            Data Analytics & BI
          </span>
        </a>

        {/* Desktop Nav - Clean Minimalism uppercase tracking-widest */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-gray-400" aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                id={`nav-${link.label.toLowerCase()}`}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#00E5FF] font-semibold border-b border-[#00E5FF]'
                    : 'hover:text-[#00E5FF]'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            id="nav-cta-contact"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-[11px] font-bold tracking-widest uppercase border border-white/20 text-white hover:bg-white/5 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] transition-all"
          >
            Connect
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-nav-toggle"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-5 space-y-2 shadow-2xl"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2 text-xs uppercase tracking-widest font-medium transition-colors rounded-sm ${
                  isActive
                    ? 'text-[#00E5FF] bg-white/5 font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-white/10">
            <a
              href="mailto:abhinand5856@gmail.com"
              className="block w-full text-center py-2.5 px-4 rounded-sm bg-[#00E5FF] text-[#0a0a0a] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Email Abhinand
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
