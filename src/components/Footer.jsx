import React from 'react';
import { FolderCheck, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Global Locations */}
        <div className="pb-12 border-b border-slate-900">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 text-center sm:text-left">
            Global Office Locations
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2 hover:border-brand-500/30 transition-colors">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-lg">🇺🇸</span>
                <span>United States</span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed font-mono">
                DIGIDOC LLC<br/>
                9435 Lorton Market St, PBM #177,<br/>
                Lorton, VA 22079, USA
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2 hover:border-brand-500/30 transition-colors">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-lg">🇦🇪</span>
                <span>United Arab Emirates</span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed font-mono">
                Business Centre,<br/>
                Sharjah Publishing City Free Zone,<br/>
                Sharjah, UAE
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2 hover:border-brand-500/30 transition-colors">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-lg">🇵🇰</span>
                <span>Pakistan</span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed font-mono">
                Plot # 36-C 2nd Floor Commercial Area,<br/>
                NFC Housing Society Phase 1,<br/>
                Lahore, Pakistan
              </div>
            </div>

          </div>
        </div>

        {/* Footer Brand & Legal */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center">
              <FolderCheck className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">DIGI<span className="text-brand-400">DOC</span></span>
            <span className="text-xs text-slate-500 ml-2">© 2026 DIGIDOC LLC. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="mailto:info@digidoccloud.com" className="hover:text-brand-400 transition-colors flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-brand-400" /> info@digidoccloud.com
            </a>
            <a href="https://www.digidoccloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-accent-cyan" /> www.digidoccloud.com
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
