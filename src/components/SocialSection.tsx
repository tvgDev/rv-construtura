import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import phoneImage from '@/assets/Celular 3D.png';

const SocialSection = () => {

  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
  {/* 2. A <div> vira o QUADRO: imagem de fundo e cantos arredondados. */}
  <div className="bg-[url(./src/assets/40501867_mhk_2.jpg)] bg-no-repeat bg-cover bg-center rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem]">
    {/* 3. O container e o grid continuam dentro, para alinhar o conteúdo. */}
    <div className="container mx-auto px-4 h-[550px]">
      <div className="relative grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
          {/* 2. ADICIONAMOS A SUA IMAGEM COM POSICIONAMENTO ABSOLUTO */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    // 👇 A mágica acontece aqui!
    className="hidden lg:block absolute -bottom-48 -left-20 h-[700px] w-auto z-10"
  >
    <img 
      src={phoneImage} 
      alt="Redes Sociais da LR Demolição no celular" 
      className="h-full w-full object-contain"
    />
  </motion.div>

  {/* Content */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-6 lg:col-start-2 relative z-20" // Ajustei o space-y para 6
>
  {/* 👇 NOVO BLOCO DE TEXTO */}
  <div>
    <p className="font-transducerLight uppercase tracking-[0.3em] text-lg text-primary mb-2">
      Siga nossas
    </p>
    <h2 className="font-title uppercase font-black text-6xl lg:text-8xl tracking-wider text-primary mb-6">
      Redes Sociais
    </h2>
    <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
      Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.
    </p>
  </div>

  {/* 👇 NOVO BOTÃO CUSTOMIZADO */}
  <a
    href="https://instagram.com/lrdemolicao" // Coloque o link do seu Instagram aqui
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-full overflow-hidden shadow-sm hover:opacity-90 transition bg-black"
  >
    <span className="font-sans bg-yellow-400 text-black px-4 py-2 text-sm font-semibold rounded-xl">
      acesse:
    </span>
    <span className="font-sans text-white px-5 py-2 text-sm font-semibold">
      Click aqui
    </span>
  </a>

  {/* O grid de ícones e os botões que você tinha antes foram substituídos por este novo design. Se quiser mantê-los, pode adicioná-los abaixo do <a>. */}

</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;