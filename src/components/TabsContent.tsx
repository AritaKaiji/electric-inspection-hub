import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users2, Wrench, Trophy, Leaf, Factory, Building, GraduationCap, ShoppingBag } from "lucide-react";

const CaseStudiesTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          導入事例
        </CardTitle>
        <CardDescription>実際の導入事例をご紹介します</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Factory className="h-6 w-6" />
            <h3 className="text-xl font-semibold">大手製造業A社様</h3>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">課題</p>
            <ul className="list-disc list-inside space-y-1">
              <li>老朽化した電気設備の安全性への懸念</li>
              <li>高額な電気料金</li>
              <li>突発的な設備故障による生産ライン停止</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">導入したソリューション</p>
            <ul className="list-disc list-inside space-y-1">
              <li>24時間遠隔監視システムの導入</li>
              <li>計画的な設備更新プログラムの実施</li>
              <li>省エネ機器への段階的な切り替え</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">成果</p>
            <ul className="list-disc list-inside space-y-1">
              <li>年間電気料金を25%削減</li>
              <li>設備故障による生産ライン停止が90%減少</li>
              <li>CO2排出量を年間30%削減</li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <h3 className="text-xl font-semibold">商業施設B社様</h3>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">課題</p>
            <ul className="list-disc list-inside space-y-1">
              <li>施設内の照明設備の非効率な運用</li>
              <li>空調システムの制御が不適切</li>
              <li>電気設備の定期点検による営業時間への影響</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">導入したソリューション</p>
            <ul className="list-disc list-inside space-y-1">
              <li>スマート照明制御システムの導入</li>
              <li>AIを活用した空調制御システムの実装</li>
              <li>営業時間外での効率的な点検スケジュール策定</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">成果</p>
            <ul className="list-disc list-inside space-y-1">
              <li>照明関連の電力使用量を40%削減</li>
              <li>空調効率が35%向上</li>
              <li>年間保守コストを20%削減</li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <h3 className="text-xl font-semibold">教育機関C様</h3>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">課題</p>
            <ul className="list-disc list-inside space-y-1">
              <li>築50年以上の古い電気設備</li>
              <li>安全基準への適合性の懸念</li>
              <li>限られた予算内での設備更新の必要性</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">導入したソリューション</p>
            <ul className="list-disc list-inside space-y-1">
              <li>段階的な設備更新計画の策定と実施</li>
              <li>省エネ補助金を活用した最新設備の導入</li>
              <li>教職員向け省エネ研修プログラムの実施</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">成果</p>
            <ul className="list-disc list-inside space-y-1">
              <li>電気設備の安全性が大幅に向上</li>
              <li>年間電気料金を30%削減</li>
              <li>教職員の省エネ意識が向上</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const CompanyTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          会社情報
        </CardTitle>
        <CardDescription>1990年の創業以来、電気設備の安全を守り続けています</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">経営理念</h3>
          <p>安全と信頼を第一に、社会インフラの維持に貢献します。</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">事業内容</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>電気設備点検・保守</li>
            <li>安全診断・コンサルティング</li>
            <li>設備更新工事</li>
            <li>24時間緊急対応サービス</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">主要取引先</h3>
          <p>官公庁、大手製造業、商業施設、教育機関など</p>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ServicesTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-6 w-6" />
          サービス
        </CardTitle>
        <CardDescription>お客様のニーズに合わせた包括的なサービスを提供します</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">定期点検サービス</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>年次点検</li>
              <li>月次点検</li>
              <li>法定点検対応</li>
              <li>設備診断報告</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">緊急対応サービス</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>24時間365日対応</li>
              <li>緊急修理</li>
              <li>故障診断</li>
              <li>代替機器の手配</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">コンサルティング</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>設備更新計画</li>
              <li>省エネ提案</li>
              <li>コスト削減支援</li>
              <li>安全性向上提案</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">工事・施工</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>設備更新工事</li>
              <li>改修工事</li>
              <li>増設工事</li>
              <li>省エネ化工事</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const AchievementsTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          実績
        </CardTitle>
        <CardDescription>30年以上の実績と信頼</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">3,000+</h3>
            <p className="text-sm text-gray-600">年間点検件数</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-sm text-gray-600">取引企業数</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">99.9%</h3>
            <p className="text-sm text-gray-600">顧客満足度</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">主な実績</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>大手製造業の工場設備点検（年間200件以上）</li>
            <li>商業施設の電気設備24時間監視システム導入</li>
            <li>教育機関の設備更新プロジェクト完遂</li>
            <li>省エネ化による電力使用量30%削減達成</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

const SustainabilityTab = () => (
  <div className="space-y-6 p-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-6 w-6" />
          サステナビリティ
        </CardTitle>
        <CardDescription>持続可能な社会の実現に向けて</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">環境への取り組み</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>省エネ機器の積極的な導入推進</li>
            <li>再生可能エネルギーの活用支援</li>
            <li>廃棄物の適正処理とリサイクル</li>
            <li>ペーパーレス化の推進</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">社会貢献活動</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>地域清掃活動の実施</li>
            <li>技術者育成プログラムの提供</li>
            <li>災害時の電気設備復旧支援</li>
            <li>環境教育の実施</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">2030年目標</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>CO2排出量50%削減（2020年比）</li>
            <li>再生可能エネルギー使用率80%達成</li>
            <li>女性管理職比率30%達成</li>
            <li>障がい者雇用率3.0%達成</li>
          </ul>
        </div>
      </CardContent>
    </Card>
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
