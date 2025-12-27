import { GoogleGenAI } from "@google/genai";
import { BusinessData } from "../types";

export const generateGBPReport = async (data: BusinessData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
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
  `;

  const userPrompt = `
    Negócio: ${data.name} 
    Local: ${data.city}, ${data.state}
    Execute a análise de dominação agora.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', 
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 1.0,
      },
    });

    return response.text || "Erro crítico. O algoritmo bloqueou a extração.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("O Google reforçou as defesas. Aguarde 30s para nova infiltração.");
  }
};