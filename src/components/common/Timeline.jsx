import React from 'react';
import StatusBadge from './StatusBadge';
import { Calendar, User, FileText, CheckCircle2, Clock } from 'lucide-react';

export default function Timeline({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div className="py-8 text-center text-slate-400 text-sm">
        No activity history logged yet.
      </div>
    );
  }

  return (
    <div className="relative pl-6 border-l-2 border-slate-800 space-y-6">
      {items.map((item, idx) => (
        <div key={item.id || idx} className="relative group">
          {/* Node Icon/Bullet */}
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-500 group-hover:bg-brand-500 transition-colors duration-200 shadow-md shadow-brand-500/20" />

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 shadow-lg hover:border-slate-700/80 transition-all duration-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white font-sans">{item.action || item.title || item.version}</span>
                {item.status && <StatusBadge status={item.status} size="sm" />}
              </div>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {item.timestamp || item.date}
              </span>
            </div>

            {(item.user || item.author) && (
              <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                {item.user?.avatar || item.avatar ? (
                  <img src={item.user?.avatar || item.avatar} alt="User avatar" className="w-5 h-5 rounded-full object-cover border border-slate-700" />
                ) : (
                  <User className="w-3.5 h-3.5 text-brand-400" />
                )}
                <span>{typeof item.user === 'object' ? item.user.name : item.user || item.author}</span>
                {item.user?.role && <span className="text-slate-500">({item.user.role})</span>}
              </div>
            )}

            {(item.details || item.changes) && (
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/50">
                {item.details || item.changes}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
