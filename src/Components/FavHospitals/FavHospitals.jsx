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
      <header>
        <div id="bg">
          <div className="container container1">
            <div>
              <img src={Vector} />
            </div>
            <div className="mR">
              <h1 className="textMed">112 Med</h1>
              <p className="medMarket">Медицинский маркетплейс</p>
            </div>
            <div className="dropdownBefore">
              <ul className="ul" id="ulList">
                <li style={{ paddingBottom: "15px" }}>
                  <Dropdown menu={menuProps}>
                    <Button type="text">
                      <Space>
                        <img id="rubl" src={RUB} />
                        <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          RUB
                        </span>
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <Dropdown menu={menuPropsFlag}>
                    <Button type="text">
                      <Space>
                        <img id="flag" src={russianFlag} />
                        <span
                          style={{
                            fontFamily: "Gilroy",
                            fontSize: "17.5px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          RU
                        </span>
                      </Space>
                    </Button>
                  </Dropdown>
                </li>
                <li style={{ paddingBottom: "15px" }} className="dFlex">
                  <div className="question">
                    <img src={question} />
                  </div>
                  <div>
                    <p>связаться с нами </p>
                  </div>
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <img className="heart" src={heart} />
                </li>
                <li style={{ paddingBottom: "15px" }}>
                  <Button
                    className="button"
                    type="primary"
                    icon={<ArrowRightOutlined className="Arrow" />}
                  >
                    Bойти
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

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
                style={{
                  height: "36px",
                  color: "white",
                  backgroundColor: "#5282FF",
                  paddingLeft: "29px",
                  paddingRight: "29px",
                }}
                type="primary"
              >
                Наши рекомендации
              </Button>
              <Button
                style={{
                  backgroundColor: "#ECECEC",
                  color: "#000",
                  height: "36px",
                  paddingLeft: "29px",
                  paddingRight: "29px",
                }}
                type="primary"
              >
                Самая низкая цена в начале
              </Button>
              <Button
                style={{
                  backgroundColor: "#ECECEC",
                  color: "#000",
                  height: "36px",
                  paddingLeft: "29px",
                  paddingRight: "29px",
                }}
                type="primary"
              >
                Количество звезд и цена
              </Button>
              <Button
                style={{
                  backgroundColor: "#ECECEC",
                  color: "#000",
                  height: "36px",
                  paddingLeft: "29px",
                  paddingRight: "29px",
                }}
                type="primary"
              >
                Оценка + кол-во отзывов
              </Button>
            </div>

            <div>
              <div
                style={{ backgroundColor: "#5282FF", height: "260px" }}
                className="cardHospitals"
              >
                <div className="card-head display_grid">
                  <img
                    style={{ height: "230px", width: "230px" }}
                    id="doctorImage"
                    src={FavoriteHospitals}
                  />
                  <img id="sponsoredImage" src={Sponsored} />
                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body"
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
              </div>
              <div
                style={{ backgroundColor: "#FAFAFA", height: "260px" }}
                className="cardHospitals"
              >
                <div className="card-head display_grid">
                  <img
                    style={{ height: "230px", width: "230px" }}
                    id="doctorImage"
                    src={FavoriteHospitals}
                  />

                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body"
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
                        color: "#000000",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px", color: "#000" }}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#5282FF",
                          color: "white",
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
                          color: "#5282FF",
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px", color: "#5282FF" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px", color: "#000" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ color: "#FFFF", textAlign: "right" }}
                      >
                        <a style={{ color: "#5282FF" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ color: "#000", margin: "0px" }}>
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
                          backgroundColor: "#5282FF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "white",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FAFAFA", height: "260px" }}
                className="cardHospitals"
              >
                <div className="card-head display_grid">
                  <img
                    style={{ height: "230px", width: "230px" }}
                    id="doctorImage"
                    src={FavoriteHospitals}
                  />

                  <img id="likeImageFavHospitals" src={likeReview} />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "110px" }}
                  className="card-body"
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
                        color: "#000000",
                        paddingLeft: "15px",
                      }}
                    >
                      LuviMed
                    </h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <p style={{ margin: "0px", color: "#000" }}>Hеплохо</p>

                      <p
                        style={{
                          backgroundColor: "#5282FF",
                          color: "white",
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
                          color: "#5282FF",
                          fontSize: "14px",
                          margin: "0px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px", color: "#5282FF" }}
                        />
                        Бейоглу, Стамбул
                      </p>
                      <a href="#" style={{ margin: "0px", color: "#000" }}>
                        Показать на карте
                      </a>
                    </div>
                    <div>
                      <p
                        className="comment_hospitals"
                        style={{ color: "#FFFF", textAlign: "right" }}
                      >
                        <a style={{ color: "#5282FF" }} href="#">
                          45 отзыва
                        </a>
                      </p>
                      <p style={{ color: "#000", margin: "0px" }}>
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
                          backgroundColor: "#5282FF",
                          borderRadius: "5px",
                          width: "155px",
                          height: "40px",
                          color: "white",
                        }}
                        type="primary"
                      >
                        Посмотреть услуги
                      </Button>
                    </div>
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

      <footer>
        <div className="bgFooter">
          <div style={{ paddingTop: "100px" }} className="container">
            <div className="rowGrid">
              <div id="textFooterid" style={{ paddingLeft: "15px" }}>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "white",
                      fontSize: "33.25px",
                      fontWeight: "500",
                      lineHeight: "45px",
                    }}
                  >
                    112 Med
                  </li>
                  <li style={{ color: "white", fontSize: "18px" }}>
                    Медицинский <br />
                    маркетплейс
                  </li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "white",
                      fontWeight: "500px",
                      fontFamily: "Inter",
                      fontSize: "22px",
                      paddingBottom: "10px",
                    }}
                  >
                    Для пациентов
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    Врачи{" "}
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    Больницы
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    Услуги
                  </li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "white",
                      fontWeight: "500px",
                      fontFamily: "Inter",
                      fontSize: "22px",
                      paddingBottom: "10px",
                    }}
                  >
                    O Hас
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    Условия Эксплуатации
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    {" "}
                    Политика Oтзывов
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    О «112 мед».
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    FAQ
                  </li>
                </ul>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      color: "white",
                      fontWeight: "500px",
                      fontFamily: "Inter",
                      fontSize: "22px",
                      paddingBottom: "10px",
                    }}
                  >
                    Для партнеров
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    Добавить больницу
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    {" "}
                    добавить врача
                  </li>
                  <li
                    style={{
                      color: "#B6D0FF",
                      fontFamily: "Gilroy",
                      paddingBottom: "10px",
                    }}
                  >
                    Войти как партнер
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ padding: "100px 0" }} className="footerIcons">
              <div>
                <img style={{ width: "30.66px" }} src={facebook} />
              </div>
              <div>
                <img style={{ width: "36.66px" }} src={vk} />
              </div>
              <div>
                <img style={{ width: "30.66px" }} src={instagram} />
              </div>

              <div style={{ paddingLeft: "30px" }}>
                <Button
                  style={{
                    fontFamily: "Gilroy",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  className="pad"
                >
                  КОНТАКТ
                </Button>
              </div>
            </div>
          </div>
          <p
            className="white"
            style={{
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "15px",
              backgroundColor: "#2A52BA",
              margin: "0",
            }}
          >
            © All rights reserved 2023. 112 Med
          </p>
        </div>
      </footer>
    </>
  );
};

export default FavHospitals;
