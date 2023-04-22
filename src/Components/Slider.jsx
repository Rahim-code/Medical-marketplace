import React from "react";
import Carousel from "react-elastic-carousel";
import "../Slider.css";

const Slider = () => {
    const breakPoints = [
        {width:500,itemsShow:1},
        {width:768,itemsShow:2},
        {width:1200,itemsShow:3},
        {width:1500,itemsShow:4},



    ]
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <div className="cardSlider">1</div>
        <div className="cardSlider">2</div>
        <div className="cardSlider">3</div>
        <div className="cardSlider">4</div>
      </Carousel>
      ;
    </>
  );
};

export default Slider;
