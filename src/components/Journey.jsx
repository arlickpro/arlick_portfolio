import { Calendar, Milestone } from 'lucide-react';
import { journeyMilestones } from '../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Milestone className="w-3.5 h-3.5" />
            <span>Path & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            My Development Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            A continuous progression focused on mastering full stack technologies, scalable software design, and rigorous engineering foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12 sm:ml-4">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-6 h-6 rounded-full bg-slate-950 border-4 border-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-xl shadow-cyan-500/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Milestone Card: Glass Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/[0.04] text-cyan-400 border border-cyan-400/20">
                    <Calendar className="w-3 h-3" />
                    <span>{milestone.period}</span>
                  </span>

                  <span className="text-xs font-mono text-slate-500">
                    {milestone.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-5">
                  {milestone.description}
                </p>

                {/* Skills/Tags: Rounded-full */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {milestone.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-0.5 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
