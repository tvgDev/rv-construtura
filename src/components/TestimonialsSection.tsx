import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "JOÃO RIBEIRO",
      role: "CEO, Construtora Silva",
      image: testimonial1,
      text: "Excelente trabalho realizado pela equipe. A qualidade da construção superou nossas expectativas e o prazo foi cumprido rigorosamente. Recomendo sem hesitação.",
      rating: 5,
    },
    {
      id: 2,
      name: "MARIA SANTOS",
      role: "Arquiteta, MS Projetos",
      image: testimonial2,
      text: "Profissionalismo exemplar em todos os aspectos. A comunicação foi clara durante todo o projeto e o resultado final ficou perfeito. Parceria de longo prazo garantida.",
      rating: 5,
    },
    {
      id: 3,
      name: "CARLOS OLIVEIRA",
      role: "Diretor, CO Engenharia",
      image: testimonial3,
      text: "Trabalho impecável com atenção aos detalhes. A equipe demonstrou grande conhecimento técnico e comprometimento com a excelência. Resultado extraordinário.",
      rating: 5,
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="depoimentos"
      className="py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title text-primary-foreground mb-4 tracking-wider font-transducerLight tracking-widest">
            DEPOIMENTOS
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        {/* First Row */}
        <motion.div
          className="flex space-x-6 mb-8"
          animate={{ x: [-1200, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={`row1-${index}`}
              className="construction-card min-w-[350px] bg-card border-border"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </motion.div>

        {/* Second Row - Reverse Direction */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card
              key={`row2-${index}`}
              className="construction-card min-w-[350px] bg-card border-border"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
