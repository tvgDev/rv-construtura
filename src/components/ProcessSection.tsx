import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import process1 from '@/assets/process-1.jpg';
import process2 from '@/assets/process-2.jpg';
import process3 from '@/assets/process-3.jpg';
import process4 from '@/assets/process-4.jpg';

const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: "ANÁLISE DE PROBLEMAS",
      description: "Realizamos um estudo detalhado do projeto, analisando todas as variáveis e possíveis desafios. Nossa equipe técnica avalia cada aspecto para garantir a viabilidade e eficiência da execução.",
      image: process1,
      number: "01"
    },
    {
      id: 2,
      title: "PROTEÇÃO DE AMBIENTE",
      description: "Implementamos todas as medidas de segurança e proteção ambiental necessárias. Nosso compromisso com a sustentabilidade garante obras responsáveis e dentro das normas ambientais.",
      image: process2,
      number: "02"
    },
    {
      id: 3,
      title: "REMOÇÃO DE MARCENARIA",
      description: "Executamos a remoção cuidadosa de estruturas existentes, preservando elementos aproveitáveis e garantindo o descarte adequado dos materiais, sempre priorizando a segurança da equipe.",
      image: process3,
      number: "03"
    },
    {
      id: 4,
      title: "DEMOLIÇÃO",
      description: "Realizamos demolições controladas com técnicas modernas e seguras. Nossa equipe especializada garante a execução precisa, minimizando impactos e preparando o terreno para a nova construção.",
      image: process4,
      number: "04"
    }
  ];

  return (
    <section id="processos" className="py-20 bg-construction-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title text-primary mb-4 tracking-wider">
            PROCESSOS DE OBRA
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`process-card ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex items-center justify-center md:w-1/3">
                  <div className="relative">
                    <img 
                      src={process.image} 
                      alt={process.title}
                      className="w-64 h-48 object-cover rounded-lg"
                    />
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold text-xl">
                        {process.number}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-card-title text-card-foreground">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                  <div className="pt-4">
                    <motion.div 
                      className="w-full bg-muted rounded-full h-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;