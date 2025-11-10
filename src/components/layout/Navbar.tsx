
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { text: t('home'), href: '#home' },
    { text: t('services'), href: '#services' },
    { text: t('blindpath'), href: '#blindpath' },
    { text: t('about'), href: '#about' },
    { text: t('contact'), href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-[100px]',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''
      )}
    >
      <div className="container flex items-center justify-between h-full">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/a3697069-d8a0-4ff8-8f42-f1c3ba50fc68.png" 
            alt="EternaTech Logo" 
            className="w-[350px] h-[130px] object-contain" 
          />
        </a>

        {isMobile ? (
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Globe size={20} />
                  <span className="sr-only">Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('fr')}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')}>
                  🇩🇿 العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        ) : (
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-eternatech-blue transition-colors"
              >
                {link.text}
              </a>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe size={20} />
                  <span className="sr-only">Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('fr')}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')}>
                  🇩🇿 العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            
          </nav>
        )}

        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in-up">
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-eternatech-blue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <Button className="bg-eternatech-blue hover:bg-eternatech-blue/90 text-white w-full">
                {t('quoteRequest')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
