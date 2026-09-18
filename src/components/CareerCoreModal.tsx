import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Layers, 
  Brain, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Activity, 
  CheckCircle2, 
  ExternalLink, 
  Github,
  Award,
  BookOpen,
  ArrowRight,
  Calculator
} from 'lucide-react';

interface CareerCoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareerCoreModal: React.FC<CareerCoreModalProps> = ({ isOpen, onClose }) => {
  const project = PROJECTS[0]; // CareerCore

  // Interactive Simulator for Placement Readiness Score (PRS)
  const [skillsRating, setSkillsRating] = useState<number>(90);
  const [projectsRating, setProjectsRating] = useState<number>(88);
  const [certificationsRating, setCertificationsRating] = useState<number>(92);
  const [assessmentsRating, setAssessmentsRating] = useState<number>(85);

  if (!isOpen) return null;

  // Dynamic PRS formula calculation: 35% skills, 30% projects, 20% certs, 15% tests
  const calculatedPRS = Math.round(
    skillsRating * 0.35 +
    projectsRating * 0.30 +
    certificationsRating * 0.20 +
    assessmentsRating * 0.15
  );

  const getReadinessTier = (score: number) => {
    if (score >= 90) return { label: 'Top Tier Employability', color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/10' };
    if (score >= 75) return { label: 'High Placement Potential', color: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-500/10' };
    return { label: 'Targeted Upskilling Needed', color: 'text-amber-400', border: 'border-amber-500/40', bg: 'bg-amber-500/10' };
  };

  const tier = getReadinessTier(calculatedPRS);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0e1422] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <Brain className="w-3.5 h-3.5" />
              <span>{project.badge} • {project.team}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title} – {project.subtitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive System Architecture &amp; Dynamic PRS Evaluation Engine
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tech Stack Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-mono">Technologies:</span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Dynamic Placement Readiness Score (PRS) Interactive Simulator */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 shadow-inner">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <div>
                <h4 className="text-sm font-bold text-white">Interactive PRS Engine Simulator</h4>
                <p className="text-xs text-slate-400">Adjust parameters below to witness how the dynamic multi-factor score is computed</p>
              </div>
            </div>
            <div className={`px-3 py-1.5 rounded-xl border ${tier.border} ${tier.bg} flex items-center gap-2 self-start sm:self-auto`}>
              <span className="text-xs font-mono text-slate-400">Computed PRS:</span>
              <span className={`text-xl font-extrabold ${tier.color} font-mono`}>{calculatedPRS}/100</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {/* Skills Slider */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-300">Verified Skills (35% wt):</span>
                <span className="text-cyan-400 font-bold">{skillsRating}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={skillsRating}
                onChange={(e) => setSkillsRating(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Projects Slider */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-300">Portfolio &amp; Projects (30% wt):</span>
                <span className="text-blue-400 font-bold">{projectsRating}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={projectsRating}
                onChange={(e) => setProjectsRating(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Certifications Slider */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-300">Certifications / Workshops (20% wt):</span>
                <span className="text-emerald-400 font-bold">{certificationsRating}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={certificationsRating}
                onChange={(e) => setCertificationsRating(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Assessments Slider */}
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-300">Diagnostic Assessments (15% wt):</span>
                <span className="text-indigo-400 font-bold">{assessmentsRating}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={assessmentsRating}
                onChange={(e) => setAssessmentsRating(Number(e.target.value))}
                className="w-full accent-indigo-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>
          </div>
          
          <div className="mt-3 text-right">
            <span className={`text-[11px] font-mono ${tier.color}`}>Status: {tier.label}</span>
          </div>
        </div>

        {/* 5 Core Emphasized Pillars */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-cyan-400">
            Core Architectural Capabilities:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {project.highlightedFeatures.map((feat) => (
              <div
                key={feat.name}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-sm font-bold text-white">{feat.name}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Features Documented in Platform:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {project.keyFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Divyashri's GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
