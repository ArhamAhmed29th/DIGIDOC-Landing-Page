import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import { MOCK_NOTIFICATIONS } from '../../mockData/auditLogs';
import {
  Search,
  Bell,
  Moon,
  Plus,
  User,
  Shield,
  LogOut,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
  X
} from 'lucide-react';

export default function Topbar({ onOpenSearch }) {
  const navigate = useNavigate();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  return (
    <header className="h-16 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-6">
      {/* Left: Breadcrumbs & Quick Search Trigger */}
      <div className="flex items-center gap-6">
        <Breadcrumbs />

        {/* Global Search Bar Button */}
        <button
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 text-xs hover:border-cyan-500/40 hover:text-slate-200 transition-all duration-200 shadow-inner group"
        >
          <Search className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
          <span>Search documents, ISO standards, users...</span>
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">Ctrl K</kbd>
        </button>
      </div>

      {/* Right: Actions, Notifications, Profile */}
      <div className="flex items-center gap-3">
        {/* Quick Upload Button */}
        <button
          onClick={() => navigate('/app/upload')}
          className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-600 hover:to-cyan-600 shadow-lg shadow-cyan-500/20 transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Document</span>
        </button>

        {/* Dark Mode Indicator */}
        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center" title="Enterprise Dark Mode Active">
          <Moon className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Notifications Bell Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in duration-150">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">Notifications</h4>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button onClick={markAllRead} className="text-xs text-cyan-400 hover:underline">
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/60">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      setNotificationsOpen(false);
                      if (n.link) navigate(n.link);
                    }}
                    className={`p-4 hover:bg-slate-800/50 cursor-pointer transition-colors ${
                      n.unread ? 'bg-cyan-500/5' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg mt-0.5 ${
                        n.type === 'danger' ? 'bg-rose-500/10 text-rose-400' : n.type === 'warning' ? 'bg-amber-500/10 text-amber-400' : 'bg-cyan-500/10 text-cyan-400'
                      }`}>
                        {n.type === 'danger' ? <AlertTriangle className="w-4 h-4" /> : n.type === 'warning' ? <Info className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-semibold text-white truncate">{n.title}</h5>
                          <span className="text-[10px] text-slate-500">{n.time}</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 line-clamp-2">{n.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2.5 p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
              alt="Dr. Sarah Jenkins"
              className="w-7 h-7 rounded-full object-cover border border-cyan-500/50"
            />
            <span className="hidden sm:inline-block text-xs font-bold text-slate-200">Dr. Sarah Jenkins</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in duration-150 space-y-1">
              <div className="px-3 py-2 border-b border-slate-800 mb-1">
                <p className="text-xs font-bold text-white">Dr. Sarah Jenkins</p>
                <p className="text-[10px] text-slate-400">s.jenkins@digidoc.com</p>
                <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Quality Director
                </span>
              </div>

              <Link
                to="/app/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              >
                <User className="w-4 h-4 text-slate-400" />
                <span>Account Profile</span>
              </Link>
              <Link
                to="/app/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              >
                <Shield className="w-4 h-4 text-slate-400" />
                <span>Security & 2FA</span>
              </Link>
              <Link
                to="/"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>View Public Landing Site</span>
              </Link>
              <div className="border-t border-slate-800 my-1 pt-1">
                <Link
                  to="/login"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
