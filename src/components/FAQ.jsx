import React, { useState } from 'react';
import { Plus, Minus } from 'phosphor-react';
import './FAQ.css';

const faqs = [
  {
    question: "Como saber se eu vivo uma dependência emocional?",
    answer: "Se você sente que sua felicidade depende exclusivamente da aprovação do outro, tem medo paralisante do abandono ou anula seus próprios desejos para evitar conflitos, você está vivendo um ciclo de dependência. A terapia ajuda a resgatar sua autonomia e segurança emocional."
  },
  {
    question: "A terapia ajuda a quebrar os ciclos de 'dedo podre' no amor?",
    answer: "Sim. Através da Terapia Cognitivo-Comportamental (TCC), mapeamos os padrões invisíveis que te levam a escolher parceiros que não te valorizam. O objetivo é reprogramar essas crenças para que você sinta segurança em estabelecer vínculos saudáveis e equilibrados."
  },
  {
    question: "O atendimento on-line é realmente eficaz para demandas profundas?",
    answer: "Com certeza. O atendimento on-line segue as mesmas normas éticas e de sigilo do presencial, com a vantagem da flexibilidade. O acolhimento e a profundidade técnica da TCC garantem resultados tão eficazes quanto as sessões de consultório."
  },
  {
    question: "Em quanto tempo começo a sentir mudanças nos meus relacionamentos?",
    answer: "A TCC é uma abordagem focada em resultados. Embora cada processo seja único, o foco é oferecer ferramentas práticas desde as primeiras sessões para que você aprenda a lidar com a ansiedade, os ciúmes e a insegurança de forma autônoma."
  },
  {
    question: "Como funciona a primeira conversa?",
    answer: "O primeiro contato serve para entendermos sua demanda e como posso te ajudar. É um espaço seguro, sem julgamentos, onde daremos o primeiro passo para você recuperar sua liberdade e parar de aceitar migalhas de atenção."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="subtitle">Perguntas Frequentes</span>
          <h2>Dúvidas Comuns</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
