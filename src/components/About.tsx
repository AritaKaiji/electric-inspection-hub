const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              会社概要
            </h2>
            <p className="text-gray-600 mb-6">
              私たちは、30年以上にわたり電気設備の点検・保守サービスを提供してきました。
              お客様の安全と安心を第一に考え、高品質なサービスを提供し続けています。
            </p>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <h3 className="font-semibold text-gray-900">社名</h3>
                <p className="text-gray-600">電気点検株式会社</p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-semibold text-gray-900">所在地</h3>
                <p className="text-gray-600">〒100-0001 東京都千代田区1-1-1</p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-semibold text-gray-900">設立</h3>
                <p className="text-gray-600">1990年4月1日</p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-semibold text-gray-900">資格</h3>
                <p className="text-gray-600">
                  電気主任技術者、電気工事士、その他関連資格多数
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="電気設備の写真"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;