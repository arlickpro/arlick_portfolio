import { useEffect, useRef } from 'react';
import { X, ExternalLink, Layers, Server, Database, CheckCircle, Info, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose, onTriggerToast }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const handleDemoClick = (e) => {
    e.preventDefault();
    if (!project.demoUrl) {
      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          message: 'Project demo URL can be customized in src/data/projects.js',
        });
      }
    } else {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithubClick = (e) => {
    e.preventDefault();
    if (!project.githubUrl) {
      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          message: 'GitHub repository link can be configured in src/data/projects.js',
        });
      }
    } else {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-slate-950/95 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8 backdrop-blur-2xl"
      >
        {/* Modal Header Graphic */}
        <div className={`h-40 sm:h-48 bg-gradient-to-r ${project.imageGradient} p-6 flex flex-col justify-between relative`}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-md transition-all hover:scale-105"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold self-start uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.categoryLabel} Architecture</span>
          </div>

          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Editable Template Notice */}
          {project.isEditableSample && (
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-cyan-300">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Showcase Structure:</span> This entry represents an editable project schema. You can update titles, live links, and GitHub repositories directly in{' '}
                <code className="px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 font-mono text-[11px] border border-cyan-400/20">src/data/projects.js</code>.
              </div>
            </div>
          )}

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                System Architecture
              </h4>
              <div className="space-y-2.5 rounded-2xl bg-white/[0.03] p-5 border border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Client: </span>
                    {project.architecture.client}
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Server className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Server: </span>
                    {project.architecture.server}
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Database: </span>
                    {project.architecture.database}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions: rounded-full buttons */}
        <div className="p-6 bg-white/[0.02] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:-translate-y-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{project.demoUrl ? 'Open Live Demo' : 'Live Demo Link'}</span>
            </button>

            <button
              type="button"
              onClick={handleGithubClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/30 transition-all hover:-translate-y-1"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{project.githubUrl ? 'View Repository' : 'GitHub Link'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
