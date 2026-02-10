
import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1586201327693-86619add8830?q=80&w=2070&auto=format&fit=crop',
      title: 'Bekalan Beras Nasional',
      desc: 'Beras sebagai keperluan ruji utama dibekalkan dalam setiap pek bantuan untuk memastikan kelangsungan hidup warga P172.'
    },
    {
      url: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop',
      title: 'Keperluan Dapur Asas',
      desc: 'Minyak masak, tepung, dan gula merupakan antara barangan wajib yang disusun rapi dalam setiap Bakul Makanan.'
    },
    {
      url: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=2070&auto=format&fit=crop',
      title: 'Pek Barangan Kering',
      desc: 'Himpunan barangan keperluan seperti serbuk kopi, biskut, makanan bertin dan sos yang lengkap untuk kegunaan harian keluarga.'
    },
    {
      url: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?q=80&w=2070&auto=format&fit=crop',
      title: 'Penyediaan Berpusat',
      desc: 'Stok bekalan diuruskan secara sistematik di Pusat Khidmat Rakyat bagi memastikan agihan yang pantas dan efisien.'
    },
    {
      url: 'https://images.unsplash.com/photo-1621275471769-e6aa344546d5?q=80&w=2073&auto=format&fit=crop',
      title: 'Pek Kasih Sayang',
      desc: 'Setiap bungkusan disediakan dengan penuh keprihatinan demi menjaga maruah dan kesejahteraan setiap penerima.'
    },
    {
      url: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2070&auto=format&fit=crop',
      title: 'Nutrisi Seimbang',
      desc: 'Kami memastikan kualiti barangan adalah yang terbaik untuk membekalkan tenaga dan kesihatan yang baik kepada komuniti.'
    }
  ];

  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-red-600 font-bold tracking-widest uppercase mb-3">Sorotan Program</h2>
          <p className="text-4xl leading-tight font-black tracking-tight text-slate-900 sm:text-5xl">
            Galeri Bakul Makanan
          </p>
          <p className="mt-6 max-w-2xl text-lg text-slate-500 mx-auto">
            Melihat lebih dekat persediaan dan kualiti barangan bantuan yang kami salurkan kepada warga Kota Kinabalu secara telus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(img)}
              className="group cursor-pointer relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-red-200 transition-all duration-500 aspect-[4/3] transform hover:-translate-y-1"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-white text-xl font-black mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h4>
                <p className="text-red-100 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Klik untuk butiran lanjut
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-20 p-3 bg-red-600 text-white rounded-full hover:bg-red-700 hover:rotate-90 transition-all shadow-xl active:scale-95"
                onClick={() => setSelectedImage(null)}
                aria-label="Tutup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row min-h-[300px]">
                <div className="md:w-2/3 relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white border-l border-slate-50">
                  <div className="inline-flex items-center gap-2 text-red-600 text-xs font-black uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                    Program P172
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
                    {selectedImage.title}
                  </h3>
                  <div className="w-16 h-1.5 bg-red-600 rounded-full mb-8"></div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                    {selectedImage.desc}
                  </p>
                  <div className="pt-8 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Pusat Khidmat Rakyat <br/> Kota Kinabalu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="https://web.facebook.com/profile.php?id=100079098986026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 font-black hover:gap-4 transition-all"
          >
            Lihat perkembangan semasa di Facebook
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;