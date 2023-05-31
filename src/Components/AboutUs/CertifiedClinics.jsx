import React from 'react';
import Carousel from "react-elastic-carousel";
import isoLogo from "../../assets/Images/certified-clinics/iso.png"
import isapsLogo from "../../assets/Images/certified-clinics/isaps.png"
import adaLogo from "../../assets/Images/certified-clinics/ada.png"
import dkgLogo from "../../assets/Images/certified-clinics/dkg.png"
import efqmLogo from "../../assets/Images/certified-clinics/efqm.png"

const CertifiedClinics = () => {
  const breakPoints = [
    {width: 500, itemsToShow: 3},
    {width: 768, itemsToShow: 5},
    {width: 1024, itemsToShow: 5},
    {width: 1200, itemsToShow: 5},
    {width: 1500, itemsToShow: 5},
  ];
  return (
    <section className={"container"}>
      <div className="certified">
        <div className="certified__header">
          <h4 className="certified__header-title">Только сертифицированные клиники</h4>
          <p className="certified__header-subtitle">Lorem ipsum dolor sit amet consectetur dolor sit amet.</p>
        </div>
        <div className="certified__items">
          <Carousel breakPoints={breakPoints}>
            <div className="certified__item">
              <img src={isoLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={isapsLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={adaLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={dkgLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={efqmLogo} alt=""/>
            </div>
            <div className="certified__item">
              <img src={efqmLogo} alt=""/>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertifiedClinics;
