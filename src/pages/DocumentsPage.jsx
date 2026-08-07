import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import { MOCK_DOCUMENTS } from '../mockData/documents';
import { MOCK_USERS } from '../mockData/users';
import {
  Search,
  Filter,
  Plus,
  FileText,
  Eye,
  Download,
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';

export default function DocumentsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialStatus = searchParams.get('status') || 'All';
  const initialIso = searchParams.get('iso') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIso, setSelectedIso] = useState(initialIso);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [selectedOwner, setSelectedOwner] = useState('All');

  const categories = ['All', 'Manuals', 'Policies', 'Procedures', 'Checklists', 'Risk Assessments', 'Plans'];
  const isoStandards = ['All', 'ISO 9001:2015', 'ISO 27001:2022', 'ISO 14001:2015', 'ISO 45001:2018'];
  const statuses = ['All', 'Approved', 'Pending Review', 'In Revision', 'Expired', 'Archived'];

  // Filtered documents calculation
  const filteredDocuments = useMemo(() => {
    return MOCK_DOCUMENTS.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      const matchesIso = selectedIso === 'All' || doc.isoStandard === selectedIso;
      const matchesStatus = selectedStatus === 'All' || doc.status === selectedStatus;
      const matchesOwner = selectedOwner === 'All' || doc.owner.name === selectedOwner;

      return matchesSearch && matchesCategory && matchesIso && matchesStatus && matchesOwner;
    });
  }, [searchQuery, selectedCategory, selectedIso, selectedStatus, selectedOwner]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedIso('All');
    setSelectedStatus('All');
    setSelectedOwner('All');
  };

  const columns = [
    {
      key: 'title',
      label: 'Document Name',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white group-hover:text-cyan-400 transition-colors block text-xs">
              {val}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">{row.code}</span>
          </div>
        </div>
      )
    },
    { key: 'category', label: 'Category' },
    {
      key: 'isoStandard',
      label: 'ISO Standard',
      render: (val) => (
        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-800 text-slate-300 border border-slate-700">
          {val}
        </span>
      )
    },
    {
      key: 'version',
      label: 'Version',
      render: (val) => <span className="font-mono text-xs font-semibold text-cyan-400">{val}</span>
    },
    {
      key: 'owner',
      label: 'Owner',
      render: (val) => (
        <div className="flex items-center gap-2">
          <img src={val.avatar} alt={val.name} className="w-5 h-5 rounded-full object-cover border border-slate-700" />
          <span className="text-xs text-slate-300">{val.name}</span>
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (val) => <StatusBadge status={val} size="sm" />
    },
    { key: 'effectiveDate', label: 'Effective Date' },
    {
      key: 'actions',
      label: 'Actions',
      sortable: false,
      render: (_, row) => (
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => navigate(`/app/document/${row.id}`)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => alert(`Downloading ${row.title} (${row.version})...`)}
            className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
            title="Download Document"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Document Library</h1>
          <p className="text-xs text-slate-400">Centralized ISO Controlled Document Repository</p>
        </div>
        <button
          onClick={() => navigate('/app/upload')}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Main Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, document code, or contents..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
            />
          </div>

          {/* Reset Filters */}
          {(selectedCategory !== 'All' || selectedIso !== 'All' || selectedStatus !== 'All' || selectedOwner !== 'All' || searchQuery) && (
            <button
              onClick={resetFilters}
              className="px-3 py-2 text-xs font-medium text-rose-400 hover:text-rose-300 flex items-center gap-1.5 rounded-xl bg-rose-500/10 border border-rose-500/20 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Dropdown Select Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/60 text-xs">
          {/* Category Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Category</label>
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

          {/* ISO Standard Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">ISO Standard</label>
            <select
              value={selectedIso}
              onChange={(e) => setSelectedIso(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {isoStandards.map((iso) => (
                <option key={iso} value={iso}>{iso}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {statuses.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Owner Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Assigned Owner</label>
            <select
              value={selectedOwner}
              onChange={(e) => setSelectedOwner(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Owners</option>
              {MOCK_USERS.map((usr) => (
                <option key={usr.id} value={usr.name}>{usr.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Data Table */}
      <div className="space-y-3">
        <div className="flex justify-between items-center px-1">
          <span className="text-xs font-semibold text-slate-400">
            Showing <span className="text-white font-bold">{filteredDocuments.length}</span> documents
          </span>
        </div>

        <DataTable
          columns={columns}
          data={filteredDocuments}
          onRowClick={(row) => navigate(`/app/document/${row.id}`)}
          emptyMessage="No documents match the selected filters."
        />
      </div>
    </div>
  );
}
