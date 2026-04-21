import React from 'react';
import './Footer.css';
import logo from '../assets/logo3_preta.png';
import { WhatsappLogo } from 'phosphor-react';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Hellen Trento Logo" className="footer-logo" />
          <p>
            Psicóloga Clínica (CRP 12/26936)<br />
            Atendimento presencial e on-line com foco em TCC.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#atendimentos">Atendimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contato</h4>
          <ul>
            <li>
              <a href="tel:5548999341192">
                (48) 99934-1192
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/psihellentrento" target="_blank" rel="noopener noreferrer">
                @psihellentrento
              </a>
            </li>
            <li>Criciúma - SC</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom text-center">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hellen Trento Pickler. Todos os direitos reservados.</p>
        </div>
      </div>
      
      <a 
        href="https://wa.me/5548999341192" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </footer>
  );
};

export default Footer;
