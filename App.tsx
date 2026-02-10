
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-red-100 selection:text-red-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-red-50">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Perlukan bantuan? Kami sedia mendengar.</h3>
              <p className="text-slate-500 font-medium">Hubungi pejabat kami untuk maklumat lanjut atau sebarang kesulitan pendaftaran.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
              <a 
                href="tel:+601136788172" 
                className="flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-black hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +6011-36788172
              </a>
              <a 
                href="https://web.facebook.com/profile.php?id=100079098986026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-black hover:border-red-600 hover:text-red-600 transition-all active:scale-95"
              >
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <InfoSection />
        <Gallery />
        <RegistrationForm />
      </main>

      <Footer />
      <Assistant />
    </div>
  );
};

export default App;
