import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseStudiesTab } from "./cases/CaseStudiesTab";
import { CompanyTab } from "./tabs/CompanyTab";
import { ServicesTab } from "./tabs/ServicesTab";
import { AchievementsTab } from "./tabs/AchievementsTab";
import { SustainabilityTab } from "./tabs/SustainabilityTab";

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
      <TabsContent value="case-studies">
        <CaseStudiesTab />
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;