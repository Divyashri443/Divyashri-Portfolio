import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText 
} from 'lucide-react';

/**
 * =========================================================================
 * RESUME CONFIGURATION INSTRUCTIONS:
 * 
 * To place or update your actual resume PDF:
 * 1. Place your PDF file in the `/public` directory:
 *    `/public/Divyashri_Resume.pdf`
 * 
 * 2. Vite and modern web hosts serve files in `/public` at root path:
 *    `/Divyashri_Resume.pdf`
 * 
 * The app will always open and download this exact file directly without
 * rewriting, summarizing, or modifying any information.
 * =========================================================================
 */
export const RESUME_PATH = '/Divyashri_Resume.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-[#0e1422] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar with View & Download Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Divyashri — Resume</h3>
              <p className="text-xs text-slate-400 font-mono">Original PDF Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Resume Option (New Tab) */}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
              id="modal-view-resume-btn"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </a>

            {/* Download Resume Option */}
            <a
              href={RESUME_PATH}
              download="Divyashri_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
              id="modal-download-resume-btn"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
              aria-label="Close modal"
              id="modal-close-resume-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Document Viewer */}
        <div className="flex-1 w-full h-full bg-slate-950 relative overflow-hidden">
          <iframe
            src={`${RESUME_PATH}#toolbar=1&navpanes=0`}
            title="Divyashri Resume PDF"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
