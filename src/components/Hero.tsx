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
    <div className="relative min-h-screen text-foreground">
      {/* Hero Image */}
      <div 
        className="fixed inset-0 w-full h-full z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay - Darker overlay for nighttime visibility */}
      <div 
        className="fixed inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/60"
      />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-4 sm:right-6 lg:right-8"
        >
          <div className="bg-white text-gray-900 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg animate-pulse text-lg font-bold border border-gray-200">
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
            <h1 className="inline-flex flex-col writing-vertical-rl text-4xl sm:text-6xl font-bold mb-6 leading-tight text-gray-900 mx-auto">
              <span className="mb-2">笑顔が見える</span>
              <span className="mb-2">現場づくり</span>
              <span>安全第一。</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-gray-600">
              熟練の技術者による確実な施工で、
              <br className="hidden sm:block" />
              安心と信頼をお届けします
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
              className="inline-block bg-white text-gray-900 px-16 py-5 text-2xl font-bold rounded-full 
                       hover:bg-gray-50 transition-colors shadow-xl hover:shadow-gray-200/30 
                       transform hover:-translate-y-1 active:translate-y-0 
                       focus:outline-none focus:ring-4 focus:ring-gray-200 border border-gray-200"
            >
              無料相談はこちら
            </motion.a>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gray-50 text-gray-900 px-8 py-5 text-xl font-bold rounded-full 
                       hover:bg-gray-100 transition-colors shadow-xl border border-gray-200
                       transform hover:-translate-y-1 active:translate-y-0 
                       focus:outline-none focus:ring-4 focus:ring-gray-200"
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
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group">
            <Shield className="w-12 h-12 mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">徹底した安全管理</h3>
            <p className="text-gray-600">
              現場での安全を最優先に、確実な施工を行います
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group">
            <Zap className="w-12 h-12 mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">熟練の技術者が対応</h3>
            <p className="text-gray-600">
              豊富な経験を持つ技術者が丁寧に施工します
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors group">
            <Clock className="w-12 h-12 mb-4 text-gray-900 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">迅速な対応</h3>
            <p className="text-gray-600">
              お客様のご要望に素早く対応いたします
            </p>
          </div>
        </motion.div>
      </div>

      <ProcessDiagram />
    </div>
  );
};

export default Hero;
