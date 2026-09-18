import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code, 
  Terminal, 
  Globe, 
  Database, 
  Wrench, 
  FileSpreadsheet, 
  Search, 
  Check, 
  Sparkles,
  Layers,
  Cpu,
  Monitor
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming': <Code className="w-4 h-4 text-cyan-400" />,
    'Web Development': <Globe className="w-4 h-4 text-sky-400" />,
    'Database': <Database className="w-4 h-4 text-emerald-400" />,
    'Development Tools': <Wrench className="w-4 h-4 text-amber-400" />,
    'Office Tools': <FileSpreadsheet className="w-4 h-4 text-indigo-400" />,
  };

  const allCategories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  // Flatten or filter skills
  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchesCategory = selectedCategory === 'All' || selectedCategory === cat.category;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/80">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills &amp; Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strictly categorized competency profile spanning programming, web &amp; frontend development, database systems, and development environments.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-4 mb-10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Java, SQL)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors font-mono"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            if (!group) return null;
            return (
              <div
                key={group.category}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                        {categoryIcons[group.category] || <Code className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-sm font-semibold text-slate-200 font-mono">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                          {skill.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtitle description */}
                <p className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono">
                  {group.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-cyan-400 font-mono underline hover:text-cyan-300"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
