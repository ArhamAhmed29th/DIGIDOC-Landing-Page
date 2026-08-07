import React from 'react';
import { Check } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
            Transformative Value
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            How DIGIDOC Helps Your Organization
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Purpose-built to eliminate document control bottlenecks and simplify external ISO audits.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-brand-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Control, track and secure every policy, procedure and record</h4>
              <p className="mt-1 text-sm text-slate-400">Maintain total authority over all document lifecycle phases, eliminating unapproved edits across enterprise sites.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-brand-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Automate review and approval workflows</h4>
              <p className="mt-1 text-sm text-slate-400">Automate review cycles with automated routing, email notifications, and escalation timers for management sign-offs.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-brand-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Maintain a complete auditable history of changes</h4>
              <p className="mt-1 text-sm text-slate-400">Provide auditors with tamper-proof digital logs showing every creation, edit, approval, and distribution event.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4 hover:border-brand-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Ensure everyone always works with the latest approved version</h4>
              <p className="mt-1 text-sm text-slate-400">Obsolete SOPs are automatically archived and watermarked, preventing employees from using outdated procedures.</p>
            </div>
          </div>

        </div>

        {/* 4 Step Workflow Pipeline */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Streamlined 4-Step ISO Compliance Pipeline</h3>
            <p className="text-slate-400 text-xs sm:text-sm">From initial document draft to audit defense</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-300 text-xs font-bold flex items-center justify-center">01</div>
              <h5 className="font-bold text-white text-base">Draft & Template</h5>
              <p className="text-xs text-slate-400">Author policies using standard ISO clause templates.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 text-accent-cyan text-xs font-bold flex items-center justify-center">02</div>
              <h5 className="font-bold text-white text-base">Automated Review</h5>
              <p className="text-xs text-slate-400">Route automatically to assigned QA reviewers.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">03</div>
              <h5 className="font-bold text-white text-base">E-Signature Seal</h5>
              <p className="text-xs text-slate-400">Cryptographically sign and lock official release.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center justify-center">04</div>
              <h5 className="font-bold text-white text-base">Audit Ready</h5>
              <p className="text-xs text-slate-400">Export clause mapping matrix for auditors anytime.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
