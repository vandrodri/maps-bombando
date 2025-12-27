import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// Fix: Import process explicitly to provide Node.js type definitions for the global process object
import process from 'node:process';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis do arquivo .env
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Faz a ponte para que process.env.API_KEY funcione no seu código
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});
