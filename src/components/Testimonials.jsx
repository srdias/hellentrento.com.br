import React from 'react';
import './Testimonials.css';
import { Quotes } from 'phosphor-react';

const testimonials = [
  {
    text: "A Hellen tem um dom e um talento único. Ela transformou a minha vida e com certeza mudará a vida de muitas pessoas. Graças às nossas sessões, hoje ressignifiquei muitos acontecimentos que antes me causavam sofrimento.",
    author: "C.M.",
    age: "21 anos"
  },
  {
    text: "Desde que conheci a Hellen, a minha vida tornou-se mais leve. Ela trouxe clareza para os meus conflitos. Os resultados foram fantásticos.",
    author: "N.C.",
    age: "68 anos"
  },
  {
    text: "Procurar a Hellen foi a melhor decisão. Obrigada pelo trabalho lindo que você tem feito comigo. Através dela, eu descobri coisas sobre mim que eu nem me dava conta. A melhora acontece a cada sessão. Você é muito especial.",
    author: "Y.P.",
    age: "17 anos"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="subtitle">Relatos de Transformação</span>
          <h2>O que dizem meus clientes</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <Quotes size={48} weight="fill" className="quote-icon" />
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <strong>{item.author}</strong>
                <span>{item.age}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
