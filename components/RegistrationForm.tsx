
import React, { useState, useRef } from 'react';
import { Constituency, RegistrationFormData } from '../types';
import { checkEligibility } from '../services/geminiService';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    icNumber: '',
    phoneNumber: '',
    address: '',
    constituency: Constituency.LIKAS,
    householdIncome: 0,
    dependentsCount: 0,
    remarks: ''
  });

  const [files, setFiles] = useState<{ ic: File | null, income: File | null }>({ ic: null, income: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<{ eligible: boolean, reason: string } | null>(null);

  const fileInputIc = useRef<HTMLInputElement>(null);
  const fileInputIncome = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const assessment = await checkEligibility(formData);
    setAiAnalysis(assessment);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <section id="register" className="py-24 bg-red-50/30">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-red-100">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Pendaftaran Selesai!</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Terima kasih, <strong>{formData.fullName}</strong>. Kami telah menerima pendaftaran anda. Pasukan kami akan segera memproses maklumat ini.
            </p>
            {aiAnalysis && (
              <div className="p-6 rounded-3xl mb-10 text-left bg-red-50 border border-red-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <p className="text-xs font-black uppercase tracking-widest text-red-600">Maklum Balas Sistem</p>
                </div>
                <p className="text-slate-800 leading-relaxed font-medium">{aiAnalysis.reason}</p>
              </div>
            )}
            <button 
              onClick={() => {setSuccess(false); setAiAnalysis(null);}}
              className="bg-red-600 text-white px-10 py-4 rounded-2xl hover:bg-red-700 transition-all font-bold shadow-xl shadow-red-200"
            >
              Hantar Pendaftaran Baharu
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-red-50/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-red-50">
          <div className="bg-red-600 px-10 py-12 text-white text-center">
            <h2 className="text-4xl font-black mb-3">Borang Pendaftaran Kasih</h2>
            <p className="text-red-100 font-medium text-lg">Sila lengkapkan maklumat di bawah untuk menyertai program bakul makanan.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <h3 className="text-lg font-black text-red-600 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">1</span>
                  Maklumat Peribadi
                </h3>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Nama Penuh</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all shadow-sm"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">No. Kad Pengenalan</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all shadow-sm"
                    value={formData.icNumber}
                    onChange={e => setFormData({...formData, icNumber: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Kawasan DUN</label>
                  <select
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all appearance-none shadow-sm font-semibold"
                    value={formData.constituency}
                    onChange={e => setFormData({...formData, constituency: e.target.value as Constituency})}
                  >
                    <option value={Constituency.LIKAS}>N19 Likas</option>
                    <option value={Constituency.API_API}>N20 Api-Api</option>
                    <option value={Constituency.LUYANG}>N21 Luyang</option>
                  </select>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-lg font-black text-red-600 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">2</span>
                  Maklumat Hubungan & Ekonomi
                </h3>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">No. Telefon</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all shadow-sm"
                    value={formData.phoneNumber}
                    onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Pendapatan (RM)</label>
                    <input
                      required
                      type="number"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all shadow-sm"
                      value={formData.householdIncome}
                      onChange={e => setFormData({...formData, householdIncome: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Tanggungan</label>
                    <input
                      required
                      type="number"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all shadow-sm"
                      value={formData.dependentsCount}
                      onChange={e => setFormData({...formData, dependentsCount: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Alamat Kediaman</label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-red-500 outline-none transition-all shadow-sm"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <h3 className="text-lg font-black text-red-600 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">3</span>
                  Muat Naik Dokumen
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div 
                    onClick={() => fileInputIc.current?.click()}
                    className={`cursor-pointer border-3 border-dashed rounded-[2rem] p-10 text-center transition-all ${files.ic ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200 hover:border-red-400'}`}
                  >
                    <input type="file" ref={fileInputIc} className="hidden" onChange={(e) => setFiles({...files, ic: e.target.files?.[0] || null})} />
                    <svg className={`w-12 h-12 mx-auto mb-4 ${files.ic ? 'text-red-600' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <p className="font-bold text-slate-800">{files.ic ? files.ic.name : 'Gambar Kad Pengenalan'}</p>
                    <p className="text-sm text-slate-400 mt-2">Sila lampirkan untuk pengesahan alamat P172</p>
                  </div>
                  <div 
                    onClick={() => fileInputIncome.current?.click()}
                    className={`cursor-pointer border-3 border-dashed rounded-[2rem] p-10 text-center transition-all ${files.income ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200 hover:border-red-400'}`}
                  >
                    <input type="file" ref={fileInputIncome} className="hidden" onChange={(e) => setFiles({...files, income: e.target.files?.[0] || null})} />
                    <svg className={`w-12 h-12 mx-auto mb-4 ${files.income ? 'text-red-600' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <p className="font-bold text-slate-800">{files.income ? files.income.name : 'Slip Pendapatan'}</p>
                    <p className="text-sm text-slate-400 mt-2">Membantu kami menentukan keutamaan bantuan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-red-600 text-white font-black py-6 rounded-3xl hover:bg-red-700 shadow-2xl shadow-red-200/60 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-4 text-xl"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menghantar Pendaftaran...
                  </>
                ) : (
                  <>
                    <span>Sahkan & Hantar</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
                )}
              </button>
              <p className="text-center text-sm font-semibold text-slate-400 mt-6 italic">
                "Berkhidmat Demi Rakyat, Membina Masa Depan Bersama"
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
