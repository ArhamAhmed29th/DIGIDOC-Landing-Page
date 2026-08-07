import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, FileX, Archive, ShieldAlert, Check } from 'lucide-react';

export default function StatusBadge({ status, size = "md" }) {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Approved':
      case 'Active':
      case 'Compliant':
      case 'Resolved':
        return {
          bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          icon: <CheckCircle2 className="w-3.5 h-3.5" />
        };
      case 'Pending Review':
      case 'Pending':
      case 'In Progress':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          icon: <Clock className="w-3.5 h-3.5 animate-pulse" />
        };
      case 'In Revision':
        return {
          bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          icon: <Clock className="w-3.5 h-3.5" />
        };
      case 'Expired':
      case 'Attention Required':
        return {
          bg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
          icon: <AlertTriangle className="w-3.5 h-3.5" />
        };
      case 'Major':
        return {
          bg: 'bg-red-500/20 text-red-300 border-red-500/40 font-bold',
          icon: <ShieldAlert className="w-3.5 h-3.5" />
        };
      case 'Minor':
        return {
          bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          icon: <AlertTriangle className="w-3.5 h-3.5" />
        };
      case 'Archived':
      case 'Superseded':
      case 'Inactive':
        return {
          bg: 'bg-slate-800 text-slate-400 border-slate-700',
          icon: <Archive className="w-3.5 h-3.5" />
        };
      default:
        return {
          bg: 'bg-slate-800 text-slate-300 border-slate-700',
          icon: <Check className="w-3.5 h-3.5" />
        };
    }
  };

  const style = getBadgeStyle();
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-xs gap-1" : "px-2.5 py-1 text-xs gap-1.5 font-medium";

  return (
    <span className={`inline-flex items-center rounded-full border ${style.bg} ${sizeClasses} shadow-sm backdrop-blur-sm transition-colors duration-150`}>
      {style.icon}
      <span>{status}</span>
    </span>
  );
}
