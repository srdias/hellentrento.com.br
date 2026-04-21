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

const services = [
  {
    title: 'Ansiedade e Estresse',
    description: 'Aprenda a lidar com as pressões do dia a dia e encontre ferramentas para acalmar a mente.',
    icon: <Wind size={32} weight="light" />
  },
  {
    title: 'Depressão',
    description: 'Suporte especializado para redescobrir o propósito e recuperar o bem-estar emocional.',
    icon: <Sun size={32} weight="light" />
  },
  {
    title: 'Autoconhecimento',
    description: 'Entenda seus padrões de comportamento e potencialize suas forças pessoais.',
    icon: <UserFocus size={32} weight="light" />
  },
  {
    title: 'Terapia de Casal',
    description: 'Fortalecimento de vínculos e melhoria da comunicação no relacionamento.',
    icon: <Users size={32} weight="light" />
  },
  {
    title: 'Luto e Perdas',
    description: 'Acolhimento humanizado para atravessar momentos difíceis de transição.',
    icon: <Butterfly size={32} weight="light" />
  },
  {
    title: 'Desenvolvimento Pessoal',
    description: 'Foco em objetivos de vida, carreira e superação de limitações.',
    icon: <TrendUp size={32} weight="light" />
  }
];

const Services = () => {
  return (
    <section id="atendimentos" className="services">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="subtitle">Como posso ajudar</span>
          <h2>Especialidades e Atendimentos</h2>
          <p className="section-description">
            Atendimentos pautados na Ética e na Terapia Cognitivo-Comportamental (TCC), 
            tanto de forma presencial quanto on-line.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-footer text-center mt-4">
          <div className="service-modes">
            <div className="mode-card">
              <Laptop size={44} weight="light" color="var(--primary)" />
              <h4>Atendimento On-line</h4>
              <p>Flexibilidade e conforto de onde você estiver.</p>
            </div>
            <div className="mode-card">
              <HouseLine size={44} weight="light" color="var(--primary)" />
              <h4>Atendimento Presencial</h4>
              <p>Espaço acolhedor para sessões individuais e presenciais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
