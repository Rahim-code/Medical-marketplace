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

const FavDoctors = () => {
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
              <Button className={"doc-nav-btn doc-nav-btn-active"}
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
              <div className="cardFavDoctors">
                <div className="display_grid doctor-fav">
                  <img
                    id="favDoctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "15px",
                      objectFit: "cover",
                      width: "30px",
                      transform: "translateX(-40px)"
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div className="card-body fav-card-body">
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
                <div className="card-body fav-card-mob">
                  <div>
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
                    </div>
                    <div style={{display:"flex", alignItems:"center",gap:"9px",fontSize:"12px"}}>
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
                      <img src={Iconstars} />
                      <p
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Bеликолепно{" "}
                      </p>
                      <p
                        style={{ color: "#5282FF", textAlign: "right" }}
                      >
                        <span>23</span> отзыва
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <div>Соотношение цена/качество</div>
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardFavDoctors">
                <div className="display_grid doctor-fav">
                  <img
                    id="favDoctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "15px",
                      objectFit: "cover",
                      width: "30px",
                      transform: "translateX(-40px)"
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div className="card-body fav-card-body">
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
                <div className="card-body fav-card-mob">
                  <div>
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
                    </div>
                    <div style={{display:"flex", alignItems:"center",gap:"9px",fontSize:"12px"}}>
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
                      <img src={Iconstars} />
                      <p
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Bеликолепно{" "}
                      </p>
                      <p
                        style={{ color: "#5282FF", textAlign: "right" }}
                      >
                        <span>23</span> отзыва
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <div>Соотношение цена/качество</div>
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardFavDoctors">
                <div className="display_grid doctor-fav">
                  <img
                    id="favDoctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "12/13",
                      gridRow: "1/2",
                      paddingTop: "15px",
                      objectFit: "cover",
                      width: "30px",
                      transform: "translateX(-40px)"
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div className="card-body fav-card-body">
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
                <div className="card-body fav-card-mob">
                  <div>
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
                    </div>
                    <div style={{display:"flex", alignItems:"center",gap:"9px",fontSize:"12px"}}>
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
                      <img src={Iconstars} />
                      <p
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Bеликолепно{" "}
                      </p>
                      <p
                        style={{ color: "#5282FF", textAlign: "right" }}
                      >
                        <span>23</span> отзыва
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}>
                      <div>Соотношение цена/качество</div>
                    </div>
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
                    </div>
                  </div>
                </div>
              </div>

              <div className={'review-doctors-pagination'}>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default FavDoctors;
