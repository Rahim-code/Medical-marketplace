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
import Iconstars from "../../assets/Svg/starIcon.svg";
import experience from "../../assets/Svg/staj.svg";

import russianFlag from "../../assets/Images/russianFlagIcon.png";
import question from "../../assets/Images/question.png";
import heart from "../../assets/Images/heart.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";
import vk from "../../assets/Images/vk.png";
import reviewDoctor from "../../assets/Images/reviewDoctor.png";
import CheckDoctor from "../../assets/Images/checkdoctor.png";

import { ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";

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

const Doctors = () => {
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
          <div
            style={{ height: "2000px", border: "none", width: "325px" }}
            className="menuNav"
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
          </div>

          <div className="menuRight">
            <div>
              <p style={{ color: "#5282FF", fontSize: "20px" }}>
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    paddingRight: "5px",
                    marginTop: "10px",
                  }}
                >
                  “Пластическая Хирургия”: Hайден
                </span>
                47 вариант
              </p>
            </div>
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
                  backgroundColor: "#5282FF",
                  border: " 0.705342px solid #EFEFEF",
                  height: "230px",
                }}
                className="cardReviewDoctors"
              >
                <div
                  style={{ width: "186px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{ height: "100%" }}
                    id="doctorImage"
                    src={CheckDoctor}
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
                  style={{ width: "769px", paddingLeft: "80px" }}
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
                      <p
                        style={{
                          margin: "0 15px 0 0",
                          paddingTop: "0px !important",
                          color: "#FFF",
                        }}
                      >
                        Главный врач
                      </p>
                    </div>
                    <div style={{ marginRight: "auto" }}>
                      <img src={Iconstars} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: "0 !important",
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#FFF",
                        }}
                      >
                        Bеликолепно
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          backgroundColor: "#FFC224",
                          color: "#000",
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
                          color: "#FFF",
                          fontSize: "24px !important",
                          margin: "0px",
                          paddingTop: "10px",
                        }}
                      >
                        Dr. Алина Леонидовна
                      </h3>
                      <div style={{ color: "#FFF" }}>
                        <p
                          className="comment"
                          style={{ color: "#FFF", textAlign: "right" }}
                        >
                          <span>23</span> отзыва
                        </p>
                        Соотношение цена/качество
                      </div>
                    </div>

                    <p
                      style={{
                        color: "#FFF",
                        fontSize: "14px",
                        margin: "0px",
                        paddingTop: "10px",
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ marginRight: "6px", color: "#FFF" }}
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
                            backgroundColor: "#FFF",
                            color: "#5282FF",
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
                  style={{ width: "186px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "198.4px",
                      borderRadius: "6.5px",
                    }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "10/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "80px" }}
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
                  style={{ width: "186px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "198.4px",
                      borderRadius: "6.5px",
                    }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "10/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "80px" }}
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
                        Bеликолепно
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
                  style={{ width: "186px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "198.4px",
                      borderRadius: "6.5px",
                    }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "10/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "80px" }}
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
                  style={{ width: "186px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "198.4px",
                      borderRadius: "6.5px",
                    }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "10/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "80px" }}
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
                  style={{ width: "186px" }}
                  className="card-head display_grid"
                >
                  <img
                    style={{
                      height: "100%",
                      width: "198.4px",
                      borderRadius: "6.5px",
                    }}
                    id="doctorImage"
                    src={reviewDoctor}
                  />
                  <img
                    style={{
                      gridColumn: "10/13",
                      gridRow: "1/2",
                      paddingTop: "9px",
                      objectFit: "cover",
                      width: "30px",
                      marginLeft: "10px",
                    }}
                    id="likeImage"
                    src={likeReview}
                  />
                </div>
                <div
                  style={{ width: "769px", paddingLeft: "80px" }}
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
    </div>
  );
};

export default Doctors;
