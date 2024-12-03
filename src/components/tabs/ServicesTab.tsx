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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt=""
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="電気設備サービス"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">定期点検サービス</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>10年に一度</li>
              <li>電力量計の交換</li>
              <li>取外計器の指針と取付計器の指針を記録</li>
              <li>取付計器の正常に動作確認</li>
            </ul>
          </div>
          
      </CardContent>
    </Card>
  </div>
);