import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contatos" className="py-20 bg-construction-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video bg-primary rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video Thumbnail/Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-construction-gray to-primary opacity-90"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-gold transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-secondary-foreground ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Video Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="text-primary-foreground font-semibold mb-2">
                    CONHEÇA NOSSA EMPRESA
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Assista ao vídeo e conheça nossa história, nossos valores e como transformamos sonhos em realidade.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-section-title text-primary mb-4">
                NOS CONHEÇA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Estamos prontos para transformar seu projeto em realidade. Entre em contato conosco e 
                descubra como podemos ajudar a construir o futuro que você imagina.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div whileHover={{ x: 10 }}>
                <Card className="p-6 border border-border hover:border-secondary transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">TELEFONE</h4>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ x: 10 }}>
                <Card className="p-6 border border-border hover:border-secondary transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">E-MAIL</h4>
                      <p className="text-muted-foreground">contato@rvconstrucoes.com.br</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ x: 10 }}>
                <Card className="p-6 border border-border hover:border-secondary transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">ENDEREÇO</h4>
                      <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* WhatsApp Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-xl">
                💬 FALAR NO WHATSAPP
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;