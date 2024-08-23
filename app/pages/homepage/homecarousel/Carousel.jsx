import React from "react";
import MobileSwiper from "./mobile/MobileSwiper";
import HorizontalSlider from "./desktop/HorizontalSlider";
import LinkButton from "./LinkButton";

const Carousel = () => {
  return (
    <section>
      <MobileSwiper />
      <HorizontalSlider />
      <LinkButton />
    </section>
  );
};

export default Carousel;
