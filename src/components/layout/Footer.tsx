
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eternatech-black text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Eterna<span className="text-eternatech-cyan">Tech</span>
            </h3>
            <p className="text-gray-400 mb-4">
              {t('innovativeTech')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/eternaltech3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('webDev')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('graphicDesign2')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('ai')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('modeling3d')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('training2')}</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('caseStudies')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('testimonials')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('faq')}</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">{t('addressValue')}</p>
              <p className="mb-2">Email: eternatech7@gmail.com</p>
              <p>Tél: +213 659 793 110</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} EternaTech. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
