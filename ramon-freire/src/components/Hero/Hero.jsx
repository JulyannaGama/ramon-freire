import React from "react";
import "./Hero.scss";
import imgBanner from "../../assets/imgBanner.png";
import Typewriter from "typewriter-effect";
import { FaDumbbell, FaWeightHanging, FaRunning, FaHeartbeat } from "react-icons/fa";

const whatsappNumber = "5575998587858";

const handleWhatsAppClick = (message) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
};

const Hero = () => {
  return (
    <section className="hero">
      {/* Itens flutuantes */}
      <FaDumbbell className="floating-icon icon-1" />
      <FaWeightHanging className="floating-icon icon-2" />
      <FaRunning className="floating-icon icon-3" />
      <FaHeartbeat className="floating-icon icon-4" />

      <div className="hero-content">
        <h1 className="hero-title">
          <Typewriter
            options={{
              strings: ["TRANSFORME SEU CORPO", "COM DISCIPLINA E FOCO"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </h1>
        <p>
          Com mais de 20 anos de experiência, Ramon Freire transforma vidas
          através da musculação. Aqui, você não treina apenas o corpo, mas
          também a mente. Junte-se à maior academia de Esplanada e conquiste
          seus objetivos com acompanhamento profissional e resultados reais.
        </p>
        <button className="cta-button" onClick={() => handleWhatsAppClick("Olá! Quero mudar de vida e transformar meu corpo. Podemos conversar?")}>
          COMEÇAR AGORA
        </button>
      </div>
      <div className="hero-image">
        <img src={imgBanner} alt="Imagem de Ramon Freire" />
      </div>
    </section>
  );
};

export default Hero;
