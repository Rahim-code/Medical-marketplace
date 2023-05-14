import React from "react";
import Cards from "./Cards/Cards";
import Carousel from "react-elastic-carousel";
import "../Slider.css";
import BakuPic from "../../src/assets/Images/BakuPic.png";
import MoskovaPic from "../../src/assets/Images/MoskovaPic.png";

const Slider = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
  ];
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <Cards img={BakuPic} />
        <Cards img={BakuPic} />
        <Cards img={MoskovaPic} />
        <Cards img={BakuPic} />
        <Cards img={BakuPic} />
        <Cards img={MoskovaPic} />
      </Carousel>
    </>
  );
};

export default Slider;
