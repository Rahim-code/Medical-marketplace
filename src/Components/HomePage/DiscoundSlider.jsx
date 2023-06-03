import React from 'react';
import Carousel from "react-elastic-carousel";
import group15 from "../../assets/Images/Group15.png";
import group16 from "../../assets/Images/Group16.png";
import group17 from "../../assets/Images/Group17.png";
const breakPoints = [
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 3 },
];
const DiscountSlider = () => {
  return (
    <div style={{ paddingTop: "10px" }} className="container">
      <Carousel breakPoints={breakPoints}>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group15} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group16} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group17} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group15} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group16} />
        </div>
        <div style={{marginRight:"10px"}}>
          <img style={{width:"100%", height:"100%"}} src={group17} />
        </div>
      </Carousel>
    </div>
  );
};

export default DiscountSlider;
