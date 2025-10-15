import React, { useEffect, useRef } from "react";
import testimonial1 from "@/assets/luano.jpg";


export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".feedback-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const feedbacks = [
    {
      id: 1,
      name: "NOME EMPRESA",
      description: "Descrição da empresa",
      avatar:
        testimonial1,
      text: "Cristyan e sua equipe são incríveis! Transformaram nossa visão em realidade com profissionalismo e dedicação. Recomendo de olhos fechados!",
      stars: 5,
    },
    {
      id: 2,
      name: "NOME EMPRESA",
      description: "Descrição da empresa",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      stars: 5,
    },
    {
      id: 3,
      name: "NOME EMPRESA",
      description: "Descrição da empresa",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      stars: 5,
    },
    {
      id: 4,
      name: "NOME EMPRESA",
      description: "Descrição da empresa",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      stars: 5,
    },
    {
      id: 5,
      name: "NOME EMPRESA",
      description: "Descrição da empresa",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      stars: 5,
    },
    {
      id: 6,
      name: "NOME EMPRESA",
      description: "Descrição da empresa",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "Especialistas em demolição e construção civil. Trabalhamos com segurança, agilidade e qualidade para transformar seu projeto em realidade.",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-5xl text-white text-center mb-16 tracking-[0.4em] font-transducerLight">
          FEEDBACKS
        </h2>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`feedback-card bg-white rounded-2xl p-6 relative group transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-xl opacity-0 translate-y-8 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0`}
              style={{ transitionDelay: `${index * 10}ms` }}
            >
              {/* Header com avatar e informações */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={feedback.avatar}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-neutral-200 transition-transform duration-200 ease-in-out group-hover:scale-110"
                />
                <div className="flex-1">
                  <h3 className="text-lg lg:text-2xl text-neutral-900 mb-1 font-transducerBlack">
                    {feedback.name}
                  </h3>
                  <p className="text-xs text-neutral-600 font-montserrat font-black">
                    {feedback.description}
                  </p>
                </div>
                {/* Estrelas */}
                <div className="flex gap-0.5">
                  {[...Array(feedback.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-[1.2rem] h-[1.2rem] text-[#FDB913] group-hover:animate-jump"
                      style={{ animationDelay: `${i * 50}ms` }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Texto do feedback */}
              <p className="text-neutral-700 text-sm leading-relaxed font-montserrat font-black">
                "{feedback.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
