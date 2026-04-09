import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import Buttons from "./buttons/Buttons";

const Banner = () => {
  return (
    <Carousel autoPlay='true' infiniteLoop='true'>
      <div className="relative">
        <img className="" src={bannerImg1}/>
        <Buttons></Buttons>
      </div>
      <div>
        <img src={bannerImg2} />
        <Buttons></Buttons>
      </div>
      <div>
        <img src={bannerImg3} />
        <Buttons></Buttons>
      </div>
    </Carousel>
  );
};

export default Banner;
