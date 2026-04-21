import React from 'react';
import './About.css';
import logo from '../assets/logo3_preta.png';
import { GraduationCap, IdentificationBadge } from 'phosphor-react';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="container about-container">
        <div className="about-content">
          <span className="subtitle">Minha Trajetória</span>
          <h2>Acolhimento autêntico e base científica</h2>
          <p>
            Olá! Sou psicóloga apaixonada por acompanhar pessoas em seus processos de descoberta e fortalecimento emocional. 
            Baseio minha prática clínica na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, a abordagem padrão-ouro da psicologia moderna, que produz mudanças eficazes e duradouras.
          </p>
          <p>
            Meu objetivo é proporcionar um espaço de <strong>escuta ativa e sem julgamentos</strong>, onde você se sinta seguro(a) 
            para explorar suas vulnerabilidades e desenvolver ferramentas práticas para retomar as rédeas da sua vida com mais autonomia.
          </p>
          <div className="credentials">
            <div className="credential-item">
              <GraduationCap size={32} weight="light" color="var(--primary)" />
              <div>
                <strong>Formação</strong>
                <span>Graduação em Psicologia</span>
              </div>
            </div>
            <div className="credential-item">
              <IdentificationBadge size={32} weight="light" color="var(--primary)" />
              <div>
                <strong>Especialização</strong>
                <span>Terapia Cognitivo-Comportamental</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="logo-frame">
            <img src={logo} alt="Logotipo Hellen Trento Psicologia" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
