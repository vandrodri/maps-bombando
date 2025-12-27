import React, { useState } from 'react';
import { BusinessData } from '../types';

interface InputFormProps {
  onSubmit: (data: BusinessData) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<BusinessData>({
    name: '',
    city: '',
    state: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.city && formData.state) {
      onSubmit(formData);
    }
  };

  return (
    <div className="neumorph-card p-12 md:p-20 rounded-[60px] mb-8 max-w-4xl mx-auto relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]"></div>
      
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic leading-none">
          QUAL O PRÓXIMO ALVO?
        </h2>
        <p className="text-slate-500 text-lg font-bold italic leading-tight max-w-xl">
          Sua concorrência está estagnada. Use a <span className="text-slate-900 underline decoration-blue-500">ganância</span> inteligente: tome o tráfego que eles acham que é garantido.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="group">
          <label className="block text-[11px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em] pl-2 group-focus-within:text-blue-600 transition-colors">IDENTIFICAÇÃO: Nome do Negócio Local</label>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Ex: Clínica Alpha / Pizzaria do Centro"
            className="w-full px-10 py-7 rounded-[32px] neumorph-inset border-none text-slate-900 outline-none transition-all placeholder:text-slate-300 font-black text-2xl italic focus:ring-4 ring-blue-500/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group">
            <label className="block text-[11px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em] pl-2 group-focus-within:text-blue-600 transition-colors">CAMPO DE BATALHA: Cidade</label>
            <input
              required
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              placeholder="Ex: Curitiba"
              className="w-full px-10 py-7 rounded-[32px] neumorph-inset border-none text-slate-900 outline-none transition-all placeholder:text-slate-300 font-black text-2xl italic focus:ring-4 ring-blue-500/10"
            />
          </div>
          <div className="group">
            <label className="block text-[11px] font-black text-slate-400 mb-4 uppercase tracking-[0.3em] pl-2 group-focus-within:text-blue-600 transition-colors">ZONA (UF)</label>
            <input
              required
              value={formData.state}
              onChange={(e) => setFormData({...formData, state: e.target.value})}
              placeholder="PR"
              className="w-full px-10 py-7 rounded-[32px] neumorph-inset border-none text-slate-900 outline-none transition-all placeholder:text-slate-300 font-black text-2xl italic focus:ring-4 ring-blue-500/10 uppercase"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full neumorph-button bg-blue-600 text-white font-black py-8 px-8 rounded-[32px] transition-all flex items-center justify-center space-x-6 disabled:opacity-50 uppercase tracking-tighter text-3xl group active:scale-95 hover:shadow-2xl hover:shadow-blue-500/30"
        >
          {isLoading ? (
            <span>PROCESSANDO DOMINAÇÃO...</span>
          ) : (
            <>
              <span className="group-hover:translate-x-1 transition-transform">ESMAGAR CONCORRÊNCIA AGORA</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 transition-transform group-hover:translate-x-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
        
        <div className="text-center">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Acesso Grátis Temporário: ZMaps AI Alpha 1.0
          </p>
        </div>
      </form>
    </div>
  );
};

export default InputForm;