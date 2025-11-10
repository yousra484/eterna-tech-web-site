
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-eternatech-light-blue text-eternatech-blue hover:bg-eternatech-light-blue mb-4">
              {t('aboutUs')}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('innovateToday')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('aboutDescription1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('aboutDescription2')}
            </p>
            
            {/* First row of statistics */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-eternatech-blue mb-2">70+</div>
                <p className="text-gray-600">{t('projects')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-eternatech-blue mb-2">50+</div>
                <p className="text-gray-600">{t('clients')}</p>
              </div>
            </div>
            
            {/* Second row of statistics */}
            <div className="grid grid-cols-2 gap-8 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-eternatech-blue mb-2">5+</div>
                <p className="text-gray-600">{t('experts')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-eternatech-blue mb-2">5+</div>
                <p className="text-gray-600">{t('technologies')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full">
              <div className="bg-gradient-to-br from-eternatech-blue to-eternatech-cyan py-8 px-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">{t('vision')}</h3>
                  <p className="mb-6">
                    {t('visionText1')}
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <blockquote className="text-sm italic">
                      {t('visionText2')}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-eternatech-light-blue rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-eternatech-cyan/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
