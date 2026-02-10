
import { GoogleGenAI, Type } from "@google/genai";
import { RegistrationFormData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const checkEligibility = async (data: Partial<RegistrationFormData>) => {
  const prompt = `
    Assessment for Food Basket Aid in Kota Kinabalu P172 (Constituency support program).
    Context:
    - Target: Families in need of food security support.
    - Area: Luyang (N21), Likas (N19), Api-Api (N20).
    - Tone: Positive, supportive, and community-focused.
    
    User Data:
    - Constituency: ${data.constituency}
    - Monthly Income: RM${data.householdIncome}
    - Dependents: ${data.dependentsCount}
    
    Provide a professional and encouraging assessment in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            eligible: { type: Type.BOOLEAN },
            reason: { type: Type.STRING },
            nextSteps: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["eligible", "reason", "nextSteps"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      eligible: true,
      reason: "Terima kasih atas pendaftaran anda. Kami komited untuk membantu setiap warga P172 yang memerlukan.",
      nextSteps: ["Pasukan kami akan menyemak dokumen anda", "Tunggu panggilan pengesahan daripada pejabat kami"]
    };
  }
};

export const chatWithAssistant = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are a helpful and positive assistant for the Pusat Khidmat Rakyat Parlimen P172 Kota Kinabalu. 
      You help citizens with queries about Food Basket Aid (Bakul Makanan).
      Key Info:
      - Hotline: +6011-36788172
      - Areas covered: Likas (N19), Api-Api (N20), Luyang (N21).
      - Office: Pusat Khidmat Rakyat P.172 Kota Kinabalu.
      - Eligibility: Open to residents of P172 needing food security support.
      - Tone: Very positive, welcoming, and helpful. Use Red-White branding themes in your language (e.g., "Sinergi Merah Putih", "Berbakti Untuk Rakyat").
      - Languages: English & Malay.`,
    }
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
