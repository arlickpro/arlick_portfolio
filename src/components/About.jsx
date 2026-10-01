import { Layout, Server, Database, KeyRound, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const corePillars = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      description: 'Reactive, component-based UIs with React, ES6+, and Tailwind CSS.',
      points: ['React Components & Hooks', 'Responsive & Mobile-first', 'Modern Clean UI/UX']
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="w-6 h-6 text-purple-400" />,
      description: 'Scalable RESTful APIs and server logic with Node.js and Express.',
      points: ['REST API Architecture', 'Middleware & Validation', 'Clean Error Handling']
    },
    {
      title: 'Database Architecture',
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      description: 'Relational schemas in MySQL and document collections in MongoDB.',
      points: ['MySQL Relational Schemas', 'MongoDB Collections', 'Data Integrity & CRUD']
    },
    {
      title: 'Auth & Security',
      icon: <KeyRound className="w-6 h-6 text-cyan-400" />,
      description: 'JWT authentication, protected API routes, and role-based access.',
      points: ['JWT Authentication', 'Role-Based Access Control', 'Protected REST Endpoints']
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Full Stack. Clean Code. Real Results.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
            {personalInfo.about}
          </p>
        </div>

        {/* Factual Highlight Summary Cards: Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Core Language
            </div>
            <div className="text-2xl font-bold text-white mb-2">JavaScript</div>
            <p className="text-sm text-slate-400">
              ES6+, async patterns, and Node.js runtime.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider mb-1">
              UI Engineering
            </div>
            <div className="text-2xl font-bold text-white mb-2">React & Tailwind</div>
            <p className="text-sm text-slate-400">
              Declarative components and utility-first styling.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              Server & APIs
            </div>
            <div className="text-2xl font-bold text-white mb-2">Node & Express</div>
            <p className="text-sm text-slate-400">
              RESTful APIs, middleware, and endpoint security.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              Data Management
            </div>
            <div className="text-2xl font-bold text-white mb-2">MySQL & MongoDB</div>
            <p className="text-sm text-slate-400">
              Relational and document-oriented data storage.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="space-y-2.5 border-t border-white/10 pt-5">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
