import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo3D from '@/assets/logo-3d.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-hero text-primary"
              >
                QUEM SOMOS
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              >
                Somos uma empresa especializada em construção civil, comprometida com a excelência e inovação. 
                Nossa equipe experiente oferece soluções completas para seus projetos, desde o planejamento até a entrega final.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-muted-foreground leading-relaxed"
              >
                Com anos de experiência no mercado, transformamos sonhos em realidade através de construções de qualidade superior, 
                sempre priorizando a segurança, sustentabilidade e satisfação dos nossos clientes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="btn-gold text-lg px-8 py-4">
                NOSSOS PROJETOS
              </Button>
              <Button variant="outline" className="btn-outline-gold text-lg px-8 py-4">
                FALE CONOSCO
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-4 pt-8"
            >
              <div className="flex -space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <div className="w-3 h-3 bg-muted rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">01 / 05</span>
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

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;