import React, { useState, useMemo } from 'react';
import Timeline from '../components/common/Timeline';
import { AUDIT_LOGS } from '../mockData/auditLogs';
import { MOCK_USERS } from '../mockData/users';
import {
  History,
  Filter,
  Download,
  Search,
  Calendar,
  User,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export default function AuditPage() {
  const [selectedUser, setSelectedUser] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Approval', 'Upload', 'Security', 'System Settings', 'Access', 'Compliance System', 'User Management'];

  const filteredLogs = useMemo(() => {
    return AUDIT_LOGS.filter((log) => {
      const matchesSearch =
        log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (log.document && log.document.title.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesUser = selectedUser === 'All' || log.user.name === selectedUser;
      const matchesCategory = selectedCategory === 'All' || log.category === selectedCategory;

      return matchesSearch && matchesUser && matchesCategory;
    });
  }, [searchQuery, selectedUser, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">ISO Audit Trail</h1>
          <p className="text-xs text-slate-400">Immutable Event & Access History Log</p>
        </div>

        <button
          onClick={() => alert('Exporting full cryptographic audit trail log as encrypted PDF...')}
          className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 font-bold text-xs flex items-center gap-2 transition-colors border border-slate-700"
        >
          <Download className="w-4 h-4 text-cyan-400" />
          <span>Export Audit Log (PDF)</span>
        </button>
      </div>

      {/* Filter Controls */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search audit actions, IP addresses, or document codes..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {(selectedUser !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedUser('All');
                setSelectedCategory('All');
              }}
              className="px-3 py-2 text-xs font-medium text-rose-400 hover:text-rose-300 flex items-center gap-1.5 rounded-xl bg-rose-500/10 border border-rose-500/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/60 text-xs">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Filter by User</label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Users & Automated Bots</option>
              {MOCK_USERS.map((usr) => (
                <option key={usr.id} value={usr.name}>{usr.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Filter by Action Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <History className="w-5 h-5 text-cyan-400" />
            <span>Audit History Timeline ({filteredLogs.length} Events)</span>
          </h3>
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Cryptographically Verified
          </span>
        </div>

        <Timeline items={filteredLogs} />
      </div>
    </div>
  );
}
