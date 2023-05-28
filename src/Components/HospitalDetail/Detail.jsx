import React from 'react';
import {Button, Checkbox, Divider} from "antd";
import singleStar from "../../assets/Svg/singleStar.svg"
import location from "../../assets/Svg/Location.svg"
import heart from "../../assets/Svg/heart.svg"
import share from "../../assets/Svg/share.svg"
import dollar from "../../assets/Svg/Dollar.svg"
import detailImg1 from "../../assets/Images/hospital-detail/hospital-detail-1.jpg"
import detailImg2 from "../../assets/Images/hospital-detail/hospital-detail-2.jpg"
import detailImg3 from "../../assets/Images/hospital-detail/hospital-detail-3.jpg"
import arrowLeft from "../../assets/Svg/arrow-left.svg"
import arrowRight from "../../assets/Svg/arrow-right.svg"
import Carousel from "react-elastic-carousel";

const Detail = () => {
  return (
    <div className={'hospital-detail_content'}>
      <div className={'hospital-detail_content--search'}>
        <div className={'content__search'}>
          <p>Найти</p>
          <p>Место / название клиники / врач </p>
          <Divider style={{background: "#fff"}}/>
          <p className={'content__search-checkbox'}><Checkbox>Турция</Checkbox></p>
          <p className={'content__search-checkbox'}><Checkbox>Услуги</Checkbox></p>
          <Button block style={{margin: "1rem", width: "90%"}}>Найти</Button>
        </div>
        <div className={'content__location'}>
          <iframe
            style={{border: "none"}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17439.59682519633!2d49.97557041806164!3d40.39300414904405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063737e96e061%3A0x5b925e8db0b28d35!2sBaku%20Medical%20Plaza!5e0!3m2!1sen!2saz!4v1682591396345!5m2!1sen!2saz"
            width="100%"
            height="335"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Button type="primary" block style={{margin: "1rem 0 0", height: "3.8rem", backgroundColor: "#5282ff"}}>Показать
            на карте</Button>
        </div>
      </div>
      <div className={'hospital-detail_content--info'}>
        <div className={'content__info-header'}>
          <div className={'content__info-header-left'}>
            <p>
              Kлиника
              <img style={{marginLeft: "9px"}} src={singleStar} alt="singleStar"/>
              <img style={{marginLeft: "4px"}} src={singleStar} alt="singleStar"/>
              <img style={{marginLeft: "4px"}} src={singleStar} alt="singleStar"/>
            </p>
            <p>Трансфер от/до аэропорта</p>
            <Divider/>

            <h3>Luvimed</h3>
            <p style={{display: "flex", gap: "10px", alignItems: "center", color: "#5282ff"}}>
              <img src={location} alt="Бейоглу, Стамбул, Турция "/>
              Бейоглу, Стамбул, Турция </p>
            <p>Отличное расположение - <span style={{color: "#5282ff"}}>Проверить карту</span></p>
          </div>
          <div className={'content__info-header-right'}>
            <div className={'right__share'}>
              <img src={heart} alt=""/>
              <img className={'right__share--btn'} src={share} alt=""/>
              <Button style={{color:"#5282ff", borderColor:"#5282ff"}}>Забронировать клинику </Button>
            </div>
            <button className={'right__share--price-btn'}>
              <img src={dollar} alt=""/>
              Возвращаем разницу в цене
            </button>
          </div>
        </div>
        <div className={'hospital-detail_img-box'} >
          <div>
            <img src={detailImg1} alt=""/>
          </div>
          <div className={'hospital-detail_img-lg'}>
            <img src={detailImg3} alt=""/>
            <div className={'detail_img-lg--rating'}>
              <span>великолепно</span>
              <span className={'detail_img-lg--rating-num'}>9.5</span>
            </div>
            <div className={'detail_img-lg--desc'}>
              <p>“Great location with montain view. Helpful and responsive owners. Well equipped and nicely designed cottage / challenge. Playground for kids outside as well as toys inside...”</p>
              <button className={'img-lg-desc-btn'}>
                <img src={arrowLeft} alt=""/>
                <span>Radovan Yuliya</span>
                <span className={'img-lg-desc-num'}>9.0</span>
                <img src={arrowRight} alt=""/>
              </button>
            </div>
          </div>
          <div>
            <img src={detailImg2} alt=""/>
          </div>
          <div className={'hospital-detail_img-more'}>
            <img src={detailImg1} alt=""/>
<span className={'hospital-detail_img-more-text'}>+20 ФОТОГРАФИЙ</span>
          </div>
        </div>
        <Carousel className={'hospital-detail_img-slider'} >
          <img src={detailImg1} alt=""/>
          <img src={detailImg2} alt=""/>
          <img src={detailImg2} alt=""/>
        </Carousel>
      </div>
    </div>
  );
};

export default Detail;
