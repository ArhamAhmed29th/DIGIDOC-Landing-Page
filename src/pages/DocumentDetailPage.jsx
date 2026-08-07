import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StatusBadge from '../components/common/StatusBadge';
import Timeline from '../components/common/Timeline';
import Modal from '../components/common/Modal';
import { MOCK_DOCUMENTS } from '../mockData/documents';
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  XCircle,
  FileCode,
  Calendar,
  User,
  Building,
  ShieldCheck,
  Clock,
  History,
  MessageSquare,
  Send,
  Sparkles,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function DocumentDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find document by ID or default to doc-1
  const initialDoc = MOCK_DOCUMENTS.find((d) => d.id === id) || MOCK_DOCUMENTS[0];
  const [doc, setDoc] = useState(initialDoc);

  const [activeTab, setActiveTab] = useState('overview');
  const [comments, setComments] = useState(doc.comments || []);
  const [newCommentText, setNewCommentText] = useState('');

  // Modals state
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [versionModalOpen, setVersionModalOpen] = useState(false);

  const [approvalNote, setApprovalNote] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [newVersionNum, setNewVersionNum] = useState('v3.3');
  const [versionChanges, setVersionChanges] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const createdComment = {
      id: `c-${Date.now()}`,
      author: 'Dr. Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Quality Director',
      text: newCommentText,
      timestamp: 'Just now'
    };

    setComments([createdComment, ...comments]);
    setNewCommentText('');
  };

  const handleApproveAction = () => {
    setDoc({ ...doc, status: 'Approved' });
    setApproveModalOpen(false);
    alert(`Document ${doc.code} has been APPROVED successfully.`);
  };

  const handleRejectAction = () => {
    setDoc({ ...doc, status: 'In Revision' });
    setRejectModalOpen(false);
    alert(`Document ${doc.code} has been marked IN REVISION with rejection comments.`);
  };

  const handleCreateVersionAction = () => {
    const updatedHistory = [
      {
        version: newVersionNum,
        date: new Date().toISOString().split('T')[0],
        author: 'Dr. Sarah Jenkins',
        changes: versionChanges || 'Minor revision update',
        status: 'Approved'
      },
      ...doc.versionHistory
    ];
    setDoc({ ...doc, version: newVersionNum, versionHistory: updatedHistory });
    setVersionModalOpen(false);
    alert(`New Version ${newVersionNum} created successfully.`);
  };

  return (
    <div className="space-y-8">
      {/* Top Navigation & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => navigate('/app/documents')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Documents</span>
        </button>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => alert(`Downloading official controlled copy of ${doc.title} (${doc.version})...`)}
            className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Controlled Copy</span>
          </button>

          <button
            onClick={() => setVersionModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-slate-800 text-cyan-400 hover:bg-cyan-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-cyan-500/30"
          >
            <FileCode className="w-4 h-4" />
            <span>Create New Version</span>
          </button>

          <button
            onClick={() => setRejectModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <XCircle className="w-4 h-4" />
            <span>Reject</span>
          </button>

          <button
            onClick={() => setApproveModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 transition-all"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Approve Document</span>
          </button>
        </div>
      </div>

      {/* Main Document Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {doc.code}
              </span>
              <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                {doc.isoStandard}
              </span>
              <StatusBadge status={doc.status} />
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans">
              {doc.title}
            </h1>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {doc.description}
            </p>
          </div>

          <div className="flex flex-col items-end justify-between self-start p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-right min-w-[180px]">
            <span className="text-[10px] uppercase font-bold text-slate-500">Current Release</span>
            <span className="text-2xl font-black text-cyan-400 font-mono mt-0.5">{doc.version}</span>
            <span className="text-[10px] text-slate-400 mt-1">{doc.fileType} • {doc.fileSize}</span>
          </div>
        </div>

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
          <div>
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Assigned Owner</span>
            <div className="flex items-center gap-2 mt-1.5">
              <img src={doc.owner.avatar} alt={doc.owner.name} className="w-6 h-6 rounded-full object-cover border border-slate-700" />
              <div>
                <span className="text-xs font-bold text-white block">{doc.owner.name}</span>
                <span className="text-[10px] text-slate-400 block">{doc.owner.role}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Department</span>
            <span className="text-xs font-bold text-slate-200 mt-1.5 block">{doc.department}</span>
          </div>

          <div>
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Effective Date</span>
            <span className="text-xs font-bold text-slate-200 mt-1.5 block">{doc.effectiveDate}</span>
          </div>

          <div>
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Annual Review Date</span>
            <span className="text-xs font-bold text-slate-200 mt-1.5 block">{doc.reviewDate}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-1">
        {[
          { id: 'overview', label: 'Version History & Workflow' },
          { id: 'comments', label: `Discussion & Comments (${comments.length})` },
          { id: 'audit', label: 'Audit Trail' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-brand-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content 1: Overview, History & Approval Workflow */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Version History List */}
          <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <History className="w-5 h-5 text-cyan-400" />
              <span>Version Revision History</span>
            </h3>

            <div className="space-y-4">
              {doc.versionHistory.map((ver, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    ver.version === doc.version
                      ? 'bg-gradient-to-r from-cyan-500/10 via-slate-950 to-slate-950 border-cyan-500/40 shadow-lg'
                      : 'bg-slate-950/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-black text-cyan-400">{ver.version}</span>
                      <StatusBadge status={ver.status} size="sm" />
                      {ver.version === doc.version && (
                        <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-cyan-500 text-slate-950">
                          Active Release
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500">{ver.date}</span>
                  </div>

                  <p className="text-xs text-slate-300 mb-2">{ver.changes}</p>
                  <span className="text-[11px] text-slate-400">Author: <strong className="text-slate-200">{ver.author}</strong></span>
                </div>
              ))}
            </div>
          </div>

          {/* Approval Workflow Pipeline */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Approval Workflow Stage</span>
            </h3>

            <div className="space-y-4">
              {doc.approvalWorkflow.map((stage, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500">{stage.role}</span>
                    <h5 className="text-xs font-bold text-white mt-0.5">{stage.name}</h5>
                    {stage.date && <span className="text-[10px] text-slate-500 block">{stage.date}</span>}
                  </div>
                  <StatusBadge status={stage.status} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Discussion & Comments */}
      {activeTab === 'comments' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 max-w-3xl">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span>Document Collaboration & Reviewer Comments</span>
          </h3>

          {/* New Comment Input Form */}
          <form onSubmit={handleAddComment} className="flex gap-3">
            <input
              type="text"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Add review feedback or audit observations..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Post</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4 pt-2">
            {comments.map((c) => (
              <div key={c.id} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img src={c.avatar} alt={c.author} className="w-7 h-7 rounded-full object-cover border border-slate-700" />
                    <div>
                      <span className="text-xs font-bold text-white block">{c.author}</span>
                      <span className="text-[10px] text-cyan-400 block">{c.role}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">{c.timestamp}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-9">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 3: Audit Trail */}
      {activeTab === 'audit' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6 max-w-3xl">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            <span>Document Specific Audit History</span>
          </h3>
          <Timeline items={doc.auditTrail} />
        </div>
      )}

      {/* Approve Modal */}
      <Modal isOpen={approveModalOpen} onClose={() => setApproveModalOpen(false)} title={`Approve ${doc.code}`}>
        <div className="space-y-4">
          <p className="text-xs text-slate-300">
            You are granting formal approval for <strong className="text-white">{doc.title} ({doc.version})</strong>. Your digital signature will be recorded in the ISO audit trail.
          </p>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Approval Notes (Optional)</label>
            <textarea
              rows={3}
              value={approvalNote}
              onChange={(e) => setApprovalNote(e.target.value)}
              placeholder="Verified against ISO standards requirements..."
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button onClick={() => setApproveModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
              Cancel
            </button>
            <button
              onClick={handleApproveAction}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl"
            >
              Sign & Publish Approval
            </button>
          </div>
        </div>
      </Modal>

      {/* Reject Modal */}
      <Modal isOpen={rejectModalOpen} onClose={() => setRejectModalOpen(false)} title={`Reject & Request Revisions`}>
        <div className="space-y-4">
          <p className="text-xs text-slate-300">
            Specify mandatory revisions required before this document can be approved.
          </p>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Rejection Reason</label>
            <textarea
              rows={3}
              required
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Clause 8 operational controls section requires additional detail..."
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-rose-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button onClick={() => setRejectModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
              Cancel
            </button>
            <button
              onClick={handleRejectAction}
              className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl"
            >
              Submit Rejection
            </button>
          </div>
        </div>
      </Modal>

      {/* Create New Version Modal */}
      <Modal isOpen={versionModalOpen} onClose={() => setVersionModalOpen(false)} title="Create New Document Revision">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">New Version Number</label>
            <input
              type="text"
              value={newVersionNum}
              onChange={(e) => setNewVersionNum(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Summary of Revision Changes</label>
            <textarea
              rows={3}
              value={versionChanges}
              onChange={(e) => setVersionChanges(e.target.value)}
              placeholder="Described annual review additions, clause updates..."
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button onClick={() => setVersionModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
              Cancel
            </button>
            <button
              onClick={handleCreateVersionAction}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl"
            >
              Publish New Version
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
