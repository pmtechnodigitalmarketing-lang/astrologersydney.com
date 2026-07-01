import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CardCarousel.css';

const CardCarousel = ({ services, onServiceClick }) => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="services-swiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} onClick={() => onServiceClick(service)}>
            <motion.div 
              className="carousel-card"
              whileHover="hover"
            >
              <div className="carousel-image-wrapper">
                <div className="carousel-image-glow"></div>
                <img src={service.image} alt={service.title} loading="lazy" width="600" height="600" />
              </div>
              <h3>{service.title}</h3>
              <p className="carousel-desc">{service.description.length > 90 ? service.description.substring(0, 90) + '...' : service.description}</p>
              
              <div className="carousel-footer">
                <span className="learn-more-text">Explore Portal</span>
                <motion.span 
                  className="material-symbols-outlined feature-arrow"
                  variants={{ hover: { x: 8 } }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  arrow_forward
                </motion.span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
