import { Smartphone, Code2, Layers, Cpu, HeartHandshake, Sparkles, Check } from 'lucide-react';
import { whyWorkWithMeReasons } from '../data/whyWorkWithMe';

export default function WhyWorkWithMe() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      default:
        return <Check className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-me" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Development Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Core principles that guide my day-to-day engineering and ensure software is built cleanly, reliably, and on time.
          </p>
        </div>

        {/* 6 Animated Cards Grid: 1 / 2 / 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyWorkWithMeReasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 w-fit mb-6 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(reason.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Engineering standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
