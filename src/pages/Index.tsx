import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialSection from "@/components/SocialSection";
import BudgetProcessSection from "@/components/BudgetProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section className="bg-black text-white">
          <ProjectsSection />
        </section>

        <div className="bg-black relative">
          <div className="bg-white transform -skew-y-3 -translate-y-4">
            <section className="py-20 skew-y-3">
              <ProcessSection />
            </section>
          </div>
        </div>

        <TestimonialsSection />
        <SocialSection />
        <BudgetProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
