
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Sinergi Rakyat P172
              </div>
              <h2 className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl">
                <span className="block">Bantuan Kasih</span>{' '}
                <span className="block text-red-600">Bakul Makanan</span>
              </h2>
              <p className="mt-4 text-lg text-slate-500 sm:mt-6 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-6 md:text-2xl lg:mx-0 leading-relaxed">
                Bersama membina komuniti yang sejahtera. Kami di Pusat Khidmat Rakyat P172 sentiasa prihatin dan sedia menyokong setiap warga Likas, Api-Api, dan Luyang.
              </p>
              <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-2xl shadow-xl shadow-red-200">
                  <a
                    href="#register"
                    className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-red-600 hover:bg-red-700 transition-all transform hover:scale-105"
                  >
                    Daftar Sekarang
                  </a>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a
                    href="tel:+601136788172"
                    className="w-full flex items-center justify-center px-10 py-4 border-2 border-red-600 text-lg font-bold rounded-2xl text-red-600 bg-white hover:bg-red-50 transition-all"
                  >
                    Talian Hotline
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=2070&auto=format&fit=crop"
          alt="Bakul Makanan P172 Kota Kinabalu"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden"></div>
      </div>
    </div>
  );
};

export default Hero;
