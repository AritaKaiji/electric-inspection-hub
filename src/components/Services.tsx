import { CheckCircle2, AlertCircle, FileText, Shield } from "lucide-react";
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
      title: "安全点検サービス",
      description: "法令に基づいた定期的な電気設備の点検で、事故を未然に防ぎます",
      items: [
        "絶縁抵抗測定による漏電防止",
        "熱画像診断による異常発熱検知",
        "接地抵抗測定による感電防止",
        "設備の経年劣化チェック"
      ],
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: AlertCircle,
      title: "24時間緊急対応",
      description: "突発的な電気トラブルに、迅速かつ安全に対応いたします",
      items: [
        "停電時の緊急復旧対応",
        "漏電による事故防止対策",
        "設備故障の緊急修理",
        "安全な仮復旧措置"
      ],
      bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      icon: FileText,
      title: "安全診断報告",
      description: "詳細な報告書の作成と、事故防止のための改善提案を提供します",
      items: [
        "法定点検報告書作成",
        "設備の安全性評価",
        "事故防止のための改善提案",
        "設備更新計画の策定"
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