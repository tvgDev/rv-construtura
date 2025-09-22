import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SocialSection from '@/components/SocialSection';
import InfoCardsSection from '@/components/InfoCardsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <SocialSection />
        <InfoCardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;