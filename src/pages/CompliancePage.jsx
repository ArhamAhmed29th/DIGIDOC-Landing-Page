import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/common/ProgressBar';
import StatusBadge from '../components/common/StatusBadge';
import Modal from '../components/common/Modal';
import { COMPLIANCE_STANDARDS, NON_CONFORMITIES } from '../mockData/compliance';
import {
  ShieldCheck,
  Award,
  AlertTriangle,
  FileX,
  CheckCircle2,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  Plus,
  BarChart3
} from 'lucide-react';

export default function CompliancePage() {
  const navigate = useNavigate();
  const [selectedStandard, setSelectedStandard] = useState(COMPLIANCE_STANDARDS[0]);
  const [capaModalOpen, setCapaModalOpen] = useState(false);
  const [newCapaTitle, setNewCapaTitle] = useState('');
  const [capaList, setCapaList] = useState(NON_CONFORMITIES);

  const averageScore = Math.round(
    COMPLIANCE_STANDARDS.reduce((acc, curr) => acc + curr.score, 0) / COMPLIANCE_STANDARDS.length
  );

  const handleCreateCapa = (e) => {
    e.preventDefault();
    const newEntry = {
      id: `nc-${Date.now()}`,
      title: newCapaTitle || 'New Corrective Action Item',
      standard: selectedStandard.code,
      severity: 'Minor',
      status: 'Open',
      dueDate: '2025-09-30',
      assignee: 'Dr. Sarah Jenkins',
      rootCause: 'Identified during continuous monitoring walkthrough.',
      actionPlan: 'Execute updated SOP review and staff briefing.'
    };
    setCapaList([newEntry, ...capaList]);
    setCapaModalOpen(false);
    setNewCapaTitle('');
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">ISO Compliance Matrix</h1>
          <p className="text-xs text-slate-400">Multi-Standard Audit Readiness & Governance Dashboard</p>
        </div>

        <button
          onClick={() => setCapaModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Log Corrective Action (CAPA)</span>
        </button>
      </div>

      {/* Overall Score Wheel & Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950/60 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="w-24 h-24 rounded-full border-4 border-cyan-500/30 border-t-cyan-400 flex items-center justify-center bg-slate-950/80 shadow-2xl mb-3">
            <span className="text-3xl font-black text-white font-sans">{averageScore}%</span>
          </div>
          <span className="text-xs font-bold text-white tracking-wider uppercase">Overall Readiness</span>
          <span className="text-[10px] text-emerald-400 font-semibold mt-1">✓ Audit Ready State</span>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Compliant Clauses</span>
            <div className="text-3xl font-black text-emerald-400 font-sans mt-2">113 / 123</div>
            <span className="text-[10px] text-slate-500 mt-2">Satisfying ISO Audit Scope</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Active Non-Conformities</span>
            <div className="text-3xl font-black text-amber-400 font-sans mt-2">{capaList.filter(c => c.status !== 'Resolved').length} Items</div>
            <span className="text-[10px] text-slate-500 mt-2">1 Major • 1 Minor in progress</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Upcoming External Audit</span>
            <div className="text-2xl font-black text-cyan-400 font-sans mt-2">Oct 15, 2025</div>
            <span className="text-[10px] text-slate-500 mt-2">ISO 9001 Stage 2 Surveillance</span>
          </div>
        </div>
      </div>

      {/* ISO Standards Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COMPLIANCE_STANDARDS.map((std) => {
          const isSelected = selectedStandard.id === std.id;
          return (
            <div
              key={std.id}
              onClick={() => setSelectedStandard(std)}
              className={`p-5 rounded-3xl border cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'bg-gradient-to-b from-cyan-500/10 via-slate-900 to-slate-900 border-cyan-500/60 shadow-2xl scale-[1.02]'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 text-xs font-mono font-extrabold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {std.code}
                </span>
                <span className="text-xl font-black text-white">{std.score}%</span>
              </div>

              <h4 className="text-sm font-bold text-white line-clamp-1 mb-1">{std.name}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 mb-4">{std.description}</p>

              <ProgressBar progress={std.score} color={std.color} showValue={false} height="h-1.5" />

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span>Lead: {std.assignedLead}</span>
                <span className="text-cyan-400 font-semibold">View Clauses →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Selected Standard Clause Breakdown */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400">{selectedStandard.code} Breakdown</span>
            <h3 className="text-xl font-extrabold text-white tracking-tight">{selectedStandard.name}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Assigned Lead: <strong className="text-white">{selectedStandard.assignedLead}</strong></span>
          </div>
        </div>

        {/* Clauses Table */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Standard Clause Compliance Registry</h4>
          <div className="space-y-2">
            {selectedStandard.clauses.map((clause, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    Clause {clause.number}
                  </span>
                  <span className="text-xs font-bold text-white">{clause.title}</span>
                </div>
                <div className="w-32 hidden sm:block">
                  <ProgressBar progress={clause.progress} showValue={false} height="h-1.5" />
                </div>
                <StatusBadge status={clause.status} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Non-Conformities & CAPA Tracker Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-tight">Non-Conformities & CAPA Log</h3>
            <p className="text-xs text-slate-400">Corrective and preventive action tracking for audit observations</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/80 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Finding Title</th>
                <th className="px-4 py-3">Standard</th>
                <th className="px-4 py-3">Severity</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Target Date</th>
                <th className="px-4 py-3">Assignee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {capaList.map((nc) => (
                <tr key={nc.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-4 py-3 font-bold text-white">{nc.title}</td>
                  <td className="px-4 py-3 font-mono text-cyan-400">{nc.standard}</td>
                  <td className="px-4 py-3"><StatusBadge status={nc.severity} size="sm" /></td>
                  <td className="px-4 py-3"><StatusBadge status={nc.status} size="sm" /></td>
                  <td className="px-4 py-3">{nc.dueDate}</td>
                  <td className="px-4 py-3 font-semibold text-slate-200">{nc.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log CAPA Modal */}
      <Modal isOpen={capaModalOpen} onClose={() => setCapaModalOpen(false)} title="Log Corrective Action (CAPA)">
        <form onSubmit={handleCreateCapa} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Finding Title</label>
            <input
              type="text"
              required
              value={newCapaTitle}
              onChange={(e) => setNewCapaTitle(e.target.value)}
              placeholder="e.g. Audit observation in Clause 7.2 competency records"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setCapaModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl"
            >
              Save CAPA Item
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
