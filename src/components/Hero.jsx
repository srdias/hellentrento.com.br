import React from 'react';
import './Hero.css';
import foto from '../assets/foto.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <span className="hero-subtitle reveal" style={{animationDelay: '0.1s'}}>Psicóloga Clínica • TCC</span>
          <h1 className="reveal" style={{animationDelay: '0.2s'}}>Resgate seu Equilíbrio e Autonomia</h1>
          <p className="hero-description reveal" style={{animationDelay: '0.3s'}}>
            Acolhimento humanizado e psicoterapia baseada em evidências para ajudar você a superar a ansiedade, o medo e reencontrar sua liberdade emocional.
          </p>
          <div className="hero-btns reveal" style={{animationDelay: '0.4s'}}>
            <a href="https://wa.me/5548999341192" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Iniciar Minha Jornada
            </a>
            <a href="#sobre" className="btn btn-outline" style={{marginLeft: '1rem'}}>
              Conheça Mais
            </a>
          </div>
          <div className="hero-quote reveal" style={{animationDelay: '0.5s'}}>
            <p>"Pare e dê uma chance a si mesmo."</p>
            <span>— Aaron Beck</span>
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
