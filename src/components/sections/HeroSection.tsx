
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-eternatech-blue/10 to-eternatech-cyan/10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-eternatech-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-eternatech-cyan/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center justify-items-center text-center">
          <div className="flex flex-col space-y-8 animate-fade-in max-w-3xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
               {t('heroTitle')}
               <span className="text-gradient block">{t('service')}</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 mx-auto">
                {t('heroDescription')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-eternatech-blue hover:bg-eternatech-blue/90 text-white px-8 py-6 text-lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('ourServices')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-eternatech-blue text-eternatech-blue hover:bg-eternatech-blue/10 px-8 py-6 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('contactUs')}
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-2">{t('theyTrustUs')}</p>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-eternatech-blue font-medium">Appréciez notre site</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-8 w-8 cursor-pointer ${
                        (hoverRating || rating) >= star 
                          ? 'text-yellow-400' 
                          : 'text-gray-300'
                      } transition-colors`}
                      fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-eternatech-blue mt-2">
                    Merci pour votre note de {rating}/5 !
                  </p>
                )}
              </div>
            </div>
          </div>
          
         
          
          
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
