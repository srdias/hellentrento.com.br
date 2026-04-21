import React from 'react';
import './Footer.css';
import logo from '../assets/logo3_preta.png';
import { WhatsappLogo, InstagramLogo } from 'phosphor-react';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Logo Hellen Trento" className="footer-logo" />
          <p>
            Hellen Trento Pickler • CRP 12/26936<br />
            Psicoterapia baseada em TCC.<br />
            Criciúma - SC e Atendimento On-line.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#atendimentos">Especialidades</a></li>
            <li><a href="#processo">Como Funciona</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Social</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/hellentrento.psi" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={24} weight="light" /> @hellentrento.psi
            </a>
            <a href="https://wa.me/5548999341192" target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={24} weight="light" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom text-center">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hellen Trento Pickler. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
