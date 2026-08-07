import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatCard({ title, value, change, trend = "up", icon: Icon, color = "brand", description }) {
  const getColorStyles = () => {
    switch (color) {
      case 'emerald':
        return {
          iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          accent: 'from-emerald-500/10 via-transparent to-transparent',
          border: 'hover:border-emerald-500/40'
        };
      case 'amber':
        return {
          iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          accent: 'from-amber-500/10 via-transparent to-transparent',
          border: 'hover:border-amber-500/40'
        };
      case 'rose':
        return {
          iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
          accent: 'from-rose-500/10 via-transparent to-transparent',
          border: 'hover:border-rose-500/40'
        };
      case 'cyan':
        return {
          iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
          accent: 'from-cyan-500/10 via-transparent to-transparent',
          border: 'hover:border-cyan-500/40'
        };
      default:
        return {
          iconBg: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
          accent: 'from-brand-500/10 via-transparent to-transparent',
          border: 'hover:border-brand-500/40'
        };
    }
  };

  const style = getColorStyles();

  return (
    <div className={`relative overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 shadow-xl transition-all duration-300 ${style.border} group`}>
      {/* Background Gradient Effect */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${style.accent} rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">{title}</span>
        {Icon && (
          <div className={`p-2.5 rounded-xl border ${style.iconBg} shadow-inner`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <div className="text-3xl font-extrabold text-white tracking-tight font-sans">{value}</div>
        {change && (
          <div className={`flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${
            trend === 'up' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
          }`}>
            {trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
            {change}
          </div>
        )}
      </div>

      {description && (
        <p className="mt-2 text-xs text-slate-400 line-clamp-1">{description}</p>
      )}
    </div>
  );
}
