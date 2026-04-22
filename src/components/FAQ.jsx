import React, { useState } from 'react';
import { Plus, Minus } from 'phosphor-react';
import './FAQ.css';

const faqs = [
  {
    question: "Como funciona a Terapia Cognitivo-Comportamental (TCC)?",
    answer: "A TCC é uma abordagem prática e focada no presente. Trabalhamos na identificação e mudança de padrões de pensamento e comportamento que geram sofrimento, buscando resultados concretos e autonomia para o paciente."
  },
  {
    question: "Qual a duração e frequência das sessões?",
    answer: "As sessões individuais duram em média 50 minutos. A frequência recomendada costuma ser semanal, especialmente no início do processo, para garantir a continuidade e eficácia do tratamento."
  },
  {
    question: "Você atende por convênio médico?",
    answer: "Trabalho exclusivamente com atendimentos particulares, mas emito recibos para que você possa solicitar o reembolso junto ao seu plano de saúde (consulte as condições da sua operadora)."
  },
  {
    question: "O atendimento on-line é tão eficaz quanto o presencial?",
    answer: "Sim. Estudos científicos comprovam que a eficácia da psicoterapia on-line é equivalente à presencial para a maioria das demandas. O importante é garantir um local privado e uma boa conexão à internet."
  },
  {
    question: "Como saber se preciso de ajuda para Dependência Emocional?",
    answer: "Se você sente que sua felicidade depende exclusivamente do outro, tem medo excessivo do abandono ou anula seus desejos para agradar, esses são sinais de alerta. A terapia ajuda a resgatar sua identidade e limites."
  },
  {
    question: "É possível mudar padrões de relacionamento que se repetem?",
    answer: "Com certeza. Através da TCC, mapeamos as crenças que te levam a escolher os mesmos perfis de parceiros ou aceitar as mesmas dinâmicas, trabalhando na mudança prática desses comportamentos para atrair laços mais saudáveis."
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
