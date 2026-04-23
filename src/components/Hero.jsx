import React from 'react';
import './Hero.css';
import foto from '../assets/foto.jpeg';
import { handleWhatsAppClick } from '../utils/analytics';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <span className="hero-subtitle reveal" style={{animationDelay: '0.1s'}}>Psicóloga • Especialista em Dependência Emocional e Relacionamentos Amorosos</span>
          <h1 className="reveal" style={{animationDelay: '0.2s'}}>Recupere sua Autonomia e Liberdade no Amor</h1>
          <p className="hero-description reveal" style={{animationDelay: '0.3s'}}>
            Te ajudo a romper ciclos de dependência em seus relacionamentos afetivos e a construir vínculos seguros através da Terapia Cognitivo-Comportamental.
          </p>
          <div className="hero-btns reveal" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://wa.me/5548999341192?text=Olá%20Hellen,%20vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20o%20atendimento%20em%20psicoterapia." 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('agendamento_consulta', 'hero')}
            >
              Agendar Consulta
            </a>
            <a href="#sobre" className="btn btn-outline" style={{marginLeft: '1rem'}}>
              Sobre Minha Abordagem
            </a>
          </div>
          <div className="hero-quote reveal" style={{animationDelay: '0.5s'}}>
            <p>"O caminho para relacionamentos saudáveis começa no fortalecimento da sua autonomia emocional."</p>
          </div>
        </div>
        <div className="hero-image reveal" style={{animationDelay: '0.6s'}}>
          <div className="image-wrapper">
            <img src={foto} alt="Hellen Trento Psicóloga Clínica" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
