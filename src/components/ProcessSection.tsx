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
      number: "1"
    },
    {
      id: 2,
      title: "PROTEÇÃO DE AMBIENTE",
      description: "Implementamos todas as medidas de segurança e proteção ambiental necessárias. Nosso compromisso com a sustentabilidade garante obras responsáveis e dentro das normas ambientais.",
      image: process2,
      number: "2"
    },
    {
      id: 3,
      title: "REMOÇÃO DE MARCENARIA",
      description: "Executamos a remoção cuidadosa de estruturas existentes, preservando elementos aproveitáveis e garantindo o descarte adequado dos materiais, sempre priorizando a segurança da equipe.",
      image: process3,
      number: "3"
    },
    {
      id: 4,
      title: "DEMOLIÇÃO",
      description: "Realizamos demolições controladas com técnicas modernas e seguras. Nossa equipe especializada garante a execução precisa, minimizando impactos e preparando o terreno para a nova construção.",
      image: process4,
      number: "4"
    }
  ];

  return (
    <section id="processos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-black mb-4 tracking-widest font-transducerLight font-light">
            PROCESSOS DE OBRA
          </h2>
        </motion.div>

        <div className="space-y-16">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
            >
              {/* Number and Content */}
              <div className="flex items-start gap-4 order-2 lg:order-none">
                <div className="w-12 h-14 bg-black rounded-md flex items-center justify-center flex-shrink-0 hidden lg:flex">
                  <span className="text-white font-bold text-2xl font-transducer">
                    {process.number}
                  </span>
                </div>
                <div className="max-w-sm text-center lg:text-left lg:mr-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 font-transducer lg:whitespace-nowrap">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed tracking-wider text-base font-montserrat font-black">
                    {process.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="flex-grow h-px bg-gray-300 relative hidden lg:flex mt-3">
                <div className="absolute left-0 top-0 h-full bg-black animate-[scale-in_1s_ease-out] origin-left" 
                     style={{ width: '100%' }}></div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 order-1 lg:order-none">
                <div className="relative group">
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="w-80 h-40 object-cover rounded-lg border-2 border-black transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;