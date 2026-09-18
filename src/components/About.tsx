import React from 'react';
import { PERSONAL_INFO, EDUCATION, INTERNSHIP } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  Code2, 
  Database, 
  Sparkles, 
  Award, 
  Target, 
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80 bg-[#080d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Information Science &amp; Engineering student passionate about frontend development, user-friendly web interfaces, JavaScript, React.js, and building practical web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Professional Narrative Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Background</h3>
                  <p className="text-xs text-slate-400 font-mono">B.E. Information Science &amp; Engineering</p>
                </div>
              </div>

              {/* Exact professional summary as provided */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am an <strong className="text-white font-semibold">Information Science &amp; Engineering student</strong> at Mangalore Institute of Technology and Engineering, passionate about <span className="text-cyan-300 font-medium">frontend development</span>, <span className="text-cyan-300 font-medium">user-friendly web interfaces</span>, JavaScript, React.js, and building practical web applications.
                </p>
                <p>
                  I enjoy building practical web applications, developing responsive user interfaces, working with databases, and improving my programming and frontend development skills.
                </p>
                <p>
                  Through my academic projects and internship experience, I have gained practical exposure to web development, RESTful APIs, CRUD operations, debugging, and building user-focused applications.
                </p>
              </div>

              {/* Core Pillars based strictly on profile data */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Frontend Development</h4>
                    <p className="text-[12px] text-slate-400">React.js, JavaScript, HTML, CSS &amp; responsive UI</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Problem Solving &amp; Development</h4>
                    <p className="text-[12px] text-slate-400">Strong foundation in programming, web development, databases, and building practical software applications.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Database Development</h4>
                    <p className="text-[12px] text-slate-400">Structured SQL and MongoDB document persistence</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Web &amp; API Integration</h4>
                    <p className="text-[12px] text-slate-400">RESTful architecture, CRUD operations &amp; project integration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="mt-8 pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span>Location: Karnataka, India</span>
              <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: Academic & Internship Key Stats Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Academic Standing Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Academic Record</h3>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Consistently Top Tier
                </span>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-slate-200">{edu.degree}</p>
                      <p className="text-[11px] text-slate-400 truncate max-w-[220px]">{edu.institution}</p>
                      <span className="text-[10px] font-mono text-slate-500">{edu.duration}</span>
                    </div>
                    <div className="text-right shrink-0 pl-3">
                      <span className="text-base font-bold text-cyan-400 block">{edu.scoreValue}</span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{edu.scoreLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Internship Callout */}
            <div className="bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-blue-950/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-3">
                <Briefcase className="w-5 h-5 text-sky-400" />
                <h3 className="text-base font-bold text-white">Industry Experience</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Completed professional internship at <strong className="text-white">InnoByte Services</strong> (Nov 2025) developing RESTful Blog APIs and implementing high-efficiency CRUD operations.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-cyan-300">
                <span className="px-2 py-1 rounded bg-slate-800/90 border border-slate-700">RESTful Architecture</span>
                <span className="px-2 py-1 rounded bg-slate-800/90 border border-slate-700">CRUD Operations</span>
                <span className="px-2 py-1 rounded bg-slate-800/90 border border-slate-700">Code Optimization</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
