import React from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination } from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import peopleIcon from "../../assets/Svg/peopleIcon.svg";
import favDoctors from "../../assets/Svg/favDoctors.svg";
import favHospital from "../../assets/Svg/favHospital.svg";
import messageDoctor from "../../assets/Svg/messageDoc.svg";
import messageHospital from "../../assets/Svg/messageHos.svg";
import help112 from "../../assets/Svg/ambulans.svg";
import likeReview from "../../assets/Svg/reviewLike.svg";
import Iconstars from "../../assets/Svg/starIcon.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import Hospitals from "../../assets/Images/Hospitals.png";

import { ArrowRightOutlined } from "@ant-design/icons";

import "../ReviewHospitals/ReviewHospitals.css";
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

const ReviewHospitals = () => {
  return (
    <>
     <Header/>

      <div style={{ paddingTop: "30px" }} className="container">
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
                {" "}
                {">"}{" "}
              </span>
            }
            items={[
              {
                title: "Home",
                href: "",
              },
              {
                title: "Profile",
              },
            ]}
          />
        </div>
      </div>
      <div className="container">
        <div className="displayGridReviewDr">
          <div style={{ height: "320px" }} className="menuNav">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={peopleIcon} />
                Личная информация
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "20px" }} src={favDoctors} />
                Мои любимые врачи
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "20px" }} src={favHospital} />
                Мои любимые больницы
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={messageDoctor} />
                Мои отзывы о врачах
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={messageHospital} />
                Мой обзор больниц
              </li>
              <li
                style={{
                  listStyle: "none",
                  padding: "10px 20px",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  color: "#2A353D !important",
                }}
              >
                <img style={{ paddingRight: "27px" }} src={help112} />
                Помощь
              </li>
            </ul>
          </div>

          <div className="menuRight">
            <div className="buttonsNav">
              <Button
                className={"doc-nav-btn doc-nav-btn-active"}
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
                className={"doc-nav-btn"}
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

            <div>
              <div className="cardHospitals">
                <div className="card-head display_grid-hospital">
                  <img style={{height:"166px"}} id="hospitalImage" src={Hospitals} />
                  <img id="likeImageHospitals" src={likeReview} />
                </div>
                <div
                  className="card-body"
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between",alignItems:"flex-start",paddingTop:"10px" }}
                  >
                    <img src={Iconstars} />
                    <p
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",
                        width: "29.16px",
                        height: "21.53px",
                        borderRadius: "2.5px",
                        textAlign: "center",
                        margin:"0px"
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <div>
                    <p className={"card-title"}>
                      Oтлично! Bсем Cоветую
                    </p>
                    <p className={"card-title"}>
                      “Great location with montain view. Helpful and <br/> responsive
                      owners. Well equipped and nicely designed cottage /
                      challenge. Playground for kids outside as well as toys <br/>
                      inside...”
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span style={{ color: "#5282FF", fontSize: "11.15px" }}>
                        American Hospital
                      </span>
                    </p>
                    <p style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cardHospitals">
                <div className="card-head display_grid-hospital">
                  <img style={{height:"166px"}}  id="hospitalImage" src={Hospitals} />
                  <img id="likeImageHospitals" src={likeReview} />
                </div>
                <div className="card-body">
                  <div
                    style={{ display: "flex", justifyContent: "space-between",alignItems:"flex-start",paddingTop:"10px" }}
                  >
                    <img src={Iconstars} />
                    <p
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",
                        width: "29.16px",
                        height: "21.53px",
                        borderRadius: "2.5px",
                        textAlign: "center",
                        margin:"0px"
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <div>
                    <p className={"card-title"}>
                      Oтлично! Bсем Cоветую
                    </p>
                    <p className={"card-text"}>
                      “Great location with montain view. Helpful and <br/> responsive
                      owners. Well equipped and nicely designed cottage /
                      challenge. Playground for kids outside as well as toys <br/>
                      inside...”
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span style={{ color: "#5282FF", fontSize: "11.15px" }}>
                        American Hospital
                      </span>
                    </p>
                    <p style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cardHospitals">
                <div className="card-head display_grid-hospital">
                  <img style={{height:"166px"}}  id="hospitalImage" src={Hospitals} />
                  <img id="likeImageHospitals" src={likeReview} />
                </div>
                <div className="card-body">
                  <div
                    style={{ display: "flex", justifyContent: "space-between",alignItems:"flex-start",paddingTop:"10px" }}
                  >
                    <img src={Iconstars} />
                    <p
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",
                        width: "29.16px",
                        height: "21.53px",
                        borderRadius: "2.5px",
                        textAlign: "center",
                        margin:"0px"
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <div>
                    <p className={"card-title"}>
                      Oтлично! Bсем Cоветую
                    </p>
                    <p className={"card-text"}>
                     “Great location with montain view. Helpful and <br/> responsive
                      owners. Well equipped and nicely designed cottage /
                      challenge. Playground for kids outside as well as toys <br/>
                      inside...”
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span style={{ color: "#5282FF", fontSize: "11.15px" }}>
                        American Hospital
                      </span>
                    </p>
                    <p style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cardHospitals">
                <div className="card-head display_grid-hospital">
                  <img style={{height:"166px"}}  id="hospitalImage" src={Hospitals} />
                  <img id="likeImageHospitals" src={likeReview} />
                </div>
                <div
                  className="card-body"
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between",alignItems:"flex-start",paddingTop:"10px" }}
                  >
                    <img src={Iconstars} />
                    <p
                      style={{
                        backgroundColor: "#FFC224",
                        color: "#000",
                        width: "29.16px",
                        height: "21.53px",
                        borderRadius: "2.5px",
                        textAlign: "center",
                        margin:"0px"
                      }}
                    >
                      9,9
                    </p>
                  </div>
                  <div>
                    <p className={"card-title"}>
                      Oтлично! Bсем Cоветую
                    </p>
                    <p className={"card-text"}>
                      “Great location with montain view. Helpful and <br/> responsive
                      owners. Well equipped and nicely designed cottage /
                      challenge. Playground for kids outside as well as toys <br/>
                      inside...”
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ color: "#464646", fontSize: "11.15px" }}>
                      Review To{" "}
                      <span style={{ color: "#5282FF", fontSize: "11.15px" }}>
                        American Hospital
                      </span>
                    </p>
                    <p style={{ color: "#BCBCBC", fontSize: "12px" }}>
                      29 июля - 2022 г.
                    </p>
                  </div>
                </div>
              </div>
              <div className={'review-doctors-pagination'}>
                <Pagination
                  showSizeChanger={false}
                  defaultCurrent={1}
                  total={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default ReviewHospitals;
