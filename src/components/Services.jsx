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
    title: 'Dependência Emocional',
    description: 'Aprenda a romper ciclos de necessidade excessiva da aprovação do outro e reconstrua sua identidade com segurança.',
    icon: <TrendUp size={40} weight="light" />
  },
  {
    title: 'Conflitos de Relacionamento',
    description: 'Suporte para lidar com términos, ciúmes excessivos e dinâmicas tóxicas, buscando vínculos mais saudáveis e leves.',
    icon: <Users size={40} weight="light" />
  },
  {
    title: 'Crenças e Padrões',
    description: 'Identificação e mudança de pensamentos disfuncionais que sabotam sua felicidade e seus relacionamentos através da TCC.',
    icon: <Wind size={40} weight="light" />
  },
  {
    title: 'Autonomia e Autoestima',
    description: 'Desenvolva o amor-próprio e a força necessária para tomar decisões baseadas em seus próprios valores e desejos.',
    icon: <Sun size={40} weight="light" />
  },
  {
    title: 'Ansiedade e Insegurança',
    description: 'Aprenda a lidar com o medo do abandono e a ansiedade que surge quando você não se sente no controle da sua vida.',
    icon: <Butterfly size={40} weight="light" />
  },
  {
    title: 'Mitos do Afeto Moderno',
    description: 'Diferenciando demonstrações reais de afeto de sinais superficiais das redes sociais, focando no que realmente importa.',
    icon: <UserFocus size={40} weight="light" />
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
            <div key={index} className="service-card reveal" style={{animationDelay: `${index * 0.1}s`}}>
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
