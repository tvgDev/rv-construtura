import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Clock, Shield, Award, Heart } from 'lucide-react';

const InfoCardsSection = () => {
  const infoCards = [
    {
      id: 1,
      icon: Clock,
      title: "PONTUALIDADE",
      description: "Cumprimos rigorosamente os prazos estabelecidos, garantindo que seu projeto seja entregue no tempo certo, sem comprometer a qualidade."
    },
    {
      id: 2,
      icon: Shield,
      title: "SEGURANÇA",
      description: "Seguimos todos os protocolos de segurança e normas técnicas, priorizando o bem-estar da equipe e a integridade da obra."
    },
    {
      id: 3,
      icon: Award,
      title: "QUALIDADE",
      description: "Utilizamos materiais de primeira linha e técnicas modernas de construção para garantir durabilidade e excelência em cada projeto."
    }
  ];

  return (
    <section className="py-20 bg-primary relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-secondary p-8 text-center border-none relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-construction-gold to-construction-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <card.icon className="w-16 h-16 mx-auto mb-6 text-secondary-foreground group-hover:text-white transition-colors duration-300" />
                  
                  <h3 className="text-xl font-bold text-secondary-foreground mb-4 group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-secondary-foreground/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Love Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-secondary/10 rounded-2xl p-12 relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-8 right-8"
          >
            <Heart className="w-16 h-16 text-red-500 fill-red-500" />
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              CONSTRUÍMOS COM AMOR
            </h3>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Cada projeto é único e especial para nós. Colocamos paixão e dedicação em cada detalhe, 
              porque sabemos que estamos construindo mais do que edifícios - estamos construindo sonhos e futuros.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCardsSection;