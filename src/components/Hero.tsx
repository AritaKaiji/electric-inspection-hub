import { Shield, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div 
      className="relative bg-gradient-to-br from-primary to-secondary pt-24 pb-16 text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            安全な電気設備で、安心な暮らしを
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-12 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            プロフェッショナルな電気点検サービスで、
            <br className="hidden sm:block" />
            あなたの大切な設備を守ります
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            無料相談はこちら
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Shield className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">安全性の確保</h3>
            <p className="text-gray-100">
              最新の技術と豊富な経験で、確実な点検を実施します
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Zap className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">専門知識</h3>
            <p className="text-gray-100">
              資格を持った専門家が丁寧に対応いたします
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Clock className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">迅速な対応</h3>
            <p className="text-gray-100">
              24時間365日、緊急時にも対応可能です
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;