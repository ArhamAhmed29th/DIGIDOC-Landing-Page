import React from 'react';
import { Clock, ShieldAlert, Eye, Globe2 } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Why Choose DIGIDOC
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built for ISO Compliance Excellence
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Empowering quality leaders, auditors, and operations teams worldwide.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-brand-500/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-400 mx-auto flex items-center justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Reduce Audit Preparation Time</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Drastically cut audit preparation overhead from weeks to minutes with single-click clause reports.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-brand-500/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 text-accent-cyan mx-auto flex items-center justify-center">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Avoid Errors & Duplication</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eliminate redundant file copies, unapproved desktop drafts, and accidental use of obsolete SOPs.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-brand-500/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Improve Transparency & Accountability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full visibility into document sign-off status, user permissions, and immutable revision histories.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 hover:border-brand-500/40 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 mx-auto flex items-center justify-center">
              <Globe2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Support Remote & Multi-Site Teams</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unified cloud governance allowing multi-branch teams to collaborate securely from anywhere.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
