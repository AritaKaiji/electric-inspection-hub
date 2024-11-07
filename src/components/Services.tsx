import { CheckCircle2, AlertCircle, FileText } from "lucide-react";
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
      icon: CheckCircle2,
      title: "定期点検",
      description: "法令に基づいた定期的な電気設備の点検を実施し、安全性を確保します",
      items: ["絶縁抵抗測定", "接地抵抗測定", "負荷電流測定"],
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      icon: AlertCircle,
      title: "緊急対応",
      description: "24時間365日、緊急時の電気トラブルに迅速に対応いたします",
      items: ["停電対応", "漏電調査", "故障修理"],
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: FileText,
      title: "報告・診断",
      description: "詳細な報告書の作成と、今後の改善提案を提供いたします",
      items: ["点検報告書作成", "改善提案", "設備診断"],
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
            サービス内容
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            お客様のニーズに合わせた電気設備の点検・保守サービスを提供しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;