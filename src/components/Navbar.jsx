import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/personalInfo';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.querySelector(item.href);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.href.replace('#', ''));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="IRANZI Arlick - Full Stack Developer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase -mt-0.5">
                {personalInfo.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? 'text-cyan-400 font-semibold bg-white/[0.05]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons: Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-1 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-slate-300 hover:text-cyan-400 bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-all"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1 p-3 rounded-2xl bg-slate-950/95 border border-white/10 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                      : 'text-slate-400 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-xl shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Work Together</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
