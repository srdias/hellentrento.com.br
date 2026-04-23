import React from 'react';
import { WhatsappLogo } from 'phosphor-react';
import './FloatingWhatsApp.css';
import { trackWhatsAppClick } from '../utils/analytics';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5548999341192" 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      onClick={() => trackWhatsAppClick('floating_button')}
    >
      <WhatsappLogo size={32} weight="fill" />
      <span className="tooltip">Fale Comigo</span>
    </a>
  );
};

export default FloatingWhatsApp;
