import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import process1 from '@/assets/process-1.jpg';
import process2 from '@/assets/process-2.jpg';
import process3 from '@/assets/process-3.jpg';
import process4 from '@/assets/process-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const processesRef = useRef([]);
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          x: -100,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animação de cada processo
      processesRef.current.forEach((process, index) => {
        if (!process) return;

        const number = process.querySelector('.process-number');
        const title = process.querySelector('.process-title');
        const description = process.querySelector('.process-description');
        const image = process.querySelector('.process-image');
        const line = linesRef.current[index];

        // Timeline para cada processo
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: process,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        });

        // Número aparece com bounce
        tl.from(number, {
          scale: 0,
          rotation: 360,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(2)",
        });

        // Título e descrição entram do lado
        tl.from([title, description], {
          x: -80,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3");

        // Linha cresce
        if (line) {
          tl.from(line, {
            scaleX: 0,
            duration: 0.8,
            ease: "power2.inOut",
          }, "-=0.6");
        }

        // Imagem aparece com zoom e rotação
        tl.from(image, {
          scale: 0.5,
          rotation: -10,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
        }, "-=0.6");

        // Hover effect na imagem
        image.addEventListener('mouseenter', () => {
          gsap.to(image, {
            scale: 1.05,
            rotation: 2,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(image, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} id="processos" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className="text-center lg:text-left mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-black mb-4 tracking-[0.3em] font-transducerLight">
            PROCESSOS DE OBRA
          </h2>
        </div>

        <div className="space-y-16">
          {processes.map((process, index) => (
            <div
              key={process.id}
              ref={(el) => (processesRef.current[index] = el)}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
            >
              {/* Number and Content */}
              <div className="flex items-start gap-4 order-2 lg:order-none">
                <div className="process-number w-12 h-14 bg-black rounded-md flex items-center justify-center flex-shrink-0 hidden lg:flex shadow-lg font-transducerLight">
                  <span className="text-white font-bold text-2xl">
                    {process.number}
                  </span>
                </div>
                <div className="max-w-sm text-center lg:text-left lg:mr-8">
                  <h3 className="process-title text-xl lg:text-2xl text-black mb-3 lg:whitespace-nowrap font-transducer">
                    {process.title}
                  </h3>
                  <p className="process-description text-gray-800 leading-relaxed tracking-wider text-base font-black font-montserrat">
                    {process.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              <div 
                ref={(el) => (linesRef.current[index] = el)}
                className="flex-grow h-px bg-black relative hidden lg:flex mt-3 origin-left"
              ></div>

              {/* Image */}
              <div className="flex-shrink-0 order-1 lg:order-none">
                <div className="relative group cursor-pointer">
                  <img 
                    src={process.image} 
                    alt={process.title}
                    className="process-image w-80 h-40 object-cover rounded-lg border-2 border-black shadow-xl"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;