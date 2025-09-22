import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "HOME DA OBRA",
      description: "Construção de edifício residencial de alto padrão com tecnologia sustentável e acabamentos premium. Projeto completo desde fundação até entrega das chaves.",
      image: project1,
      category: "RESIDENCIAL"
    },
    {
      id: 2,
      title: "HOME DA OBRA",
      description: "Desenvolvimento de infraestrutura industrial com equipamentos pesados e sistemas automatizados. Execução de terraplanagem e instalações especializadas.",
      image: project2,
      category: "INDUSTRIAL"
    },
    {
      id: 3,
      title: "HOME DA OBRA",
      description: "Projeto de escritório corporativo moderno com design inovador, espaços colaborativos e tecnologia integrada para máxima produtividade.",
      image: project3,
      category: "COMERCIAL"
    }
  ];

  return (
    <section id="trabalhos" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title text-primary-foreground mb-4 tracking-wider">
            OBRAS REALIZADAS
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              <Card className="bg-transparent border-none overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-card">
                  <h3 className="text-card-title text-card-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button className="btn-outline-gold w-full">
                    VER MAIS
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;