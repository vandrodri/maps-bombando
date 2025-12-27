
import React from 'react';
import { auth, googleProvider, signInWithPopup, ensureUserProfile } from '../services/firebase';

const Auth: React.FC = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await ensureUserProfile(result.user);
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Falha ao entrar. Verifique sua conexão.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="neumorph-card p-12 rounded-[50px] max-w-md w-full text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-3xl font-black text-slate-800 mb-4 uppercase italic tracking-tighter">Área do Estrategista</h2>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          Entre para salvar seus relatórios, gerenciar seus créditos e dominar o Maps.
        </p>
        
        <button 
          onClick={handleGoogleLogin}
          className="w-full neumorph-button flex items-center justify-center space-x-4 py-5 rounded-2xl font-black uppercase tracking-tighter text-slate-700 hover:text-blue-600 transition-all active:scale-95"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" className="w-6 h-6" alt="Google" />
          <span>Entrar com Google</span>
        </button>
        
        <p className="mt-8 text-[10px] text-slate-400 font-black uppercase tracking-widest">
          Grátis para começar • Sem Cartão
        </p>
      </div>
    </div>
  );
};

export default Auth;
