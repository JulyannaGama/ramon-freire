import React, { useEffect, useState, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Plans.scss";

const whatsappNumber = "5575998587858";

const handleWhatsAppClick = (message) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
};

const plansData = [
  {
    title: "PLANO PREMIUM",
    subtitle: "Treino + Dieta",
    price: "R$ 999",
    features: [
      "Protocolo de dieta individualizada",
      "Protocolo de treino personalizado",
      "Correções de postura e execução",
      "Suporte individual via WhatsApp",
      "Acesso à comunidade de alunos"
    ],
    message: "Olá, tenho interesse no Plano Premium (Treino + Dieta). Podemos conversar?",
  },
  {
    title: "PLANO TREINO",
    subtitle: "Somente Treino",
    price: "R$ 999",
    features: [
      "Protocolo de treino personalizado",
      "Correções de postura e execução",
      "Suporte individual via WhatsApp",
      "Acesso à comunidade de alunos"
    ],
    message: "Olá, quero saber mais sobre o Plano de Treino. Podemos conversar?",
  }
];

const Plans = () => {
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
    <section ref={sectionRef} className="plans">
      <h2 className="plans-title">ESCOLHA SEU PLANO</h2>
      <div className="plans-container">
        {plansData.map((plan, index) => (
          <div key={index} className={`plan-card ${isVisible ? "visible" : ""}`}>
            <div className="plan-header">
              <h3 className="plan-title">{plan.title}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <p className="plan-price">{plan.price}</p>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="icon-check" /> {feature}
                </li>
              ))}
            </ul>
            <button className="plan-button" onClick={() => handleWhatsAppClick(plan.message)}>
              EU QUERO
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
