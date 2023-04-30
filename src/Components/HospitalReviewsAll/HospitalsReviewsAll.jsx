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
        <div
          style={{
            backgroundColor: "#5282FF",
            border: "1px solid #FFF",
            borderRadius: "15px",
            display: "flex",
            gap: "20px",
            padding: "20px 50px 20px 20px",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div className="HospitalReviewsDisplayGrid">
            <img
              style={{
                height: "210px",
                width: "299px",
                borderRadius: "7px",
                objectFit: "cover",
              }}
              id="hospitalReviewImage"
              src={FavoriteHospitals}
            />
            <img id="hospitalReviewLike" src={likeReview} />
            <img id="hospitalNewRed" src={newRed} />
          </div>
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
              style={{
                color: "#FFF",
                fontSize: "14px",
                marginBottom: "30px",
              }}
            >
              <EnvironmentOutlined
                style={{ marginRight: "6px", color: "#FFF" }}
              />
              Бейоглу, Стамбул
            </p>
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
          <div
            style={{
              backgroundColor: "#FCFCFC",
              borderRadius: "10px",
              width: "165px",
              height: "165px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#5282FF",
                borderRadius: "5px",
                width: "143px",
                height: "82px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{ fontSize: "75px", color: "#FFF", fontWeight: "700" }}
                >
                  3
                </span>
                <img className="singleStarIcon" src={SingleStar} />
                <span
                  style={{ fontSize: "35px", color: "#FFF", fontWeight: "700" }}
                >
                  /
                </span>

                <span
                  style={{ fontSize: "35px", color: "#FFF", fontWeight: "700" }}
                >
                  5
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{ width: "83px", height: "13px" }}
                  src={Iconstars}
                />
              </div>
              <p
                style={{
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                112MED <br /> оценил качество
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "979px", marginTop: "40px" }}
          className="buttonsNav"
        >
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
        <div
          style={{
            backgroundColor: "#FFF",
            border: "1px solid #FFF",
            borderRadius: "15px",
            width: "100%",
            marginTop: "20px",
            padding: "20px",
          }}
        >
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
                <p
                  style={{
                    color: "#0032A0",
                    fontSize: "19px",
                    marginBottom: "0px",
                  }}
                >
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
              <p style={{ fontSize: "14px", color: "#BCBCBC" }}>
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
              <p style={{ color: "#5F5F5F", fontSize: "16px" }}>Великолепно </p>
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
          <p style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div style={{ display: "flex", gap: "25px" }}>
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
        <div
          style={{
            backgroundColor: "#FFF",
            border: "1px solid #FFF",
            borderRadius: "15px",
            width: "100%",
            marginTop: "20px",
            padding: "20px",
          }}
        >
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
                <p
                  style={{
                    color: "#0032A0",
                    fontSize: "19px",
                    marginBottom: "0px",
                  }}
                >
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
              <p style={{ fontSize: "14px", color: "#BCBCBC" }}>
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
              <p style={{ color: "#5F5F5F", fontSize: "16px" }}>Великолепно </p>
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
          <p style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div style={{ display: "flex", gap: "25px" }}>
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
        <div
          style={{
            backgroundColor: "#FFF",
            border: "1px solid #FFF",
            borderRadius: "15px",
            width: "100%",
            marginTop: "20px",
            padding: "20px",
          }}
        >
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
                <p
                  style={{
                    color: "#0032A0",
                    fontSize: "19px",
                    marginBottom: "0px",
                  }}
                >
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
              <p style={{ fontSize: "14px", color: "#BCBCBC" }}>
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
              <p style={{ color: "#5F5F5F", fontSize: "16px" }}>Великолепно </p>
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
          <p style={{ marginBottom: "5px" }}>Oтлично! Bсем Cоветую</p>
          <p style={{ marginTop: "5px" }}>
            “Great location with montain view. Helpful and responsive owners.
            Well equipped and nicely designed cottage / challenge. <br />{" "}
            Playground for kids outside as well as toys inside...”
          </p>
          <div style={{ display: "flex", gap: "25px" }}>
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
    </div>
  );
};

export default HospitalsReviewsAll;
