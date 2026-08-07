import React from 'react';
import { ShieldCheck, History, FileCheck2, Database, CalendarClock, Search } from 'lucide-react';

const featuresList = [
  {
    icon: ShieldCheck,
    title: 'Role-based access control & permissions',
    description: 'Granular administrative, author, reviewer, auditor, and read-only permissions to strictly safeguard sensitive compliance documentation.',
    color: 'text-brand-400 bg-brand-500/10 border-brand-500/30 hover:border-brand-500/60',
  },
  {
    icon: History,
    title: 'Automated versioning & audit trails',
    description: 'Seamless version control with timestamped, immutable audit trails recording every creation, modification, approval, and archive event.',
    color: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30 hover:border-accent-cyan/60',
  },
  {
    icon: FileCheck2,
    title: 'Electronic approvals & e-signatures',
    description: 'Multi-tier digital sign-off workflows with cryptographic e-signatures compliant with ISO regulatory audit standards.',
    color: 'text-brand-400 bg-brand-500/10 border-brand-500/30 hover:border-brand-500/60',
  },
  {
    icon: Database,
    title: 'Secure centralized repository',
    description: 'Single source of truth cloud vault for all quality manuals, policies, SOPs, work instructions, and compliance records.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/60',
  },
  {
    icon: CalendarClock,
    title: 'Retention & disposal policies',
    description: 'Automate lifecycle schedules, periodic review reminders, archive rules, and certified disposal destruction logs.',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30 hover:border-amber-500/60',
  },
  {
    icon: Search,
    title: 'Fast search & retrieval',
    description: 'Instant full-text optical search and clause-indexed metadata filtering to retrieve any record in seconds during audits.',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30 hover:border-purple-500/60',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 relative bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Comprehensive Tools for ISO Compliance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything your organization needs to manage policies, procedures, and audit preparation seamlessly.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 group hover:border-brand-500/40"
              >
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all ${feature.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
