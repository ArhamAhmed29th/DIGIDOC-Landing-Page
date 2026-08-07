import React from 'react';

export default function ProgressBar({ progress, label, color = "brand", showValue = true, height = "h-2" }) {
  const getColorGradient = () => {
    switch (color) {
      case 'emerald':
        return 'from-emerald-500 to-teal-400';
      case 'cyan':
        return 'from-cyan-500 to-sky-400';
      case 'amber':
        return 'from-amber-500 to-yellow-400';
      case 'rose':
        return 'from-rose-500 to-pink-500';
      default:
        return 'from-brand-500 to-cyan-400';
    }
  };

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-medium text-slate-300">
          {label && <span>{label}</span>}
          {showValue && <span className="font-semibold text-white">{progress}%</span>}
        </div>
      )}
      <div className={`w-full bg-slate-800/80 rounded-full overflow-hidden ${height} p-0.5 border border-slate-700/50`}>
        <div
          className={`h-full bg-gradient-to-r ${getColorGradient()} rounded-full transition-all duration-700 ease-out shadow-sm`}
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}
