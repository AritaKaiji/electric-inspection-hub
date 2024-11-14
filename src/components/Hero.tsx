import { Phone, CircuitBoard, Shield, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ProcessDiagram from "./ProcessDiagram";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image Carousel */}
      <div className="fixed inset-0 w-full h-full z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              filter: 'contrast(140%) brightness(130%)'
            }}
          />
        ))}
      </div>

      <div 
        className="fixed inset-0 z-5"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.5) 100%)',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="fixed inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/50"
      />

      <div className="container-width px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-16"> {/* Adjusted pt-32 to pt-24 for 1.5cm spacing */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="inline-flex flex-col writing-vertical-rl text-4xl sm:text-6xl font-bold mb-6 leading-tight text-white mx-auto">
              <span className="mb-2">笑顔が見える</span>
              <span className="mb-2">現場づくり</span>
              <span>安全第一。</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-white/80">
              熟練の技術者による確実な施工で、
              <br className="hidden sm:block" />
              安心と信頼をお届けします
            </p>
          </motion.div>
        </div>

        {/* Add 3cm spacing */}
        <div className="h-[120px]"></div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors group">
            <Shield className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">徹底した安全管理</h3>
            <p className="text-white/80">
              現場での安全を最優先に、確実な施工を行います
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors group">
            <Zap className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">熟練の技術者が対応</h3>
            <p className="text-white/80">
              豊富な経験を持つ技術者が丁寧に施工します
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors group">
            <Clock className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">迅速な対応</h3>
            <p className="text-white/80">
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
