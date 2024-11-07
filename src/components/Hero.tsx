import { Shield, Zap, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ProcessDiagram from "./ProcessDiagram";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-16 text-foreground overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))'
        }}
      />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              安全第一の
              <br />
              電気設備点検
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-gray-300">
              国家資格保有者による確実な点検で、
              <br className="hidden sm:block" />
              事故を未然に防ぎ、安心をお届けします
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/30 backdrop-blur-md p-6 rounded-xl mb-12 inline-block"
          >
            <p className="flex items-center text-xl">
              <CheckCircle2 className="w-8 h-8 mr-3 text-yellow-400" />
              年間10,000件以上の点検実績
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="inline-block bg-yellow-400 text-black px-12 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-yellow-400/20"
            >
              無料相談はこちら
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors group">
            <Shield className="w-12 h-12 mb-4 text-yellow-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">徹底した安全管理</h3>
            <p className="text-gray-300">
              法令基準に基づく確実な点検で、事故を未然に防ぎます
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors group">
            <Zap className="w-12 h-12 mb-4 text-yellow-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">国家資格保有者が対応</h3>
            <p className="text-gray-300">
              電気主任技術者をはじめとする有資格者が責任を持って点検します
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors group">
            <Clock className="w-12 h-12 mb-4 text-yellow-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">24時間緊急対応</h3>
            <p className="text-gray-300">
              突発的なトラブルにも迅速に対応し、安全を確保します
            </p>
          </div>
        </motion.div>
      </div>

      <ProcessDiagram />
    </div>
  );
};

export default Hero;