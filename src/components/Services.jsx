import React from 'react';
import { 
  Wind, 
  Sun, 
  UserFocus, 
  Users, 
  Butterfly, 
  TrendUp, 
  Laptop, 
  HouseLine
} from 'phosphor-react';
import './Services.css';

const services = [
  {
    title: 'Ansiedade e Estresse',
    description: 'Aprenda a lidar com as pressões do dia a dia e encontre ferramentas para acalmar a mente, resgatando seu equilíbrio no cotidiano.',
    icon: <Wind size={40} weight="light" />
  },
  {
    title: 'Depressão',
    description: 'Suporte especializado para redescobrir o propósito e recuperar o bem-estar emocional, transformando padrões de sofrimento em esperança.',
    icon: <Sun size={40} weight="light" />
  },
  {
    title: 'Autoconhecimento',
    description: 'Entenda seus padrões de comportamento e potencialize suas forças pessoais para uma vida mais autêntica e alinhada aos seus valores.',
    icon: <UserFocus size={40} weight="light" />
  },
  {
    title: 'Terapia de Casal',
    description: 'Fortalecimento de vínculos e melhoria da comunicação no relacionamento, construindo uma base sólida de parceria e respeito mútuo.',
    icon: <Users size={40} weight="light" />
  },
  {
    title: 'Luto e Perdas',
    description: 'Acolhimento humanizado para atravessar momentos difíceis de transição e perda, permitindo que a dor se transforme em saudade serena.',
    icon: <Butterfly size={40} weight="light" />
  },
  {
    title: 'Desenvolvimento Pessoal',
    description: 'Foco em objetivos de vida, carreira e superação de limitações para conquistar a vida plena e satisfatória que você merece.',
    icon: <TrendUp size={40} weight="light" />
  }
];

const Services = () => {
  return (
    <section id="atendimentos" className="services">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="subtitle">Como posso ajudar</span>
          <h2>Especialidades e Atendimentos</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-footer text-center mt-4">
          <div className="service-modes">
            <div className="mode-card reveal">
              <Laptop size={44} weight="light" color="var(--primary)" />
              <h4>Atendimento On-line</h4>
              <p>Flexibilidade e conforto de onde você estiver.</p>
            </div>
            <div className="mode-card reveal">
              <HouseLine size={44} weight="light" color="var(--primary)" />
              <h4>Atendimento Presencial</h4>
              <p>Espaço acolhedor em Criciúma para sessões presenciais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
