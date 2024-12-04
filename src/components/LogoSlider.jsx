import "swiper/css";
import logos from "../data/logos.json";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

export default function LogoSlider() {
  const [slides] = useState(logos);

  return (
    <section className="section">
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
          loop={false}
          spaceBetween={5}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={logo.logoUrl}
                  alt={logo.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "10px",
                  }}
                />
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  {logo.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
