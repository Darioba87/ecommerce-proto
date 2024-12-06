import { Link } from "react-router-dom";
import images from "../data/sliderImages.json";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function HeroSection() {
  const [slider] = useState(images);

  return (
    <section className="hero is-large hero-section">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={true}
        className="swiper-head mySwiper"
        preventClicks={false}
        preventClicksPropagation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <figure className="image is-fullwidth is-absolute">
              <img src={slide.imageUrl} alt={slide.altText} />
            </figure>
            <div className="hero-body is-relative hero-background">
              <div className="container has-text-centered">
                <h1 className="title is-1 has-text-white">{slide.caption}</h1>
                <h2 className="subtitle is-3 has-text-white mb-6">
                  Discover amazing products at great prices
                </h2>
                <Link to="/products" className="button is-primary is-large">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
