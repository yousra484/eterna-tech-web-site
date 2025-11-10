
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlindPathSection from '@/components/sections/BlindPathSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import AssistantSection from '@/components/sections/AssistantSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <BlindPathSection />
        <AboutSection />
        <ContactSection />
      </main>
      <AssistantSection />
      <Footer />
    </div>
  );
};

export default Index;
