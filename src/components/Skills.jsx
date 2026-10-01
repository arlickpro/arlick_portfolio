import { useState } from 'react';
import { Sparkles, Code2, Layers, Terminal, Database, Wrench, CheckCircle } from 'lucide-react';
import { skills, skillCategories } from '../data/skills';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'frontend':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'backend':
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Core Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            A practical, modern toolset honed through continuous building across client-side interfaces, server APIs, and database engineering.
          </p>

          {/* Category Filter Tabs: Rounded full pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-xl max-w-2xl">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-xl shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold bg-white/[0.04] text-cyan-400 border border-cyan-400/20">
                  {skill.tag}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {skill.description}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Ready</span>
                </span>
                <span className="font-mono text-[11px] text-cyan-400">
                  Daily Stack
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine proficiency */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            * Evaluated based on real architectural application, clean patterns, and daily engineering rather than arbitrary percentage metrics.
          </p>
        </div>

      </div>
    </section>
  );
}
