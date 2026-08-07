import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export default function IsoStandards({ onOpenDemoModal }) {
  return (
    <section id="iso-standards" className="py-20 lg:py-28 relative bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Purpose-Built for ISO Standards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Supported International ISO Standards
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Pre-configured templates, clause mappings, and audit checklists for major management system standards.
          </p>
        </div>

        {/* ISO Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* ISO 9001 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 font-extrabold text-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              9001
            </div>
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Quality Management</span>
            <h3 className="text-xl font-bold text-white mt-1">ISO 9001</h3>
            <p className="text-xs text-slate-400 mt-2">Quality Management System (QMS) manuals, SOPs, CAPAs, and customer feedback logs.</p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Clause 4 to 10 Ready</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
            </div>
          </div>

          {/* ISO 27001 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-accent-cyan/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 text-accent-cyan font-extrabold text-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              27001
            </div>
            <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider">Information Security</span>
            <h3 className="text-xl font-bold text-white mt-1">ISO 27001</h3>
            <p className="text-xs text-slate-400 mt-2">Information Security Management System (ISMS), Annex A controls, risk assessments.</p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Annex A Controls Ready</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-cyan" />
            </div>
          </div>

          {/* ISO 14001 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold text-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              14001
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Environmental</span>
            <h3 className="text-xl font-bold text-white mt-1">ISO 14001</h3>
            <p className="text-xs text-slate-400 mt-2">Environmental Management System (EMS), environmental aspect registers & compliance obligations.</p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>EMS Framework Ready</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* ISO 45001 */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              45001
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Health & Safety</span>
            <h3 className="text-xl font-bold text-white mt-1">ISO 45001</h3>
            <p className="text-xs text-slate-400 mt-2">Occupational Health & Safety (OH&S), hazard identification registers, and workplace incident logs.</p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>OH&S System Ready</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </div>

        </div>

        {/* And Many More Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-brand-950 via-slate-900 to-slate-950 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">And many more...</h4>
              <p className="text-xs text-slate-400">Custom mapping for ISO 22000 (Food Safety), ISO 13485 (Medical Devices), ISO 50001 (Energy Management).</p>
            </div>
          </div>

          <button onClick={onOpenDemoModal} className="px-5 py-2.5 bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs rounded-xl transition-colors whitespace-nowrap">
            Configure Custom Standard
          </button>
        </div>

      </div>
    </section>
  );
}
