import React, { use } from "react";
const reviewPromise = fetch("../../../../public/reviews.json").then((res) =>
  res.json(),
);
import customerTop from "../../../assets/customer-top.png";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = use(reviewPromise);
  // console.log(reviews);
  return (
    <div className="my-10">
      <div className="text-center space-y-4 my-10">
        <img className="mx-auto" src={customerTop} alt="" />
        <h1 className="text-3xl font-bold">What our customers are sayings</h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce<br></br>pain, and strengthen
          your body with ease!
        </p>
      </div>
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={50}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard reviewData={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Review;
