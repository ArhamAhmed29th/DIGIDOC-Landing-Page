import React, { useState } from 'react';
import { FolderCheck, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-900 via-brand-500 to-accent-cyan p-0.5 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <FolderCheck className="w-6 h-6 text-brand-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-extrabold tracking-tight text-white">DIGI<span className="text-brand-400">DOC</span></span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30 px-1.5 py-0.5 rounded">CLOUD</span>
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-brand-400 transition-colors">Features</a>
          <a href="#benefits" className="hover:text-brand-400 transition-colors">Benefits</a>
          <a href="#iso-standards" className="hover:text-brand-400 transition-colors">ISO Standards</a>
          <a href="#why-choose" className="hover:text-brand-400 transition-colors">Why DIGIDOC</a>
          <a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/app/dashboard"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Launch Platform
          </a>
          <button 
            onClick={onOpenDemoModal}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm transition-transform active:scale-95 shadow-lg shadow-brand-500/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 via-accent-cyan to-brand-700 rounded-xl transition-all group-hover:opacity-90"></span>
            <span className="relative block px-5 py-2.5 bg-slate-950 rounded-[11px] transition-all group-hover:bg-opacity-0 text-white flex items-center gap-2">
              Request Demo
              <ArrowRight className="w-4 h-4 text-brand-300 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-brand-400 font-medium">Features</a>
          <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-brand-400 font-medium">Benefits</a>
          <a href="#iso-standards" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-brand-400 font-medium">ISO Standards</a>
          <a href="#why-choose" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-brand-400 font-medium">Why DIGIDOC</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-brand-400 font-medium">Contact</a>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onOpenDemoModal(); }}
            className="w-full mt-4 py-3 bg-gradient-to-r from-brand-500 to-accent-cyan text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
          >
            Request Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
