import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calculator, Send, Heart } from 'lucide-react';

const BudgetProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: MessageCircle,
      title: "ENTRE EM CONTATO",
      description: "Entre em contato conosco através do WhatsApp e conte sobre seu projeto dos sonhos."
    },
    {
      id: 2,
      icon: Calculator,
      title: "FAZEMOS O ORÇAMENTO",
      description: "Nossa equipe fará uma análise detalhada e criará um orçamento personalizado para você."
    },
    {
      id: 3,
      icon: Send,
      title: "ENVIAMOS O ORÇAMENTO",
      description: "Você receberá um orçamento completo e detalhado com todos os custos do seu projeto."
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center bg-secondary border-secondary hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary mb-2 block">
                    {step.id.toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold text-secondary-foreground mb-3">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-secondary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Heart Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </motion.div>
          </div>
          
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-3">
              CONSTRUÍMOS COM AMOR
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada projeto é único e especial para nós. Colocamos todo nosso carinho e dedicação 
              para transformar seus sonhos em realidade.
            </p>
          </div>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-lg font-semibold rounded-xl">
            💬 FALAR NO WHATSAPP
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetProcessSection;