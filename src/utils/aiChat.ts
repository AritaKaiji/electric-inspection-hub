import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const getAIResponse = async (message: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "あなたは電気設備点検会社のカスタマーサポート担当です。専門的かつ丁寧な対応を心がけてください。"
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "gpt-4o",
    });

    return completion.choices[0]?.message?.content || "申し訳ありません。現在応答できません。";
  } catch (error) {
    console.error('AI Response Error:', error);
    return "申し訳ありません。現在システムが混み合っております。後ほど再度お試しください。";
  }
};