
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AssistantSection = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: t('assistantGreeting') }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue('');
    
    // Simulate assistant response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: t('assistantResponse') 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-eternatech-blue hover:bg-eternatech-blue/90 shadow-lg flex items-center justify-center"
        >
          <Bot className="h-6 w-6 text-white" />
        </Button>
      ) : (
        <Card className="w-80 sm:w-96 shadow-xl border-0 overflow-hidden animate-fade-in">
          <div className="bg-eternatech-blue text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <h3 className="font-medium">{t('assistant')}</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 rounded-full text-white hover:bg-blue-700/50"
            >
              <span className="sr-only">{t('close')}</span>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.258206 1.00652C-0.0860687 0.662044 -0.0860687 0.113445 0.258206 -0.230955C0.602481 -0.575354 1.15108 -0.575354 1.49536 -0.230955L7.74179 6.01458C8.08607 6.35906 8.08607 6.90766 7.74179 7.25206C7.39752 7.59645 6.84892 7.59645 6.50464 7.25206L0.258206 1.00652Z" fill="currentColor" />
                <path d="M6.50464 -0.230955C6.84892 -0.575354 7.39752 -0.575354 7.74179 -0.230955C8.08607 0.113445 8.08607 0.662044 7.74179 1.00652L1.49536 7.25206C1.15108 7.59645 0.602481 7.59645 0.258206 7.25206C-0.0860687 6.90766 -0.0860687 6.35906 0.258206 6.01458L6.50464 -0.230955Z" fill="currentColor" />
              </svg>
            </Button>
          </div>
          
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`p-3 max-w-[80%] rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-eternatech-blue text-white' 
                        : 'bg-white shadow-sm border border-gray-200'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex items-center mb-1">
                        <MessageSquare className="h-4 w-4 mr-1 text-eternatech-blue" />
                        <span className="text-xs font-medium text-eternatech-blue">{t('assistant')}</span>
                      </div>
                    )}
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-gray-200 flex items-center gap-2">
              <Input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('typeMessage')}
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon" 
                className="bg-eternatech-blue hover:bg-eternatech-blue/90 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AssistantSection;
