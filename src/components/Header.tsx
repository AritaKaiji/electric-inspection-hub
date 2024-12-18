import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-sm fixed w-full top-0 z-50 transition-colors hover:bg-white/10">
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              昭栄エンジニアサービス
          
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-white/80 transition-colors">サービス</a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors">会社概要</a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
              お問い合わせ
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                サービス
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                会社概要
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-md"
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