import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  BookOpen
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-slate-800/80 bg-[#080d16]/40">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education History
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic journey from secondary education to engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-10 border-l-2 border-slate-800 space-y-10">
            {EDUCATION.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                id={`education-node-${index}`}
              >
                {/* Timeline Pin */}
                <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-8 h-8 rounded-full bg-[#0b0f17] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-200">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Timeline Card */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-md hover:border-slate-700/80 transition-all duration-300 shadow-xl space-y-4">
                  
                  {/* Top Bar: Degree & Year */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      {item.status && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-1.5 w-fit">
                          {item.status}
                        </span>
                      )}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 self-start sm:self-auto shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Institution & Score Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    
                    {/* Institution Details */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-200">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      {item.board && (
                        <p className="text-xs font-mono text-slate-400 pl-6">
                          Board: <strong className="text-slate-300 font-semibold">{item.board}</strong>
                        </p>
                      )}
                    </div>

                    {/* Score Metric Pill */}
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center gap-3 shrink-0 self-start sm:self-auto shadow-inner">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-base sm:text-lg font-bold text-cyan-300 block font-mono">
                          {item.scoreValue}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {item.scoreLabel}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
