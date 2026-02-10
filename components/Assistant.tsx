
import React, { useState } from 'react';
import { chatWithAssistant } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Helo! Saya pembantu digital P172. Ada apa yang boleh saya bantu mengenai program bakul makanan hari ini? ❤️🤍' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatWithAssistant([], userMsg);
      setChat(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setChat(prev => [...prev, { role: 'model', text: 'Maaf, sistem mengalami sedikit gangguan. Sila hubungi hotline kami terus di +6011-36788172.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-[2rem] shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-red-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="bg-red-600 p-6 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center font-black shadow-inner">KK</div>
              <div>
                <span className="font-black block leading-none">AI Pembantu</span>
                <span className="text-[10px] uppercase font-bold text-red-100">P172 Kota Kinabalu</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="h-[28rem] overflow-y-auto p-6 space-y-5 bg-slate-50">
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
                  msg.role === 'user' ? 'bg-red-600 text-white rounded-tr-none shadow-md shadow-red-100' : 'bg-white text-slate-700 shadow-md border border-red-50 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-md border border-red-50 rounded-tl-none flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-5 bg-white border-t border-slate-100 flex gap-3">
            <input
              type="text"
              placeholder="Tanya kami apa sahaja..."
              className="flex-1 px-4 py-3 bg-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 disabled:opacity-50 transition-all shadow-lg shadow-red-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-red-700 group border-4 border-white"
        >
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default Assistant;
