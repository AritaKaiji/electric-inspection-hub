import { CheckCircle2, Shield, Flame, Wrench, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, items, bgImage }) => {
  return (
    <motion.div 
      className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <ul className="mt-4 space-y-2 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div 
        className="absolute inset-0 opacity-10 rounded-lg"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "定期調査",
      description: "電気事業法に基づき、4年に1度（定期調査）または1年に1度（特定調査）の法定点検を実施します",
      items: [
        "電力量計付近での漏電検査実施",
        "分電盤の外観・内部点検実施",
        "必要に応じた絶縁測定の実施",
        "電気設備の安全相談対応"
      ],
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      icon: Wrench,
      title: "計器工事",
      description: "計量法に基づき、一般家庭の電力量計を10年に1度の周期で交換する業務を実施します",
      items: [
        "停電なしでの電力量計交換作業",
        "取外・取付計器の指針記録",
        "取付計器の正常動作確認",
        "必要に応じた停電対応の相談"
      ],
      bgImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      icon: Flame,
      title: "ガス調査サービス",
      description: "お客様の安全を確保するため、専門的な視点でガス設備の点検を実施します",
      items: [
        "ガス漏れ調査の実施",
        "ガス機器の点火試験",
        "設置状況と使用環境の確認",
        "安全装置付き機器への交換提案"
      ],
      bgImage: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9"
    },
    {
      icon: Wrench,
      title: "フィールド作業",
      description: "お客様の引越しや契約変更に伴う電気設備の接続・切断作業を行います",
      items: [
        "電気の使用開始・停止時の接続作業",
        "電力量計・契約ブレーカーの交換",
        "電線の接続・切断作業",
        "事前の現場確認実施"
      ],
      bgImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
    },
    {
      icon: ClipboardCheck,
      title: "竣工調査",
      description: "電気事業法に基づく法定点検で、新築時や電気設備の変更時に実施します",
      items: [
        "配線・電気設備の目視点検",
        "絶縁抵抗測定の実施",
        "電圧測定の実施",
        "接地抵抗測定の実施"
      ],
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            安全を第一に考えたサービス
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様の大切な設備を守り、安心して使用いただけるよう、
            徹底した安全管理と確実な点検を提供しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;