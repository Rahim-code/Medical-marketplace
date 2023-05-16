import React from "react";
import {
  Dropdown,
  Button,
  Space,
  Breadcrumb,
  Pagination,
  Collapse,
  Checkbox,
} from "antd";
import Vector from "../../assets/Images/Vector.svg";
import USD from "../../assets/Svg/usdIcon.svg";
import EUO from "../../assets/Svg/GroupEuro.svg";
import POU from "../../assets/Svg/GroupPound.svg";
import RUB from "../../assets/Svg/rub.svg";
import azFlag from "../../assets/Svg/azFlag.svg";
import trFlag from "../../assets/Svg/trFlag.svg";
import absFlag from "../../assets/Svg/absFlag.svg";
import likeReview from "../../assets/Svg/reviewLike.svg";
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
import "./Hospitals.css"
import Iconstars from "../../assets/Svg/starIcon.svg";

const { Panel } = Collapse;

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

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

const Hospitals = () => {
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

      <div className="hospitalbg" style={{ backgroundColor: "#F4F4F4" }}>
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
        </div>
        <div className="container">
          <div className="displayGridReviewDr">
            <div
              className="menuNav menuNav-hospitals"
            >
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB", color: "#084BC2" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Найти
                    </span>
                  }
                  key="1"
                >
                  <p style={{ margin: "0px", color: "#000", fontSize: "15px" }}>
                    Место / название клиники / врач
                  </p>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Турция
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Pоссия
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Aзербайджан
                    </p>
                  </Checkbox>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Клиники
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Услуги
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Врачи
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                  marginTop: "10px",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Все фильтры
                    </span>
                  }
                  key="1"
                >
                  <p
                    style={{
                      margin: "0px",
                      color: "#084BC2",
                      fontSize: "18px",
                      fontWeight: 500,
                      fontFamily: "Inter",
                      fontStyle: "normal",
                    }}
                  >
                    Ваш бюджет
                  </p>
                  <hr style={{ border: "1px solid #F0F0F0" }} />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Минимальный $
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Средний $$
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Высокий $$$
                    </p>
                  </Checkbox>
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Популярные фильтры
                    </span>
                  }
                  key="1"
                >
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Лабораторные анализы
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Превосходно 9+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      5 звезд 112MED
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Специализированные{" "}
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      клиники Многопрофильные
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      клиники
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Реабилитация Бесплатное
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      проживание
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      check up
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Центр города
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Аппаратные исследования
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 400,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Количество звезд 112MED
                    </span>
                  }
                  key="1"
                >
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      2 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      3 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      4 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      5 звезды
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      без звезд
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Специльные предложения
                    </span>
                  }
                  key="1"
                >
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Все предложения
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                style={{
                  borderRadius: "0px",
                  border: "1px solid #F0F0F0",
                  backgroundColor: "#FBFBFB",
                }}
                accordion
              >
                <Panel
                  style={{ backgroundColor: "#FBFBFB" }}
                  header={
                    <span
                      style={{
                        color: "#084BC2",
                        fontSize: "18px",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontStyle: "normal",
                      }}
                    >
                      Оценка по отзывам
                    </span>
                  }
                  key="1"
                >
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Превосходно 9+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Очень хорошо 8+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Хороошо 7+
                    </p>
                  </Checkbox>
                  <br />
                  <Checkbox onChange={onChange}>
                    <p
                      style={{
                        margin: "6px 0",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Достаточно хорошо 6+
                    </p>
                  </Checkbox>
                  <br />
                </Panel>
              </Collapse>
              <div style={{ paddingTop: "10px" }} className="mapEmbed">
                <iframe
                  style={{ border: "none" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17439.59682519633!2d49.97557041806164!3d40.39300414904405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063737e96e061%3A0x5b925e8db0b28d35!2sBaku%20Medical%20Plaza!5e0!3m2!1sen!2saz!4v1682591396345!5m2!1sen!2saz"
                  width="325"
                  height="179"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
              <div className="buttonsSort">
                <Button
                  className={"doc-nav-btn"}
                  type="primary"
                >
                  Врачи
                </Button>
                <Button
                  className={"doc-nav-btn doc-nav-btn-active"}
                  type="primary"
                >
                  Клиники
                </Button>
                <Button
                  className={"doc-nav-btn"}
                  type="primary"
                >
                  Услуги
                </Button>
              </div>

              <div>
                <div className="cardReviewDoctors cardReviewDoctors-active">
                  <div className="display_grid img-wrapper">
                    <img
                      className={"cardFavHospitals-img"}
                      id="doctorImage"
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
                      id="doctorImage"
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
                          fontSize: "14px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px"}}
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
                        <p style={{ margin: "0px" }}>Hеплохо</p>
                        <p
                          style={{textAlign: "right" }}
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
                      id="doctorImage"
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
                          fontSize: "14px",
                        }}
                      >
                        <EnvironmentOutlined
                          style={{ marginRight: "6px"}}
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
                        <p style={{ margin: "0px" }}>Hеплохо</p>
                        <p
                          style={{textAlign: "right" }}
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

export default Hospitals;
