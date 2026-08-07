import React from 'react';
import { X, Calendar } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    onShowToast('🚀 Demo request confirmed! We have sent calendar invitation options to your email.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 text-xs font-semibold border border-brand-500/20">
            <Calendar className="w-3.5 h-3.5" /> Interactive Live Demo
          </div>
          <h3 className="text-2xl font-bold text-white">Schedule Your DIGIDOC Demo</h3>
          <p className="text-xs text-slate-400">Experience how DIGIDOC streamlines ISO document control for your enterprise.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase">Work Email</label>
            <input 
              type="email" 
              required 
              placeholder="alex@organization.com" 
              className="w-full mt-1.5 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-brand-500 focus:outline-none" 
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase">Target ISO Standard</label>
            <select className="w-full mt-1.5 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:border-brand-500 focus:outline-none">
              <option>ISO 9001 (Quality Management)</option>
              <option>ISO 27001 (Information Security)</option>
              <option>ISO 14001 (Environmental Management)</option>
              <option>ISO 45001 (Health & Safety)</option>
              <option>Multiple Standards</option>
            </select>
          </div>

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-brand-500 to-accent-cyan text-white font-bold rounded-xl shadow-lg shadow-brand-500/20 hover:opacity-90 transition-opacity">
            Confirm Demo Request
          </button>
        </form>

      </div>
    </div>
  );
}
