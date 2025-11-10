
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'ar';

type Translations = {
  [key: string]: {
    fr: string;
    en: string;
    ar: string;
  };
};

const translations: Translations = {
  // Navbar
  home: {
    fr: 'Accueil',
    en: 'Home',
    ar: 'الرئيسية'
  },
   service: {
    fr: 'Service',
    en: 'Service',
    ar:  'الابتكار التكنولوجي في'
  },
  services: {
    fr: 'Services',
    en: 'Services',
    ar: 'خدمات'
  },
  blindpath: {
    fr: 'BlindPath',
    en: 'BlindPath',
    ar: 'بلايند باث'
  },
  about: {
    fr: 'À propos',
    en: 'About',
    ar: 'من نحن'
  },
  contact: {
    fr: 'Contact',
    en: 'Contact',
    ar: 'اتصل بنا'
  },
  quoteRequest: {
    fr: 'Demander un devis',
    en: 'Request a quote',
    ar: 'اطلب عرض سعر'
  },
  // About section
  aboutUs: {
    fr: 'À propos de nous',
    en: 'About us',
    ar: 'من نحن'
  },
  innovateToday: {
    fr: 'Innover aujourd\'hui pour façonner demain',
    en: 'Innovate today to shape tomorrow',
    ar: 'نبتكر اليوم لنشكل الغد'
  },
  aboutDescription1: {
    fr: 'Chez EternaTech, nous croyons que la technologie devrait être accessible à tous et servir l\'humanité. Notre équipe de passionnés combine expertise technique et créativité pour développer des solutions innovantes qui répondent aux défis de demain.',
    en: 'At EternaTech, we believe that technology should be accessible to all and serve humanity. Our team of passionate experts combines technical expertise and creativity to develop innovative solutions that address tomorrow\'s challenges.',
    ar: 'في إترناتك، نؤمن أن التكنولوجيا يجب أن تكون متاحة للجميع وتخدم البشرية. يجمع فريقنا من الخبراء المتحمسين بين الخبرة التقنية والإبداع لتطوير حلول مبتكرة تلبي تحديات الغد.'
  },
  aboutDescription2: {
    fr: 'Fondée en 2025, notre startup s\'est rapidement imposée comme un acteur incontournable dans le paysage technologique Algerien grâce à notre approche centrée sur l\'utilisateur et notre engagement envers l\'excellence.',
    en: 'Founded in 2025, our startup has quickly established itself as a key player in the Algerian technological landscape thanks to our user-centered approach and our commitment to excellence.',
    ar: 'تأسست شركتنا الناشئة في عام 2025، وسرعان ما أصبحت لاعبًا رئيسيًا في المشهد التكنولوجي الجزائري بفضل نهجنا الذي يركز على المستخدم والتزامنا بالتميز.'
  },
  projects: {
    fr: 'Projets réalisés',
    en: 'Completed projects',
    ar: 'المشاريع المنجزة'
  },
  clients: {
    fr: 'Clients satisfaits',
    en: 'Happy clients',
    ar: 'عملاء راضون'
  },
  experts: {
    fr: 'Experts passionnés',
    en: 'Passionate experts',
    ar: 'خبراء متحمسون'
  },
  technologies: {
    fr: 'Technologies maîtrisées',
    en: 'Mastered technologies',
    ar: 'التقنيات المتقنة'
  },
  vision: {
    fr: 'Notre vision',
    en: 'Our vision',
    ar: 'رؤيتنا'
  },
  visionText1: {
    fr: '"Nous aspirons à créer un monde où la technologie sert l\'humain, favorise l\'inclusion et préserve notre planète. Chaque ligne de code que nous écrivons est guidée par cette vision."',
    en: '"We aspire to create a world where technology serves humans, promotes inclusion, and preserves our planet. Every line of code we write is guided by this vision."',
    ar: '"نطمح إلى خلق عالم تخدم فيه التكنولوجيا الإنسان، وتعزز الشمول وتحافظ على كوكبنا. كل سطر من التعليمات البرمجية التي نكتبها مستوحى من هذه الرؤية."'
  },
  visionText2: {
    fr: '"L\'innovation technologique n\'est pas une fin en soi, mais un moyen d\'améliorer notre quotidien et de résoudre les défis sociétaux et environnementaux."',
    en: '"Technological innovation is not an end in itself, but a means to improve our daily lives and address societal and environmental challenges."',
    ar: '"الابتكار التكنولوجي ليس غاية في حد ذاته، بل وسيلة لتحسين حياتنا اليومية ومعالجة التحديات المجتمعية والبيئية."'
  },
  // Hero Section
  heroTitle: {
    fr: 'L\'innovation technologique à votre ',
    en: 'Technological innovation at your ',
    ar: 'خدمتك'
  },
 
  heroDescription: {
    fr: 'EternaTech transforme vos idées en solutions numériques innovantes, combinant expertise technique et intelligence artificielle pour répondre à vos besoins spécifiques.',
    en: 'EternaTech transforms your ideas into innovative digital solutions, combining technical expertise and artificial intelligence to meet your specific needs.',
    ar: 'إترناتك تحول أفكارك إلى حلول رقمية مبتكرة، تجمع بين الخبرة التقنية والذكاء الاصطناعي لتلبية احتياجاتك الخاصة.'
  },
  ourServices: {
    fr: 'Nos services',
    en: 'Our services',
    ar: 'خدماتنا'
  },
  contactUs: {
    fr: 'Contactez-nous',
    en: 'Contact us',
    ar: 'اتصل بنا'
  },
  theyTrustUs: {
    fr: 'Ils nous font confiance :',
    en: 'They trust us:',
    ar: 'هم يثقون بنا:'
  },
  // Services Section
  ourServicesTitle: {
    fr: 'Nos Services',
    en: 'Our Services',
    ar: 'خدماتنا'
  },
  ourServicesDescription: {
    fr: 'Nous proposons une gamme complète de services technologiques pour répondre à tous vos besoins numériques, de la conception à la réalisation.',
    en: 'We offer a complete range of technological services to meet all your digital needs, from design to implementation.',
    ar: 'نقدم مجموعة كاملة من الخدمات التكنولوجية لتلبية جميع احتياجاتك الرقمية، من التصميم إلى التنفيذ.'
  },
  // Service cards
  webDevelopment: {
    fr: 'Développement Web',
    en: 'Web Development',
    ar: 'تطوير الويب'
  },
  webDevelopmentDesc: {
    fr: 'Applications web sur mesure, sites vitrines et e-commerce avec les dernières technologies et les meilleures pratiques d\'UI/UX.',
    en: 'Custom web applications, showcase and e-commerce sites with the latest technologies and best UI/UX practices.',
    ar: 'تطبيقات ويب مخصصة، مواقع عرض وتجارة إلكترونية باستخدام أحدث التقنيات وأفضل ممارسات واجهة المستخدم وتجربة المستخدم.'
  },
  frontendBackend: {
    fr: 'Frontend & Backend',
    en: 'Frontend & Backend',
    ar: 'واجهة أمامية وخلفية'
  },
  graphicDesign: {
    fr: 'Design Graphique',
    en: 'Graphic Design',
    ar: 'تصميم جرافيك'
  },
  graphicDesignDesc: {
    fr: 'Création d\'identités visuelles, interfaces utilisateur, illustrations et supports marketing qui captent l\'attention et renforcent votre marque.',
    en: 'Creation of visual identities, user interfaces, illustrations and marketing materials that capture attention and strengthen your brand.',
    ar: 'إنشاء هويات بصرية وواجهات مستخدم ورسوم توضيحية ومواد تسويقية تجذب الانتباه وتعزز علامتك التجارية.'
  },
  uiUx: {
    fr: 'UI/UX',
    en: 'UI/UX',
    ar: 'واجهة المستخدم/تجربة المستخدم'
  },
  artificialIntelligence: {
    fr: 'Intelligence Artificielle',
    en: 'Artificial Intelligence',
    ar: 'الذكاء الاصطناعي'
  },
  artificialIntelligenceDesc: {
    fr: 'Intégration de solutions IA pour automatiser vos processus, analyser vos données et créer des expériences utilisateur personnalisées.',
    en: 'Integration of AI solutions to automate your processes, analyze your data and create personalized user experiences.',
    ar: 'دمج حلول الذكاء الاصطناعي لأتمتة عملياتك وتحليل بياناتك وإنشاء تجارب مستخدم مخصصة.'
  },
  innovation: {
    fr: 'Innovation',
    en: 'Innovation',
    ar: 'ابتكار'
  },
  networkInstallation: {
    fr: 'Installation Réseaux',
    en: 'Network Installation',
    ar: 'تركيب الشبكات'
  },
  networkInstallationDesc: {
    fr: 'Configuration et déploiement de réseaux professionnels sécurisés, incluant le câblage, les équipements WiFi et la gestion des infrastructures.',
    en: 'Configuration and deployment of secure professional networks, including cabling, WiFi equipment and infrastructure management.',
    ar: 'تكوين ونشر شبكات مهنية آمنة، بما في ذلك الكابلات ومعدات الواي فاي وإدارة البنية التحتية.'
  },
  infrastructure: {
    fr: 'Infrastructure',
    en: 'Infrastructure',
    ar: 'البنية التحتية'
  },
  modeling3d: {
    fr: 'Modélisation 3D',
    en: '3D Modeling',
    ar: 'نمذجة ثلاثية الأبعاد'
  },
  modeling3dDesc: {
    fr: 'Création de modèles 3D réalistes pour vos produits, prototypes, visualisations architecturales ou expériences immersives.',
    en: 'Creation of realistic 3D models for your products, prototypes, architectural visualizations or immersive experiences.',
    ar: 'إنشاء نماذج ثلاثية الأبعاد واقعية لمنتجاتك ونماذجك الأولية والتصورات المعمارية أو التجارب الغامرة.'
  },
  visual: {
    fr: 'Visuel',
    en: 'Visual',
    ar: 'بصري'
  },
  training: {
    fr: 'Formation',
    en: 'Training',
    ar: 'تدريب'
  },
  trainingDesc: {
    fr: 'Programmes de formation personnalisés pour votre équipe sur les technologies modernes et les bonnes pratiques de développement.',
    en: 'Customized training programs for your team on modern technologies and good development practices.',
    ar: 'برامج تدريبية مخصصة لفريقك حول التقنيات الحديثة وممارسات التطوير الجيدة.'
  },
  learning: {
    fr: 'Apprentissage',
    en: 'Learning',
    ar: 'تعلّم'
  },
  // BlindPath Section
  innovation2: {
    fr: 'INNOVATION',
    en: 'INNOVATION',
    ar: 'ابتكار'
  },
  blindPathDesc: {
    fr: 'Notre dispositif révolutionnaire conçu pour aider les personnes aveugles ou malvoyantes à naviguer dans leur environnement avec plus d\'autonomie. Grâce à l\'intelligence artificielle avancée, BlindPath combine la reconnaissance d\'objets, la lecture de texte et le guidage vocal pour une expérience d\'assistance complète.',
    en: 'Our revolutionary device designed to help blind or visually impaired people navigate their environment with more autonomy. Thanks to advanced artificial intelligence, BlindPath combines object recognition, text reading and voice guidance for a complete assistance experience.',
    ar: 'جهازنا الثوري المصمم لمساعدة المكفوفين أو ضعاف البصر على التنقل في بيئتهم بمزيد من الاستقلالية. بفضل الذكاء الاصطناعي المتقدم، يجمع BlindPath بين التعرف على الأشياء وقراءة النص والتوجيه الصوتي لتجربة مساعدة كاملة.'
  },
  currentlyDeveloping: {
    fr: 'Actuellement en cours de développement.',
    en: 'Currently in development.',
    ar: 'قيد التطوير حاليا.'
  },
  advancedVoiceRecognition: {
    fr: 'Reconnaissance vocale avancée',
    en: 'Advanced voice recognition',
    ar: 'التعرف المتقدم على الصوت'
  },
  voiceRecognitionDesc: {
    fr: 'Interface vocale intuitive pour une utilisation sans effort et une expérience utilisateur optimale.',
    en: 'Intuitive voice interface for effortless use and optimal user experience.',
    ar: 'واجهة صوتية بديهية للاستخدام دون جهد وتجربة مستخدم مثالية.'
  },
  visualRecognition: {
    fr: 'Reconnaissance visuelle',
    en: 'Visual recognition',
    ar: 'التعرف البصري'
  },
  visualRecognitionDesc: {
    fr: 'Identification précise des objets, lecture de texte et reconnaissance faciale pour une meilleure perception de l\'environnement.',
    en: 'Precise identification of objects, text reading and facial recognition for better perception of the environment.',
    ar: 'تحديد دقيق للأشياء وقراءة النصوص والتعرف على الوجوه لإدراك أفضل للبيئة.'
  },
  learnMore: {
    fr: 'En savoir plus',
    en: 'Learn more',
    ar: 'اعرف المزيد'
  },
  deviceInDevelopment: {
    fr: 'Dispositif en cours de développement',
    en: 'Device in development',
    ar: 'الجهاز قيد التطوير'
  },
  // Contact Section
  contactUsTitle: {
    fr: 'Contactez-nous',
    en: 'Contact us',
    ar: 'اتصل بنا'
  },
  contactUsDesc: {
    fr: 'Vous avez un projet en tête ? Nous sommes là pour vous aider. Contactez-nous dès aujourd\'hui pour discuter de vos besoins et obtenir un devis personnalisé.',
    en: 'Do you have a project in mind? We are here to help you. Contact us today to discuss your needs and get a personalized quote.',
    ar: 'هل لديك مشروع في ذهنك؟ نحن هنا لمساعدتك. اتصل بنا اليوم لمناقشة احتياجاتك والحصول على عرض سعر مخصص.'
  },
  fullName: {
    fr: 'Nom complet',
    en: 'Full name',
    ar: 'الاسم الكامل'
  },
  yourName: {
    fr: 'Votre nom',
    en: 'Your name',
    ar: 'اسمك'
  },
  email: {
    fr: 'Email',
    en: 'Email',
    ar: 'البريد الإلكتروني'
  },
  yourEmail: {
    fr: 'vous@exemple.com',
    en: 'you@example.com',
    ar: 'أنت@مثال.com'
  },
  subject: {
    fr: 'Sujet',
    en: 'Subject',
    ar: 'الموضوع'
  },
  subjectPlaceholder: {
    fr: 'Comment pouvons-nous vous aider ?',
    en: 'How can we help you?',
    ar: 'كيف يمكننا مساعدتك؟'
  },
  message: {
    fr: 'Message',
    en: 'Message',
    ar: 'الرسالة'
  },
  messagePlaceholder: {
    fr: 'Décrivez votre projet ou votre demande en détail...',
    en: 'Describe your project or request in detail...',
    ar: 'صف مشروعك أو طلبك بالتفصيل...'
  },
  sendMessage: {
    fr: 'Envoyer le message',
    en: 'Send message',
    ar: 'إرسال الرسالة'
  },
  letsTalkProject: {
    fr: 'Discutons de votre projet',
    en: 'Let\'s discuss your project',
    ar: 'دعنا نناقش مشروعك'
  },
  teamReadyText: {
    fr: 'Notre équipe est prête à vous accompagner dans toutes les étapes de votre projet, de la conception à la réalisation.',
    en: 'Our team is ready to support you in all stages of your project, from design to implementation.',
    ar: 'فريقنا مستعد لدعمك في جميع مراحل مشروعك، من التصميم إلى التنفيذ.'
  },
  address: {
    fr: 'Adresse',
    en: 'Address',
    ar: 'العنوان'
  },
  addressValue: {
    fr: 'Universite de Tlemcen, Nouveau pôle, Bureau N03, I2E Mansourah, Tlemcen',
    en: 'University of Tlemcen, New pole, Office N03, I2E Mansourah, Tlemcen',
    ar: 'جامعة تلمسان، القطب الجديد، مكتب N03، I2E المنصورة، تلمسان'
  },
  phone: {
    fr: 'Téléphone',
    en: 'Phone',
    ar: 'الهاتف'
  },
  // Footer
  innovativeTech: {
    fr: 'Solutions technologiques innovantes pour transformer votre vision en réalité.',
    en: 'Innovative technological solutions to transform your vision into reality.',
    ar: 'حلول تكنولوجية مبتكرة لتحويل رؤيتك إلى واقع.'
  },
  webDev: {
    fr: 'Développement Web',
    en: 'Web Development',
    ar: 'تطوير الويب'
  },
  graphicDesign2: {
    fr: 'Design Graphique',
    en: 'Graphic Design',
    ar: 'تصميم جرافيك'
  },
  ai: {
    fr: 'Intelligence Artificielle',
    en: 'Artificial Intelligence',
    ar: 'الذكاء الاصطناعي'
  },
  
  training2: {
    fr: 'Formations',
    en: 'Training',
    ar: 'تدريب'
  },
  resources: {
    fr: 'Ressources',
    en: 'Resources',
    ar: 'موارد'
  },
  blog: {
    fr: 'Blog',
    en: 'Blog',
    ar: 'مدونة'
  },
  caseStudies: {
    fr: 'Études de cas',
    en: 'Case studies',
    ar: 'دراسات الحالة'
  },
  testimonials: {
    fr: 'Témoignages',
    en: 'Testimonials',
    ar: 'الشهادات'
  },
  faq: {
    fr: 'FAQ',
    en: 'FAQ',
    ar: 'الأسئلة الشائعة'
  },
  rights: {
    fr: 'Tous droits réservés.',
    en: 'All rights reserved.',
    ar: 'جميع الحقوق محفوظة.'
  },
  // Assistant
  assistant: {
    fr: 'Assistant EternaTech',
    en: 'EternaTech Assistant',
    ar: 'مساعد إترناتك'
  },
  close: {
    fr: 'Fermer',
    en: 'Close',
    ar: 'إغلاق'
  },
  assistantGreeting: {
    fr: 'Bonjour ! Je suis l\'assistant virtuel d\'EternaTech. Comment puis-je vous aider aujourd\'hui ?',
    en: 'Hello! I am the EternaTech virtual assistant. How can I help you today?',
    ar: 'مرحبا! أنا المساعد الافتراضي لإترناتك. كيف يمكنني مساعدتك اليوم؟'
  },
  typeMessage: {
    fr: 'Tapez votre message...',
    en: 'Type your message...',
    ar: 'اكتب رسالتك...'
  },
  assistantResponse: {
    fr: 'Merci pour votre message ! Un membre de notre équipe vous contactera bientôt pour répondre à votre demande.',
    en: 'Thank you for your message! A member of our team will contact you soon to respond to your request.',
    ar: 'شكرا على رسالتك! سيتواصل معك أحد أعضاء فريقنا قريبًا للرد على طلبك.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
