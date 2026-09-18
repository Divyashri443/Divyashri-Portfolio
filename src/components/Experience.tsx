import React, { useState } from 'react';
import { INTERNSHIP } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Server, 
  ArrowRight,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('GET');

  const apiEndpoints = [
    {
      method: 'GET',
      path: '/api/v1/posts',
      desc: 'Retrieves paginated blog articles with query filtering',
      status: '200 OK',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      sample: '[\n  {\n    "id": "post_101",\n    "title": "Scalable REST APIs",\n    "author": "Divyashri",\n    "status": "published"\n  }\n]'
    },
    {
      method: 'POST',
      path: '/api/v1/posts',
      desc: 'Creates a new blog record with schema validation',
      status: '201 Created',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      sample: '{\n  "title": "New Blog Post",\n  "content": "CRUD Implementation",\n  "tags": ["Node.js", "Express"]\n}'
    },
    {
      method: 'PUT',
      path: '/api/v1/posts/:id',
      desc: 'Idempotent update of post metadata and contents',
      status: '200 OK',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      sample: '{\n  "id": "post_101",\n  "updatedAt": "2025-11-20T10:00:00Z",\n  "version": 2\n}'
    },
    {
      method: 'DELETE',
      path: '/api/v1/posts/:id',
      desc: 'Soft or permanent removal of post entity',
      status: '204 No Content',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      sample: '// Post successfully removed from database persistence'
    }
  ];

  const currentEndpoint = apiEndpoints.find(e => e.method === selectedEndpoint) || apiEndpoints[0];

  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/80">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical development experience gained through a Full Stack Developer internship.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#0b0f17] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30">
              <Server className="w-4 h-4" />
            </div>

            {/* InnoByte Services Main Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {INTERNSHIP.company}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                    {INTERNSHIP.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{INTERNSHIP.duration}</span>
                </div>
              </div>

              {/* Exact Description Provided */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Internship Responsibilities &amp; Outcomes:
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-2xl border border-slate-800/70">
                  "{INTERNSHIP.description}"
                </p>
              </div>

              {/* Focus Pillars & Competencies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Blog API Project</span>
                    <span className="text-[12px] text-slate-400">Developed a Blog API using RESTful architecture.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">CRUD Operations</span>
                    <span className="text-[12px] text-slate-400">Implemented create, retrieve, update, and delete operations for data handling.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Debugging &amp; Code Optimization</span>
                    <span className="text-[12px] text-slate-400">Gained practical experience in debugging and improving code quality.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Team Collaboration</span>
                    <span className="text-[12px] text-slate-400">Improved problem-solving and teamwork through project development.</span>
                  </div>
                </div>
              </div>

              {/* Interactive RESTful Architecture Visualizer */}
              <div className="mt-4 pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    Interactive RESTful Architecture Inspector:
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">InnoByte Blog API Schema</span>
                </div>

                {/* HTTP Method Switcher */}
                <div className="flex flex-wrap gap-2">
                  {apiEndpoints.map((ep) => (
                    <button
                      key={ep.method}
                      onClick={() => setSelectedEndpoint(ep.method)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                        selectedEndpoint === ep.method
                          ? ep.color + ' shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {ep.method}
                    </button>
                  ))}
                </div>

                {/* Selected Endpoint Display */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-bold border ${currentEndpoint.color}`}>
                        {currentEndpoint.method}
                      </span>
                      <span className="text-slate-200">{currentEndpoint.path}</span>
                    </div>
                    <span className="text-slate-400">{currentEndpoint.status}</span>
                  </div>
                  <p className="text-xs text-slate-400">{currentEndpoint.desc}</p>
                  <pre className="p-2.5 rounded bg-[#0b0f17] text-[11px] font-mono text-slate-300 overflow-x-auto border border-slate-800/60">
                    <code>{currentEndpoint.sample}</code>
                  </pre>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
