import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyTab } from "./tabs/CompanyTab";
import { ServicesTab } from "./tabs/ServicesTab";
import { AchievementsTab } from "./tabs/AchievementsTab";

const TabsContainer = () => {
  return (
    <div className="mb-[100px]">
      <Tabs defaultValue="company" className="w-full max-w-5xl mx-auto mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="company">会社情報</TabsTrigger>
          <TabsTrigger value="services">サービス</TabsTrigger>
          <TabsTrigger value="achievements">実績</TabsTrigger>
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
      </Tabs>
    </div>
  );
};

export default TabsContainer;