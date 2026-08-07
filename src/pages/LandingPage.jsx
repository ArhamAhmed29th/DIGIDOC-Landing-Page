import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import IsoStandards from '../components/IsoStandards';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import { Info, X } from 'lucide-react';

export default function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-500/40 text-slate-100 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-bounce">
          <Info className="w-5 h-5 text-brand-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header / Navbar */}
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Hero Section */}
      <Hero 
        onOpenDemoModal={() => setIsDemoModalOpen(true)} 
        onShowToast={showToast}
      />

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      <Benefits />

      {/* ISO Standards Section */}
      <IsoStandards onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Why Choose DIGIDOC */}
      <WhyChooseUs />

      {/* Contact Section */}
      <ContactForm onShowToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Interactive Request Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        onShowToast={showToast}
      />

    </div>
  );
}
