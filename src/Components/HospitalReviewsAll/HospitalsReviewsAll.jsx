import React from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination } from "antd";

import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";

import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import Iconstars from "../../assets/Svg/starIcon.svg";
import SingleStar from "../../assets/Svg/SingleStar.svg";
import likeReview from "../../assets/Svg/reviewLike.svg";
import newRed from "../../assets/Svg/newRed.svg";
import userIcon from "../../assets/Svg/userIcon.svg";
import userflag from "../../assets/Svg/userflag.svg";
import check from "../../assets/Svg/check.svg";
import likeIcon from "../../assets/Svg/likeIcon.svg";
import unlikeIcon from "../../assets/Svg/unlikeIcon.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import FavoriteHospitals from "../../assets/Images/FavoriteHospitals.png";

import "../HospitalReviewsAll/HospitalsReviewsAll.css";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";

const items = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        USD
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={USD}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        EUR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={EUO}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        GBP
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={POU}
      />
    ),
  },
];

const itemsFlag = [
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        AZ
      </span>
    ),
    key: "1",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={azFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        TR
      </span>
    ),
    key: "2",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={trFlag}
      />
    ),
  },
  {
    label: (
      <span
        style={{
          fontFamily: "Gilroy",
          fontSize: "16px",
          fontWeight: "600",
          color: "black",
          paddingLeft: "10px",
        }}
      >
        {" "}
        EN
      </span>
    ),
    key: "3",
    icon: (
      <img
        style={{ width: "30px", objectFit: "cover", marginLeft: "20px" }}
        src={absFlag}
      />
    ),
  },
];

const handleMenuClick = (e) => {
  console.log("click", e);
};

const handleMenuFlagClick = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const menuPropsFlag = {
  items: itemsFlag,
  onClick: handleMenuFlagClick,
};

const HospitalsReviewsAll = () => {
  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <Header/>

      <div className="container">
        <div style={{ borderBottom: "1px solid #E7E7E7", padding: "20px 0" }}>
          <Breadcrumb
            separator={
              <span
                style={{
                  color: "#5282FF",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                {">"}
              </span>
            }
            items={[
              {
                title: "Главная",
                href: "",
              },
              {
                title: "Клиники",
                href: "",
              },

              {
                title: "Турция",
              },
              {
                title: "Результаты поиска",
              },
            ]}
          />
        </div>
        <div className={"featured-hospital"}>
          <div className={"featured-hospital-inner"}>
            <div className="HospitalReviewsDisplayGrid">
              <img
                className={"featured-img"}
                id="hospitalReviewImage"
                src={FavoriteHospitals}
              />
              <img id="hospitalReviewLike" src={likeReview} />
              <img id="hospitalNewRed" src={newRed} />
            </div>
            <div className={"featured-body"}>
              <div style={{ paddingTop: "20px", marginRight: "auto" }}>
                <img src={Iconstars} />
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "33px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  LuviMed
                </p>
                <p
                  className={"featured-location"}
                >
                  <EnvironmentOutlined
                    style={{ marginRight: "6px", color: "#FFF" }}
                  />
                  Бейоглу, Стамбул
                </p>
                <div className={"featured-btns"}>
                  <Button
                    style={{
                      backgroundColor: "#FFF",
                      borderRadius: "5px",
                      color: "#000",
                      height: "44px",
                      width: "175px",
                      fontSize: "18px",
                      marginRight: "15px",
                      marginTop: "10px",
                    }}
                    type="primary"
                  >
                    Написать отзыв
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#FFC224",
                      borderRadius: "5px",
                      color: "#000",
                      width: "200px",
                      height: "44px",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                    type="primary"
                  >
                    Показать на карте
                  </Button>
                </div>
              </div>
              <div
                className={"rating-wrapper"}
              >
                <div
                  className={"rating-inner"}
                >
                  <div
                    className={"rating-nums"}
                  >
                <span
                  className={"rating-nums-lg"}
                >
                  3
                </span>
                    <img className="singleStarIcon" src={SingleStar} />
                    <span className={"rating-nums-slash"}
                    >
                  /
                </span>

                    <span className={"rating-nums-sm"}
                    >
                  5
                </span>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        style={{ width: "83px", height: "13px" }}
                        src={Iconstars}
                      />
                    </div>
                    <p className={"ratings-text"}>
                      112MED <br /> оценил качество
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"featured-btns-mobile"}>
            <Button
              className={"button-1"}

              type="primary"
            >
              Написать отзыв
            </Button>
            <Button
              className={"button-2"}
              type="primary"
            >
              Показать на карте
            </Button>
          </div>
        </div>
        <div
          style={{ marginTop: "40px" }}
          className="buttonsNav"
        >
          <Button
            className={"doc-nav-btn"}
            type="primary"
          >
            Наши рекомендации
          </Button>
          <Button
            className={"doc-nav-btn"}
            type="primary"
          >
            Самая низкая цена в начале
          </Button>
          <Button
            className={"doc-nav-btn doc-nav-btn-active"}
            type="primary"
          >
            Количество звезд и цена
          </Button>
          <Button
            className={"doc-nav-btn"}
            type="primary"
          >
            Оценка + кол-во отзывов
          </Button>
        </div>

        <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img src={userIcon} />
              <img className="userFlag" src={userflag} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <div>
                <p className={'reviews-name'}>
                  Надежда Р.
                </p>
                <img
                  style={{ width: "67px", height: "11px" }}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
                style={{ paddingTop: "5px", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"}>
                Травмотология
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className={'reviews-rating'}>Великолепно </p>
              <div
                style={{
                  backgroundColor: "#FFC224",
                  borderRadius: "3.52262px",
                  color: "#000",
                  textAlign: "center",
                  width: "39.92px",
                  height: "30.53px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                9.9
              </div>
            </div>
          </div>
          <p className={"reviews-body-title"} style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p className={"reviews-body-desc"} style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              29 июля - 2022 г.
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="likeIcon" src={likeIcon} />
              полезно
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              Бесполезно
            </p>
          </div>
        </div>
        <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img src={userIcon} />
              <img className="userFlag" src={userflag} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <div>
                <p className={'reviews-name'}>
                  Надежда Р.
                </p>
                <img
                  style={{ width: "67px", height: "11px" }}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
                style={{ paddingTop: "5px", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"}>
                Травмотология
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className={'reviews-rating'}>Великолепно </p>
              <div
                style={{
                  backgroundColor: "#FFC224",
                  borderRadius: "3.52262px",
                  color: "#000",
                  textAlign: "center",
                  width: "39.92px",
                  height: "30.53px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                9.9
              </div>
            </div>
          </div>
          <p className={"reviews-body-title"} style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p className={"reviews-body-desc"} style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              29 июля - 2022 г.
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="likeIcon" src={likeIcon} />
              полезно
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              Бесполезно
            </p>
          </div>
        </div>
        <div className={"hospital-reviews-card"}>
          <div style={{ display: "flex" }}>
            <div className="userIconOrFlag">
              <img src={userIcon} />
              <img className="userFlag" src={userflag} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "5px",
                marginRight: "auto",
              }}
            >
              <div>
                <p className={'reviews-name'}>
                  Надежда Р.
                </p>
                <img
                  style={{ width: "67px", height: "11px" }}
                  src={Iconstars}
                />
              </div>
              <img
                className="checkIcon"
                style={{ paddingTop: "5px", marginRight: "8px" }}
                src={check}
              />
              <p className={"reviews-category"}>
                Травмотология
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p className={'reviews-rating'}>Великолепно </p>
              <div
                style={{
                  backgroundColor: "#FFC224",
                  borderRadius: "3.52262px",
                  color: "#000",
                  textAlign: "center",
                  width: "39.92px",
                  height: "30.53px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                9.9
              </div>
            </div>
          </div>
          <p className={"reviews-body-title"} style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p className={"reviews-body-desc"} style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div className={"reviews-reacts"}>
            <p style={{ color: "#BCBCBC", marginRight: "auto" }}>
              29 июля - 2022 г.
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="likeIcon" src={likeIcon} />
              полезно
            </p>
            <p style={{ color: "#2A353D", margin: "0px" }}>
              <img className="unlikeIcon" src={unlikeIcon} />
              Бесполезно
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "25px",
          paddingBottom: "50px",
        }}
      >
        <Pagination defaultCurrent={1} total={50} />
      </div>

      <Footer/>
    </div>
  );
};

export default HospitalsReviewsAll;
