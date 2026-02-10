
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white py-16 border-t-8 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-2xl">P172</div>
              <h3 className="text-2xl font-black">Pusat Khidmat Rakyat P.172</h3>
            </div>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              Berbakti untuk warga Kota Kinabalu. Kami komited dalam menyalurkan bantuan dengan telus dan penuh kasih sayang demi kesejahteraan bersama.
            </p>
            <div className="flex space-x-6">
              <a href="https://web.facebook.com/profile.php?id=100079098986026" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-600/10 rounded-xl hover:bg-red-600 transition-colors group">
                 <svg className="w-6 h-6 text-red-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-black mb-6 text-red-500 uppercase tracking-widest">Hubungi Kami</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-bold">+6011 - 36788172</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-sm">Pusat Khidmat Rakyat P.172 Kota Kinabalu, Sabah</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 text-red-500 uppercase tracking-widest">Pautan</h3>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#about" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeri</a></li>
              <li><a href="#register" className="hover:text-white transition-colors">Daftar</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm font-bold">
          &copy; {new Date().getFullYear()} Pusat Khidmat Rakyat P.172 Kota Kinabalu. Berkhidmat Untuk Rakyat.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
