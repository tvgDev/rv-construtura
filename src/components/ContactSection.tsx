import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contatos" className="py-20">
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
                  <Play
                    className="w-10 h-10 text-secondary-foreground ml-1"
                    fill="currentColor"
                  />
                </motion.div>
              </div>

              {/* Video Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="text-primary-foreground font-semibold mb-2">
                    CONHEÇA NOSSA EMPRESA
                  </h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Assista ao vídeo e conheça nossa história, nossos valores e
                    como transformamos sonhos em realidade.
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
            <div className="text-center lg:text-left">
              <h2 className="text-section-title text-primary mb-4 text-white">
                NOS CONHEÇA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-amber-200">
                Estamos prontos para transformar seu projeto em realidade. Entre
                em contato conosco e descubra como podemos ajudar a construir o
                futuro que você imagina.
              </p>
              <div className="flex text-center lg:text-left items-center justify-center lg:justify-start">
                <img
                  src="src/assets/logo_nova.png"
                  alt="Logo Demolição"
                  className="w-14 h-14 sm:w-14 sm:h-14 md:w-18 md:h-18 object-contain flex-shrink-0"
                />
                <span className="text-white font-thin text-xl sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.1rem] sm:tracking-[0.15rem] md:tracking-[0.3rem] lg:tracking-[0.5rem] xl:tracking-[0.6rem] truncate ml-2 mt-1">
                  DEMOLIÇÃO
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
