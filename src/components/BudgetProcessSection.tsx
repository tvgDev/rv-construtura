import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import whatsAppLogo from '@/assets/whatsapp-svgrepo-com.svg';

// 👇 Importe os novos ícones que vamos usar
import {
  MessageSquare,
  FileText,
  ClipboardCheck,
  Heart,
  Equal,
  Plus,
} from "lucide-react";

const CtaSection = () => {
  // Renomeei para CtaSection, já que o foco é o contato
  
  const steps = [
    {
      step: "PASSO 1",
      icon: <img src={whatsAppLogo} alt="WhatsApp" className="w-16 h-16 mx-auto mb-4 text-white" />,
      description:
        "Click no link e entre em contato conosco para nos enviar o seu projeto de demolição para podermos enviar o nosso orçamento",
    },
    {
      step: "PASSO 2",
      icon: <FileText className="w-16 h-16 mx-auto mb-4 text-white" />,
      description:<div className="mb-10">Em seguida vamos fazer calcular a sua obra e enviaremos o orçamento para você</div>,
    },
    {
      step: "PASSO 3",
      icon: <ClipboardCheck className="w-16 h-16 mx-auto mb-4 text-white" />,
      description:
        "Após o envio do orçamento e a confirmação da obra iremos fazer uma visita técnica em sua obra para avaliar o processo da demolição",
    },
  ];

  return (
    <section id="contato" className="py-20 text-white">
      <div className="container mx-auto px-4">
        {/* 1. O contêiner principal com Flexbox para alinhar tudo horizontalmente */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-stretch gap-8">
  {steps.map((item, index) => (
    <React.Fragment key={index}>
      {/* Card do Passo */}
      <motion.div
        className="bg-[#e6c883] p-6 rounded-2xl text-center w-72 flex flex-col justify-between border border-amber-200 flex-grow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-4">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-sm font-transducerLight tracking-widest">
            {item.step}
          </span>
        </div>
        {item.icon}
        <p className="text-sm text-amber-100/80 text-black tracking-wider font-montserrat font-bold">{item.description}</p>
      </motion.div>

      {/* Ícones '+' entre os cards */}
      {index < steps.length - 1 && (
        <div className="hidden lg:flex items-center justify-center">
          <Plus className="w-10 h-10 text-white" />
        </div>
      )}
    </React.Fragment>
  ))}

  {/* Ícone de igual e bloco final */}
  <div className="hidden lg:flex items-center justify-center">
    <Equal className="w-10 h-10 text-white" />
  </div>

  <motion.div
    className="flex flex-col items-center justify-center gap-6 max-w-xs"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <Heart className="w-20 h-20 text-red-600 fill-current flex-shrink-0" />
    <p className="text-sm text-white/80 text-center tracking-wider font-montserrat font-bold">
      Após o processo de contato, orçamento e visita técnica vamos entregar uma
      obra finalizada com todo carinho
    </p>
  </motion.div>
</div>

        {/* Botão do WhatsApp */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            className="bg-green-500 text-white font-bold text-sm lg:text-lg py-4 px-6 lg:py-8 lg:px-10 rounded-full hover:bg-green-600 transition-transform hover:scale-105"
          >
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsAppLogo} alt="WhatsApp" className="mr-2 h-6 w-6 lg:h-8 lg:w-8" />
              <div className="text-base lg:text-2xl tracking-[0.3em] font-montserrat">entre em contato</div>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
