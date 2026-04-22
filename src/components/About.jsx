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
          <h2>Vocação e Ciência a serviço da sua Autonomia</h2>
          <p>
            Minha jornada com a psicologia começou cedo: decidi que seria psicóloga aos 11 anos de idade. Hoje, com registro CRP 12/26936, transformei esse desejo em uma prática clínica focada em <strong>ajudar mulheres a recuperarem sua liberdade e segurança emocional</strong>.
          </p>
          <p>
            Especialista em <strong>Terapia Cognitivo-Comportamental (TCC)</strong> e <strong>Terapia do Esquema</strong>, trabalho na identificação de padrões profundos que geram dependência emocional e dificuldades nos relacionamentos, permitindo que você construa uma vida mais autêntica e plena.
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
