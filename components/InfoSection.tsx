
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm text-red-600 font-bold tracking-widest uppercase mb-3">Visi & Misi</h2>
          <p className="text-4xl leading-tight font-black tracking-tight text-slate-900 sm:text-5xl">
            Satu Hati, Satu Kota Kinabalu
          </p>
          <p className="mt-6 max-w-2xl text-lg text-slate-500 mx-auto">
            Program Bakul Makanan P172 adalah inisiatif berterusan untuk memastikan kesejahteraan dan kecukupan nutrisi bagi setiap keluarga di kawasan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-red-100 transition-all group">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-200 group-hover:-translate-y-2 transition-transform">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Kasih Sayang Komuniti</h3>
            <p className="text-slate-600 leading-relaxed">
              Program ini bukan sekadar bantuan, tetapi tanda keprihatinan kami terhadap kebahagiaan setiap isi rumah di P172.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-red-100 transition-all group">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-200 group-hover:-translate-y-2 transition-transform">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Sinergi Luas</h3>
            <p className="text-slate-600 leading-relaxed">
              Kami membuka pendaftaran ini agar lebih ramai penduduk di Likas, Api-Api, dan Luyang dapat menikmati inisiatif ini secara adil.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-red-100 transition-all group">
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-200 group-hover:-translate-y-2 transition-transform">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tindakan Pantas</h3>
            <p className="text-slate-600 leading-relaxed">
              Pendaftaran secara atas talian mempercepatkan proses pengagihan bakul makanan terus kepada anda yang memerlukan.
            </p>
          </div>
        </div>
        
        <div className="mt-20">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop" 
            className="w-full h-80 object-cover rounded-[3rem] shadow-2xl"
            alt="Food Items"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
