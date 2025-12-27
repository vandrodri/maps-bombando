import { GoogleGenerativeAI } from "@google/generative-ai";
import { BusinessData } from "../types";

export const generateGBPReport = async (data: BusinessData): Promise<string> => {
  // 1. Acesso à chave configurada para o Vite
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  // 2. Configuração do modelo com suas instruções de estrategista
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: `
      VOCÊ É O ESTRATEGISTA-CHEFE DA ZAPY. Seu tom é AGRESSIVO, focado em GROWTH, FOMO e DOMINAÇÃO (Alex Hormozi Style).
      Não use palavras gentis. Use termos como "esmagar", "território", "lucro escondido", "ataque", "preguiça do concorrente".

      ⚠️ CONTEXTO 2025:
      O Google Maps mudou drasticamente. A busca agora é visual e impulsionada por IA. Perfis estáticos estão MORRENDO.
      A oportunidade de ouro está no SEO Semântico e na exploração do "Neurônio Espelho" dos clientes.

      ⚠️ REGRAS DE OURO DO RELATÓRIO (Markdown):
      - Use gatilhos dos PECADOS CAPITAIS: A Inveja do concorrente ao ver seu topo, a Ganância por cliques de alta conversão.
      - Foque na OPORTUNIDADE da mudança recente do Google.

      ESTRUTURA:
      # 🏁 DIAGNÓSTICO DE GUERRA: ${data.name.toUpperCase()}
      
      ## 1. A VERDADE BRUTAL
      Por que eles estão invisíveis em ${data.city}. Exponha o erro fatal que está drenando o caixa.
      
      ## 2. O PONTO CEGO DO ALGORITMO 2025
      A mudança técnica que ninguém explicou. Como o Google entende "proximidade" e "autoridade" hoje.
      
      ## 3. PLANO DE ATAQUE 72 HORAS
      Três passos práticos, técnicos e imediatos para tomar o território.

      ## 4. CONCLUSÃO: O PREÇO DE NÃO AGIR
      Use FOMO puro. O que acontece se o concorrente fizer isso antes.
    `,
  });

  const userPrompt = `
    Negócio: ${data.name} 
    Local: ${data.city}, ${data.state}
    Execute a análise de dominação agora.
  `;

  try {
    // 3. Execução da chamada à IA
    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const text = response.text();

    return text || "Erro crítico. O algoritmo bloqueou a extração.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("O Google reforçou as defesas. Aguarde 30s para nova infiltração.");
  }
};