import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "HOME DA OBRA",
      description:
        "Construção de edifício residencial de alto padrão com tecnologia sustentável e acabamentos premium. Projeto completo desde fundação até entrega das chaves.",
      image: project1,
      category: "RESIDENCIAL",
    },
    {
      id: 2,
      title: "HOME DA OBRA",
      description:
        "Desenvolvimento de infraestrutura industrial com equipamentos pesados e sistemas automatizados. Execução de terraplanagem e instalações especializadas.",
      image: project2,
      category: "INDUSTRIAL",
    },
    {
      id: 3,
      title: "HOME DA OBRA",
      description:
        "Projeto de escritório corporativo moderno com design inovador, espaços colaborativos e tecnologia integrada para máxima produtividade.",
      image: project3,
      category: "COMERCIAL",
    },
  ];

  return (
    <section
      id="trabalhos"
      className="py-20 bg-gradient-to-t from-black via-neutral-950 to-neutral-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider">
            OBRAS REALIZADAS
          </h2>
        </motion.div>

        <div className="space-y-16">
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
                } items-center gap-8 lg:gap-16`}
              >
                {/* Image Card */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-white">
                  <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-semibold">
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
