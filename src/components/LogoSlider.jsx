import "swiper/css";
import logos from "../data/logos.json";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

export default function LogoSlider() {
  const [slides] = useState(logos);

  return (
    <section className="section logo-slider">
      <div className="container">
        <h3 className="title is-3 has-text-centered">Our Sponsors</h3>
        <br />
        <Swiper
          modules={[Virtual, Autoplay]}
          virtual
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((logo) => (
            <SwiperSlide key={uuidv4()} virtualIndex={logo.id}>
              {" "}
              <div className=" has-text-centered">
                <figure className="image is-128x128 is-inline-block">
                  <img src={logo.logoUrl} alt={logo.name} />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
