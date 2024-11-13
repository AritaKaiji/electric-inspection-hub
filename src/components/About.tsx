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
              私たちは、30年以上にわたり電気設備の点検・保守サービスを提供してきました。
              お客様の安全と安心を第一に考え、高品質なサービスを提供し続けています。
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
                <p className="text-gray-600">電気点検株式会社</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">所在地</h3>
                <p className="text-gray-600">〒100-0001 東京都千代田区1-1-1</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">設立</h3>
                <p className="text-gray-600">1990年4月1日</p>
              </motion.div>
              <motion.div 
                className="border-b pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900">資格</h3>
                <p className="text-gray-600">
                  電気主任技術者、電気工事士、その他関連資格多数
                </p>
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
              src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
              alt="都会の夜景"
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