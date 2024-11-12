import { useState } from "react";
import { Bot } from "lucide-react";
import { getAIResponse } from "../../utils/aiChat";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const AIChat = () => {
  const [aiChat, setAiChat] = useState({
    messages: [] as { role: 'user' | 'assistant', content: string }[],
    isLoading: false
  });

  const handleAIChat = async (message: string) => {
    if (!message.trim()) return;

    setAiChat(prev => ({
      ...prev,
      messages: [...prev.messages, { role: 'user', content: message }],
      isLoading: true
    }));

    const response = await getAIResponse(message);

    setAiChat(prev => ({
      messages: [...prev.messages, { role: 'assistant', content: response }],
      isLoading: false
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-8 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
          <Bot className="w-6 h-6 mr-3" />
          AIアシスタントに相談する
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">AIアシスタント</DialogTitle>
          <DialogDescription className="text-lg">
            お気軽にご質問ください。AIが即座に回答いたします。
          </DialogDescription>
        </DialogHeader>
        <div className="h-[calc(80vh-200px)] overflow-y-auto mb-4 space-y-4 p-4">
          {aiChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-white ml-12'
                  : 'bg-gray-100 mr-12'
              }`}
            >
              {msg.content}
            </div>
          ))}
          {aiChat.isLoading && (
            <div className="text-center text-gray-500 text-lg">
              <span className="animate-pulse">応答中...</span>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <Input
            className="text-lg p-4"
            placeholder="メッセージを入力..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAIChat((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
          <Button
            size="lg"
            className="px-6"
            onClick={(e) => {
              const input = (e.target as HTMLElement)
                .parentElement?.querySelector('input');
              if (input) {
                handleAIChat(input.value);
                input.value = '';
              }
            }}
          >
            送信
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};