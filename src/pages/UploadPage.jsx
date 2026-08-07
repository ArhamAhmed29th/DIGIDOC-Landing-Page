import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function UploadPage() {
  const navigate = useNavigate();

  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    title: 'Integrated Risk Mitigation Framework Procedure',
    category: 'Procedures',
    isoStandard: 'ISO 9001:2015',
    department: 'Quality Assurance',
    owner: 'Dr. Sarah Jenkins',
    effectiveDate: '2025-09-01',
    reviewDate: '2026-09-01',
    retentionPolicy: '7 Years',
    description: 'Establishes standardized procedures for continuous risk identification, mitigation controls, and quarterly audit reviews across global operations.'
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setUploadProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadSuccess(true);
      }
    }, 200);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">Upload ISO Document</h1>
        <p className="text-xs text-slate-400">Add controlled documents to the DIGIDOC governance registry</p>
      </div>

      {uploadSuccess ? (
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-8 backdrop-blur-2xl text-center space-y-4 shadow-2xl animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Document Successfully Registered!</h2>
          <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
            <strong className="text-white">{formData.title}</strong> has been uploaded with version <span className="text-cyan-400 font-mono">v1.0</span> and routed to <strong className="text-white">{formData.owner}</strong> for initial approval.
          </p>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={() => {
                setUploadSuccess(false);
                setSelectedFile(null);
                setUploadProgress(0);
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-colors"
            >
              Upload Another Document
            </button>
            <button
              onClick={() => navigate('/app/documents')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-cyan-500/20"
            >
              <span>View in Document Library</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Drag & Drop Upload Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative rounded-3xl border-2 border-dashed p-8 text-center transition-all duration-200 ${
              dragActive
                ? 'border-cyan-400 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20'
                : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
            }`}
          >
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.docx,.xlsx,.pptx"
            />

            {selectedFile ? (
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <span className="text-sm font-bold text-white block">{selectedFile.name}</span>
                  <span className="text-xs text-slate-400">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for ISO indexing
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="p-1 text-slate-400 hover:text-rose-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <label htmlFor="file-upload" className="cursor-pointer block space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto shadow-inner group-hover:scale-105 transition-transform">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    Click to select file or drag & drop here
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Supported formats: PDF, DOCX, XLSX (Max size: 50MB)
                  </span>
                </div>
              </label>
            )}
          </div>

          {/* Document Metadata Form */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl space-y-6">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>ISO Controlled Document Metadata</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Document Title */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Document Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Manuals">Manuals</option>
                  <option value="Policies">Policies</option>
                  <option value="Procedures">Procedures</option>
                  <option value="Checklists">Checklists</option>
                  <option value="Risk Assessments">Risk Assessments</option>
                  <option value="Plans">Plans</option>
                </select>
              </div>

              {/* ISO Standard */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">ISO Standard Framework *</label>
                <select
                  value={formData.isoStandard}
                  onChange={(e) => setFormData({ ...formData, isoStandard: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="ISO 9001:2015">ISO 9001:2015 (QMS)</option>
                  <option value="ISO 27001:2022">ISO 27001:2022 (ISMS)</option>
                  <option value="ISO 14001:2015">ISO 14001:2015 (EMS)</option>
                  <option value="ISO 45001:2018">ISO 45001:2018 (OH&S)</option>
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Department Scope</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="IT & Security">IT & Security</option>
                  <option value="Operations">Operations</option>
                  <option value="EHS">EHS</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>

              {/* Assigned Owner */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Assigned Document Owner</label>
                <select
                  value={formData.owner}
                  onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Dr. Sarah Jenkins">Dr. Sarah Jenkins (Quality Dir)</option>
                  <option value="Marcus Vance">Marcus Vance (CISO)</option>
                  <option value="Elena Rostova">Elena Rostova (EHS Lead)</option>
                  <option value="Alexander Wright">Alexander Wright (Quality Mgr)</option>
                </select>
              </div>

              {/* Effective Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Effective Date</label>
                <input
                  type="date"
                  value={formData.effectiveDate}
                  onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                />
              </div>

              {/* Annual Review Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mandatory Review Date</label>
                <input
                  type="date"
                  value={formData.reviewDate}
                  onChange={(e) => setFormData({ ...formData, reviewDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                />
              </div>

              {/* Retention Policy */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Retention Policy</label>
                <select
                  value={formData.retentionPolicy}
                  onChange={(e) => setFormData({ ...formData, retentionPolicy: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="3 Years">3 Years Standard Retention</option>
                  <option value="5 Years">5 Years ISO Standard Retention</option>
                  <option value="7 Years">7 Years Legal Retention</option>
                  <option value="10 Years">10 Years Extended Regulatory</option>
                  <option value="Indefinite">Indefinite Corporate Record</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Document Purpose & Summary</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Upload Progress bar */}
            {isUploading && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-medium text-slate-300">
                  <span>Encrypting & indexing document...</span>
                  <span className="text-cyan-400 font-bold">{uploadProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isUploading}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-all disabled:opacity-50"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Submit for ISO Governance Indexing</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
