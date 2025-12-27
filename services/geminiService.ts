import Groq from "groq-sdk";
import { BusinessData } from "../types";

// Usando a chave do Groq agora
const groq = new Groq({ 
  apiKey: (import.meta as any).env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true 
});

export const generateGBPReport = async (data: BusinessData): Promise<string> => {
  const systemInstruction = `
    VOCÊ É O ESTRATEGISTA-CHEFE DA ZAPY. Seu tom é AGRESSIVO, focado em GROWTH, FOMO e DOMINAÇÃO (Alex Hormozi Style).
    Não use palavras gentis. Use termos como "esmagar", "território", "lucro escondido", "ataque", "preguiça do concorrente".

    ⚠️ CONTEXTO 2025: O Google Maps mudou. A busca é visual e impulsionada por IA.
    
    ESTRUTURA:
    # 🏁 DIAGNÓSTICO DE GUERRA: ${data.name.toUpperCase()}
    ## 1. A VERDADE BRUTAL
    ## 2. O PONTO CEGO DO ALGORITMO 2025
    ## 3. PLANO DE ATAQUE 72 HORAS
    ## 4. CONCLUSÃO: O PREÇO DE NÃO AGIR
  `;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: `Negócio: ${data.name}. Local: ${data.city}, ${data.state}. Execute.` }
      ],
      model: "llama-3.3-70b-versatile", // Modelo ultra rápido e inteligente
      temperature: 1,
    });

    return chatCompletion.choices[0]?.message?.content || "Erro no processamento.";
  } catch (error) {
    console.error("Groq Error:", error);
    throw new Error("Ocorreu uma falha na infiltração dos dados.");
  }
};