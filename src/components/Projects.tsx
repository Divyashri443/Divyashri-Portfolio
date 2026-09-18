import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { CareerCoreModal } from './CareerCoreModal';
import { QuizMasterModal } from './QuizMasterModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Brain, 
  CheckCircle2, 
  Edit3, 
  Check, 
  Play, 
  Zap, 
  BarChart3, 
  Users, 
  ShieldCheck,
  Award,
  Terminal
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [careerCoreOpen, setCareerCoreOpen] = useState(false);
  const [quizMasterOpen, setQuizMasterOpen] = useState(false);

  // Editable GitHub & Project link state for placeholders
  const [githubLinks, setGithubLinks] = useState<Record<string, string>>({
    careercore: 'https://github.com/Divyashri443',
    quizmaster: 'https://github.com/Divyashri443',
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempLink, setTempLink] = useState('');

  const handleStartEdit = (id: string, currentLink: string) => {
    setEditingId(id);
    setTempLink(currentLink);
  };

  const handleSaveEdit = (id: string) => {
    if (tempLink.trim()) {
      setGithubLinks(prev => ({ ...prev, [id]: tempLink.trim() }));
    }
    setEditingId(null);
  };

  return (
    <section id="projects" className="py-28 relative border-t border-slate-800/80 bg-[#080d16]/30">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Practical web applications and academic projects: featuring CareerCore, a full-stack placement intelligence platform developed in a group of 4, alongside interactive web solutions.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isCareerCore = project.id === 'careercore';
            const currentRepoLink = githubLinks[project.id] || project.githubUrl;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 transition-all duration-300 shadow-2xl backdrop-blur-xl overflow-hidden p-6 sm:p-10"
              >
                {/* Top Strip: Badges & Team */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono font-medium">
                          {project.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 font-mono">
                        {project.subtitle} • {project.team}
                      </p>
                    </div>
                  </div>

                  {/* Actions (View Project & GitHub) */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => isCareerCore ? setCareerCoreOpen(true) : setQuizMasterOpen(true)}
                      id={`view-project-${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all active:scale-95"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isCareerCore ? 'Explore PRS Architecture' : 'Launch Interactive Demo'}</span>
                    </button>

                    <a
                      href={currentRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`github-repo-${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    {/* Editable placeholder link button */}
                    <button
                      onClick={() => handleStartEdit(project.id, currentRepoLink)}
                      title="Edit or inspect repository link"
                      className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Inline link editor when activated */}
                {editingId === project.id && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-cyan-500/40 flex flex-col sm:flex-row items-center gap-3 animate-in fade-in">
                    <span className="text-xs font-mono text-cyan-400 shrink-0">Edit Repo Placeholder URL:</span>
                    <input
                      type="url"
                      value={tempLink}
                      onChange={(e) => setTempLink(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => handleSaveEdit(project.id)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Project Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    {project.details && (
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {project.details}
                      </p>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="lg:col-span-4 bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 block">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visually Emphasized Features (Per prompt requirement!) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {isCareerCore ? 'Core Specialized Capabilities (Emphasized):' : 'Key Architectural Highlights (Emphasized):'}
                    </h4>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Click view for live evaluation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.highlightedFeatures.map((feat) => (
                      <div
                        key={feat.name}
                        className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/40 transition-all duration-200 group/feat"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 group-hover/feat:scale-110 transition-transform" />
                          <h5 className="text-sm font-bold text-white group-hover/feat:text-cyan-300 transition-colors">
                            {feat.name}
                          </h5>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Key Features List */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-2">
                    Verified Feature Implementations:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {project.keyFeatures.map((kf, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modals for Interactive Inspection */}
      <CareerCoreModal
        isOpen={careerCoreOpen}
        onClose={() => setCareerCoreOpen(false)}
      />

      <QuizMasterModal
        isOpen={quizMasterOpen}
        onClose={() => setQuizMasterOpen(false)}
      />
    </section>
  );
};
