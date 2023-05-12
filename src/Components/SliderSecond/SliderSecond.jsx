import React from "react";
import CardsSecond from "../CardsSecond/CardsSecond";
import Carousel from "react-elastic-carousel";

const SliderSecond = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 3.5 },
    { width: 768, itemsToShow: 3.5 },
    { width: 1200, itemsToShow: 3.5 },
    { width: 1500, itemsToShow: 3.5 },
  ];
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <CardsSecond p="Нейрохирургия" p2="-40%" />
        <CardsSecond p="Травмотология" p2="-40%" />
        <CardsSecond p="Хирургия Снижен Веса" p2="-40%" />
        <CardsSecond p="Хирургия Снижен Веса" p2="-40%" />
        <CardsSecond p="Хирургия Снижен Веса" p2="-40%" />
      </Carousel>
    </>
  );
};

export default SliderSecond;
