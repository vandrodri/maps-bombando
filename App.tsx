import React, { useState } from 'react';
import { BusinessData, ReportState } from './types';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ReportDisplay from './components/ReportDisplay';
import { Footer } from './components/Footer';
import { generateGBPReport } from './services/geminiService';

const App: React.FC = () => {
  const [reportState, setReportState] = useState<ReportState>({
    isLoading: false,
    content: null,
    error: null
  });

  const handleFormSubmit = async (data: BusinessData) => {
    setReportState({ isLoading: true, content: null, error: null });
    try {
      const content = await generateGBPReport(data);
      setReportState({ isLoading: false, content, error: null });
      
      setTimeout(() => {
        document.getElementById('report-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setReportState({ isLoading: false, content: null, error: err.message });
    }
  };

  // Função para tracking do Google Analytics
  const trackCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': 'Ativar IA de Postagem Grátis'
      });
    }
  };

  const handleCTAClick = () => {
    trackCTAClick();
    window.open('https://zmaps.zapy.click?signup=true', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#e0e5ec]">
      <Header />

      <main className="flex-grow container mx-auto px-4 max-w-5xl pb-24">
        {/* HERO SECTION - HORMOZI STYLE */}
        <div className="text-center py-16 md:py-32 animate-fade-in-up">
          <div className="inline-block neumorph-inset px-6 py-2 rounded-full mb-8">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] animate-alert">
              🚨 O ALGORITMO MUDOU ONTEM. VOCÊ ESTÁ SEGURO?
            </span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-black text-slate-900 mb-8 leading-[0.8] uppercase italic tracking-tighter">
            97% DOS PERFIS <br/>
            VÃO <span className="text-blue-600 underline decoration-slate-400 underline-offset-8">SUMIR.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-600 max-w-4xl mx-auto mb-16 font-bold leading-tight italic">
            O Google Search 2025 não perdoa amadores. Enquanto seus concorrentes dormem na <span className="text-slate-900 underline decoration-blue-500">preguiça</span>, a IA de elite extrai o lucro que eles estão deixando na mesa. 
          </p>

          <div className="flex flex-col items-center justify-center space-y-6 mb-20">
            <div className="flex -space-x-3">
              {[1,2,3,4,5,6].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=maps${i}`} className="w-14 h-14 rounded-full border-4 border-[#e0e5ec] shadow-xl" alt="pro" />
              ))}
            </div>
            <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">
              +2,840 Estrategistas usando o ZMaps agora para dominar regiões
            </p>
          </div>
        </div>

        {/* MENSAGEM DE ERRO */}
        {reportState.error && (
          <div className="neumorph-card text-red-600 p-8 mb-12 rounded-[40px] max-w-2xl mx-auto border-l-[12px] border-red-500 animate-fade-in-up">
            <p className="font-black uppercase tracking-tighter text-lg mb-2">ACESSO NEGADO PELO GOOGLE</p>
            <p className="text-slate-500 font-bold text-sm">{reportState.error}</p>
          </div>
        )}

        {/* INPUT OU REPORT */}
        {!reportState.content ? (
          <InputForm onSubmit={handleFormSubmit} isLoading={reportState.isLoading} />
        ) : (
          <div id="report-container" className="animate-fade-in-up">
            <ReportDisplay content={reportState.content} />
            
            {/* CTA STATE-OF-ART HORMOZI - DOMINAÇÃO TOTAL */}
            <div className="mt-24 max-w-4xl mx-auto text-center">
              <div className="neumorph-card p-12 md:p-20 rounded-[70px] border-[6px] border-blue-600/10 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
                
                <div className="mb-10">
                  <span className="bg-blue-600 text-white font-black text-[10px] px-6 py-2 rounded-full uppercase tracking-[0.5em] shadow-lg shadow-blue-500/30">
                    OFERTA DE BOAS-VINDAS ALPHA
                  </span>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter leading-[0.85]">
                  CHEGA DE PERDER <br/>PARA O <span className="text-blue-600">GOOGLE.</span>
                </h3>
                
                <p className="text-slate-600 font-bold mb-14 text-xl md:text-2xl leading-tight italic max-w-2xl mx-auto">
                  Por que continuar sendo um <span className="text-red-600">escravo do operacional</span> enquanto nossa IA faz o trabalho pesado? <br/><br/>
                  <span className="text-slate-900">Postagens infinitas, respostas de reviews automáticas e gestão de autoridade</span> em um clique. 
                  Você dorme, a IA <span className="text-slate-900 underline decoration-blue-500">atropela</span> a concorrência.
                </p>

                <div className="flex flex-col items-center space-y-8">
                  <button 
                    onClick={handleCTAClick}
                    className="w-full max-w-2xl neumorph-button bg-blue-600 text-white font-black py-10 px-8 rounded-[40px] transition-all flex flex-col items-center justify-center space-y-2 uppercase tracking-tighter group active:scale-95 shadow-2xl shadow-blue-600/50 hover:bg-blue-700"
                  >
                    <div className="flex items-center space-x-6 text-3xl md:text-4xl">
                      <span>ATIVAR IA DE POSTAGEM GRÁTIS</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 group-hover:translate-x-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className="flex flex-col items-center">
                    <p className="text-sm md:text-lg text-slate-700 font-black uppercase tracking-[0.3em]">
                      🔒 Não precisa de cartão
                    </p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] mt-2">
                      SÓ PARA OS PRIMEIROS 100 NEGÓCIOS DE HOJE
                    </p>
                  </div>
                </div>

                <div className="mt-16 pt-10 border-t border-slate-300/60 flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=user${i*9}`} alt="test" />
                    </div>)}
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase italic text-center md:text-left">
                    "Automatizei meu GBP e as ligações subiram 400% em 14 dias." <br/>
                    <span className="text-slate-800 font-black">— Carlos, Oficina Premium</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LOADING OVERLAY AGRESSIVO */}
        {reportState.isLoading && (
          <div className="fixed inset-0 bg-[#e0e5ec]/98 backdrop-blur-xl flex items-center justify-center z-50">
            <div className="text-center p-16 neumorph-card rounded-[60px] max-w-md w-full mx-4 border-2 border-white/50">
              <div className="relative w-32 h-32 mx-auto mb-10">
                <div className="absolute inset-0 border-[12px] border-slate-200 rounded-full"></div>
                <div className="absolute inset-0 border-[12px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter leading-none">HACKEANDO...</h3>
              <p className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.3em] leading-relaxed">
                Infiltrando no algoritmo <br/>Expondo falhas dos concorrentes
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;