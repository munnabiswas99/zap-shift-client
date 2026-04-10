import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import brandImg1 from "../../../assets/brands/amazon.png";
import brandImg2 from "../../../assets/brands/amazon_vector.png";
import brandImg3 from "../../../assets/brands/casio.png";
import brandImg4 from "../../../assets/brands/moonstar.png";
import brandImg5 from "../../../assets/brands/randstad.png";
import brandImg6 from "../../../assets/brands/star.png";
import brandImg7 from "../../../assets/brands/start_people.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
  brandImg7,
];

const Brands = () => {
  return (
    <>
      <h1 className="text-center font-bold text-secondary py-10 text-4xl">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="my-10"/>
    </>
  );
};

export default Brands;
