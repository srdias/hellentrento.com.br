import React from 'react';
import './About.css';
import logo from '../assets/logo3_preta.png';
import { GraduationCap, Certificate } from 'phosphor-react';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="container about-container">
        <div className="about-content">
          <span className="subtitle">Minha Trajetória</span>
          <h2>Sobre Hellen Trento</h2>
          <p>
            Olá! Sou psicóloga apaixonada por acompanhar pessoas em seus processos de descoberta e fortalecimento emocional. 
            Com registro no CRP 12/26936, baseio minha prática clínica na <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, 
            uma abordagem científica focada na resolução de problemas e na mudança de padrões disfuncionais.
          </p>
          <p>
            Minha missão é proporcionar um espaço de <strong>acolhimento autêntico</strong>, onde você se sinta seguro(a) 
            para explorar suas vulnerabilidades sem julgamentos. Acredito que a terapia é um investimento em si mesmo, 
            permitindo que você retome as rédeas da sua vida com mais consciência e ferramentas práticas.
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
              <Certificate size={32} weight="light" color="var(--primary)" />
              <div>
                <strong>Especialização</strong>
                <span>Terapia Cognitivo-Comportamental</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="logo-frame">
            <img src={logo} alt="HT Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
