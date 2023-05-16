import React from "react";
import { Dropdown, Button, Space, Breadcrumb, Pagination, Input } from "antd";

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
import userIcon from "../../assets/Svg/userIcon.svg";
import userflag from "../../assets/Svg/userflag.svg";
import check from "../../assets/Svg/check.svg";
import likeIcon from "../../assets/Svg/likeIcon.svg";
import unlikeIcon from "../../assets/Svg/unlikeIcon.svg";
import experience from "../../assets/Svg/staj.svg";
import DrFB from "../../assets/Svg/DrFB.svg";
import DrVK from '../../assets/Svg/DrVK.svg';
import DrLn from "../../assets/Svg/DrLn.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import DrReviewAll from "../../assets/Images/DrRwAll.png";

import "../DoctorsReviewsAll/DoctorsReviewsAll.css";

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

const DoctorsReviewsAll = () => {
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
          className="doc-card"
        >
          <div className="doc-card-body-wrapper">
            <div className="doc-card-img-wrapper">
              <img
                className="doc-card-img"
                src={DrReviewAll}
              />
            </div>
            <div className="doc-card-body">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "10px",
                  height: "30px",
                }}
              >
                <div>
                  {" "}
                  <p
                    style={{
                      margin: "0 15px 0 0",
                      paddingTop: "0px !important",
                    }}
                  >
                    Главный врач
                  </p>
                </div>
                <div style={{ marginRight: "auto" }}>

                  <img src={Iconstars} />
                </div>
                <div className={"doc-card-ratings"}>
                  <p
                    style={{
                      margin: "0 !important",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Bеликолепно{" "}
                  </p>
                </div>
                <div className={"doc-card-ratings"}>
                  <p
                    style={{
                      backgroundColor: "#5282FF",
                      color: "white",
                      width: "30px",
                      height: "24.71px",
                      borderRadius: "4.41px",
                      margin: "0 0 0 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    9.0
                  </p>
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3
                    style={{
                      color: "#000",
                      fontSize: "24px !important",
                      margin: "0px",
                      paddingTop: "10px",
                    }}
                  >
                    Dr. Алина Леонидовна
                  </h3>
                </div>

                <p
                  style={{
                    color: "#5282FF",
                    fontSize: "14px",
                    margin: "0px",
                    paddingTop: "10px",
                    marginTop:"19px"
                  }}
                >
                  <EnvironmentOutlined
                    style={{ marginRight: "6px", color: "#5282FF" }}
                  />
                  Больница Американ
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "#000",
                        backgroundColor: "#F4F4F4",
                        border: "1px solid #EFEFEF",
                        borderRadius: "15px",
                        fontSize: "12px",
                        padding: "10px 10px",
                        width: "151px",
                        textAlign: "center",
                      }}
                    >
                      Сосудистая хирургия
                    </p>
                    <p
                      style={{
                        color: "#000",
                        backgroundColor: "#F4F4F4",
                        border: "1px solid #EFEFEF",
                        borderRadius: "15px",
                        fontSize: "12px",
                        padding: "10px 10px",
                        width: "124px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop:"19px"
                      }}
                    >
                      <img src={experience} />
                      20 лет опыта
                    </p>
                    <div className={"doc-card-btns"} style={{marginTop:"20px"}}>
                      <Button
                        style={{
                          color: "#FFF",
                          backgroundColor: "#5282FF",
                          borderRadius: "5.55728px",
                          width: "151.16px",
                          height: "48.9px",
                          marginRight: "15px",
                        }}
                        type="primary"
                      >
                        Онлайн книга
                      </Button>
                      <Space.Compact>
                        <Input
                          style={{
                            border: "1.66718px solid #5282FF",
                            width: "187.84px",
                            height: "47.79px",
                          }}
                          defaultValue="26888888"
                        />
                      </Space.Compact>
                    </div>
                  </div>
                  <div className="socialIconDr" style={{backgroundColor:"#F0F0F0",width:"160px",height:"48px",textAlign:"center"}}>
                    <img style={{paddingTop:"13px",marginRight:"10px"}} src={DrFB}/>
                    <img style={{marginRight:"10px"}} src={DrVK}/>
                    <img src={DrLn}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"doc-card-btns-mobile"} style={{marginTop:"20px"}}>
            <Button
              className={"doc-card-btn-1"}

              type="primary"
            >
              Онлайн книга
            </Button>
            <Space.Compact>
              <Input
                defaultValue="26888888"
              />
            </Space.Compact>
          </div>
        </div>
        <div
          style={{ marginTop: "40px" }}
          className="buttonsNav"
        >
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

export default DoctorsReviewsAll;
