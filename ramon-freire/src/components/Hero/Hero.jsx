import React from 'react';
import './Hero.scss';
import backgroundImage from '../../assets/background.png'; // Certifique-se do caminho correto

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div>
          <h1>TRANSFORME SEU CORPO <br /> COM DISCIPLINA E FOCO</h1>

        </div>
        <p>
          Com mais de 20 anos de experiência, Ramon Freire transforma vidas através da musculação.
          Aqui, você não treina apenas o corpo, mas também a mente. Junte-se à maior academia de Esplanada
          e conquiste seus objetivos com acompanhamento profissional e resultados reais.
        </p>
        <button>COMECE AGORA</button>
      </div>
      <div className="hero-image">
        <img src={backgroundImage} alt="Imagem de Ramon Freire" />
      </div>
    </section>
  );
};

export default Hero;
