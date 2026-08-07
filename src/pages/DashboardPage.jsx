import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/common/StatCard';
import ProgressBar from '../components/common/ProgressBar';
import StatusBadge from '../components/common/StatusBadge';
import DataTable from '../components/common/DataTable';
import Timeline from '../components/common/Timeline';
import { MOCK_DOCUMENTS } from '../mockData/documents';
import { AUDIT_LOGS } from '../mockData/auditLogs';
import { COMPLIANCE_STANDARDS } from '../mockData/compliance';
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Calendar,
  Upload,
  Shield,
  FileCheck,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Bell,
  Sparkles
} from 'lucide-react';

export default function DashboardPage() {
  const navigate = useNavigate();

  const recentDocs = MOCK_DOCUMENTS.slice(0, 5);

  const docTableColumns = [
    {
      key: 'title',
      label: 'Document Name',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white group-hover:text-cyan-400 transition-colors block text-xs">
              {val}
            </span>
            <span className="text-[10px] text-slate-500">{row.code}</span>
          </div>
        </div>
      )
    },
    { key: 'category', label: 'Category' },
    { key: 'isoStandard', label: 'ISO Standard' },
    { key: 'version', label: 'Version' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => <StatusBadge status={val} size="sm" />
    },
    { key: 'reviewDate', label: 'Review Date' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-brand-950/60 border border-slate-800 p-6 md:p-8 shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> ISO Enterprise Governance Active
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Enterprise Compliance Dashboard
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
              Welcome back, <span className="font-semibold text-white">Dr. Sarah Jenkins</span>. All ISO 9001, 27001, 14001, and 45001 registries are active with <span className="text-emerald-400 font-semibold">94.2% overall compliance</span>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/app/upload')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-all duration-200"
            >
              <Upload className="w-4 h-4" />
              <span>Upload New Document</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Total Documents"
          value="142"
          change="+6 this mo."
          trend="up"
          icon={FileText}
          color="cyan"
          description="Managed across 5 departments"
        />
        <StatCard
          title="Approved Documents"
          value="118"
          change="83% Rate"
          trend="up"
          icon={CheckCircle2}
          color="emerald"
          description="Fully signed & published"
        />
        <StatCard
          title="Pending Reviews"
          value="12"
          change="SLA 3 days"
          trend="down"
          icon={Clock}
          color="amber"
          description="Awaiting manager sign-off"
        />
        <StatCard
          title="Expired Documents"
          value="4"
          change="Action Req."
          trend="down"
          icon={AlertTriangle}
          color="rose"
          description="Exceeded review window"
        />
        <StatCard
          title="Due Soon (30d)"
          value="8"
          change="Scheduled"
          trend="up"
          icon={Calendar}
          color="brand"
          description="Upcoming annual reviews"
        />
      </div>

      {/* Main Grid: Compliance Progress & Quick Actions & Visual Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compliance Scorecards & Progress */}
        <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>ISO Standards Compliance Overview</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Real-time clause completion metrics across standard frameworks</p>
            </div>
            <button
              onClick={() => navigate('/app/compliance')}
              className="text-xs text-cyan-400 font-semibold hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPLIANCE_STANDARDS.map((std) => (
              <div key={std.id} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-xs font-extrabold text-white">{std.code}</span>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{std.name}</p>
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                    std.score >= 90 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {std.score}%
                  </span>
                </div>
                <ProgressBar progress={std.score} color={std.color} showValue={false} height="h-2" />
                <div className="flex justify-between items-center text-[10px] text-slate-500 mt-2">
                  <span>{std.compliantClauses} of {std.totalClauses} Clauses</span>
                  <span>Audit: {std.upcomingAudit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Activity & Document Distribution Chart (SVG Representation) */}
          <div className="pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Document Creation & Audit Velocity</span>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> New Uploads</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Approvals</span>
              </div>
            </div>

            {/* Custom Interactive SVG Chart */}
            <div className="h-40 w-full bg-slate-950/40 rounded-2xl p-4 border border-slate-800/60 flex items-end justify-between gap-3">
              {[
                { month: 'Jan', uploads: 40, approvals: 35 },
                { month: 'Feb', uploads: 65, approvals: 55 },
                { month: 'Mar', uploads: 50, approvals: 48 },
                { month: 'Apr', uploads: 85, approvals: 80 },
                { month: 'May', uploads: 70, approvals: 68 },
                { month: 'Jun', uploads: 95, approvals: 90 },
                { month: 'Jul', uploads: 110, approvals: 105 },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="w-full flex items-end justify-center gap-1.5 h-full">
                    <div
                      style={{ height: `${item.uploads}%` }}
                      className="w-1/2 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-md transition-all duration-500 group-hover:brightness-125"
                    />
                    <div
                      style={{ height: `${item.approvals}%` }}
                      className="w-1/2 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md transition-all duration-500 group-hover:brightness-125"
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity Stream */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Actions</h3>
            <div className="space-y-2.5">
              <button
                onClick={() => navigate('/app/upload')}
                className="w-full p-3 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-left flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Upload className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                      Upload ISO Document
                    </span>
                    <p className="text-[10px] text-slate-400">Add policies, SOPs, or manuals</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/app/documents?status=Pending+Review')}
                className="w-full p-3 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 text-left flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                      Review Pending Approvals
                    </span>
                    <p className="text-[10px] text-slate-400">12 items awaiting sign-off</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/app/audit')}
                className="w-full p-3 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 text-left flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Export Audit Trail
                    </span>
                    <p className="text-[10px] text-slate-400">Generate PDF for external auditors</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Recent Activity Mini-Feed */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Live Audit Activity</h3>
              <button onClick={() => navigate('/app/audit')} className="text-[11px] text-cyan-400 hover:underline">
                View All Log
              </button>
            </div>
            <Timeline items={AUDIT_LOGS.slice(0, 3)} />
          </div>
        </div>
      </div>

      {/* Recent Documents Table Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Recent Enterprise Documents</h3>
            <p className="text-xs text-slate-400">Recently published and updated ISO standard documentation</p>
          </div>
          <button
            onClick={() => navigate('/app/documents')}
            className="text-xs text-cyan-400 font-semibold hover:underline flex items-center gap-1"
          >
            <span>Browse Full Library</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <DataTable
          columns={docTableColumns}
          data={recentDocs}
          onRowClick={(row) => navigate(`/app/document/${row.id}`)}
        />
      </div>
    </div>
  );
}
