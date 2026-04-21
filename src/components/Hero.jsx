import React from 'react';
import './Hero.css';
import foto from '../assets/foto.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <span className="hero-subtitle">Psicóloga Clínica • TCC</span>
          <h1>Resgate seu Equilíbrio e Autonomia</h1>
          <p className="hero-description">
            Acolhimento humanizado e psicoterapia baseada em evidências para ajudar você a superar a ansiedade, o medo e reencontrar sua liberdade emocional.
          </p>
          <div className="hero-btns">
            <a href="https://wa.me/5548999341192" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
            <a href="#sobre" className="btn btn-outline">
              Conheça Mais
            </a>
          </div>
          <div className="hero-quote">
            <p>"Pare e dê uma chance a si mesmo."</p>
            <span>— Aaron Beck</span>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={foto} alt="Hellen Trento" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
