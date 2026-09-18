import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Shuffle, 
  Layers, 
  Github,
  Play,
  Award
} from 'lucide-react';

interface QuizMasterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Frontend & Web',
    question: 'In modern RESTful architectures, which HTTP method is typically used to update an existing resource idempotently?',
    options: ['POST', 'PUT', 'GET', 'HEAD'],
    correct: 1,
    explanation: 'PUT requests are defined as idempotent according to RFC specifications, replacing or updating the target entity state.',
  },
  {
    id: 2,
    category: 'Java & Algorithms',
    question: 'Which Java memory area holds class metadata, bytecode, and constant pool information in modern JVMs?',
    options: ['Stack Area', 'Metaspace', 'Eden Space', 'Survivor Space'],
    correct: 1,
    explanation: 'Since Java 8, Metaspace replaced PermGen and is allocated out of native memory for class metadata.',
  },
  {
    id: 3,
    category: 'Databases & SQL',
    question: 'Which property in ACID ensures that database transactions once committed will survive power loss or system crashes?',
    options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
    correct: 3,
    explanation: 'Durability guarantees that the effects of committed transactions are permanently recorded in non-volatile storage.',
  },
];

export const QuizMasterModal: React.FC<QuizMasterModalProps> = ({ isOpen, onClose }) => {
  const project = PROJECTS[1]; // QuizMaster

  const [activeTab, setActiveTab] = useState<'demo' | 'architecture'>('demo');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Simulated authentication form state for testing password validation
  const [testEmail, setTestEmail] = useState('');
  const [testPassword, setTestPassword] = useState('');
  const [authValidationMessage, setAuthValidationMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentQ = SAMPLE_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < SAMPLE_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleTestAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmail.includes('@') || !testEmail.includes('.')) {
      setAuthValidationMessage('Validation error: Please enter a valid email address.');
      return;
    }
    if (testPassword.length < 8) {
      setAuthValidationMessage('Password validation failed: Must contain at least 8 characters with alphanumeric rules.');
      return;
    }
    setAuthValidationMessage('✔ Validation Passed! Secure student session initialized.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0e1422] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{project.badge} • {project.team}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title} – {project.subtitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive Self-Assessment Platform &amp; Dynamic Quiz Engine
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle: Interactive Demo vs Architecture */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'demo'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            Interactive Quiz Engine Demo
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'architecture'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            Architecture &amp; Features Breakdown
          </button>
        </div>

        {/* Tab 1: Interactive Quiz Demo */}
        {activeTab === 'demo' && (
          <div className="space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
              {!quizFinished ? (
                <div className="space-y-4">
                  {/* Progress & Category */}
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800/80 pb-3">
                    <span className="text-cyan-400 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                      Category: {currentQ.category}
                    </span>
                    <span className="text-slate-400">
                      Question {currentQuestionIndex + 1} of {SAMPLE_QUESTIONS.length}
                    </span>
                  </div>

                  {/* Question Text */}
                  <p className="text-sm sm:text-base font-semibold text-white pt-1">
                    {currentQ.question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {currentQ.options.map((opt, i) => {
                      let btnStyle = "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700";
                      
                      if (isAnswered) {
                        if (i === currentQ.correct) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold";
                        } else if (selectedOption === i) {
                          btnStyle = "bg-rose-500/20 border-rose-500/60 text-rose-300";
                        } else {
                          btnStyle = "bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(i)}
                          disabled={isAnswered}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-mono transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && i === currentQ.correct && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                          )}
                          {isAnswered && selectedOption === i && i !== currentQ.correct && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation */}
                  {isAnswered && (
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1 animate-in fade-in">
                      <span className="font-semibold text-slate-200 block">Explanation:</span>
                      <p className="text-slate-400 leading-relaxed">{currentQ.explanation}</p>
                    </div>
                  )}

                  {/* Next Question / Finish Button */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono text-slate-400">
                      Score: <strong className="text-cyan-400">{score}</strong>
                    </span>
                    {isAnswered && (
                      <button
                        onClick={handleNext}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                      >
                        {currentQuestionIndex === SAMPLE_QUESTIONS.length - 1 ? 'View Results' : 'Next Question →'}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Quiz Engine Assessment Complete</h4>
                  <p className="text-xs text-slate-400">
                    You scored <strong className="text-cyan-400 text-base">{score}</strong> out of {SAMPLE_QUESTIONS.length}
                  </p>
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again (Randomized Engine)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Test Authentication & Validation Engine Preview */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">
                  Test Student Authentication Validation Engine
                </h4>
              </div>
              <form onSubmit={handleTestAuth} className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <input
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="student@mite.ac.in"
                  className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs focus:outline-none focus:border-cyan-500"
                />
                <input
                  type="password"
                  value={testPassword}
                  onChange={(e) => setTestPassword(e.target.value)}
                  placeholder="Password (8+ chars)"
                  className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-xs focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-cyan-300"
                >
                  Verify Access
                </button>
              </form>
              {authValidationMessage && (
                <p className={`text-xs font-mono ${authValidationMessage.includes('Passed') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {authValidationMessage}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Architecture & Features Breakdown */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.highlightedFeatures.map((feat) => (
                <div
                  key={feat.name}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold text-white">{feat.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">All Verified Project Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Close QuizMaster
          </button>
        </div>

      </div>
    </div>
  );
};
