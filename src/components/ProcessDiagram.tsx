import { ArrowRight, Zap, Wrench, FileCheck, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const ProcessDiagram = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "お問い合わせ",
      description: "24時間体制で\nご相談を承ります",
    },
    {
      icon: Zap,
      title: "現場調査",
      description: "専門スタッフが\n状況を確認",
    },
    {
      icon: Wrench,
      title: "点検・整備",
      description: "安全な作業で\n確実に対応",
    },
    {
      icon: FileCheck,
      title: "報告・提案",
      description: "詳細な報告と\n改善提案を提供",
    },
  ];

  return (
    <div className="container-width px-4 relative z-20 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/30 backdrop-blur-md rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-12">作業の流れ</h2>
        <div className="flex flex-wrap justify-center items-start gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center group">
              <div className="text-center px-4">
                <div className="w-24 h-24 rounded-full bg-black/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400/20 transition-colors">
                  <step.icon className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 whitespace-pre-line">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-yellow-400 mx-2 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessDiagram;