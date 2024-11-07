const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">電気点検株式会社</h3>
            <p className="text-gray-400">
              安全な電気設備で、<br />
              安心な暮らしをサポートします
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  サービス
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <p className="text-gray-400">
              〒100-0001<br />
              東京都千代田区1-1-1<br />
              TEL: 03-1234-5678<br />
              Email: info@example.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 電気点検株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;