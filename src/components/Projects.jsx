import { useState } from 'react';
import { Search, X, Sparkles, ExternalLink, Eye, Layers, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects({ onTriggerToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const handleOpenDemo = (e, project) => {
    e.stopPropagation();
    if (!project.demoUrl) {
      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          message: 'Project demo link can be customized in src/data/projects.js',
        });
      }
    } else {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenGithub = (e, project) => {
    e.stopPropagation();
    if (!project.githubUrl) {
      if (onTriggerToast) {
        onTriggerToast({
          type: 'info',
          message: 'GitHub link can be specified in src/data/projects.js',
        });
      }
    } else {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projects & Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            A selection of modern web applications showcasing clean architecture, responsive frontends, and reliable backend engineering.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs: Rounded-full pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-xl w-full md:w-auto justify-center sm:justify-start">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-xl shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input: Rounded-full */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-xl transition-all shadow-xl"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{' '}
            {projects.length} projects
          </span>
          {(selectedCategory !== 'all' || searchQuery !== '') && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-cyan-400 hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Projects Grid: 1 / 2 / 3 columns */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="cursor-pointer rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Visual Header / Banner */}
                  <div className={`h-44 bg-gradient-to-tr ${project.imageGradient} p-5 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-slate-950/60 text-white backdrop-blur-md">
                        {project.categoryLabel}
                      </span>

                      <div className="p-2 rounded-full bg-slate-950/40 text-white backdrop-blur-md opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="z-10">
                      <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-sm line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    <div className="absolute -right-4 -bottom-4 text-white/10 group-hover:text-white/20 transition-colors pointer-events-none">
                      <Code2 className="w-28 h-28" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-sm text-slate-400 line-clamp-2 mb-5 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges: Rounded-full */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] text-slate-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleOpenDemo(e, project)}
                      aria-label="View demo"
                      title="Live Demo"
                      className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleOpenGithub(e, project)}
                      aria-label="View code"
                      title="GitHub Repository"
                      className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-lg mx-auto shadow-xl">
            <Layers className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No projects found</h3>
            <p className="text-sm text-slate-400 mb-6">
              We couldn't find any projects matching "{searchQuery}" under the selected category.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-500/20 hover:-translate-y-1 transition-all"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onTriggerToast={onTriggerToast}
        />
      )}
    </section>
  );
}
