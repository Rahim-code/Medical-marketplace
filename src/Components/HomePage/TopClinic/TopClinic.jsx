import React from 'react';
import {Button} from "antd";
import Carousel from "react-elastic-carousel";
import heart from "../../../assets/Svg/heart-sm.svg"
import heartOutlined from "../../../assets/Svg/heart-sm-outlined.svg"
import clinic1 from "../../../assets/Images/FavoriteHospitals.png"
import clinic2 from "../../../assets/Images/FavoriteHospitals-2.png"
import clinic3 from "../../../assets/Images/FavoriteHospitals-3.png"
import location from "../../../assets/Svg/Location.svg"
import stars from "../../../assets/Svg/starIcon.svg"
import "./TopClinic.css"

const TopClinic = () => {
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
          <h3 className="top-clinic__header-title">Клиники, <br/>
            которые нравятся пациентам</h3>
          <div className="top-clinic__header-btns">
            <div className="top-clinic__header-right-btns">
              <Button className={"right-btn-primary"} type={"primary"}>топ 30</Button>
              <Button className={"right-btn-link"} type={"link"}><span>&#x2022;</span>топ 10</Button>
              <Button className={"right-btn-link"} type={"link"}><span>&#x2022;</span>топ 5</Button>
            </div>
            <Button className="top-clinic__header-left d-none" type={"primary"}>Посмотреть клиники </Button>
          </div>
        </div>
        <div className="top-clinic__carousel">
          <Carousel breakPoints={breakPoints}>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heart} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic2} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic3} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heart} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic2} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-num">50%</div>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
            <div className="top-clinic_item">
              <div className="top-clinic__item-top">
                <img src={clinic3} alt="clinic" className="top-clinic__item-img"/>
                <div className="top-clinic__item-heart">
                  <img src={heartOutlined} alt="heart"/>
                </div>
              </div>
              <div className="clinic__item-footer">
                <div className="clinic__item-footer-subtitle">
                  <img src={location} alt=""/>
                  <span>Nişantaşı, İstanbul</span>
                </div>
                <h3 className="clinic__item-footer-title">Больница Американ</h3>
                <div className="clinic__item-footer-stars">
                  <span>8.4</span>
                  <img src={stars} alt=""/>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      <div className="top-clinic__mobile-items">
        <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-num">50%</div>
            <div className="top-clinic__item-heart">
              <img src={heart} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic2} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-num">50%</div>
            <div className="top-clinic__item-heart">
              <img src={heartOutlined} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic1} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-heart">
              <img src={heartOutlined} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        <div className="top-clinic_item">
          <div className="top-clinic__item-top">
            <img src={clinic3} alt="clinic" className="top-clinic__item-img"/>
            <div className="top-clinic__item-heart">
              <img src={heartOutlined} alt="heart"/>
            </div>
          </div>
          <div className="clinic__item-footer">
            <div className="clinic__item-footer-subtitle">
              <img src={location} alt=""/>
              <span>Nişantaşı, İstanbul</span>
            </div>
            <h3 className="clinic__item-footer-title">Больница Американ</h3>
            <div className="clinic__item-footer-stars">
              <span>8.4</span>
              <img src={stars} alt=""/>
            </div>
          </div>
        </div>
        <Button className="top-clinic__header-left d-mobile-block" type={"primary"}>Посмотреть клиники </Button>
      </div>
    </div>
      </section>
  );
};

export default TopClinic;
