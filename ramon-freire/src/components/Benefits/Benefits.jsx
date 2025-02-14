import React, { useEffect, useState, useRef } from "react";
import "./Benefits.scss";
import beneficio1 from "../../assets/beneficios/beneficio1.png";
import beneficio2 from "../../assets/beneficios/beneficio2.png";
import beneficio3 from "../../assets/beneficios/beneficio3.png";
import beneficio4 from "../../assets/beneficios/beneficio.png";

const benefitsData = [
  {
    img: beneficio1,
    title: "Ganho de Massa Muscular",
    description: "Aumente sua força e definição muscular com um plano personalizado."
  },
  {
    img: beneficio2,
    title: "Treino Individualizado",
    description: "Exercícios otimizados para seus objetivos e nível de experiência."
  },
  {
    img: beneficio3,
    title: "Dieta Personalizada",
    description: "Nutrição alinhada ao seu treino para máximo desempenho."
  },
  {
    img: beneficio4,
    title: "Avaliação Postural",
    description: "Correção de postura e prevenção de lesões para um treino mais eficiente."
  }
];

const Benefits = () => {
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
    <section ref={sectionRef} className="benefits">
      <div className="borders">
        <div className="border-line"></div>
        <div className="border-line"></div>
      </div>

      <div className="benefits-overlay"></div>
      <div className="benefits-content">
        <h2 className={`benefits-text ${isVisible ? "visible" : ""}`}>
          CONHEÇA OS BENEFÍCIOS DO MEU ACOMPANHAMENTO INDIVIDUALIZADO
        </h2>
        <div className="benefits-cards">
          {benefitsData.map((benefit, index) => (
            <div key={index} className={`benefit-card ${isVisible ? "visible" : ""}`}>
              <img className="benefit-img" src={benefit.img} alt={benefit.title} />
              <div className="benefit-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
