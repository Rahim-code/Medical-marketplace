import React from 'react';
import {Button} from "antd";
import Carousel from "react-elastic-carousel";
import tooth from "../../../assets/Svg/doctor-search/tooth.svg"
import surgery from "../../../assets/Svg/doctor-search/plastic-surgery.svg"
import eye from "../../../assets/Svg/doctor-search/eye.svg"
import boyrek from "../../../assets/Svg/doctor-search/boyrek.svg"
import "./DoctorSearch.css"

const DoctorSearch = () => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
    <section className="top-clinic">
      <div className={"container"}>
        <div className="top-clinic__header">
          <h3 className="top-clinic__header-title">Поиск по врачам</h3>
          <div className="top-clinic__header-btns">
            <div className="doctor-search__header-subtitle">
              Выберите себе лучшего врача и бронируйте услуги легко
            </div>
            <Button className="top-clinic__header-left d-none" type={"primary"}>Посмотреть врачей </Button>
          </div>
        </div>
        <div className="top-clinic__carousel">
          <Carousel breakPoints={breakPoints}>
            <div className="doctor-search_item">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>стоматология</p>
            </div>
            <div className="doctor-search_item">
              <img src={surgery} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>Пластическая
                Хирургия </p>
            </div>
            <div className="doctor-search_item">
              <img src={eye} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
            <div className="doctor-search_item">
              <img src={boyrek} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
            <div className="doctor-search_item">
              <img src={tooth} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>стоматология</p>
            </div>
            <div className="doctor-search_item">
              <img src={surgery} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>Пластическая
                Хирургия </p>
            </div>
            <div className="doctor-search_item">
              <img src={eye} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
            <div className="doctor-search_item">
              <img src={boyrek} alt="tooth"/>
              <p className={"doctor-search_item-desc"}>офтальмология</p>
            </div>
          </Carousel>
        </div>
        <div className="top-clinic__mobile-items">
          <div className="doctor-search_item">
            <img src={tooth} alt="tooth"/>
            <p className={"doctor-search_item-desc"}>стоматология</p>
          </div>
          <div className="doctor-search_item">
            <img src={surgery} alt="tooth"/>
            <p className={"doctor-search_item-desc"}>Пластическая
              Хирургия </p>
          </div>
          <div className="doctor-search_item">
            <img src={eye} alt="tooth"/>
            <p className={"doctor-search_item-desc"}>офтальмология</p>
          </div>
          <div className="doctor-search_item">
            <img src={boyrek} alt="tooth"/>
            <p className={"doctor-search_item-desc"}>офтальмология</p>
          </div>
        </div>
        <div className={"doctor-search-footer"}>
          <Button className="top-clinic__header-left d-mobile-block" type={"primary"}>Посмотреть клиники </Button>
          <div className="doctor-search__desc">
            <p>Бронируйте сейчас, платите на месте</p>
            <p><span>Бесплатная</span> отмена бронирования</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorSearch;
