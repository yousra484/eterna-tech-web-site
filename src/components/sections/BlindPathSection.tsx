
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const BlindPathSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="blindpath" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-eternatech-blue/5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-eternatech-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-eternatech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-eternatech-blue to-eternatech-cyan rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="overflow-hidden shadow-sm">
                    <div className="p-2">
                      <img 
                        src="/lovable-uploads/4d175d8c-84ee-44de-a9c7-b7f3c59cc364.png" 
                        alt="BlindPath dispositif - vue de face" 
                        className="w-full h-[250px] object-contain rounded-lg"
                      />
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden shadow-sm">
                    <div className="p-2">
                      <img 
                        src="/lovable-uploads/54b32f3b-4e92-44fe-8b59-6a5c630a8dbf.png" 
                        alt="BlindPath dispositif - vue de côté" 
                        className="w-full h-[250px] object-contain rounded-lg"
                      />
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden shadow-sm">
                    <div className="p-2">
                      <img 
                        src="/lovable-uploads/7e896af6-41f6-49fa-a7c8-bee5cadc7e69.png" 
                        alt="BlindPath dispositif - vue de connectique" 
                        className="w-full h-[250px] object-contain rounded-lg"
                      />
                    </div>
                  </Card>
                </div>
                <p className="text-sm text-gray-500 italic text-center mt-4">{t('deviceInDevelopment')}</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-r from-eternatech-blue to-eternatech-cyan bg-clip-text text-transparent inline-block text-sm font-medium mb-2">
              {t('innovation2')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">BlindPath</h2>
            <p className="text-gray-600 mb-8">
              {t('blindPathDesc')} <span className="font-medium">{t('currentlyDeveloping')}</span>
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eternatech-light-blue flex items-center justify-center mr-4">
                  <Mic className="h-5 w-5 text-eternatech-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t('advancedVoiceRecognition')}</h3>
                  <p className="text-gray-600">
                    {t('voiceRecognitionDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-eternatech-light-blue flex items-center justify-center mr-4">
                  <Eye className="h-5 w-5 text-eternatech-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{t('visualRecognition')}</h3>
                  <p className="text-gray-600">
                    {t('visualRecognitionDesc')}
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-eternatech-blue hover:bg-eternatech-blue/90 text-white">
              {t('learnMore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlindPathSection;
