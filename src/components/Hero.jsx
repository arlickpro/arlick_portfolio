import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

const techStack = [
  'React',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'JavaScript',
];

export default function Hero({ onTriggerToast }) {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState('profile');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Robust typing effect without cascading render warning
  useEffect(() => {
    const fullText = techStack[currentTechIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 110);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 60);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTechIndex]);

  const copyCodeSnippet = () => {
    const code = `const developer = {
  name: "IRANZI Arlick",
  title: "Full Stack Developer",
  focus: ["Frontend", "Backend", "APIs", "Databases"],
  stack: ["React", "Node.js", "Express", "MySQL", "MongoDB"],
  contact: "arlickiranzi@gmail.com"
};`;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    if (onTriggerToast) {
      onTriggerToast({
        type: 'success',
        message: 'Developer profile code copied to clipboard!',
      });
    }
    setTimeout(() => setCopiedSnippet(false), 2500);
  };

  const handleScrollTo = (targetId) => {
    const element = document.querySelector(targetId);
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
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Projects & Collaborations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Role & Typing Effect */}
            <div className="mt-4 text-2xl sm:text-3xl font-bold text-slate-200 flex flex-wrap items-center gap-2 tracking-tight">
              <span>{personalInfo.title}</span>
              <span className="text-slate-600 font-light">|</span>
              <span className="inline-flex items-center font-mono text-cyan-400 min-w-[160px]">
                {currentText}
                <span className="inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 ml-1 animate-pulse" />
              </span>
            </div>

            {/* Short Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => handleScrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/30 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Let's Work Together</span>
              </button>

              {/* Secondary button */}
              <button
                type="button"
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-slate-400 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Direct Social / Contact Links */}
            <div className="mt-10 flex items-center gap-4 pt-6 border-t border-white/10 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Direct Contact:
              </span>

              {/* WhatsApp */}
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with IRANZI Arlick on WhatsApp"
                title="WhatsApp: +250 796 434 524"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 text-xs font-medium hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow IRANZI Arlick on Instagram"
                title="Instagram: @arlick_iranzi"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 border border-white/10 hover:border-pink-500/30 transition-all duration-300 text-xs font-medium hover:-translate-y-1"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@arlick_iranzi</span>
              </a>

              {/* Email */}
              <a
                href={personalInfo.emailLink}
                aria-label="Send email to IRANZI Arlick"
                title="Email: arlickiranzi@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-xs font-medium hover:-translate-y-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Developer Code Window & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Floating Technology Badges */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 shadow-xl backdrop-blur-xl animate-float">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono font-semibold text-slate-200">React & Tailwind</span>
            </div>

            <div className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 shadow-xl backdrop-blur-xl animate-float" style={{ animationDelay: '2s' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span className="text-xs font-mono font-semibold text-slate-200">Node.js & Express</span>
            </div>

            {/* Developer Code Terminal Card: Glass Card */}
            <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.02] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    iranzi-dev-env
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex rounded-full bg-white/[0.04] p-1 text-[11px] font-mono border border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab('profile')}
                      className={`px-3 py-0.5 rounded-full transition-colors ${
                        activeCodeTab === 'profile'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Profile.js
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeTab('stack')}
                      className={`px-3 py-0.5 rounded-full transition-colors ${
                        activeCodeTab === 'stack'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Stack.json
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={copyCodeSnippet}
                    aria-label="Copy snippet"
                    title="Copy snippet"
                    className="p-1.5 rounded-full text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Snippet Area */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto selection:bg-cyan-500/30">
                {activeCodeTab === 'profile' ? (
                  <div className="space-y-1">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">title:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.title}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-emerald-300">"APEKI TUMBA TSS (Software Dev)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">coreFocus:</span> [
                      <span className="text-amber-300">"Frontend"</span>,{' '}
                      <span className="text-amber-300">"Backend"</span>,{' '}
                      <span className="text-amber-300">"APIs"</span>,{' '}
                      <span className="text-amber-300">"Databases"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">cleanCode:</span>{' '}
                      <span className="text-cyan-400">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-emerald-300">"Ready for collaboration"</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-slate-500 italic">
                      // Open to new projects & collaborations
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 text-slate-300">
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-purple-400">"frontend"</span>: [
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"JavaScript"</span>,{' '}
                      <span className="text-emerald-300">"Tailwind CSS"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"backend"</span>: [
                      <span className="text-emerald-300">"Node.js"</span>,{' '}
                      <span className="text-emerald-300">"Express.js"</span>,{' '}
                      <span className="text-emerald-300">"REST APIs"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"databases"</span>: [
                      <span className="text-emerald-300">"MySQL"</span>,{' '}
                      <span className="text-emerald-300">"MongoDB"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">"tooling"</span>: [
                      <span className="text-emerald-300">"Git"</span>,{' '}
                      <span className="text-emerald-300">"GitHub"</span>,{' '}
                      <span className="text-emerald-300">"VS Code"</span>]
                    </div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-5 py-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Node.js v20.x • React 19</span>
                </div>
                <span>UTF-8</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
