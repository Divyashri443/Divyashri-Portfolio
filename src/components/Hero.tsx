import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  FileText, 
  Download,
  Mail, 
  Terminal, 
  Code, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  Cpu,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'blogapi' | 'careercore' | 'terminal'>('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Tech Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="font-mono text-cyan-400 font-semibold">Status:</span>
              <span>Available for Placements & Internships</span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium tracking-wide">
                &lt;developer /&gt;
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 pt-1 justify-center lg:justify-start">
                <span className="text-white">Information Science &amp; Engineering Student</span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="text-cyan-400 font-mono">Frontend Developer</span>
              </div>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Academic Credential Highlights */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
                <span className="text-xs text-slate-400 block font-mono">BE CGPA</span>
                <span className="text-lg sm:text-xl font-bold text-cyan-400">9.29</span>
                <span className="text-[10px] text-slate-500 block truncate">MITE (ISE)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
                <span className="text-xs text-slate-400 block font-mono">12th Score</span>
                <span className="text-lg sm:text-xl font-bold text-sky-400">93.5%</span>
                <span className="text-[10px] text-slate-500 block truncate">KSEAB</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left">
                <span className="text-xs text-slate-400 block font-mono">SSLC Score</span>
                <span className="text-lg sm:text-xl font-bold text-blue-400">96.32%</span>
                <span className="text-[10px] text-slate-500 block truncate">KSEEB</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Action: View & Download Actual PDF */}
              <div className="inline-flex items-center rounded-xl bg-slate-800/90 border border-slate-700 text-white shadow-sm overflow-hidden p-0.5">
                <a
                  href="/Divyashri_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-view-resume-btn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold hover:text-cyan-300 hover:bg-slate-700/60 transition-colors"
                  title="View actual resume PDF in a new tab"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </a>
                <span className="w-px h-5 bg-slate-700" />
                <a
                  href="/Divyashri_Resume.pdf"
                  download="Divyashri_Resume.pdf"
                  id="hero-download-resume-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-semibold hover:text-cyan-300 hover:bg-slate-700/60 transition-colors"
                  title="Download actual resume PDF"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download</span>
                </a>
              </div>

              <a
                href="#contact"
                id="hero-contact-me-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Copy */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 border-t border-slate-800/70">
              <span className="text-xs text-slate-400 font-mono">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Code & Terminal Window */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-75" />

            {/* Code Window Card */}
            <div 
              id="hero-code-editor-card"
              className="relative rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl"
            >
              {/* Window Titlebar */}
              <div className="px-4 py-3 bg-[#080d16] border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">divyashri-workspace</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>v2026.09</span>
                </div>
              </div>

              {/* Editor Tabs */}
              <div className="flex items-center overflow-x-auto bg-[#0b101c] border-b border-slate-800/80 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-4 py-2 flex items-center gap-1.5 border-r border-slate-800 transition-colors whitespace-nowrap ${
                    activeTab === 'profile'
                      ? 'bg-[#0e1422] text-cyan-300 font-medium border-t-2 border-t-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Profile.json</span>
                </button>
                <button
                  onClick={() => setActiveTab('blogapi')}
                  className={`px-4 py-2 flex items-center gap-1.5 border-r border-slate-800 transition-colors whitespace-nowrap ${
                    activeTab === 'blogapi'
                      ? 'bg-[#0e1422] text-cyan-300 font-medium border-t-2 border-t-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>BlogAPI.js</span>
                </button>
                <button
                  onClick={() => setActiveTab('careercore')}
                  className={`px-4 py-2 flex items-center gap-1.5 border-r border-slate-800 transition-colors whitespace-nowrap ${
                    activeTab === 'careercore'
                      ? 'bg-[#0e1422] text-cyan-300 font-medium border-t-2 border-t-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>CareerCore.js</span>
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-4 py-2 flex items-center gap-1.5 border-r border-slate-800 transition-colors whitespace-nowrap ${
                    activeTab === 'terminal'
                      ? 'bg-[#0e1422] text-cyan-300 font-medium border-t-2 border-t-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Terminal</span>
                </button>
              </div>

              {/* Editor Content Area */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[320px] bg-[#0e1422] text-slate-300">
                {activeTab === 'profile' && (
                  <pre className="text-slate-300 space-y-1">
                    <code>
                      <span className="text-slate-500">1</span>  &#123;{'\n'}
                      <span className="text-slate-500">2</span>    <span className="text-sky-300">"candidate"</span>: <span className="text-amber-300">"DIVYASHRI"</span>,{'\n'}
                      <span className="text-slate-500">3</span>    <span className="text-sky-300">"degree"</span>: <span className="text-emerald-300">"B.E. Information Science &amp; Engineering"</span>,{'\n'}
                      <span className="text-slate-500">4</span>    <span className="text-sky-300">"internship"</span>: <span className="text-cyan-300">"Full Stack Developer Intern"</span>,{'\n'}
                      <span className="text-slate-500">5</span>    <span className="text-sky-300">"languages"</span>: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"JavaScript"</span>],{'\n'}
                      <span className="text-slate-500">6</span>    <span className="text-sky-300">"databases"</span>: [<span className="text-amber-300">"SQL"</span>, <span className="text-amber-300">"MongoDB"</span>]{'\n'}
                      <span className="text-slate-500">7</span>  &#125;
                    </code>
                  </pre>
                )}

                {activeTab === 'blogapi' && (
                  <pre className="text-slate-300 space-y-1">
                    <code>
                      <span className="text-slate-500">1</span>  <span className="text-slate-500">// InnoByte Services - Full Stack Developer Intern</span>{'\n'}
                      <span className="text-slate-500">2</span>  <span className="text-blue-400">const</span> express = require(<span className="text-amber-300">'express'</span>);{'\n'}
                      <span className="text-slate-500">3</span>  <span className="text-blue-400">const</span> router = express.Router();{'\n'}
                      <span className="text-slate-500">4</span>  {'\n'}
                      <span className="text-slate-500">5</span>  <span className="text-slate-500">// RESTful CRUD Endpoints</span>{'\n'}
                      <span className="text-slate-500">6</span>  router.get(<span className="text-amber-300">'/api/posts'</span>, getArticles);{'\n'}
                      <span className="text-slate-500">7</span>  router.post(<span className="text-amber-300">'/api/posts'</span>, createPost);{'\n'}
                      <span className="text-slate-500">8</span>  router.put(<span className="text-amber-300">'/api/posts/:id'</span>, updatePost);{'\n'}
                      <span className="text-slate-500">9</span>  router.delete(<span className="text-amber-300">'/api/posts/:id'</span>, deletePost);{'\n'}
                      <span className="text-slate-500">10</span> {'\n'}
                      <span className="text-slate-500">11</span> <span className="text-slate-500">// Code debugging and optimization</span>{'\n'}
                      <span className="text-slate-500">12</span> module.exports = router;
                    </code>
                  </pre>
                )}

                {activeTab === 'careercore' && (
                  <pre className="text-slate-300 space-y-1">
                    <code>
                      <span className="text-slate-500">1</span>  <span className="text-slate-500">// CareerCore - Placement Intelligence Platform</span>{'\n'}
                      <span className="text-slate-500">2</span>  <span className="text-blue-400">const</span> express = require(<span className="text-amber-300">'express'</span>);{'\n'}
                      <span className="text-slate-500">3</span>  <span className="text-blue-400">const</span> router = express.Router();{'\n'}
                      <span className="text-slate-500">4</span>  {'\n'}
                      <span className="text-slate-500">5</span>  <span className="text-slate-500">// Placement Readiness Score (PRS) API</span>{'\n'}
                      <span className="text-slate-500">6</span>  router.post(<span className="text-amber-300">'/api/students/prs'</span>, async (req, res) =&gt; &#123;{'\n'}
                      <span className="text-slate-500">7</span>    <span className="text-blue-400">const</span> &#123; studentId, skills, assessments &#125; = req.body;{'\n'}
                      <span className="text-slate-500">8</span>    <span className="text-blue-400">const</span> report = await generatePlacementReport(studentId);{'\n'}
                      <span className="text-slate-500">9</span>    res.json(&#123; status: <span className="text-amber-300">'success'</span>, report &#125;);{'\n'}
                      <span className="text-slate-500">10</span> &#125;);{'\n'}
                      <span className="text-slate-500">11</span> {'\n'}
                      <span className="text-slate-500">12</span> module.exports = router;
                    </code>
                  </pre>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 text-emerald-400">
                    <p className="text-slate-400">&gt; npm run portfolio:check</p>
                    <p>✔ Candidate: DIVYASHRI</p>
                    <p>✔ Academic Standing: Mangalore Institute of Tech. &amp; Eng. (9.29 CGPA)</p>
                    <p>✔ Internship: InnoByte Services (Nov 2025)</p>
                    <p>✔ Featured Project: CareerCore [Placement Intelligence Platform]</p>
                    <p>✔ Interactive Project: QuizMaster [Web-Based Quiz Application]</p>
                    <p className="text-cyan-300">&gt; Ready for Recruiter Review: 100% Match</p>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-[#080d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> UTF-8
                  </span>
                  <span>TypeScript / React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Build: Passing</span>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-5 -left-4 sm:bottom-4 sm:-left-6 bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 animate-bounce-subtle">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">9.29 CGPA</span>
                <span className="text-[11px] text-slate-400 block">MITE Information Science</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
