import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const BrochureDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = '電気点検サービス_パンフレット.pdf';
    link.click();
    
    toast.success("パンフレットのダウンロードを開始しました");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container-width px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">サービスパンフレット</h2>
          <p className="text-gray-600 mb-8">
            弊社の電気点検サービスの詳細については、パンフレットをご覧ください。
            <br />
            安全性と信頼性の高いサービスをご提供いたします。
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="パンフレットプレビュー"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <Button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              パンフレットをダウンロード
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            ※PDFファイル形式です。閲覧にはAdobe Acrobat Readerなどのソフトウェアが必要です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;