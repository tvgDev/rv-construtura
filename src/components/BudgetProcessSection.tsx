import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
      icon: <MessageSquare className="w-16 h-16 mx-auto mb-4 text-white" />,
      description:
        "Click no link e entre em contato conosco para nos enviar o seu projeto de demolição para podermos enviar o nosso orçamento",
    },
    {
      step: "PASSO 2",
      icon: <FileText className="w-16 h-16 mx-auto mb-4 text-white" />,
      description:
        "Em seguida vamos fazer calcular a sua obra e enviaremos o orçamento para você",
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
        className="bg-amber-200/20 p-6 rounded-2xl text-center w-72 flex flex-col justify-between border border-amber-200/30 flex-grow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-4">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-sm">
            {item.step}
          </span>
        </div>
        {item.icon}
        <p className="text-sm text-amber-100/80">{item.description}</p>
      </motion.div>

      {/* Ícones '+' entre os cards */}
      {index < steps.length - 1 && (
        <div className="hidden lg:flex items-center justify-center">
          <Plus className="w-10 h-10 text-amber-200/50" />
        </div>
      )}
    </React.Fragment>
  ))}

  {/* Ícone de igual e bloco final */}
  <div className="hidden lg:flex items-center justify-center">
    <Equal className="w-10 h-10 text-amber-200/50" />
  </div>

  <motion.div
    className="flex flex-col items-center justify-center gap-6 max-w-xs"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <Heart className="w-20 h-20 text-red-500 fill-current flex-shrink-0" />
    <p className="text-sm text-white/80 text-center">
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
            className="bg-green-500 text-white font-bold text-lg py-8 px-10 rounded-full hover:bg-green-600 transition-transform hover:scale-105"
          >
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-3 h-6 w-6" />
              ENTRE EM CONTATO
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
