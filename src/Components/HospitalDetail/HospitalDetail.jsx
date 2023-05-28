import React from 'react';
import './HospitalDetail.css'
import Header from "../Header";
import Footer from "../Footer/index.js";
import BreadCrumbs from "./BreadCrumbs.jsx";
import {clinicButtons, infoButtons} from "./data.js";
import Detail from "./Detail.jsx";
import infoIcon from "../../assets/Svg/ambulans.svg"
import InfoContent from "./InfoContent.jsx";
import Categories from "./Categories.jsx";
import Reviews from "./Reviews.jsx";
import Questions from "./Questions.jsx";
import QualityRating from "./QualityRating.jsx";
import GetService from "./GetService.jsx";
import PaySection from "./PaySection.jsx";


const HospitalDetail = () => {
  return (
    <div style={{background: "#f6f6f6"}}>
      <Header/>
      {/*breadcrumbs*/}
      <BreadCrumbs/>
      <div className={'container'}>
        <div className={'detail__info-btns'}>
          {infoButtons.map(item => (
            <button key={item.id} className={'detail__info-btn'}>{item.label}</button>
          ))}
        </div>
        <Detail/>
        <div className={'detail__clinic-btns'}>
          {clinicButtons.map(item => (
            <button key={item.id} className={'detail__clinic-btn'}>
              <img src={infoIcon} alt=""/>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <InfoContent/>
      <div className="container">
        <div className={"hospital-detail__hint"}>
          <h4 className={"hospital-detail__hint-title"}>Подсказка: бронируйте с возможностью изенить свои планы.</h4>
          <p className={"hospital-detail__hint-subtitle"}>Поскольку до выбранных дат еще много времени, выберите клинику
            либо врача с бесплатной отменой бронирования. Вы сохраните свободу действий, если ваши планы вдруг
            изменятся!</p>
        </div>
      </div>
      <div className={"container"}>
        <Categories/>
      </div>
      <Reviews/>
      <Questions/>
      <QualityRating/>
      <GetService/>
      <PaySection/>
      <Footer/>
    </div>
  );
};

export default HospitalDetail;
