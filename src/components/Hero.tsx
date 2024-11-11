import { Shield, Zap, Clock, CheckCircle2, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";
import ProcessDiagram from "./ProcessDiagram";
import { toast } from "sonner";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/inspection-guide.pdf';
    link.download = '電気設備点検ガイド.pdf';
    link.click();
    
    toast.success("ダウンロードを開始しました");
  };

  return (
    <div className="relative min-h-screen pt-32 pb-16 text-foreground overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
      />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-4 sm:right-6 lg:right-8"
        >
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full flex items-center gap-3 shadow-lg animate-pulse text-lg font-bold">
            <Phone className="w-7 h-7" />
            <span>24時間緊急対応</span>
          </div>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-yellow-400 mb-2">安全を第一に。</span>
              <span className="block">笑顔が見える</span>
              <span className="block">電気設備点検。</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-gray-300">
              国家資格保有者による確実な点検で、
              <br className="hidden sm:block" />
              事故を未然に防ぎ、安心をお届けします
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-yellow-400 text-black px-16 py-5 text-2xl font-bold rounded-full 
                       hover:bg-yellow-500 transition-colors shadow-xl hover:shadow-yellow-400/30 
                       transform hover:-translate-y-1 active:translate-y-0 
                       focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              無料相談はこちら
            </motion.a>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-yellow-400 px-8 py-5 text-xl font-bold rounded-full 
                       hover:bg-white/20 transition-colors shadow-xl
                       transform hover:-translate-y-1 active:translate-y-0 
                       focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
            >
              <Download className="w-6 h-6" />
              資料ダウンロード
            </motion.button>
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