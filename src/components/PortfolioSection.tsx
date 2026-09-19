import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/agencyData';
import { ProjectItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Web Applications', 'Websites', 'UI/UX Design', 'Mobile Apps', 'E-commerce', 'Digital Marketing'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="clay-pill inline-flex items-center gap-2 px-4 py-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#6C5DD3]" />
            <span className="text-xs font-bold text-[#1E1B4B] tracking-wide uppercase">
              Proven Track Record
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B4B] tracking-tight mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5DD3] to-[#9787F3]">
              Client Works
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A4674] leading-relaxed">
            Explore a curated selection of web applications, flagship websites, and custom platforms engineered
            by Nextvane Solutions for startups and global enterprises.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="mb-12 px-2">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`portfolio-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'neu-btn-primary shadow-[4px_4px_12px_rgba(108,93,211,0.35)]'
                    : 'bg-[#EAEFFE] text-[#1E1B4B] shadow-[4px_4px_10px_#cbd3ed,-4px_-4px_10px_#ffffff] hover:text-[#6C5DD3] hover:shadow-[2px_2px_5px_#cbd3ed,-2px_-2px_5px_#ffffff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Card-Based Layout with Smooth Neumorphic Lift Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setActiveModalProject(project)}
              className="neu-card-interactive p-6 sm:p-7 flex flex-col justify-between cursor-pointer group border border-white/60"
            >
              <div>
                {/* Visual Header / Mock Graphic Banner with Neumorphic Inset */}
                <div className="w-full h-44 rounded-2xl neu-inset p-4 mb-6 flex flex-col justify-between relative overflow-hidden group-hover:shadow-[inset_6px_6px_12px_#cbd3ec,inset_-6px_-6px_12px_#ffffff] transition-all">
                  {/* Category Chip */}
                  <div className="flex items-center justify-between z-10">
                    <span className="clay-pill px-3 py-1 text-[11px] font-bold text-[#1E1B4B] bg-white/90">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#4A4674]">
                      {project.completionYear}
                    </span>
                  </div>

                  {/* Tactile Visual Graphic Center */}
                  <div className="my-auto flex flex-col items-center justify-center text-center">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.colorGradient} text-white flex items-center justify-center shadow-[4px_6px_14px_rgba(108,93,211,0.35)] mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <Layers className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#1E1B4B] tracking-wide">
                      {project.client}
                    </span>
                  </div>

                  {/* Impact Metric Ribbon */}
                  <div className="w-full pt-2 border-t border-[#cbd3ed]/60 flex items-center justify-between text-[11px] font-bold text-[#6C5DD3]">
                    <span>Outcome:</span>
                    <span>{project.impactMetric}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#1E1B4B] group-hover:text-[#6C5DD3] transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-1.5 rounded-full bg-[#EAEFFE] shadow-[3px_3px_6px_#cbd3ed,-3px_-3px_6px_#ffffff] text-[#6C5DD3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#4A4674] leading-relaxed mb-5">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#cbd3ed]/50">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-2.5 py-1 text-[11px] font-semibold text-[#4A4674] bg-[#EAEFFE] rounded-lg shadow-[inset_1.5px_1.5px_3px_#cbd3ed,inset_-1.5px_-1.5px_3px_#ffffff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div
            id="project-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B4B]/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="clay-card max-w-xl w-full p-6 sm:p-8 relative bg-[#EAEFFE] border border-white max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 neu-icon-btn p-2 text-[#1E1B4B] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="clay-pill px-3 py-1 text-xs font-bold text-[#6C5DD3] mb-2 inline-block">
                  {activeModalProject.category} Case Study
                </span>
                <h3 className="text-2xl font-extrabold text-[#1E1B4B]">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#6C5DD3]">
                  Delivered for {activeModalProject.client} ({activeModalProject.completionYear})
                </p>
              </div>

              <div className="neu-inset p-4 rounded-2xl mb-6">
                <span className="text-xs font-bold text-[#1E1B4B] uppercase block mb-1">
                  Key Quantitative Impact:
                </span>
                <span className="text-lg font-extrabold text-[#6C5DD3]">
                  {activeModalProject.impactMetric}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#1E1B4B] mb-2">Project Overview</h4>
                <p className="text-sm text-[#4A4674] leading-relaxed">
                  {activeModalProject.summary} Engineered with clean modular micro-services, tactile neumorphic 
                  interface components, and enterprise performance optimizations resulting in frictionless client operations.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#1E1B4B] mb-2">Technologies Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold text-[#1E1B4B] rounded-xl bg-[#EAEFFE] shadow-[3px_3px_7px_#cbd3ed,-3px_-3px_7px_#ffffff]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#cbd3ed]/60">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="neu-btn-secondary px-5 py-2.5 text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className="neu-btn-primary px-5 py-2.5 text-xs font-bold flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Similar Solution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
