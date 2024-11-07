import { CheckCircle2, AlertCircle, FileText } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            サービス内容
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様のニーズに合わせた電気設備の点検・保守サービスを提供しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">定期点検</h3>
              <p className="text-gray-600">
                法令に基づいた定期的な電気設備の点検を実施し、
                安全性を確保します
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  絶縁抵抗測定
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  接地抵抗測定
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  負荷電流測定
                </li>
              </ul>
            </div>
            <div 
              className="absolute inset-0 opacity-10 rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <AlertCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">緊急対応</h3>
              <p className="text-gray-600">
                24時間365日、緊急時の電気トラブルに
                迅速に対応いたします
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  停電対応
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  漏電調査
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  故障修理
                </li>
              </ul>
            </div>
            <div 
              className="absolute inset-0 opacity-10 rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative z-10">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">報告・診断</h3>
              <p className="text-gray-600">
                詳細な報告書の作成と、今後の改善提案を
                提供いたします
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  点検報告書作成
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  改善提案
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  設備診断
                </li>
              </ul>
            </div>
            <div 
              className="absolute inset-0 opacity-10 rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;