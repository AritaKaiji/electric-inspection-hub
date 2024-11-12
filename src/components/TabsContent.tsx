import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const CompanyTab = () => (
  <div>
    <h2>会社情報</h2>
    <p>会社の詳細情報がここに入ります。</p>
  </div>
);

const ServicesTab = () => (
  <div>
    <h2>サービス</h2>
    <p>提供しているサービスの詳細がここに入ります。</p>
  </div>
);

const AchievementsTab = () => (
  <div>
    <h2>実績</h2>
    <p>過去の実績がここに入ります。</p>
  </div>
);

const SustainabilityTab = () => (
  <div>
    <h2>サステナビリティ</h2>
    <p>持続可能な活動についての情報がここに入ります。</p>
  </div>
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
