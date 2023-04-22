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
import experience from "../../assets/Svg/staj.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import reviewDoctor from "../../assets/Images/reviewDoctor.png";

import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";

import "../FavDoctors/FavDoctors.css";

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

const FavDoctors = () => {
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
                style={{
                  backgroundColor: "#FAFAFA",
                  border: " 0.705342px solid #EFEFEF",
                  height: "230px",
                }}
                className="cardReviewDoctors"
              >
                <div
                  style={{ width: "150px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{ height: "100%" }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "40px" }}
                  className="card-body"
                >
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
                      {" "}
                      <img src={Iconstars} />
                    </div>
                    <div>
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
                    <div>
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
                      <div>
                        <p
                          className="comment"
                          style={{ color: "#5282FF", textAlign: "right" }}
                        >
                          <span>23</span> отзыва
                        </p>
                        Соотношение цена/качество
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#5282FF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
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
                          }}
                        >
                          <img src={experience} />
                          20 лет опыта
                        </p>
                      </div>
                      <div>
                        <Button
                          style={{
                            width: "155.37px",
                            height: "45px",
                            marginBottom: "10px",
                          }}
                          type="primary"
                        >
                          Посмотреть Врачи
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#FAFAFA",
                  border: " 0.705342px solid #EFEFEF",
                  height: "230px",
                }}
                className="cardReviewDoctors"
              >
                <div
                  style={{ width: "150px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{ height: "100%" }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "40px" }}
                  className="card-body"
                >
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
                      {" "}
                      <img src={Iconstars} />
                    </div>
                    <div>
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
                    <div>
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
                      <div>
                        <p
                          className="comment"
                          style={{ color: "#5282FF", textAlign: "right" }}
                        >
                          <span>23</span> отзыва
                        </p>
                        Соотношение цена/качество
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#5282FF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
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
                          }}
                        >
                          <img src={experience} />
                          20 лет опыта
                        </p>
                      </div>
                      <div>
                        <Button
                          style={{
                            width: "155.37px",
                            height: "45px",
                            marginBottom: "10px",
                          }}
                          type="primary"
                        >
                          Посмотреть Врачи
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#FAFAFA",
                  border: " 0.705342px solid #EFEFEF",
                  height: "230px",
                }}
                className="cardReviewDoctors"
              >
                <div
                  style={{ width: "150px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{ height: "100%" }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "40px" }}
                  className="card-body"
                >
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
                      {" "}
                      <img src={Iconstars} />
                    </div>
                    <div>
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
                    <div>
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
                      <div>
                        <p
                          className="comment"
                          style={{ color: "#5282FF", textAlign: "right" }}
                        >
                          <span>23</span> отзыва
                        </p>
                        Соотношение цена/качество
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#5282FF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
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
                          }}
                        >
                          <img src={experience} />
                          20 лет опыта
                        </p>
                      </div>
                      <div>
                        <Button
                          style={{
                            width: "155.37px",
                            height: "45px",
                            marginBottom: "10px",
                          }}
                          type="primary"
                        >
                          Посмотреть Врачи
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#FAFAFA",
                  border: " 0.705342px solid #EFEFEF",
                  height: "230px",
                }}
                className="cardReviewDoctors"
              >
                <div
                  style={{ width: "150px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{ height: "100%" }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "40px" }}
                  className="card-body"
                >
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
                      {" "}
                      <img src={Iconstars} />
                    </div>
                    <div>
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
                    <div>
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
                      <div>
                        <p
                          className="comment"
                          style={{ color: "#5282FF", textAlign: "right" }}
                        >
                          <span>23</span> отзыва
                        </p>
                        Соотношение цена/качество
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#5282FF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
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
                          }}
                        >
                          <img src={experience} />
                          20 лет опыта
                        </p>
                      </div>
                      <div>
                        <Button
                          style={{
                            width: "155.37px",
                            height: "45px",
                            marginBottom: "10px",
                          }}
                          type="primary"
                        >
                          Посмотреть Врачи
                        </Button>
                      </div>
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
                <Pagination defaultCurrent={1} total={50} />
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

export default FavDoctors;
