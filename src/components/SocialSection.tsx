import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const SocialSection = () => {
  const socialPosts = [
    {
      id: 1,
      platform: "Instagram",
      content: "Novo projeto em andamento! 🏗️ #construção #arquitetura",
      likes: "2.1k",
      comments: "89"
    },
    {
      id: 2,
      platform: "Facebook", 
      content: "Obra finalizada com sucesso! Mais um sonho realizado.",
      likes: "1.5k",
      comments: "156"
    },
    {
      id: 3,
      platform: "LinkedIn",
      content: "Inovação e sustentabilidade em cada projeto.",
      likes: "892",
      comments: "34"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-primary rounded-[3rem] p-4 relative">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-primary h-12 flex items-center justify-between px-6 text-primary-foreground">
                    <span className="text-sm font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-primary-foreground rounded-sm"></div>
                      <div className="w-1 h-2 bg-primary-foreground rounded-sm"></div>
                    </div>
                  </div>

                  {/* Social Feed */}
                  <div className="p-4 space-y-4 h-full overflow-hidden">
                    {socialPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        animate={{ y: [0, -400] }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          delay: index * 2,
                          ease: "linear"
                        }}
                      >
                        <Card className="p-4 border border-border">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-secondary-foreground">RV</span>
                            </div>
                            <div>
                              <p className="font-semibold text-sm">RV Construções</p>
                              <p className="text-xs text-muted-foreground">{post.platform}</p>
                            </div>
                          </div>
                          
                          <p className="text-sm mb-3">{post.content}</p>
                          
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>❤️ {post.likes}</span>
                            <span>💬 {post.comments}</span>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-section-title text-primary mb-4">
                REDES SOCIAIS
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acompanhe nossos projetos, novidades e bastidores através das nossas redes sociais. 
                Compartilhamos diariamente o progresso das obras e dicas valiosas do setor da construção civil.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 rounded-lg bg-card border border-border">
                <Instagram className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">Instagram</p>
                <p className="text-sm text-muted-foreground">25.7k</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 rounded-lg bg-card border border-border">
                <Facebook className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">Facebook</p>
                <p className="text-sm text-muted-foreground">18.2k</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 rounded-lg bg-card border border-border">
                <Linkedin className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">LinkedIn</p>
                <p className="text-sm text-muted-foreground">12.5k</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} className="text-center p-6 rounded-lg bg-card border border-border">
                <Youtube className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <p className="font-semibold">YouTube</p>
                <p className="text-sm text-muted-foreground">8.9k</p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gold flex-1">
                SEGUIR NO INSTAGRAM
              </Button>
              <Button variant="outline" className="btn-outline-gold flex-1">
                VER NO FACEBOOK
              </Button>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;