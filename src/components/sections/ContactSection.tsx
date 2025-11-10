
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('error'),
        description: t('fillAllFields'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'eternatech7@gmail.com'
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        'service_bj7hkhy', // Service ID EmailJS
        'template_43tegvx', // Template ID EmailJS
        templateParams,
        'zeXxG000fWEnnysys' // User ID (clé publique) EmailJS
      );

      // Message de succès
      toast({
        title: t('success'),
        description: t('messageSent'),
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('error'),
        description: t('errorSendingMessage'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contactUsTitle')}</h2>
          <p className="text-gray-600">
            {t('contactUsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('fullName')}</Label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('yourName')} 
                        className="border-gray-300" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')}</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('yourEmail')} 
                        className="border-gray-300" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('subject')}</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('subjectPlaceholder')} 
                      className="border-gray-300" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('message')}</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('messagePlaceholder')} 
                      className="border-gray-300 min-h-[150px]" 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-eternatech-blue hover:bg-eternatech-blue/90 text-white"
                  >
                    {isSubmitting ? t('sending') : t('sendMessage')}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <div className="h-full flex flex-col">
              <Card className="border-0 shadow-lg bg-eternatech-blue text-white h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-4">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('letsTalkProject')}</h3>
                    <p className="text-blue-100">
                      {t('teamReadyText')}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 flex-grow">
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-blue-200 mb-2">{t('address')}</h4>
                      <p className="text-white">{t('addressValue')}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-blue-200 mb-2">{t('email')}</h4>
                      <p className="text-white">eternatech7@gmail.com</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-blue-200 mb-2">{t('phone')}</h4>
                      <p className="text-white">+213 659 793 110</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
