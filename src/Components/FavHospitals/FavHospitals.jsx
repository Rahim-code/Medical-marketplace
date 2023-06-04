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
import Sponsored from "../../assets/Svg/sponsored.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import FavoriteHospitals from "../../assets/Images/FavoriteHospitals.png";

import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";

import "../FavHospitals/FavHospitals.css";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import FilterButtons from "../FilterButtons/index.js";

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

const FavHospitals = () => {
  return (
    <>
      <Header/>

      <div style={{ paddingTop: "30px" }} className="container">
        <div className={'breadcrumbs'}>
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
            <FilterButtons/>
            <div>
              <div className="cardReviewDoctors cardReviewDoctors-active">
                <div className="display_grid img-wrapper">
                  <img
                    className={"cardFavHospitals-img"}
                    id="hospitalsImage"
                    src={FavoriteHospitals}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body card-content"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "10px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0px",
                        color: "white",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px", color: "white" }}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "15px",
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px", color: "white" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px", color: "#ffff" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ color: "#FFFF", textAlign: "right" }}
                      >
                        <a style={{ color: "#FFFF" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ color: "#FFFF", margin: "0px" }}>
                        Соотношение цена/качество
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        width: "384px",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "black",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-content-mobile"
                >
                  <div
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", color: "white" }}
                      />
                      Бейоглу, Стамбул
                    </p>
                    <h3
                      style={{
                        margin: "0px",
                        color: "white",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                      <img src={Iconstars} />
                      <p style={{ margin: "0px", color: "white" }}>Hеплохо</p>
                      <p
                        style={{ color: "#FFFF", textAlign: "right" }}
                      >
                        <a style={{ color: "#FFFF" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardReviewDoctors">
                <div className="display_grid img-wrapper">
                  <img
                    className={"cardFavHospitals-img"}
                    id="hospitalsImage"
                    src={FavoriteHospitals}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body card-content"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "10px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px"}}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "15px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ margin: "0px" }}>
                        Соотношение цена/качество
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        width: "384px",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "black",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-content-mobile"
                >
                  <div
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", }}
                      />
                      Бейоглу, Стамбул
                    </p>
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                      <img src={Iconstars} />
                      <p style={{ margin: "0px", }}>Hеплохо</p>
                      <p
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardReviewDoctors">
                <div className="display_grid img-wrapper">
                  <img
                    className={"cardFavHospitals-img"}
                    id="hospitalsImage"
                    src={FavoriteHospitals}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body card-content"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "10px",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px"}}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "15px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ margin: "0px" }}>
                        Соотношение цена/качество
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingLeft: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        width: "384px",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#FFFF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "black",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-content-mobile"
                >
                  <div
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", }}
                      />
                      Бейоглу, Стамбул
                    </p>
                    <h3
                      style={{
                        margin: "0px",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
                          width: "29.16px",
                          height: "21.53px",
                          borderRadius: "2.5px",
                          textAlign: "center",
                          margin: "0px",
                        }}
                      >
                        6.0
                      </p>
                      <img src={Iconstars} />
                      <p style={{ margin: "0px", }}>Hеплохо</p>
                      <p
                        style={{ textAlign: "right" }}
                      >
                        <a style={{ color: "#000" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          textAlign: "center",
                          margin: "8px",
                          paddingLeft: "12px",
                        }}
                      >
                        При бронировании <br /> на сайте - 40%
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#E9ECFF",
                        borderRadius: "5px",
                        width: "143px",
                        height: "43px",
                        paddingLeft: "12px",
                      }}
                    >
                      <p style={{ fontSize: "12px", textAlign: "center" }}>
                        B клинике 100%
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFF",
                        borderRadius: "5px",
                        border: "1px solid #EFEFEF",
                        marginTop: "10px",
                      }}
                    >
                      <p
                        style={{
                          //   textAlign: "justify",
                          fontSize: "12px",
                          margin: "10px",
                          lineHeight: "18px",
                        }}
                      >
                        Дешевле, чем в клинике <br /> Бронируйте сейчас по
                        фиксированной цене, платитe потом Без предоплаты
                        БЕСПЛАТНАЯ отмена бронирования. Клиника подписала
                        договор и обязана соблюдать условия
                      </p>
                    </div>
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

export default FavHospitals;
