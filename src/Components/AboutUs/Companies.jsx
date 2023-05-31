import React from 'react';
import avrasiyaHospitalLogo from "../../assets/Svg/about-us/avrasiya-hospital.svg"
import livHospitalLogo from "../../assets/Svg/about-us/liv-hospital.svg"
import medipolHospitalLogo from "../../assets/Svg/about-us/medipol-logo.svg"
import anadoluHospitalLogo from "../../assets/Svg/about-us/anadolu.svg"

const Companies = () => {
  return (
    <section className={"container"}>
      <div className="aboutUs-companies">
        <div className="aboutUs-companies__header">
          <h4 className="aboutUs-companies__header-title">Мы сотрудничаем с профессиональными больницами</h4>
          <p className="aboutUs-companies__header-subtitle">Lorem ipsum dolor sit amet consectetur dolor sit amet.</p>
        </div>
        <div className="aboutUs-companies__items">
          <div className="aboutUs-companies__item">
            <img src={avrasiyaHospitalLogo} alt=""/>
          </div>
          <div className="aboutUs-companies__item">
            <img src={livHospitalLogo} alt=""/>
          </div>
          <div className="aboutUs-companies__item">
            <img src={medipolHospitalLogo} alt=""/>
          </div>
        </div>
        <div className="aboutUs-companies__items">
        <div className="aboutUs-companies__item">
          <img src={anadoluHospitalLogo} alt=""/>
        </div>
        <div className="aboutUs-companies__item">
          <img src={medipolHospitalLogo} alt=""/>
        </div>
        <div className="aboutUs-companies__item">
          <img src={livHospitalLogo} alt=""/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
