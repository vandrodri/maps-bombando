
import React from 'react';

interface ReportDisplayProps {
  content: string;
}

const ReportDisplay: React.FC<ReportDisplayProps> = ({ content }) => {
  const formatMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('### ')) return <h3 key={index} className="text-xl font-black text-slate-800 mt-8 mb-4 uppercase italic tracking-tighter">{line.replace('### ', '')}</h3>;
        if (line.startsWith('## ')) return <h2 key={index} className="text-2xl font-black text-blue-700 mt-10 mb-6 uppercase italic tracking-tighter border-l-8 border-blue-400 pl-4 bg-blue-50/50 py-2 rounded-r-lg">{line.replace('## ', '')}</h2>;
        if (line.startsWith('# ')) return <h1 key={index} className="text-3xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter leading-none">{line.replace('# ', '')}</h1>;
        
        // Lists
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return <li key={index} className="ml-6 mb-3 text-slate-700 list-none flex items-start">
            <span className="text-blue-600 mr-2 font-black">→</span>
            <span dangerouslySetInnerHTML={{ __html: line.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
          </li>;
        }

        // Numbers
        if (line.match(/^\d+\./)) {
           return <li key={index} className="ml-6 mb-4 text-slate-800 font-bold list-decimal pl-2">{line.replace(/^\d+\./, '').trim()}</li>;
        }

        // Paragraphs and Empty spaces
        if (line.trim() === '') return <div key={index} className="h-4"></div>;

        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-black">$1</strong>');
        return <p key={index} className="text-slate-700 leading-relaxed mb-4 text-lg" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
      });
  };

  return (
    <div className="max-w-4xl mx-auto neumorph-card p-8 md:p-16 rounded-[50px] relative overflow-hidden animate-fade-in-up bg-[#e0e5ec]">
      {/* Selo de Autenticidade */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-[10px] font-black uppercase">Official Strategy</text>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-8 border-b-2 border-slate-300">
        <div>
          <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-3">Relatório de Orientação Estratégica</div>
          <h2 className="text-4xl font-black text-slate-900 leading-none uppercase italic tracking-tighter">Dominação Local</h2>
        </div>
        <button 
          onClick={() => window.print()} 
          className="mt-6 md:mt-0 flex items-center space-x-2 neumorph-button px-6 py-4 rounded-2xl text-slate-700 font-black text-xs transition-all active:scale-95 hover:text-blue-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <span>IMPRIMIR PLANO</span>
        </button>
      </div>

      <div className="prose prose-slate max-w-none print:bg-white">
        {formatMarkdown(content)}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-300 flex justify-between items-center text-[9px] text-slate-400 font-black uppercase tracking-widest">
        <span>Maps Growth AI Suite</span>
        <span>© 2024 Zapy Marketing</span>
      </div>
    </div>
  );
};

export default ReportDisplay;
