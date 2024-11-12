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
        <Button variant="outline" className="mt-4">
          <Bot className="w-4 h-4 mr-2" />
          AIアシスタントに相談する
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>AIアシスタント</DialogTitle>
          <DialogDescription>
            お気軽にご質問ください。AIが即座に回答いたします。
          </DialogDescription>
        </DialogHeader>
        <div className="h-[300px] overflow-y-auto mb-4 space-y-4">
          {aiChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-white ml-8'
                  : 'bg-gray-100 mr-8'
              }`}
            >
              {msg.content}
            </div>
          ))}
          {aiChat.isLoading && (
            <div className="text-center text-gray-500">
              <span className="animate-pulse">応答中...</span>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="メッセージを入力..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAIChat((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
          <Button
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