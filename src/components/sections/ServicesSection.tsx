
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Wifi, Users, Lightbulb, Computer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  badgeText 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  badgeText: string; 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-200 h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-eternatech-light-blue text-eternatech-blue">
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="text-xs font-medium text-eternatech-blue border-eternatech-blue/30">
            {badgeText}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('webDevelopment'),
      description: t('webDevelopmentDesc'),
      badgeText: t('frontendBackend')
    },
    {
      icon: Computer,
      title: t('graphicDesign'),
      description: t('graphicDesignDesc'),
      badgeText: t('uiUx')
    },
    {
      icon: Lightbulb,
      title: t('artificialIntelligence'),
      description: t('artificialIntelligenceDesc'),
      badgeText: t('innovation')
    },
    {
      icon: Wifi,
      title: t('networkInstallation'),
      description: t('networkInstallationDesc'),
      badgeText: t('infrastructure')
    },
    {
      icon: Database,
      title: t('modeling3d'),
      description: t('modeling3dDesc'),
      badgeText: t('visual')
    },
    {
      icon: Users,
      title: t('training'),
      description: t('trainingDesc'),
      badgeText: t('learning')
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('ourServicesTitle')}</h2>
          <p className="text-gray-600">
            {t('ourServicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
