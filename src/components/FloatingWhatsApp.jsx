import React from 'react';
import { WhatsappLogo } from 'phosphor-react';
import './FloatingWhatsApp.css';
import { trackWhatsAppClick } from '../utils/analytics';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5548999341192?text=Olá%20Hellen,%20vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20o%20atendimento%20em%20psicoterapia." 
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
