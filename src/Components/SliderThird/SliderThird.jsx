import React from "react";
import Carousel from "react-elastic-carousel";
import CardThird from "../CardThird/CardThird";

const SliderThird = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 4 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
    <>
      <Carousel breakPoints={breakPoints}>
       <CardThird/>
       <CardThird/>
       <CardThird/>
       <CardThird/>
       <CardThird/>
       <CardThird/>
      </Carousel>
    </>
  );
};

export default SliderThird;
