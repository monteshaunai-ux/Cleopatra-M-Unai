
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-red-200">
              P172
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">Pusat Khidmat Rakyat</h1>
              <p className="text-[10px] text-red-600 uppercase tracking-widest font-bold">Parlimen P.172 Kota Kinabalu</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Program Kami</a>
            <a href="#gallery" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Galeri</a>
            <a href="#register" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Daftar Bantuan</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Hubungi</a>
          </nav>
          <div className="md:hidden">
             {/* Mobile menu could go here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
