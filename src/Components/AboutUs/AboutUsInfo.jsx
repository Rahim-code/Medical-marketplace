import React from 'react';
import mainLogo from "../../assets/Svg/main-logo-sm.svg"
import secondLogo from "../../assets/Images/Vector.svg"
import {Button} from "antd";

const AboutUsInfo = () => {
  return (
    <section className={"container"}>
      <div className="aboutUs-info">
        <div className="aboutUs-info__img-wrapper">
          <div className="aboutUs-info__img"></div>
          <div className="aboutUs-info__img-header">
            <div>
              <img className="aboutUs-info__img-header-logo" src={secondLogo} alt=""/>
            </div>
            <div>
              <h4 className="aboutUs-info__img-header-title">112 Med</h4>
              <p className="aboutUs-info__img-header-subtitle">Медицинский маркетплейс</p>
            </div>
          </div>
        </div>
        <div className="aboutUs-info__content">
          <div className="aboutUs-info__content-header">
            <div className="aboutUs__content-header-logo">
              <img src={mainLogo} alt=""/>
            </div>
            <div className="aboutUs__content-header-inner">
              <h4 className="aboutUs__content-header-title">112 Med</h4>
              <p className="aboutUs__content-header-subtitle">Медицинский маркетплейс</p>
            </div>
          </div>
          <div className="aboutUs-info__content-text">
            Компания 112 med, основанная в 2023 году в Москве, выросла из небольшого голландского стартапа в одну из ведущих мировых цифровых туристических компаний. Миссия компании 11med, входящей в состав Booking Holdings Inc. (NASDAQ: BKNG), состоит в том, чтобы сделать мир более доступным для всех.
            By investing in technology that takes the friction out of travel, Booking.com seamlessly connects millions of
          </div>
          <Button className="aboutUs-info__btn">Show more</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsInfo;
