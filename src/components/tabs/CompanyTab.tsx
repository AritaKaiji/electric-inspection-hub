import { Building2, Building, GraduationCap, Factory, Store, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const CompanyTab = () => {
  return (
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
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="オフィスビル"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">会社概要</h3>
            <p>安全と信頼を第一に、社会インフラの維持に貢献します。</p>
          </div>
          <div className="space-y-4">
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">社名</h3>
              <p className="text-gray-600">株式会社昭栄電気産業</p>
            </motion.div>
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">所在地</h3>
              <p className="text-gray-600">東京都葛飾区鎌倉3-58-2</p>
            </motion.div>
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">グループ会社</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>株式会社昭栄ホールディングス</li>
                <li>株式会社昭栄エンジニアサービス</li>
                <li>株式会社ＭＴサービス</li>
                <li>株式会社Ｓアドバンス</li>
              </ul>
            </motion.div>
            <motion.div 
              className="border-b pb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-gray-900">資格取得者</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>第一級電気施工管理技士：1名</li>
                <li>第三種電気主任技術者：2名</li>
                <li>第一種電気工事士：10名</li>
                <li>第二種電気工事士：223名</li>
              </ul>
              <h3 className="font-semibold text-gray-900 mt-4">取得免許</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>一般建設業 東京都知事許可（般-17）第89280号</li>
                <li>特定労働者派遣事業 厚生労働大臣届出 特13-12-0057号</li>
                <li>電気通信工事業 東京都知事許可（般-9）第89280号</li>
                <li>電気工事業 東京都知事届出第 045060号</li>
                <li>日本建設業施工管理技師会 第20046号</li>
              </ul>
            </motion.div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">事業内容</h3>
            <p className="text-gray-600">
              電柱設計、定期調査、竣工調査、ガス調査、フィールド作業、外線・内線電気工事、
              EV充電器施工、太陽光・蓄電池施工、ものづくり開発、警備設備工事、派遣業
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-900">主要取引先</CardTitle>
          <CardDescription className="text-blue-800">
            <ul className="list-disc list-inside space-y-1">
              <li>東京電力パワーグリッド株式会社</li>
              <li>テプコ・ソリューション・アドバンス株式会社</li>
              <li>セコム株式会社</li>
              <li>東電タウンプランニング株式会社</li>
              <li>東京エナジーアライアンス株式会社</li>
              <li>テプコホームテック株式会社</li>
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Landmark className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-blue-900">官公庁</h4>
                <p className="text-sm text-gray-600">
                  都庁、区役所、市役所など行政施設の電気設備保守管理を担当
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Factory className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-blue-900">製造業</h4>
                <p className="text-sm text-gray-600">
                  大手自動車メーカー、電機メーカーの工場設備の定期点検と保守
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Store className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-blue-900">商業施設</h4>
                <p className="text-sm text-gray-600">
                  大型ショッピングモール、百貨店の電気設備総合管理を実施
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="h-6 w-6 text-blue-700 mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-blue-900">教育機関</h4>
                <p className="text-sm text-gray-600">
                  大学、高校、専門学校の電気設備の安全管理と改修工事
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};