import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const CompanyTab = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6"
  >
    <div>
      <h2 className="text-2xl font-bold mb-4">会社情報</h2>
      <p className="text-gray-600 mb-4">
        創業以来、私たちは電気設備の安全と信頼性を追求してきました。
        お客様の安心と満足を第一に考え、高品質なサービスを提供し続けています。
      </p>
      <ul className="space-y-2">
        <li>設立：1990年</li>
        <li>資本金：1億円</li>
        <li>従業員数：150名</li>
        <li>事業内容：電気設備点検・保守</li>
      </ul>
    </div>
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        alt="オフィスの様子"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />
    </div>
  </motion.div>
);

const ServicesTab = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6"
  >
    <div>
      <h2 className="text-2xl font-bold mb-4">サービス</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-500" />
          <div>
            <h3 className="font-bold">定期点検サービス</h3>
            <p className="text-gray-600">計画的な設備点検で事故を未然に防ぎます</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-500" />
          <div>
            <h3 className="font-bold">24時間緊急対応</h3>
            <p className="text-gray-600">突発的なトラブルにも迅速に対応します</p>
          </div>
        </div>
      </div>
    </div>
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        alt="サービスイメージ"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />
    </div>
  </motion.div>
);

const AchievementsTab = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6"
  >
    <div>
      <h2 className="text-2xl font-bold mb-4">実績</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold">大規模商業施設の電気設備改修</h3>
          <p className="text-gray-600">営業を継続しながらの改修工事を成功させました</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-bold">工場設備の省エネ化プロジェクト</h3>
          <p className="text-gray-600">年間電力使用量を30%削減することに成功</p>
        </div>
      </div>
    </div>
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        alt="実績イメージ"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />
    </div>
  </motion.div>
);

const SustainabilityTab = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6"
  >
    <div>
      <h2 className="text-2xl font-bold mb-4">サステナビリティ</h2>
      <p className="text-gray-600 mb-4">
        環境に配慮した設備点検・保守を通じて、
        持続可能な社会の実現に貢献します。
      </p>
      <ul className="space-y-2 list-disc list-inside text-gray-600">
        <li>再生可能エネルギーの活用推進</li>
        <li>省エネ設備の導入支援</li>
        <li>環境負荷の少ない点検方法の採用</li>
        <li>地域社会への貢献活動</li>
      </ul>
    </div>
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
        alt="サステナビリティイメージ"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      />
    </div>
  </motion.div>
);

const TabsContainer = () => {
  return (
    <Tabs defaultValue="company" className="w-full max-w-5xl mx-auto mt-8">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="company">会社情報</TabsTrigger>
        <TabsTrigger value="services">サービス</TabsTrigger>
        <TabsTrigger value="achievements">実績</TabsTrigger>
        <TabsTrigger value="sustainability">サステナビリティ</TabsTrigger>
      </TabsList>
      <TabsContent value="company">
        <CompanyTab />
      </TabsContent>
      <TabsContent value="services">
        <ServicesTab />
      </TabsContent>
      <TabsContent value="achievements">
        <AchievementsTab />
      </TabsContent>
      <TabsContent value="sustainability">
        <SustainabilityTab />
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;