import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Formal technical education providing core principles in computer science, software design, and web technologies.
          </p>
        </div>

        {/* Education Card: Glass Card */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.institution}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      Field: {edu.field}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] text-xs font-mono text-slate-300 self-start sm:self-center border border-white/10">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.degree}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                {edu.description}
              </p>

              {/* Core Syllabus / Focus Areas */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Core Technical Curriculum
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
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
