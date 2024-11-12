import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = API_KEY ? new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
}) : null;

export const getAIResponse = async (message: string) => {
  if (!openai) {
    return "申し訳ありません。AIチャットをご利用いただくには、OpenAI APIキーの設定が必要です。環境変数 VITE_OPENAI_API_KEY を設定してください。";
  }

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
      model: "gpt-4",
    });

    return completion.choices[0]?.message?.content || "申し訳ありません。現在応答できません。";
  } catch (error) {
    console.error('AI Response Error:', error);
    return "申し訳ありません。現在システムが混み合っております。後ほど再度お試しください。";
  }
};