import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, KeyRound } from 'lucide-react';
import Modal from '../components/common/Modal';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('s.jenkins@digidoc.com');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  const handleDemoSignIn = (userEmail) => {
    setEmail(userEmail);
    setTimeout(() => {
      navigate('/app/dashboard');
    }, 300);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setForgotSubmitted(true);
    setTimeout(() => {
      setForgotSubmitted(false);
      setForgotModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 relative overflow-hidden selection:bg-cyan-500 selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-600/20 via-cyan-500/20 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 via-cyan-500 to-teal-400 p-0.5 shadow-xl shadow-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <span className="text-3xl font-black tracking-tight text-white font-sans">
              DIGI<span className="text-cyan-400">DOC</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-tight">Enterprise DMS Sign In</h2>
          <p className="text-xs text-slate-400 mt-1">ISO Compliance & Document Governance System</p>
        </div>

        {/* Card */}
        <div className="bg-slate-900/80 border border-slate-800/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Corporate Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-slate-300">Password</label>
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(true)}
                  className="text-xs font-semibold text-cyan-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-950"
                />
                <span className="text-xs text-slate-300 font-medium">Remember this browser</span>
              </label>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> SSO / 2FA Enabled
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-sm hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all duration-200"
            >
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Quick Demo Accounts */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center mb-3">
              Fast Demo Sign In
            </span>
            <div className="grid grid-cols-3 gap-2 text-center">
              <button
                onClick={() => handleDemoSignIn('s.jenkins@digidoc.com')}
                className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Quality Dir.
              </button>
              <button
                onClick={() => handleDemoSignIn('m.vance@digidoc.com')}
                className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
              >
                CISO / Admin
              </button>
              <button
                onClick={() => handleDemoSignIn('d.chen@digidoc.com')}
                className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Lead Auditor
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Need access? Contact your ISO Compliance Administrator.
        </p>
      </div>

      {/* Forgot Password Modal */}
      <Modal isOpen={forgotModalOpen} onClose={() => setForgotModalOpen(false)} title="Reset Enterprise Password">
        {forgotSubmitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Password Reset Link Sent</h4>
            <p className="text-xs text-slate-300">
              We have sent password recovery instructions to <span className="font-semibold text-white">{forgotEmail || 'your email'}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <p className="text-xs text-slate-400">
              Enter your corporate email address below. We will send a secure single-use reset token to your inbox.
            </p>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Corporate Email</label>
              <input
                type="email"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="s.jenkins@digidoc.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setForgotModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl hover:from-brand-600 hover:to-cyan-600"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
