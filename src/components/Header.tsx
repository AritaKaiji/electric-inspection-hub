import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadSource = () => {
    // GitHub APIを使用してリポジトリをZIPとしてダウンロード
    const link = document.createElement('a');
    link.href = 'https://github.com/yourusername/your-repo/archive/refs/heads/main.zip';
    link.download = 'electrical-inspection-program.zip';
    link.click();
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              電気点検株式会社
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary">サービス</a>
            <a href="#about" className="text-gray-700 hover:text-primary">会社概要</a>
            <button
              onClick={handleDownloadSource}
              className="flex items-center gap-2 text-gray-700 hover:text-primary"
            >
              <Download className="w-4 h-4" />
              ソースコード
            </button>
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
              お問い合わせ
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                サービス
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                会社概要
              </a>
              <button
                onClick={() => {
                  handleDownloadSource();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                ソースコード
              </button>
              <a
                href="#contact"
                className="block px-3 py-2 text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;