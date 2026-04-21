import React from 'react';
import { ChatTeardropText, CalendarCheck, Heartbeat, ShieldCheck } from 'phosphor-react';
import './Process.css';

const steps = [
  {
    icon: <ChatTeardropText size={40} weight="light" />,
    title: "1. Primeiro Contato",
    text: "Você entra em contato via WhatsApp para tirar dúvidas iniciais e verificar disponibilidade."
  },
  {
    icon: <CalendarCheck size={40} weight="light" />,
    title: "2. Agendamento",
    text: "Escolhemos o melhor horário para sua sessão, seja presencial em Criciúma ou on-line."
  },
  {
    icon: <Heartbeat size={40} weight="light" />,
    title: "3. Primeira Sessão",
    text: "Um momento de acolhimento para entendermos sua demanda e traçarmos os primeiros objetivos."
  },
  {
    icon: <ShieldCheck size={40} weight="light" />,
    title: "4. Jornada Terapêutica",
    text: "Iniciamos o processo baseado em TCC, com foco em resultados práticos e bem-estar duradouro."
  }
];

const Process = () => {
  return (
    <section id="processo" className="process">
      <div className="wave-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="subtitle">O Caminho</span>
          <h2>Como funciona o processo?</h2>
          <p className="section-description">Inicie sua jornada de cuidado emocional de forma simples e segura.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-item reveal">
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < steps.length - 1 && <div className="process-line"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
