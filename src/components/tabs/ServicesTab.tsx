import { Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ServicesTab = () => (
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