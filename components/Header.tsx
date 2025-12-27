import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getTitle = () => {
    return "Análise de Dominação";
  };

  return (
    <header className="h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm transition-all">

      {/* LADO ESQUERDO: Logo Z + Slogan */}
      <div className="flex items-center gap-4">
         {/* Logo Z */}
         <div className="w-12 h-12 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transform -rotate-3 hover:rotate-0 transition-all duration-300 border border-white/20">
            <span className="text-white font-black text-3xl font-serif italic drop-shadow-md select-none">Z</span>
         </div>

         {/* Nome e Slogan */}
         <div className="flex flex-col">
            <h1 className="text-2xl font-black text-slate-800 tracking-tighter leading-none">
                ZMaps
            </h1>
            <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wide">
                Google Maps na Mão
            </p>
         </div>
      </div>

      {/* LADO DIREITO: Status + Menu Hamburguer */}
      <div className="flex items-center gap-4">

         {/* Título da Página (Visível apenas em Desktop) */}
         <div className="hidden md:block text-right mr-4 border-r border-slate-200 pr-6">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Módulo Atual</p>
            <p className="text-sm font-bold text-slate-700">{getTitle()}</p>
         </div>

         {/* Status Online */}
         <div className="hidden sm:flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Online
         </div>

         {/* Menu Hamburguer (Visível apenas em Mobile) */}
         <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 hover:text-blue-600 rounded-lg transition-colors focus:outline-none"
            aria-label="Menu Principal"
         >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-6 md:hidden shadow-2xl z-40">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-slate-700 font-black uppercase italic tracking-tighter hover:text-blue-600 py-2 border-b border-slate-50">Análise Estratégica</a>
            <a href="#" className="text-slate-700 font-black uppercase italic tracking-tighter hover:text-blue-600 py-2 border-b border-slate-50">Postagens IA</a>
            <a href="#" className="text-slate-700 font-black uppercase italic tracking-tighter hover:text-blue-600 py-2 border-b border-slate-50">Reviews Automáticos</a>
            <a href="#" className="text-blue-600 font-black uppercase italic tracking-tighter py-2">Dashboard Pro</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;