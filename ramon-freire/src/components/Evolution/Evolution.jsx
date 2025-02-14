import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Evolution.scss";
import evolutionImg from "../../assets/evolucoes/evolucoes.png";

const Evolution = () => {
  const images = new Array(9).fill(evolutionImg);

  return (
    <section className="evolution">
      <div className="floating-icons">
        <div className="icon icon-1"></div>
        <div className="icon icon-2"></div>
        <div className="icon icon-3"></div>
      </div>

      <div className="borders">
        <div className="border-line"></div>
        <div className="border-line"></div>
      </div>

      <h2 className="evolution-title">Evolução dos Alunos</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          426: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="evolution-card">
            <img src={img} alt={`Evolução ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Evolution;
