import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              会社概要
            </h2>
            <p className="text-gray-600 mb-6">
              電気設備の設計から施工、保守まで、トータルなサービスを提供しています。
              安全と信頼を第一に、社会インフラの維持に貢献します。
            </p>
            <div className="space-y-4">
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">社名</h3>
                <p className="text-gray-600">株式会社昭栄電気産業</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">所在地</h3>
                <p className="text-gray-600">〒125-0053 東京都葛飾区鎌倉3-58-2</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">代表取締役社長</h3>
                <p className="text-gray-600">岩本 洋介</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">売上収益</h3>
                <p className="text-gray-600">40億円（2023年7月期）</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">社員数</h3>
                <p className="text-gray-600">336名（グループ会社含む/令和6年7月現在）</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">グループ会社</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>株式会社昭栄ホールディングス</li>
                  <li>株式会社昭栄エンジニアサービス</li>
                  <li>株式会社MTサービス</li>
                  <li>株式会社Sアドバンス</li>
                </ul>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">主要取引先</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>東京電力パワーグリッド株式会社</li>
                  <li>テプコ・ソリューション・アドバンス株式会社</li>
                  <li>セコム株式会社</li>
                  <li>東電タウンプランニング株式会社</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="オフィスビル"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;