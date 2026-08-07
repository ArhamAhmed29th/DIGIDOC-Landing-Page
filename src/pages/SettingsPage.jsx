import React, { useState } from 'react';
import {
  Building2,
  Palette,
  Bell,
  Clock,
  ShieldCheck,
  Sliders,
  CheckCircle2,
  Save,
  Lock
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('organization');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form states
  const [orgName, setOrgName] = useState('DIGIDOC Enterprise Governance Corp.');
  const [domain, setDomain] = useState('digidoc.com');
  const [accreditationBody, setAccreditationBody] = useState('BSI Group (British Standards Institution)');

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [reviewAlertDays, setReviewAlertDays] = useState('30');
  const [enforce2FA, setEnforce2FA] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">System Settings</h1>
          <p className="text-xs text-slate-400">Configure global enterprise preferences and ISO governance policies</p>
        </div>

        {savedSuccess && (
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5 animate-bounce">
            <CheckCircle2 className="w-4 h-4" /> Settings Saved Live!
          </span>
        )}
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-1 overflow-x-auto">
        {[
          { id: 'organization', label: 'Organization', icon: Building2 },
          { id: 'branding', label: 'Branding & Theme', icon: Palette },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'retention', label: 'Retention Policies', icon: Clock },
          { id: 'security', label: 'Security & 2FA', icon: ShieldCheck },
          { id: 'preferences', label: 'General Preferences', icon: Sliders }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-brand-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Settings Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl space-y-6">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Tab 1: Organization */}
          {activeTab === 'organization' && (
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Organization Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Organization Legal Name</label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Corporate Domain</label>
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary ISO Registrar / Accreditation Body</label>
                  <input
                    type="text"
                    value={accreditationBody}
                    onChange={(e) => setAccreditationBody(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Branding */}
          {activeTab === 'branding' && (
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Theme & Watermark</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Active Color Palette</span>
                    <span className="text-[10px] text-slate-400">Enterprise Dark Navy, Teal & Cyan</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700" />
                    <span className="w-5 h-5 rounded-full bg-[#008080]" />
                    <span className="w-5 h-5 rounded-full bg-[#06B6D4]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Controlled PDF Stamp Watermark</label>
                  <input
                    type="text"
                    defaultValue="CONFIDENTIAL - DIGIDOC ISO CONTROLLED COPY"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Notifications */}
          {activeTab === 'notifications' && (
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Automated Notification Rules</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 cursor-pointer">
                  <div>
                    <span className="text-xs font-bold text-white block">Email Alerts for Upcoming Review Dates</span>
                    <span className="text-[10px] text-slate-400">Notify document owners prior to annual review expiration</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={emailAlerts}
                    onChange={(e) => setEmailAlerts(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-cyan-500"
                  />
                </label>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Review Alert Lead Window</label>
                  <select
                    value={reviewAlertDays}
                    onChange={(e) => setReviewAlertDays(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  >
                    <option value="15">15 Days Before Review Date</option>
                    <option value="30">30 Days Before Review Date (Recommended)</option>
                    <option value="60">60 Days Before Review Date</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Retention */}
          {activeTab === 'retention' && (
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">ISO Category Retention Defaults</h3>
              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex justify-between items-center">
                  <span>Quality Manuals (ISO 9001)</span>
                  <span className="font-bold text-cyan-400">7 Years Mandatory</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex justify-between items-center">
                  <span>Information Security Policies (ISO 27001)</span>
                  <span className="font-bold text-cyan-400">7 Years Mandatory</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex justify-between items-center">
                  <span>EHS Environmental Records (ISO 14001 & 45001)</span>
                  <span className="font-bold text-cyan-400">10 Years Mandatory</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Security */}
          {activeTab === 'security' && (
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Enterprise Security Governance</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 cursor-pointer">
                  <div>
                    <span className="text-xs font-bold text-white block">Enforce Multi-Factor Authentication (2FA)</span>
                    <span className="text-[10px] text-slate-400">Mandatory hardware or authenticator app token for all personnel</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={enforce2FA}
                    onChange={(e) => setEnforce2FA(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-cyan-500"
                  />
                </label>
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">SSO Identity Provider</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Active Okta / Microsoft Entra ID Integration</span>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Connected
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 6: Preferences */}
          {activeTab === 'preferences' && (
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Regional & Display Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">System Language</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white">
                    <option value="en">English (US / UK International ISO)</option>
                    <option value="de">German (Deutsch)</option>
                    <option value="fr">French (Français)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Standard Date Display Format</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white">
                    <option value="YYYY-MM-DD">YYYY-MM-DD (ISO Standard)</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Save System Settings</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
