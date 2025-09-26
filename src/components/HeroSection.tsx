import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo3D from '@/assets/logo-3d.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-24">
  <div className="w-full bg-white rounded-t-[3rem] rounded-b-[3rem] min-h-[calc(100vh-6rem)] flex items-center">
  <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Instagram Text */}
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm text-muted-foreground font-light uppercase tracking-wider"
              >
                acesse: @lrdemolição no instagram
              </motion.p>

              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-6xl lg:text-7xl font-bold text-foreground tracking-tight"
                >
                  QUEM SOMOS
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                >
                  Somos uma empresa especializada em demolição e construção civil, comprometida com a excelência e inovação. 
                  Nossa equipe experiente oferece soluções completas para seus projetos, desde o planejamento até a entrega final.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button className="bg-black text-white hover:bg-black/90 text-lg px-8 py-4 rounded-full">
                  VEJA MAIS
                </Button>
              </motion.div>
            </motion.div>

            {/* 3D Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative"
              >
                <img 
                  src={logo3D} 
                  alt="Logo 3D RV Construções" 
                  className="w-96 h-96 object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;