import React, { useState } from 'react';
import { Sparkles, CalendarCheck, ChevronDown, ShieldCheck, Lock, CheckCircle2, Folder, Clock, CheckCheck, Plus, Download } from 'lucide-react';

export default function Hero({ onOpenDemoModal, onShowToast }) {
  const [activeDocVersion, setActiveDocVersion] = useState('v3.2');

  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
            Enterprise Grade ISO Compliance Solution
            <Sparkles className="w-4 h-4 text-accent-cyan" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            Simplify Your <span className="text-gradient">ISO Compliance</span> Documentation with <span className="text-white">DIGI<span className="text-brand-400">DOC</span></span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-300 tracking-wide">
            Stay Compliant. Stay Organized. Stay Confident.
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Achieving and maintaining ISO certification can be complex, but managing your documentation doesn't have to be. DIGIDOC provides an intelligent, auditable document management platform.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-500 via-brand-600 to-accent-teal hover:from-brand-400 hover:to-accent-cyan text-white font-bold text-base rounded-xl shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Request Demo</span>
              <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-base rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Learn More</span>
              <ChevronDown className="w-5 h-5 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Audit-Ready History</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-brand-400" /> 256-Bit Encrypted Repository</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent-cyan" /> Multi-Standard Ready</span>
          </div>
        </div>

        {/* Product UI Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-accent-teal to-accent-cyan rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Mockup Window Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" /> app.digidoccloud.com/qms/iso-9001/documents
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded font-mono">
                  ISO 9001:2015 Compliant
                </span>
                <div className="w-6 h-6 rounded-full bg-brand-900 text-brand-300 text-xs flex items-center justify-center font-bold">
                  QA
                </div>
              </div>
            </div>

            {/* Mockup Body Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-900">
              
              {/* Left Sidebar */}
              <div className="md:col-span-3 p-4 space-y-3 bg-slate-950/50">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span>Repositories</span>
                  <Plus className="w-3.5 h-3.5" />
                </div>

                <div className="space-y-1 text-sm font-medium">
                  <div className="px-3 py-2 rounded-lg bg-brand-500/10 text-brand-300 border border-brand-500/20 flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Folder className="w-4 h-4 text-brand-400" /> Quality Manual
                    </span>
                    <span className="text-[10px] bg-brand-500/30 text-brand-200 px-1.5 py-0.5 rounded">8 Docs</span>
                  </div>

                  <div className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Folder className="w-4 h-4 text-slate-500" /> Info Security
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">14 Docs</span>
                  </div>

                  <div className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Folder className="w-4 h-4 text-slate-500" /> EHS Policies
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">6 Docs</span>
                  </div>

                  <div className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" /> Audit Logs
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-slate-900 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                    <span>Audit Readiness</span>
                    <span>98.4%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-1.5 rounded-full" style={{width: '98.4%'}}></div>
                  </div>
                  <p className="text-[10px] text-slate-400">All mandatory clauses verified</p>
                </div>
              </div>

              {/* Center Pane */}
              <div className="md:col-span-6 p-5 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
                        APPROVED
                      </span>
                      <span className="text-xs font-mono text-slate-400">DOC-QMS-2026-042</span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">SOP: Corrective Action & Root Cause (CAPA)</h3>
                  </div>

                  <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
                    {['v3.0', 'v3.1', 'v3.2'].map(v => (
                      <button 
                        key={v}
                        onClick={() => setActiveDocVersion(v)}
                        className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                          activeDocVersion === v 
                            ? 'bg-brand-500 text-white font-bold shadow' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-900">
                    <span>Clause: ISO 9001:2015 (10.2 Nonconformity)</span>
                    <span>Effective: 2026-07-01</span>
                  </div>

                  <div className="text-slate-300 space-y-2">
                    <p className="text-emerald-400/90 font-sans leading-relaxed">
                      <strong className="font-bold">1. Purpose:</strong> Defines mandatory procedures for logging, investigating, and resolving non-conformities across enterprise sites.
                    </p>

                    {activeDocVersion === 'v3.2' ? (
                      <div className="p-2 rounded bg-emerald-950/40 border-l-2 border-emerald-400 text-emerald-300 font-sans text-xs">
                        ✨ <strong>v3.2 Update:</strong> Added automated root-cause 5-Why matrix and digital sign-off threshold for high-risk findings.
                      </div>
                    ) : (
                      <div className="p-2 rounded bg-slate-900 text-slate-400 font-sans text-xs">
                        [Showing version {activeDocVersion} - Legacy record]
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-brand-950/40 border border-brand-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center">
                      <CheckCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Electronically Signed & Sealed</div>
                      <div className="text-[10px] text-slate-400">SHA-256 Digest: 8f92a1...49c0e | Timestamped 2026-07-20</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-300 bg-brand-500/20 px-2.5 py-1 rounded-lg border border-brand-500/30">
                    Verified
                  </span>
                </div>

              </div>

              {/* Right Sidebar: Live Audit Log */}
              <div className="md:col-span-3 p-4 bg-slate-950/50 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span>Live Audit Trail</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-bold text-brand-400">E-Signature Recorded</span>
                      <span className="text-[10px] text-slate-500">2m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Dr. Sarah Vance approved SOP-QMS-2026-042 (v3.2)</p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-bold text-accent-cyan">Automated Versioning</span>
                      <span className="text-[10px] text-slate-500">18m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Version 3.2 created from draft revision</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button onClick={() => onShowToast("Exporting immutable audit log PDF...")} className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-800 transition-colors flex items-center justify-center gap-1.5">
                    <Download className="w-3.5 h-3.5 text-brand-400" /> Export Log
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
