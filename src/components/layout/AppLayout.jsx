import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { MOCK_DOCUMENTS } from '../../mockData/documents';
import { MOCK_USERS } from '../../mockData/users';
import { Search, FileText, User, Shield, ChevronRight, X } from 'lucide-react';

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Keyboard shortcut listener Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter search results
  const filteredDocs = searchQuery.trim()
    ? MOCK_DOCUMENTS.filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.isoStandard.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : MOCK_DOCUMENTS.slice(0, 3);

  const filteredUsers = searchQuery.trim()
    ? MOCK_USERS.filter(
        (usr) =>
          usr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          usr.role.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 3)
    : MOCK_USERS.slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
        <Topbar onOpenSearch={() => setSearchOpen(true)} />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto animate-in fade-in duration-200">
          <Outlet />
        </main>
      </div>

      {/* Global Quick Search Modal (Ctrl + K) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/50">
              <Search className="w-5 h-5 text-cyan-400 mr-3" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search ISO documents, standards, or team members..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
              {/* Document Results */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2">ISO Documents</span>
                <div className="mt-2 space-y-1">
                  {filteredDocs.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => {
                        setSearchOpen(false);
                        navigate(`/app/document/${doc.id}`);
                      }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {doc.title}
                          </p>
                          <span className="text-[10px] text-slate-400">{doc.code} • {doc.isoStandard}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* User Results */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2">Team & Compliance Personnel</span>
                <div className="mt-2 space-y-1">
                  {filteredUsers.map((usr) => (
                    <div
                      key={usr.id}
                      onClick={() => {
                        setSearchOpen(false);
                        navigate('/app/users');
                      }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img src={usr.avatar} alt={usr.name} className="w-8 h-8 rounded-full object-cover border border-slate-700" />
                        <div>
                          <p className="text-xs font-semibold text-white">{usr.name}</p>
                          <span className="text-[10px] text-slate-400">{usr.role} ({usr.department})</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {usr.systemRole}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 px-4">
              <span>Press <kbd className="px-1 bg-slate-800 text-slate-300 rounded">ESC</kbd> to close</span>
              <span>DIGIDOC Search Engine</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
