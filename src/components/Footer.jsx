import { Code2, Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-cyan-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="block text-xs font-mono text-cyan-400">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.shortBio}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-pink-500/10 text-slate-400 hover:text-pink-400 border border-white/10 hover:border-pink-500/30 transition-all hover:-translate-y-1"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.emailLink}
                title="Email"
                aria-label="Email"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4 font-mono">
              Connect Directly
            </h4>
            <div className="text-xs text-slate-400 space-y-2.5">
              <div>
                <span className="text-slate-500 block mb-0.5">Email:</span>
                <a href={personalInfo.emailLink} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">WhatsApp:</span>
                <a
                  href={personalInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                >
                  {personalInfo.whatsapp}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Instagram:</span>
                <a
                  href={personalInfo.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-pink-400 transition-colors font-medium"
                >
                  @{personalInfo.instagram}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <span>Built with React & Tailwind CSS</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
