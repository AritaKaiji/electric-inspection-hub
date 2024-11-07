import { Shield, Zap, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div 
      className="relative bg-gradient-to-br from-primary to-secondary pt-24 pb-16 text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)), url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952')`,
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
            安全第一の電気設備点検で
            <br />
            皆様の暮らしを守ります
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl mb-12 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            国家資格保有者による確実な点検で、
            <br className="hidden sm:block" />
            事故を未然に防ぎ、安心をお届けします
          </motion.p>
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-8 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="flex items-center text-lg">
              <CheckCircle2 className="w-6 h-6 mr-2" />
              年間10,000件以上の点検実績
            </p>
          </motion.div>
          <br />
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
            <h3 className="text-xl font-semibold mb-2">徹底した安全管理</h3>
            <p className="text-gray-100">
              法令基準に基づく確実な点検で、事故を未然に防ぎます
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Zap className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">国家資格保有者が対応</h3>
            <p className="text-gray-100">
              電気主任技術者をはじめとする有資格者が責任を持って点検します
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Clock className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24時間緊急対応</h3>
            <p className="text-gray-100">
              突発的なトラブルにも迅速に対応し、安全を確保します
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;