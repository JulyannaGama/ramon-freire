import React, { useEffect, useState, useRef } from 'react';
import './FAQ.scss';

const faqData = [
  {
    question: " Como funciona a avaliação inicial?",
    answer: "Na avaliação inicial, analisamos seu nível de condicionamento físico, histórico de treinos, alimentação e objetivos. Isso garante que o planejamento seja totalmente personalizado para você."
  },
  {
    question: " Como os treinos são montados e ajustados?",
    answer: "Os treinos são planejados com base na sua avaliação, levando em conta sua experiência e metas. A cada 4 a 6 semanas, fazemos ajustes para garantir sua evolução contínua."
  },
  {
    question: " Como funciona o acompanhamento e suporte?",
    answer: "Durante o acompanhamento, você recebe suporte contínuo para tirar dúvidas, ajustar treinos conforme necessário e garantir que esteja seguindo a melhor estratégia para alcançar seus resultados."
  }
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="faq">
      <div className="faq-overlay"></div>
      <h2 className={`faq-title ${isVisible ? "visible" : ""}`}>ACOMPANHE O PASSO A PASSO:</h2>
      <div className="faq-cards">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-card ${isVisible ? "visible" : ""}`}>
            <h3>{index + 1}. {item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
