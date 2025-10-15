import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import excavator from "@/assets/3D 3.png";
import excavator2 from "@/assets/3D 1.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "NOME DA OBRA",
      description:
        "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      image: project1,
    },
    {
      id: 2,
      title: "NOME DA OBRA",
      description:
        "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      image: project2,
    },
    {
      id: 3,
      title: "NOME DA OBRA",
      description:
        "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      image: project3,
    },
  ];

  return (
    <section
      id="trabalhos"
      className="relative py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-t from-black via-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* IMAGENS FIXAS DECORATIVAS */}
      <img
        src={excavator}
        alt=""
        className="absolute top-10 right-[-70px] w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] opacity-90 pointer-events-none z-0 hidden lg:block"
      />
      <img
        src={excavator2}
        alt=""
        className="absolute top-96 left-[-70px] w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] opacity-90 pointer-events-none z-0 hidden lg:block"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-white tracking-[0.15rem] sm:tracking-[0.25rem] md:tracking-[0.35rem] lg:tracking-[0.45rem] xl:tracking-[0.5rem] font-transducerLight">
            OBRAS REALIZADAS
          </h2>
        </motion.div>

        {/* Lista de Projetos */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 ${isEven ? 'md:ml-12 lg:ml-20 xl:ml-32 2xl:ml-96' : 'md:mr-12 lg:mr-20 xl:mr-32 2xl:mr-96'}`}
              >
                {/* Imagem */}
                <div
                  className={`w-full lg:w-1/2 flex justify-center ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-[15px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[25px] border-[3px] sm:border-[4px] md:border-[5px] lg:border-[6px] border-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] object-cover w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[380px] xl:h-[380px]"
                  />
                </div>

                {/* Conteúdo */}
                <div className="w-full lg:w-1/2 text-center lg:text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl lg:pl-4 xl:pl-6 px-4 sm:px-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase text-white tracking-[0.08rem] sm:tracking-[0.12rem] md:tracking-[0.15rem] lg:tracking-[0.18rem] xl:tracking-[0.2rem] font-transducerBlack">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mt-3 sm:mt-4 md:mt-5 lg:mt-6 leading-relaxed tracking-wide sm:tracking-wider text-sm sm:text-base md:text-lg lg:text-xl font-montserrat font-black">
                    {project.description}
                  </p>
                  <Button className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 bg-white text-black font-extrabold py-2 sm:py-3 md:py-3 lg:py-4 px-6 sm:px-8 md:px-10 lg:px-12 rounded-full shadow-md hover:bg-gray-200 transition text-sm sm:text-base md:text-lg lg:text-xl font-transducerBlack">
                    VER MAIS
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
