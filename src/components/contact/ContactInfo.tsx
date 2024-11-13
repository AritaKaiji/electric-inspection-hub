import { Phone, Mail, MapPin } from "lucide-react";

export const ContactInfo = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-8">連絡先情報</h3>
    <div className="space-y-6">
      <div className="flex items-center">
        <Phone className="w-8 h-8 text-blue-600 mr-4" />
        <div>
          <p className="font-semibold text-gray-600 text-lg">電話番号</p>
          <p className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            03-1234-5678
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Mail className="w-8 h-8 text-blue-600 mr-4" />
        <div>
          <p className="font-semibold text-gray-600 text-lg">メールアドレス</p>
          <p className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            info@example.com
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <MapPin className="w-8 h-8 text-gray-600 mr-4" />
        <div>
          <p className="font-semibold text-gray-600 text-lg">所在地</p>
          <p className="text-lg text-gray-600">
            〒100-0001
            <br />
            東京都千代田区1-1-1
          </p>
        </div>
      </div>
    </div>
  </div>
);