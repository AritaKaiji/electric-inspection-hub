import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Bot } from "lucide-react";
import { getAIResponse } from "../utils/aiChat";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [aiChat, setAiChat] = useState({
    messages: [] as { role: 'user' | 'assistant', content: string }[],
    isLoading: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("お問い合わせを受け付けました。担当者より連絡させていただきます。");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">連絡先情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">電話番号</p>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">メールアドレス</p>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">所在地</p>
                    <p className="text-gray-600">
                      〒100-0001
                      <br />
                      東京都千代田区1-1-1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前
              </label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス
              </label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話番号
              </label>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ内容
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;