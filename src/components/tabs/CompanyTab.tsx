import { Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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