import React, { useState } from 'react';
import { ACHIEVEMENTS, AchievementItem } from '../data/portfolioData';
import { 
  Award, 
  BookOpen, 
  Cpu, 
  Flag, 
  Calendar, 
  Building
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'certification' | 'workshop' | 'competition'>('all');

  const filteredItems = ACHIEVEMENTS.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'workshop':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'competition':
        return <Flag className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getTypeBadge = (item: AchievementItem) => {
    switch (item.type) {
      case 'certification':
        return { 
          label: item.categoryLabel || 'Certification', 
          color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' 
        };
      case 'workshop':
        return { 
          label: item.categoryLabel || 'Workshop', 
          color: 'bg-sky-500/10 text-sky-300 border-sky-500/30' 
        };
      case 'competition':
        return { 
          label: item.categoryLabel || 'Competition', 
          color: 'bg-amber-500/10 text-amber-300 border-amber-500/30' 
        };
      default:
        return { 
          label: 'Activity', 
          color: 'bg-slate-800 text-slate-300 border-slate-700' 
        };
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t border-slate-800/80">
      
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Learning &amp; Participation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Courses &amp; Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Certifications, workshops, and participation experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            All ({ACHIEVEMENTS.length})
          </button>
          <button
            onClick={() => setFilter('certification')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'certification'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setFilter('workshop')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'workshop'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Workshops
          </button>
          <button
            onClick={() => setFilter('competition')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'competition'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Competitions
          </button>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const badge = getTypeBadge(item);
            return (
              <div
                key={item.id}
                className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon & Type Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(item.type)}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Issuer details */}
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.issuer}</span>
                    </div>
                    {item.year && (
                      <div className="flex items-center gap-2 font-mono text-slate-400 text-[11px]">
                        <Calendar className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{item.year}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
