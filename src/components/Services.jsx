import { Layout, Layers, Server, Database, Smartphone, ShieldCheck, Sparkles, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-purple-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-teal-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleConsultClick = (serviceTitle) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      const subjectInput = document.getElementById('contact-subject');
      if (subjectInput) {
        subjectInput.value = `Inquiry regarding: ${serviceTitle}`;
      }
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Services & Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Delivering clean, robust, and scalable solutions from responsive client interfaces to secure backend APIs and data architectures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-5 border-t border-white/10 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="p-0.5 rounded-full bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation trigger button: rounded-full */}
              <button
                type="button"
                onClick={() => handleConsultClick(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group-hover:shadow-md"
              >
                <span>Request Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
