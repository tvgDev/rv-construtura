import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src="src/assets/logo_nova.png"
                  alt="Logo Demolição"
                  className="w-14 h-14 sm:w-14 sm:h-14 md:w-18 md:h-18 object-contain flex-shrink-0"
                />
              </div>
              <span className="text-xl font-Transducer tracking-[0.3rem]">DEMOLIÇÃO</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando sonhos em realidade através de construções de qualidade superior, 
              sempre priorizando segurança e satisfação dos clientes.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-secondary">SERVIÇOS</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-secondary transition-colors cursor-pointer">Construção Civil</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Reformas</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Projetos Arquitetônicos</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Consultoria</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Demolições</li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-secondary">LINKS RÁPIDOS</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#inicio" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-secondary transition-colors">Quem Somos</a></li>
              <li><a href="#trabalhos" className="hover:text-secondary transition-colors">Trabalhos</a></li>
              <li><a href="#processos" className="hover:text-secondary transition-colors">Processos</a></li>
              <li><a href="#contatos" className="hover:text-secondary transition-colors">Contatos</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-secondary">CONTATO</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span>contato@lrdemolicao.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#" 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="#" 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#" 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="#" 
                className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-primary-foreground/60">
            © 2024 RV Construções. Todos os direitos reservados. | Desenvolvido com Symplus
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;