import React, { useState } from 'react';
import { Mail, Globe, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactForm({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    isoStandard: 'ISO 9001',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.company.trim()) errs.company = 'Company is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      onShowToast('⚠️ Please fix the form errors before submitting.');
    } else {
      setErrors({});
      setSubmitted(true);
      onShowToast('🎉 Thank you! Your message has been sent successfully.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Ready to Simplify Your ISO Compliance?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Connect with our ISO document control experts to explore how DIGIDOC can transform your organization's compliance workflows.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Official Email</div>
                  <a href="mailto:info@digidoccloud.com" className="text-sm font-bold text-white hover:text-brand-400 transition-colors">
                    info@digidoccloud.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 text-accent-cyan flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Official Website</div>
                  <a href="https://www.digidoccloud.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-accent-cyan transition-colors">
                    www.digidoccloud.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You for Contacting DIGIDOC!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Your inquiry has been logged. An ISO specialist will reach out to you within 24 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <h3 className="text-2xl font-bold text-white">Contact & Request Demo</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 bg-slate-950 rounded-xl border ${errors.name ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-brand-500'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 bg-slate-950 rounded-xl border ${errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-brand-500'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      placeholder="Global Tech Inc"
                      className={`w-full px-4 py-3 bg-slate-950 rounded-xl border ${errors.company ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-brand-500'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.company && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.company}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full px-4 py-3 bg-slate-950 rounded-xl border ${errors.phone ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-brand-500'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase">
                    Primary ISO Standard
                  </label>
                  <select 
                    name="isoStandard"
                    value={formData.isoStandard}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 rounded-xl border border-slate-800 focus:border-brand-500 text-white text-sm focus:outline-none focus:ring-1 transition-colors"
                  >
                    <option value="ISO 9001">ISO 9001 (Quality Management)</option>
                    <option value="ISO 27001">ISO 27001 (Information Security)</option>
                    <option value="ISO 14001">ISO 14001 (Environmental Management)</option>
                    <option value="ISO 45001">ISO 45001 (Health & Safety)</option>
                    <option value="Multiple / All Standards">Multiple / All ISO Standards</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Describe your current document management process or upcoming audit deadlines..."
                    className={`w-full px-4 py-3 bg-slate-950 rounded-xl border ${errors.message ? 'border-red-500/80 focus:ring-red-500' : 'border-slate-800 focus:border-brand-500'} text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-colors`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-brand-500 via-accent-cyan to-brand-700 hover:opacity-95 text-white font-bold text-base rounded-xl shadow-xl shadow-brand-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Form</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
