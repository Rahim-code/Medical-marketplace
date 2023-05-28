import React from 'react';
import Carousel from "react-elastic-carousel";

const Categories = () => {
  const breakPoints = [
    { width: 0, itemsToShow: 2 },
    { width: 500, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1024, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="hospital-detail__categories">
      <h4 className="categories__title">Направления - LuviMed</h4>
      <Carousel breakPoints={breakPoints}>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn"}>Гинекология</button>
          <button className={"categories__carousel-item-btn btn-first"}>Офтальмология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
        <div className={"categories__carousel-item"}>
          <button className={"categories__carousel-item-btn btn-left"}>Стоматология</button>
          <button className={"categories__carousel-item-btn"}>Репродуктология</button>
        </div>
      </Carousel>
    </div>
  );
};

export default Categories;
