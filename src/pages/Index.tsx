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
import backgroundImage from '@/assets/40501867_mhk_2.jpg';
import backgroundImageBlack from '@/assets/Background-black.jpg';


const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-800 text-white">
      <Header />
      <main>
        <HeroSection />
        <section className=" text-white">
          <ProjectsSection />
        </section>

        <section className="bg-black">
          <div className="bg-no-repeat bg-cover bg-center transform -skew-y-3 -translate-y-4"
          style={{ backgroundImage: `url(${backgroundImage})` }}>
            <section className="py-20 skew-y-3">
              <ProcessSection />
            </section>
          </div>
        </section>

        <div className="bg-cover bg-center transform -skew-y-3 -translate-y-4"
        style={{ backgroundImage: `url(${backgroundImageBlack})` }}>
          <div className="py-20 skew-y-3">
            <TestimonialsSection />
            <SocialSection />
            <BudgetProcessSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <div className="relative z-20 -mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
