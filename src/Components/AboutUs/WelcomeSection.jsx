import React from 'react';
import logoBlue from "../../assets/Svg/logo-blue.svg"

const WelcomeSection = () => {
  return (
    <section className={"container"}>
      <div className={"welcome"}>
  <div className="welcome__content">
    <h3 className="welcome__content-title">Добро пожаловать <br className="br"/> на 112 MED</h3>
    <p className="welcome__content-subtitle">
      Мы стремимся, чтобы вы получили качественные, <br/>
      удобные и доступные медицинские услуги по всему миру!
    </p>
  </div>
  <div className="welcome__logo">
    <img src={logoBlue} alt=""/>
  </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
