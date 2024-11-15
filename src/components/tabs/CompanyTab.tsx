import { Building2, Building, GraduationCap, Factory, Store, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const CompanyTab = () => (
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
          <h3 className="font-semibold mb-2">経営理念</h3>
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
            <p className="text-gray-600">株式会社昭栄エンジニアサービス</p>
          </motion.div>
          <motion.div 
            className="border-b pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900">所在地</h3>
            <p className="text-gray-600">〒100-0001 東京都千代田区1-1-1</p>
          </motion.div>
          <motion.div 
            className="border-b pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900">設立</h3>
            <p className="text-gray-600">1990年4月1日</p>
          </motion.div>
          <motion.div 
            className="border-b pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900">資格</h3>
            <p className="text-gray-600">
              電気主任技術者、電気工事士、その他関連資格多数
            </p>
          </motion.div>
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
      </CardContent>
    </Card>

    <Card className="bg-gradient-to-br from-blue-50 to-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-900">主要取引先</CardTitle>
        <CardDescription className="text-blue-800">
          多様な業界での豊富な実績があります
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